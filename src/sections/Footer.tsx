import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl text-cocoa">Natália Damasceno</p>
          <p className="text-sm text-muted-foreground mt-1">Psicóloga Clínica · Atendimento online e presencial</p>
        </div>
        <div className="flex items-center gap-3">
          <Social href="#" label="Instagram"><FaInstagram /></Social>
          <Social href="#" label="LinkedIn"><FaLinkedinIn /></Social>
          <Social href="https://wa.me/5571993232910" label="WhatsApp"><FaWhatsapp /></Social>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Natália Damasceno. Todos os direitos reservados.</p>
          <p>Feito com cuidado e presença.</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition"
    >
      {children}
    </a>
  );
}
