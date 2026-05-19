import { motion } from "framer-motion";

const pillars = [
  { title: "Escuta ativa", text: "Acolhimento sem julgamento, no seu tempo." },
  { title: "Cuidado individual", text: "Cada processo é único e respeitado." },
  { title: "Desenvolvimento humano", text: "Construindo autoconhecimento real." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-sage-foreground">Sobre</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-cocoa leading-tight text-balance">
            Um cuidado feito de presença, escuta e tempo.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            Acredito que a terapia é um encontro: um espaço onde você pode
            chegar como está, sem precisar caber em nenhuma forma. Trabalho
            com acolhimento, escuta ativa e cuidado individualizado, respeitando
            o ritmo de cada história.
          </p>
          <p>
            Meu trabalho é construir, junto com você, caminhos para um
            desenvolvimento humano mais leve e consciente, com mais clareza
            sobre quem você é e sobre o que deseja para a sua vida.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 pt-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl bg-card border border-border/60 p-5"
              >
                <p className="font-display text-xl text-cocoa">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
