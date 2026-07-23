const whatsappNumber = '5493512692711'

export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const site = {
  name: 'KUPER Medicina Estética',
  description: 'Medicina estética, tratamientos faciales, corporales y bienestar en Córdoba Capital.',
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  primaryAction: {
    label: 'Consultar por WhatsApp',
    href: whatsappLink('Hola! Vengo de la página web, quería consultar sobre...'),
  },
  contact: {
    phone: '0351 15-269-2711',
    phoneHref: 'tel:+5493512692711',
    email: 'kupermedicinaestetica@gmail.com',
    location: 'Montevideo 45, Córdoba, Argentina',
    mapUrl: 'https://maps.google.com/?q=Montevideo+45,+Córdoba,+Argentina',
    instagramUrl: 'https://www.instagram.com/kuper_medicina_estetica/',
    reviewsUrl: 'https://www.google.com/search?sca_esv=30342252162f46f6&hl=es-419&sxsrf=APpeQnshMh-qLtJffi8VeNnqs57GA_B8Ug:1784837001886&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3tH6kdN651PZ1URYCxMV5YbhvPHXORlD65rfZYA8vebZZxEac0iqp5KTsLw3H2oNYMh_ZObLSIgoJa796Xy-pVMzNMODir5dbjcUNos7hdI0IfSXQ%3D%3D&q=KUPER+Medicina+Est%C3%A9tica+Opiniones&sa=X&ved=2ahUKEwi5vur7y-mVAxUaP7kGHVfcFDMQ0bkNegQIJRAI',
    whatsappUrl: whatsappLink('Hola! Vengo de la página web, quería consultar sobre...'),
  },
  hours: [
    'Lunes: 9 a 20 h',
    'Martes: 9 a 20 h',
    'Miércoles: 9 a 20 h',
    'Jueves: 9 a 20 h',
    'Viernes: 9 a 20 h',
    'Sábados: 9 a 13 h',
    'Domingos: cerrado',
  ],
} as const
