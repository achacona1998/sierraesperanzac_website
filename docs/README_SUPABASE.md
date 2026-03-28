# Guía de Configuración Supabase + Resend

Sigue estos pasos para conectar tu proyecto con Supabase (Base de datos, Storage) y Resend (Emails).

## 1. Configuración de Supabase (Base de Datos y Storage)

1.  **Crea un proyecto en Supabase**:
    - Ve a [supabase.com](https://supabase.com/) y crea un nuevo proyecto.
    - Copia la `Project URL` y la `anon public key` (API Key).

2.  **Configura las variables de entorno**:
    - En la raíz de tu proyecto, crea un archivo `.env` (si no existe) y agrega:
      ```env
      VITE_SUPABASE_URL=TU_PROJECT_URL
      VITE_SUPABASE_ANON_KEY=TU_ANON_KEY
      ```

3.  **Ejecuta los Scripts SQL**:
    - Ve al **SQL Editor** en tu dashboard de Supabase.
    - Copia y pega el contenido de `supabase/schema.sql` y ejecútalo.
      - Esto creará las tablas `leads`, `projects` y las políticas de seguridad.
    - Copia y pega el contenido de `supabase/storage.sql` y ejecútalo.
      - Esto configurará el bucket `portfolio` para las imágenes.
    - (Opcional) Copia y pega el contenido de `supabase/seeds.sql` y ejecútalo.
      - Esto insertará los datos de prueba de los proyectos.

## 2. Configuración de Resend (Emails)

1.  **Crea una cuenta en Resend**:
    - Ve a [resend.com](https://resend.com/) y regístrate.
    - Crea una **API Key** y cópiala.

2.  **Verifica tu dominio (Recomendado)**:
    - Sigue las instrucciones en Resend para verificar tu dominio y asegurar la entrega de correos.
    - Si no verificas dominio, solo podrás enviar a tu propio correo de registro (testing).

## 3. Despliegue de Edge Function (Backend para Emails)

Necesitas tener instalado el [Supabase CLI](https://supabase.com/docs/guides/cli).

1.  **Login en Supabase CLI**:

    ```bash
    supabase login
    ```

2.  **Linkea tu proyecto**:

    ```bash
    supabase link --project-ref TU_PROJECT_ID
    # El Project ID lo encuentras en la URL de tu dashboard: https://supabase.com/dashboard/project/TU_PROJECT_ID
    ```

3.  **Configura los secretos en Supabase**:

    ```bash
    supabase secrets set RESEND_API_KEY=tu_api_key_de_resend
    supabase secrets set ADMIN_EMAIL=tu_email_para_recibir_notificaciones@gmail.com
    ```

4.  **Despliega la función**:
    ```bash
    supabase functions deploy send-lead-email
    ```

## 4. Uso de Imágenes en el Portafolio

Ahora tu sitio carga los proyectos desde Supabase.

1.  Ve a **Storage** en tu dashboard de Supabase.
2.  Entra al bucket `portfolio`.
3.  Sube las imágenes de tus proyectos.
4.  En la tabla `projects` (Table Editor), actualiza el campo `image` con el nombre del archivo que subiste (ej: `proyecto1.png`).
    - Si el campo `image` es una clase CSS (ej: `bg-linear-to-br...`), el sitio la usará como gradiente.
    - Si es un nombre de archivo, el sitio generará la URL pública de Supabase automáticamente.

¡Listo! Tu sitio ahora tiene base de datos real, almacenamiento de imágenes y envío de correos transaccionales.
