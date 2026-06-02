"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="\img\WhatsApp Image 2026-06-02 at 6.08.58 PM.jpeg"
        alt="background"
        className="absolute inset-0 w-lvw h-lvh object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center gap-8">

        {/* Logo Image with glow */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", display: "inline-block" }}
        >
          {/* Glow */}
          <div style={{
            position: "absolute",
            inset: "-24px",
            borderRadius: "44px",
            background: "radial-gradient(ellipse at center, rgba(220,38,38,0.4) 0%, transparent 70%)",
            filter: "blur(28px)",
            zIndex: 0,
          }} />

          {/* Image — floating up/down only */}
          <motion.img
            src="/img/WhatsApp Image 2026-06-02 at 8.20.47 PM.png"
            alt="Brothers Protection"
            className="bg-cover "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
            style={{
              width: "100%",
              height: "220px",
              objectPosition: "center top",
              borderRadius: "32px",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          {/* Underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            style={{
              height: "3px",
              borderRadius: "2px",
              background: "linear-gradient(90deg,#DC2626,#F97316)",
              marginTop: "10px",
              transformOrigin: "right",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="text-lg md:text-2xl font-semibold text-white/80 max-w-xl"
          style={{ margin: 0 }}
        >
          أكبر شركة أفلام حماية في مصر
        </motion.h2>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="flex gap-6 mt-2 flex-wrap justify-center"
        >
          {[
            { label: "عميل راضٍ", value: 1000 },
            { label: "سنوات خبرة", value: 10 },
            { label: "تقييم العملاء", value: 4.7, decimal: true },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.15, duration: 0.6 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-4 text-center min-w-[120px] hover:bg-white/15 hover:-translate-y-2 transition-all duration-500"
            >
              <span className="block text-3xl font-black text-primary">
                {inView && (
                  <CountUp
                    end={s.value}
                    duration={3}
                    decimals={s.decimal ? 1 : 0}
                  />
                )}
                +
              </span>
              <span className="block text-sm text-white/70 mt-1 font-semibold">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}