import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

export function ServiceCard({ title, description, bullets, icon = "🔧" }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="card-premium p-8 group cursor-pointer"
    >
      <div className="space-y-6">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-crimson/20 to-crimson-soft/10 flex items-center justify-center text-2xl border border-crimson/20"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gradient group-hover:text-crimson transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-soft leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            {bullets.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 text-muted-soft"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-crimson mt-2 flex-shrink-0"
                />
                <span className="text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Hover indicator */}
        <div className="flex items-center gap-2 text-crimson opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-0.5 bg-crimson"
          />
        </div>
      </div>
    </motion.article>
  );
}

interface IndustryCardProps {
  title: string;
  description: string;
  outcomes: string[];
  icon?: string;
}

export function IndustryCard({ title, description, outcomes, icon = "🏢" }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="card-premium p-8 group cursor-pointer"
    >
      <div className="space-y-6">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-crimson/20 to-crimson-soft/10 flex items-center justify-center text-2xl border border-crimson/20"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gradient group-hover:text-crimson transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-soft leading-relaxed">
            {description}
          </p>
        </div>

        {/* Outcomes */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gradient uppercase tracking-wider">Key Outcomes</h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            {outcomes.map((outcome, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 text-muted-soft"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-crimson mt-2 flex-shrink-0"
                />
                <span className="text-sm leading-relaxed">{outcome}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Hover indicator */}
        <div className="flex items-center gap-2 text-crimson opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-medium">Explore solutions</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-0.5 bg-crimson"
          />
        </div>
      </div>
    </motion.div>
  );
}
