import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiArrowRight } from "react-icons/hi2";

const WA = "https://wa.me/5571993232910?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa.";
const EMAIL = "nataliadmaias@gmail.com";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const message = String(form.get("message") ?? "");
    const body = encodeURIComponent(`Olá Natália, sou ${name}. ${message}`);
    window.open(`https://wa.me/5571993232910?text=${body}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-sage-foreground">Contato</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-cocoa leading-tight text-balance">
            Quando estiver pronta, eu te escuto.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dar o primeiro passo já é um ato de cuidado. Escolha o canal que se
            sentir mais confortável — respondo pessoalmente cada mensagem.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl bg-primary text-primary-foreground px-6 py-5 hover:opacity-90 transition shadow-soft"
            >
              <span className="flex items-center gap-3">
                <FaWhatsapp className="text-xl" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] opacity-70">WhatsApp</span>
                  <span className="block">+55 71 99323-2910</span>
                </span>
              </span>
              <HiArrowRight />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-between gap-4 rounded-2xl bg-card border border-border px-6 py-5 hover:bg-secondary transition"
            >
              <span className="flex items-center gap-3">
                <HiOutlineEnvelope className="text-xl text-sage-foreground" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
                  <span className="block text-foreground">{EMAIL}</span>
                </span>
              </span>
              <HiArrowRight className="text-muted-foreground" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 rounded-3xl bg-card border border-border/60 p-8 lg:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="name" label="Seu nome" placeholder="Como posso te chamar?" required />
            <Field name="email" label="Email" type="email" placeholder="seu@email.com" />
          </div>
          <Field name="phone" label="Telefone (opcional)" placeholder="(71) 9 0000-0000" />
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Compartilhe brevemente o que te trouxe aqui..."
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40 transition"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-90 transition shadow-soft"
          >
            Enviar pelo WhatsApp <HiArrowRight />
          </button>
          {sent && (
            <p className="text-sm text-sage-foreground">
              Abrindo o WhatsApp... obrigada pelo contato.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", placeholder, required,
}: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40 transition"
      />
    </div>
  );
}
