# Integraciones previstas

## WhatsApp

- Número: +54 9 351 269 2711
- Base: `https://wa.me/5493512692711`
- Mensaje general: “Hola! Vengo de la página web, quería consultar sobre...”
- Cada servicio debe crear su enlace con el texto: “Hola! Vengo de la página web, quería consultar sobre [NOMBRE DEL SERVICIO]”.

## Reseñas de Google

### Primera versión recomendada

Incluir la puntuación confirmada y un botón “Ver reseñas en Google” que abra el perfil de Google de KUPER. No copiar reseñas manualmente sin autorización ni extraerlas desde Google por scraping.

URL provista por KUPER: `https://www.google.com/search?sca_esv=30342252162f46f6&hl=es-419&sxsrf=APpeQnshMh-qLtJffi8VeNnqs57GA_B8Ug:1784837001886&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3tH6kdN651PZ1URYCxMV5YbhvPHXORlD65rfZYA8vebZZxEac0iqp5KTsLw3H2oNYMh_ZObLSIgoJa796Xy-pVMzNMODir5dbjcUNos7hdI0IfSXQ%3D%3D&q=KUPER+Medicina+Est%C3%A9tica+Opiniones&sa=X&ved=2ahUKEwi5vur7y-mVAxUaP7kGHVfcFDMQ0bkNegQIJRAI&biw=1536&bih=695&dpr=1.25`

### Versión dinámica, posterior

Usar Places API (New) para obtener datos del lugar y reseñas. Requiere proyecto de Google Cloud, cuenta de facturación, una clave API restringida y atribución visible de Google. La clave no debe llegar al navegador ni al repositorio.
