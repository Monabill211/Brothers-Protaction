"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
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
        src="\img\372f563cb2330eb70d3a01aca0a3ebfe.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — النص */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center gap-6">

        {/* Main Title */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary-dark">
            <Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString(
        '<span style="color:#df3939">B</span><span style="color:white">ROTHERS PROTACTION</span>'
      )
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
  options={{
    autoStart: true,
    loop: true,
    delay: 70,
    cursor: "|",
  }}
/>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="text-lg md:text-2xl font-semibold text-white/80 max-w-xl"
        >
          BROTHERS PROTACTION هي أكبر شركة أفلام حماية في مصر
        </motion.h2>

        {/* Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="flex gap-6 mt-4 flex-wrap justify-center"
        >
          {[
            { label: "عميل راضٍ", value: 1000 },
            { label: "سنوات خبرة", value: 10 },
            { label: "تقييم العملاء", value: 4.7, decimal: true },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 1.8 + i * 0.2,
                duration: 0.8,
              }}
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