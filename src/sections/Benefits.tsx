import { motion } from "framer-motion";

const benefits = [
  { n: "01", title: "Equilíbrio emocional", text: "Respostas mais conscientes ao que você sente." },
  { n: "02", title: "Autoconhecimento", text: "Clareza sobre quem você é e o que deseja." },
  { n: "03", title: "Segurança emocional", text: "Um lugar interno mais firme para te sustentar." },
  { n: "04", title: "Qualidade de vida", text: "Mais leveza nas rotinas e nas relações." },
  { n: "05", title: "Desenvolvimento pessoal", text: "Movimento real, no seu tempo e ritmo." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-sage-foreground">Benefícios da terapia</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-cocoa leading-tight text-balance">
            Pequenos passos que transformam a forma como você se sente.
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {benefits.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 lg:p-10 hover:bg-secondary/60 transition-colors"
            >
              <p className="font-display text-3xl text-sage-foreground">{b.n}</p>
              <h3 className="mt-4 font-display text-2xl text-cocoa">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
          <div className="bg-cocoa text-background p-8 lg:p-10 flex flex-col justify-between">
            <p className="font-display text-2xl leading-snug">
              "A terapia não te muda. Ela te devolve a você."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] opacity-70">Natália Damasceno</p>
          </div>
        </div>
      </div>
    </section>
  );
}
