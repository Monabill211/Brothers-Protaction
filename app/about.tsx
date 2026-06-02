"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const reasons = [
  {
    num: "1",
    title: "تقنيات متطورة",
    body: "نستخدم أحدث تقنيات الحماية والعناية بالسيارات لتوفير أعلى درجات الحماية ضد العوامل الخارجية مع الحفاظ على المظهر الأصلي للسيارة.",
  },
  {
    num: "2",
    title: "تنفيذ احترافي",
    body: "يتم تنفيذ جميع الخدمات وفق معايير دقيقة وعلى أيدي متخصصين محترفين لضمان الحصول على نتائج استثنائية ترضي أصحاب السيارات الأكثر تطلبًا.",
  },
  {
    num: "3",
    title: "جودة مضمونة",
    body: "نلتزم بتقديم خدمات ومنتجات عالية الجودة مدعومة بضمان حقيقي، لأن رضا العميل هو أساس نجاحنا واستمرارنا.",
  },
];

export default function AboutSection() {
   const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      dir="rtl"
      className="bg-white text-black"
      style={{
        padding: "80px 20px",
      }}
    >
      {/* الجزء الأول */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          gap: "40px",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-right"
          style={{
            fontSize: "16px",
            lineHeight: "1.9",
            color: "rgba(0,0,0,0.6)",
            flex: 1,
            fontWeight: "600",
            
          }}
        >
         <div ref={ref}>
      {inView && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "برازر برودكشن هي الوكالة الحصرية لعدد من الشركات العالمية المرموقة في صناعة العناية بالسيارات. بفضل شراكتنا الاستراتيجية، قمنا بتقديم حلول مبتكرة ومتطورة في مجالات أفلام الحماية والعزل الحراري وتقنيات النانو والعناية الفائقة بالسيارات."
              )
              .start();
          }}
          options={{
            cursor: "",
            delay: 20,
          }}
        />
      )}
    </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            flex: 1,
          }}
        >
          <img
            src="\img\WhatsApp Image 2026-06-02 at 6.08.57 PM (1).jpeg"
            alt="سيارة "
            className="w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* العنوان */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <p
          className="text-center font-bold text-primary-dark"
          style={{
            marginBottom: "8px",
            letterSpacing: "3px",
            fontSize: "12px",
          }}
        >
          OUR STORY
        </p>

        <h2
          className="text-center font-black"
          style={{
            fontSize: "48px",
            marginBottom: "50px",
          }}
        >
          لماذا <span className="text-primary">Brothers Protaction</span>
        </h2>
      </motion.div>

      {/* الكروت */}
      <div
        className="flex flex-col md:flex-row"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 50px auto",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {reasons.map((r, index) => (
          <motion.div
            key={r.num}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
            style={{
              position: "relative",
              background: "white",
              padding: "40px",
              flex: 1,
              borderLeft:
                index !== reasons.length - 1
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "20px",
                fontSize: "90px",
                fontWeight: "900",
                lineHeight: "1",
                color: "rgba(200,0,0,0.1)",
                userSelect: "none",
              }}
            >
              {r.num}
            </span>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 36,
              }}
              transition={{
                delay: 0.4 + index * 0.2,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="bg-primary-light h-0.5"
              style={{
                borderRadius: "999px",
                marginBottom: "20px",
              }}
            />

            <h3
              style={{
                fontSize: "24px",
                fontWeight: "900",
                marginBottom: "16px",
              }}
            >
              {r.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.9",
                color: "rgba(0,0,0,0.55)",
              }}
            >
              {r.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* الزر */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/about">
        <button
          className="bg-primary text-white rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
          style={{
            padding: "14px 40px",
            fontWeight: "900",
            fontSize: "16px",
            display: "inline-block",
          }}
        >
          تعرف على BROTHERS PROTACTION
        </button>
        </Link>
      </motion.div>
    </section>
  );
}