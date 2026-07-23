import { Container } from './components/Container'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { site, whatsappLink } from './content/site'

type Service = { name: string; description: string; image?: string }

const featuredServices: Service[] = [
  { name: 'Botox', description: 'Una alternativa de medicina estética que se conversa y evalúa según cada caso.', image: '/images/services/botox-v2.png' },
  { name: 'Relleno de labios', description: 'Un procedimiento que se planifica de manera personalizada luego de una valoración profesional.', image: '/images/services/relleno-labios.png' },
  { name: 'Rinomodelación', description: 'Una opción de perfilado nasal sin cirugía que requiere evaluación individual.', image: '/images/services/rinomodelacion-v3.png' },
  { name: 'HIFU', description: 'Tecnología disponible en la clínica; su indicación se define en consulta.', image: '/images/services/hifu.png' },
  { name: 'Maderoterapia', description: 'Técnica corporal realizada con elementos de madera y planificada para cada persona.', image: '/images/services/maderoterapia-v2.png' },
  { name: 'Masajes reductores', description: 'Sesiones corporales cuya planificación se conversa de manera personalizada.', image: '/images/services/masajes-reductores.png' },
]

const reviews = [
  { name: 'Angélica Crespi', when: 'Hace un mes', text: 'No sólo los equipos y la atención sino la profesional. Quien te diagnóstica, te realiza los tratamientos y te hace el seguimiento es la Dra. Kuperstein, y Agus e Iris la asisten. Pero es la profesional la que ejecuta todo en el centro. Maravilloso mi peeling, radiante, el mío up, plasma articular, HIFU 25D, la depi Soprano Titanium. Espectacular mi piel!!! Te podés hacer de todo acá... te dejan radiante para la fiesta que tenés o te prepara tu cuerpo para esperar el 2027.. venite!!!' },
  { name: 'Jules Cabaña', when: 'Hace un mes', text: 'He tenido la experiencia de lujo en KUPER con la depilación definitiva. Después de 7 sesiones ya no me crece el pelo; después de un año vuelvo solo para hacerme retoque. La doctora Eve es una genia y súper amable, ella te asesora y te recomienda lo que necesitás para las sesiones y tu tipo de piel. He ido a otras estéticas y después de un año seguía en la misma situación con el crecimiento; los precios son súper accesibles también. Súper recomendable si estás en la zona y buscás un lugar que sí funciona!' },
  { name: 'Agustina Valdes', when: 'Hace un mes', text: 'Excelente experiencia en Kuper 💗✨ Me realicé depilación definitiva y peeling, y realmente amé los resultados. Desde el primer momento me sentí súper cómoda y bien atendida. La doctora Eve es muy profesional, amorosa y transmite muchísima confianza. El lugar es impecable, cálido y se nota el cuidado en cada detalle. Sin dudas, mi carita quedó en las mejores manos 🥹 ¡Súper recomendado! 🌟🌟🌟🌟🌟' },
  { name: 'Romina Sposito', when: 'Hace un mes', text: 'La verdad que hace años conozco el lugar, a la Doc Eve y seguiría eligiéndolos por su atención desde que ingresas hasta que salís siempre mimada y cuidada, excelentes profesionales; toda duda que tenés tienen la respuesta correcta para lo que necesitás realizarte. Ya sea desde una limpieza facial, botox o ácido hialurónico, son impecables en cuidarte y hacerte ver más bella. Gracias por todo a Kuperby y su equipo maravilloso!!! 😍🙌🏻' },
  { name: 'Lucia Flores', when: 'Una semana atrás', text: 'Me atendí con la Dra. para botox, depilación definitiva y ahora probé con el tratamiento con aplicación de peptonas; la verdad me sorprendió el cambio. La Dra. es una genia, te escucha y te asesora personalizando cada tratamiento. Además la atención de las secretarias es excelente, muy amables; ya saqué turno para la próxima sesión :)' },
  { name: 'Priscila Gaido', when: 'Hace 3 semanas', text: 'Excelente atención desde el primer momento✨. La doctora es muy profesional, cálida y transmite mucha confianza. Se toma el tiempo para explicar cada procedimiento con claridad y responder todas las dudas. En mi caso me realicé un tratamiento con ácido hialurónico y los resultados quedaron hermosos, naturales y acordes a lo que buscaba. Trabaja con productos de excelente calidad y se nota el cuidado y la dedicación en cada detalle. Además, el consultorio es impecable, cómodo y muy limpio. Quedé muy feliz con la experiencia y sin dudas volvería, súper recomendable.' },
  { name: 'Brenn Figueroa', when: 'Hace 4 semanas', text: 'Hoy pasé por Kuper y me encantó!! Muy amables 🥰, destaco mucho la profesionalidad con la que trabajan, se interesan mucho en la comodidad y seguridad de una y la gran variedad de tratamientos, uno mejor que otro! Súper recomendable, muchas gracias 🫶✨' },
  { name: 'Soledad Audelina Aguirre', when: 'Hace 3 semanas', text: 'Excelente atención, muchos tratamientos disponibles con aparatología de primer nivel, excelente disponibilidad horaria para quienes tienen poco tiempo! Súper recomendable! La dra excelente tanto en su información como la atención personalizada!' },
  { name: 'Sofi Barrios', when: 'Hace un mes', text: 'Me encanta venir, siempre me reciben con la mejor, me realizo presoterapia seguido ya que fue recomendación de la doc. Por mis largas horas de estar parada en el trabajo, la verdad que se nota la diferencia. Actualmente también me estoy realizando depi láser, es súper rápido, cómodo y usan elementos de muy buena calidad; la verdad siempre los recomiendo!' },
] as const

const serviceGroups: { title: string; services: Service[] }[] = [
  {
    title: 'Medicina estética y consultas',
    services: [
      ...featuredServices.slice(0, 3),
      { name: 'Tratamiento de arañitas con láser', description: 'Abordaje con tecnología láser sujeto a evaluación médica.' },
      { name: 'Chip de la juventud', description: 'Consultá por esta opción y recibí orientación profesional.' },
      { name: 'Hiperhidrosis en axilas', description: 'Consulta para conocer las alternativas de tratamiento disponibles.' },
      { name: 'Hilos tensores', description: 'Procedimiento de medicina estética con indicación profesional individual.' },
      { name: 'Blefarolfit', description: 'Consultá por esta alternativa y su valoración profesional.' },
      { name: 'Extracción de quistes / verrugas', description: 'Consulta médica para valorar el abordaje correspondiente.' },
      { name: 'Plasma rico en plaquetas', description: 'Procedimiento que requiere valoración e indicación profesional.' },
      { name: 'Mesoterapia tensora en papada', description: 'Alternativa a evaluar en consulta médica.' },
      { name: 'Mesoterapia corporal', description: 'Tratamiento corporal definido de manera individual.' },
      { name: 'Mesoterapia capilar con Dermapen', description: 'Consulta para valorar indicación y plan de tratamiento.' },
      { name: 'Mesoterapia facial', description: 'Procedimiento facial sujeto a valoración profesional.' },
      { name: 'Radiesse bioestimulador de colágeno', description: 'Consultá por esta alternativa y su evaluación profesional.' },
      { name: 'Consulta médica', description: 'Un espacio de valoración para orientar el tratamiento adecuado.' },
      { name: 'Recetas médicas', description: 'Gestión sujeta a consulta y criterio profesional.' },
      { name: 'Consulta virtual con nutricionista', description: 'Orientación nutricional en modalidad virtual.' },
    ],
  },
  {
    title: 'Tecnología facial y corporal',
    services: [
      featuredServices[3],
      { name: 'Eliminación de tatuajes', description: 'Sesiones con tecnología láser cuya planificación se evalúa de forma individual.' },
      { name: 'Hollywood Peel', description: 'Tratamiento facial con tecnología láser, sujeto a consulta previa.' },
      { name: 'Pico Laser Despigmentante', description: 'Tecnología disponible para evaluación profesional de cada caso.' },
      { name: 'HIFU 25D 360 Max', description: 'Tecnología HIFU disponible; consultá por su indicación.' },
      { name: 'HIFU 7D', description: 'Tecnología HIFU disponible; consultá por su indicación.' },
      { name: 'Luz pulsada', description: 'Tratamiento con luz pulsada sujeto a valoración previa.' },
      { name: 'Máscara LED', description: 'Sesión de luz LED según el protocolo indicado.' },
      { name: 'Presoterapia', description: 'Técnica complementaria a evaluar según cada caso.' },
      { name: 'Ultracavitación', description: 'Tecnología corporal disponible con planificación individual.' },
      { name: 'Radiofrecuencia corporal', description: 'Tecnología corporal a definir en consulta.' },
      { name: 'Radiofrecuencia facial', description: 'Tecnología facial a definir en consulta.' },
      { name: 'Vela Velvet Max', description: 'Tecnología corporal disponible para consulta y evaluación.' },
      { name: 'Mio Up glúteos / abdomen', description: 'Tecnología corporal disponible para consulta y evaluación.' },
      { name: 'Criolipólisis', description: 'Tratamiento corporal que requiere valoración profesional previa.' },
      { name: 'Crioterapia facial', description: 'Protocolo facial a definir según necesidad y evaluación.' },
    ],
  },
  {
    title: 'Facial y bienestar corporal',
    services: [
      featuredServices[4], featuredServices[5],
      { name: 'Masajes en general', description: 'Opciones de masaje para bienestar y relajación.' },
      { name: 'Pulido de glúteos / piernas', description: 'Cuidado corporal enfocado en esas zonas.' },
      { name: 'Exfoliación de espalda', description: 'Sesión de cuidado y renovación superficial de la piel de la espalda.' },
      { name: 'Peeling', description: 'Tratamiento facial o corporal cuya modalidad se define en consulta.' },
      { name: 'Dermaplaning facial', description: 'Procedimiento de exfoliación facial sujeto a valoración previa.' },
      { name: 'Colágeno terapia', description: 'Consultá por esta alternativa y su valoración profesional.' },
      { name: 'Limpieza facial profunda', description: 'Sesión de higiene y cuidado facial.' },
    ],
  },
  {
    title: 'Mirada',
    services: [
      { name: 'Laminado / perfilado de cejas', description: 'Servicio de diseño y ordenamiento de cejas.' },
      { name: 'Perfilado / diseño de cejas', description: 'Diseño de cejas adaptado a cada rostro.' },
      { name: 'Lifting de pestañas', description: 'Servicio estético para trabajar la curvatura natural de las pestañas.' },
    ],
  },
]

const consult = (service: string) => whatsappLink(`Hola! Vengo de la página web, quería consultar sobre ${service}.`)

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg> }
function Check() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m4 10.5 3.3 3.2L16 5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg> }

function Header() {
  return <header className="site-header"><Container><div className="header-inner">
    <a className="brand" href="/" aria-label="KUPER Medicina Estética, inicio"><img alt="KUPER Medicina Estética" src="/images/brand/logo-white.png" /></a>
    <nav className="desktop-nav" aria-label="Navegación principal">{site.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
    <a className="button button-primary header-cta" href={site.primaryAction.href} rel="noreferrer" target="_blank">WhatsApp</a>
  </div></Container></header>
}

function Footer() {
  return <footer className="footer"><Container><div className="footer-grid">
    <div><p className="footer-brand">KUPER <span>medicina estética</span></p><p className="footer-intro">Medicina estética, tratamientos faciales, corporales y bienestar en Córdoba Capital.</p><p className="license">Dra. Eve Kuperstein · MP 37758</p></div>
    <div><p className="footer-title">Contacto</p><a href={site.contact.phoneHref}>{site.contact.phone}</a><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><a href={site.contact.mapUrl} rel="noreferrer" target="_blank">{site.contact.location}</a></div>
    <div><p className="footer-title">Horarios</p>{site.hours.map((hour) => <p key={hour}>{hour}</p>)}<a href={site.contact.instagramUrl} rel="noreferrer" target="_blank">Instagram</a></div>
  </div><div className="footer-bottom"><p>© {new Date().getFullYear()} KUPER Medicina Estética. Córdoba, Argentina.</p><a href="/servicios">Servicios de medicina estética en Córdoba</a></div></Container></footer>
}

function ServiceCard({ service, image = false }: { service: Service; image?: boolean }) {
  return <article className={`service-card ${image ? 'service-card-image' : ''}`}>
    {image && service.image && <img alt={`${service.name} en KUPER Medicina Estética`} loading="lazy" src={service.image} />}
    <div className="service-card-content"><h3>{service.name}</h3><p>{service.description}</p><a href={consult(service.name)} rel="noreferrer" target="_blank">Consultar por WhatsApp <Arrow /></a></div>
  </article>
}

function Home() {
  return <>
    <main>
      <section className="hero" id="inicio"><img alt="" className="hero-background" src="/images/generated/hero-botanical.png" /><Container><div className="hero-grid"><div className="hero-copy"><h1>Cuidamos tu bienestar y tu imagen, empezando por escucharte.</h1><p className="hero-text">En KUPER te orientamos para encontrar la alternativa que mejor se adapte a vos y a lo que buscás.</p><p className="hero-credential">Dra. Eve Kuperstein · MP 37758</p><div className="hero-actions"><a className="button button-primary" href={site.primaryAction.href} rel="noreferrer" target="_blank">Consultar por WhatsApp <Arrow /></a><a className="button button-secondary" href="#servicios">Ver servicios</a></div></div></div></Container></section>

      <section className="section services-preview" id="servicios"><Container><div className="section-intro"><div><h2>Servicios para acompañar tus objetivos.</h2><p>Conocé algunas de las alternativas disponibles en KUPER. Cada consulta se orienta de forma personalizada.</p></div><a className="text-link desktop-only" href="/servicios">Ver todos los servicios <Arrow /></a></div><div className="featured-grid">{featuredServices.map((service) => <ServiceCard image key={service.name} service={service} />)}</div><div className="mobile-center"><a className="button button-secondary" href="/servicios">Ver todos los servicios <Arrow /></a></div></Container></section>

      <section className="section care-section" id="nosotros"><Container><div className="care-grid"><div className="care-images"><img alt="Recepción de KUPER Medicina Estética" src="/images/clinic/reception.jpg" /><img alt="Identidad visual de KUPER Medicina Estética en la clínica" src="/images/clinic/logo-wall.jpg" /></div><div className="care-copy"><h2>Una experiencia pensada para que te sientas bien atendida.</h2><p>La Dra. Eve Kuperstein y el equipo de KUPER acompañan cada consulta con una mirada profesional, cercana y detallista.</p><ul><li><Check /><span>Valoración profesional antes de avanzar.</span></li><li><Check /><span>Alternativas faciales, corporales y de bienestar.</span></li><li><Check /><span>Atención en Córdoba Capital.</span></li></ul><a className="text-link" href={site.primaryAction.href} rel="noreferrer" target="_blank">Hacer una consulta <Arrow /></a></div></div></Container></section>

      <section className="section reviews-section" id="opiniones"><Container><div className="reviews-heading"><div><h2>Lo cuentan quienes ya eligieron KUPER.</h2><p>Opiniones reales de pacientes en Google.</p></div><div className="reviews-summary"><strong>5,0</strong><span aria-label="Cinco estrellas">★★★★★</span><small>251 opiniones en Google</small></div></div><div className="review-marquee" aria-label="Reseñas de pacientes"><div className="review-track">{[0, 1].map((set) => <div className="review-set" key={set}>{reviews.map((review) => <article className="review-card" key={`${set}-${review.name}`}><div className="review-card-top"><span className="review-avatar">{review.name.slice(0, 1)}</span><div><h3>{review.name}</h3><p className="review-stars" aria-label="Cinco estrellas">★★★★★ <span>{review.when}</span></p></div></div><blockquote>“{review.text}”</blockquote></article>)}</div>)}</div></div><div className="review-cta"><a className="button button-secondary" href={site.contact.reviewsUrl} rel="noreferrer" target="_blank">Ver todas las opiniones en Google <Arrow /></a></div></Container></section>

      <section className="section contact-section" id="contacto"><Container><div className="contact-card"><div><h2>¿Querés hacer una consulta?</h2><p>Escribinos por WhatsApp para conversar sobre el servicio que te interesa y coordinar tu atención.</p></div><div className="contact-actions"><a className="button button-light" href={site.primaryAction.href} rel="noreferrer" target="_blank">Consultar por WhatsApp <Arrow /></a><a className="contact-phone" href={site.contact.phoneHref}>{site.contact.phone}</a></div></div></Container></section>
    </main>
  </>
}

function ServicesPage() {
  return <main><section className="services-hero"><Container><a className="back-link" href="/"><Arrow /> Volver al inicio</a><h1>Todos los servicios.</h1><p>Elegí la alternativa que te interesa y escribinos. La orientación y la planificación se definen de forma personalizada.</p></Container></section><section className="all-services"><Container>{serviceGroups.map((group) => <section className="service-group" key={group.title}><h2>{group.title}</h2><div className="all-services-grid">{group.services.map((service) => <ServiceCard key={service.name} service={service} />)}</div></section>)}</Container></section><section className="services-cta"><Container><div><h2>¿No encontrás lo que buscás?</h2><p>Escribinos y te orientamos.</p><a className="button button-light" href={site.primaryAction.href} rel="noreferrer" target="_blank">Hablar por WhatsApp <Arrow /></a></div></Container></section></main>
}

function SocialCard() {
  return <main className="social-card"><img alt="" className="social-card-bg" src="/images/generated/hero-botanical.png" /><div className="social-card-wash" /><div className="social-card-content"><img alt="KUPER Medicina Estética" src="/images/brand/logo-white.png" /><p>Medicina estética y bienestar en Córdoba Capital</p></div></main>
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/social-card') return <SocialCard />
  const isServicesPage = path === '/servicios'
  return <div className="min-h-screen bg-paper text-ink"><Header />{isServicesPage ? <ServicesPage /> : <Home />}<Footer /><FloatingWhatsApp href={site.contact.whatsappUrl} /></div>
}
