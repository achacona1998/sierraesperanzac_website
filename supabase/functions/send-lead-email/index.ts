import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Service role para insertar en Supabase (bypassa RLS)
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

// CORS oficial - '*' para dev, cambia a tu dominio en prod
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

/**
 * Escape HTML special characters to prevent XSS injection.
 */
function escapeHtml(str) {
  if (!str) return "N/A";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { record } = await req.json();

    if (!record || !record.email) {
      throw new Error("Missing record or email");
    }

    // Sanitize all user inputs
    const safe = {
      name: escapeHtml(record.name),
      email: escapeHtml(record.email),
      message: escapeHtml(record.message),
      phone: escapeHtml(record.phone),
      service_type: escapeHtml(record.service_type),
      budget: escapeHtml(record.budget),
      timeline: escapeHtml(record.timeline),
    };

    // ✅ GUARDAR LEAD EN SUPABASE (service role bypassa RLS)
    const { error: insertError } = await supabase.from("leads").insert(safe);

    if (insertError) {
      console.error("Failed to save lead:", insertError);
    }

    // Email to the user (Confirmation)
    const userEmail = await resend.emails.send({
      from: "Sierra Esperanza Creations <noreply@email.sierraesperanzac.com>",
      to: [record.email],
      subject: "Hemos recibido tu mensaje - Sierra Esperanza Creations",
      html: `
        <h1>Hola ${safe.name}!</h1>
        <p>Gracias por contactarnos. Hemos recibido tu solicitud correctamente.</p>
        <p>Nuestro equipo revisar&aacute; tu mensaje y te responderemos a la brevedad posible.</p>
        <br/>
        <p><strong>Detalles de tu solicitud:</strong></p>
        <ul>
          <li>Servicio: ${safe.service_type}</li>
          <li>Mensaje: ${safe.message}</li>
        </ul>
        <br/>
        <p>Atentamente,</p>
        <p>El equipo de Sierra Esperanza Creations</p>
      `,
    });

    // Email to the admin (Notification)
    const adminEmailAddr = Deno.env.get("ADMIN_EMAIL") || "admin@example.com";

    const adminEmail = await resend.emails.send({
      from: "Sierra Esperanza Creations <noreply@email.sierraesperanzac.com>",
      to: [adminEmailAddr],
      subject: `Nuevo Lead: ${safe.name}`,
      html: `
        <h1>Nuevo Lead Recibido</h1>
        <p><strong>Nombre:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Tel&eacute;fono:</strong> ${safe.phone}</p>
        <p><strong>Servicio:</strong> ${safe.service_type}</p>
        <p><strong>Presupuesto:</strong> ${safe.budget}</p>
        <p><strong>Plazo:</strong> ${safe.timeline}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        userEmail,
        adminEmail,
        leadSaved: !insertError,
        message: "Lead procesado correctamente",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.error("Edge function error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
