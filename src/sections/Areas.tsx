import { motion } from "framer-motion";
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineUser,
  HiOutlineSun,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const areas: { icon: IconType; title: string; text: string }[] = [
  { icon: HiOutlineHeart, title: "Ansiedade", text: "Compreender, regular e respirar com mais leveza no dia a dia." },
  { icon: HiOutlineSparkles, title: "Autoestima", text: "Reconstruir a relação consigo mesma de forma gentil e firme." },
  { icon: HiOutlineUsers, title: "Relacionamentos", text: "Vínculos mais saudáveis com você e com quem te cerca." },
  { icon: HiOutlineUser, title: "Terapia Individual", text: "Um espaço só seu, no seu tempo, com escuta verdadeira." },
  { icon: HiOutlineSun, title: "Desenvolvimento Emocional", text: "Ferramentas para lidar com sentimentos e ciclos de vida." },
  { icon: HiOutlineLightBulb, title: "Autoconhecimento", text: "Caminhos para entender quem você é e o que deseja." },
];

export function Areas() {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-sage-foreground">Áreas de atendimento</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-cocoa leading-tight text-balance">
            Cuidado para diferentes momentos da sua vida.
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl bg-background border border-border/60 p-7 transition-shadow hover:shadow-soft"
            >
              <div className="h-12 w-12 rounded-2xl bg-sage/40 text-sage-foreground flex items-center justify-center text-xl group-hover:bg-sage/70 transition">
                <a.icon />
              </div>
              <h3 className="mt-5 font-display text-2xl text-cocoa">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
