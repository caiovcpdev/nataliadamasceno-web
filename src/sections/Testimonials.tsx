import { motion } from "framer-motion";

const items = [
  {
    quote:
      "Encontrei um espaço onde finalmente consegui respirar. A escuta da Natália é rara e transformadora.",
    name: "Mariana R.",
    role: "Em terapia há 1 ano",
  },
  {
    quote:
      "A terapia me ajudou a entender meus padrões e a construir uma relação mais leve comigo mesma.",
    name: "Camila S.",
    role: "Processo individual",
  },
  {
    quote:
      "Saio de cada sessão mais consciente e em paz. Recomendo de coração para quem busca cuidado verdadeiro.",
    name: "Bruna L.",
    role: "Atendimento online",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-sage-foreground">Depoimentos</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-cocoa leading-tight text-balance">
            Histórias de quem encontrou um lugar para si.
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl bg-background border border-border/60 p-7 flex flex-col"
            >
              <span className="font-display text-5xl leading-none text-sage-foreground">“</span>
              <blockquote className="mt-2 text-foreground/85 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <p className="font-display text-lg text-cocoa">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
