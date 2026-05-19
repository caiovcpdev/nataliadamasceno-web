import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles, HiArrowDownRight } from "react-icons/hi2";
import natalia from "@/assets/natalia-hero.png";

const WA = "https://wa.me/5571993232910?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa.";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sage/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-nude/50 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-secondary-foreground"
          >
            <HiOutlineSparkles className="text-sage-foreground" />
            Psicologia Clínica
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance text-cocoa"
          >
            Natália <em className="not-italic text-sage-foreground">Damasceno</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed text-balance"
          >
            Um espaço seguro para cuidar da sua saúde emocional com leveza,
            acolhimento e escuta verdadeira.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-90 transition shadow-soft"
            >
              <FaWhatsapp className="text-base" /> Agendar Conversa
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 text-sm text-foreground hover:bg-secondary transition"
            >
              Entrar em Contato <HiArrowDownRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span>CRP em registro</span>
            <span className="h-px w-10 bg-border" />
            <span>Atendimento online e presencial</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-sand to-sage/40 rounded-[2.2rem] -rotate-3" />
            <img
              src={natalia}
              alt="Natália Damasceno, psicóloga clínica"
              className="relative h-full w-full object-cover rounded-[2rem] shadow-soft"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-2xl px-5 py-4 shadow-soft border border-border/60"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Acolhimento</p>
              <p className="font-display text-xl text-cocoa">com leveza</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
