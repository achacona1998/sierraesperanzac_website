-- Seed data for projects table
-- Based on src/hooks/usePortfolio.js

insert into public.projects (
  title, 
  category, 
  metric, 
  image, 
  client, 
  year, 
  services, 
  challenge, 
  solution, 
  results, 
  testimonial
) values 
(
  'Landing React', 
  'Web', 
  'TTFB 120ms', 
  'bg-linear-to-br from-blue-900 to-slate-900', 
  'TechStart Inc.', 
  '2024', 
  ARRAY['Desarrollo Web', 'Performance', 'SEO Técnico'], 
  'La empresa necesitaba reducir el tiempo de carga de su landing page principal, que superaba los 4 segundos, causando una tasa de rebote del 65%.', 
  'Reconstruimos el sitio utilizando React y Vite, implementando lazy loading, optimización de imágenes y code splitting. Migramos el hosting a un CDN global.', 
  ARRAY['Tiempo de carga reducido a 120ms', 'Tasa de conversión aumentó un 45%', 'Score de Lighthouse 100/100'], 
  '{"text": "Increíble velocidad. Nuestros clientes notaron la diferencia de inmediato.", "author": "CEO, TechStart"}'::jsonb
),
(
  'SEO Growth', 
  'Marketing', 
  'Traffic +200%', 
  'bg-linear-to-br from-green-900 to-emerald-900', 
  'BioVida', 
  '2023', 
  ARRAY['Estrategia SEO', 'Content Marketing', 'Link Building'], 
  'BioVida tenía excelentes productos pero era invisible en Google para keywords transaccionales de alta intención.', 
  'Ejecutamos una auditoría técnica completa, corregimos errores de indexación y lanzamos una estrategia de contenidos enfocada en clústers temáticos.', 
  ARRAY['Tráfico orgánico +200% en 6 meses', 'Top 3 en keywords principales del sector', 'Coste por adquisición (CPA) reducido un 30%'], 
  '{"text": "Pasamos de la página 10 a la 1 en cuestión de meses.", "author": "Dir. Marketing, BioVida"}'::jsonb
),
(
  'Brand Kit', 
  'Design', 
  'Consistency 100%', 
  'bg-linear-to-br from-purple-900 to-indigo-900', 
  'Nova Fintech', 
  '2024', 
  ARRAY['Branding', 'UI Kit', 'Guía de Estilo'], 
  'La identidad visual de la marca era inconsistente a través de sus diferentes canales digitales y físicos.', 
  'Desarrollamos un sistema de diseño atómico y una guía de estilo completa que unificó la voz visual de la marca.', 
  ARRAY['Reconocimiento de marca incrementado', 'Tiempo de diseño de nuevos assets reducido un 50%', 'Feedback positivo de inversores'], 
  '{"text": "Ahora nuestra marca se ve tan profesional como nuestra tecnología.", "author": "Founder, Nova"}'::jsonb
),
(
  'Ecommerce', 
  'Web', 
  'LCP < 1s', 
  'bg-linear-to-br from-orange-900 to-red-900', 
  'FashionMode', 
  '2023', 
  ARRAY['Shopify Headless', 'React', 'Pasarela de Pagos'], 
  'La tienda online colapsaba durante picos de tráfico y la experiencia móvil era deficiente.', 
  'Implementamos una arquitectura Headless con Shopify y React, optimizada para móviles y alta concurrencia.', 
  ARRAY['Cero caídas en Black Friday', 'Ventas móviles aumentaron un 80%', 'Experiencia de usuario fluida'], 
  '{"text": "La mejor inversión que hemos hecho para nuestro canal online.", "author": "CTO, FashionMode"}'::jsonb
),
(
  'Ads ROAS', 
  'Marketing', 
  'ROAS 4.1x', 
  'bg-linear-to-br from-pink-900 to-rose-900', 
  'CursoMaster', 
  '2024', 
  ARRAY['Facebook Ads', 'Google Ads', 'Funnel de Ventas'], 
  'El costo por lead estaba aumentando y el retorno de inversión publicitaria estaba cayendo.', 
  'Reestructuramos las campañas, creamos nuevas creatividades de alto impacto y optimizamos el funnel de conversión.', 
  ARRAY['ROAS pasó de 1.5x a 4.1x', 'Costo por Lead reducido a la mitad', 'Volumen de ventas récord'], 
  '{"text": "Nuestras campañas ahora son una máquina de generar ingresos.", "author": "CMO, CursoMaster"}'::jsonb
),
(
  'UI System', 
  'Design', 
  'Design Tokens', 
  'bg-linear-to-br from-teal-900 to-cyan-900', 
  'SaaS Platform', 
  '2023', 
  ARRAY['Design System', 'Figma', 'Documentación'], 
  'El equipo de desarrollo perdía mucho tiempo interpretando diseños inconsistentes.', 
  'Creamos un Design System completo en Figma con tokens de diseño sincronizados con el código.', 
  ARRAY['Velocidad de desarrollo +40%', 'Consistencia visual perfecta', 'Onboarding de nuevos devs más rápido'], 
  '{"text": "El puente entre diseño y desarrollo que necesitábamos.", "author": "Head of Product"}'::jsonb
);
