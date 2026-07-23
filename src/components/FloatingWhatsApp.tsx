type FloatingWhatsAppProps = { href: string }

export function FloatingWhatsApp({ href }: FloatingWhatsAppProps) {
  return (
    <a aria-label="Escribir por WhatsApp" className="floating-whatsapp" href={href} rel="noreferrer" target="_blank">
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M.06 24 1.7 18.02A11.84 11.84 0 0 1 .16 12C.16 5.45 5.49.12 12.05.12c3.18 0 6.17 1.24 8.42 3.49a11.82 11.82 0 0 1 3.48 8.4c0 6.55-5.33 11.88-11.89 11.88-2 0-3.98-.51-5.75-1.47L.06 24Zm6.25-3.32.37.22a10.3 10.3 0 0 0 5.17 1.4c5.51 0 10-4.48 10-9.99 0-2.67-1.04-5.18-2.93-7.07a9.94 9.94 0 0 0-7.07-2.93c-5.52 0-10 4.49-10 10 0 1.96.56 3.86 1.63 5.53l.24.38-.98 3.59 3.69-1Z" /></svg>
      <span>WhatsApp</span>
    </a>
  )
}
