"use client";

import { motion } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../Footer";
import ShieldIcon from "@mui/icons-material/Shield";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import Link from "next/link";

export default function PPFPage() {
  return (
    <>
      <Navbar />

      <section
        dir="rtl"
        className="bg-[#0a0a0a] text-white overflow-hidden"
        style={{
          paddingTop: "120px",
        }}
      >
        {/* HERO */}
        <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          <img
            src="/img/372f563cb2330eb70d3a01aca0a3ebfe.jpg"
            alt="PPF"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10 text-center px-4"
          >
            <p
              className="text-primary tracking-[4px] font-bold text-xs"
              style={{
                marginBottom: "16px",
              }}
            >
              PPF PROTECTION
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              ما هي <span className="text-primary">أفلام الحماية PPF</span>؟
            </h1>

            <p
              className="text-white/70 max-w-3xl mx-auto text-sm md:text-lg leading-8"
              style={{
                marginTop: "24px",
              }}
            >
              الحل الأقوى لحماية طلاء سيارتك من الخدوش والعوامل الخارجية مع
              الحفاظ على اللمعة الأصلية والفخامة الكاملة.
            </p>
          </motion.div>
        </div>

        {/* ABOUT */}
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            gap: "60px",
            padding: "120px 20px",
          }}
        >
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/img/623250-بوجاتى-تشيرون.webp"
              alt="ppf"
              className="w-full rounded-[30px] object-cover"
            />

            <div className="absolute inset-0 rounded-[30px] border border-white/10" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <p
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{
                marginBottom: "14px",
              }}
            >
              WHAT IS PPF
            </p>

            <h2
              className="text-4xl md:text-5xl font-black"
              style={{
                marginBottom: "24px",
              }}
            >
              حماية ذكية <span className="text-primary">لفخامة سيارتك</span>
            </h2>

            <p className="text-white/60 leading-8 text-sm md:text-base">
              أفلام الحماية PPF هي طبقة شفافة عالية الجودة يتم تركيبها فوق طلاء
              السيارة لحمايته من الخدوش والأتربة والحصى والعوامل الجوية القاسية.
              تتميز هذه التقنية بأنها تحافظ على شكل السيارة الأصلي ولمعتها بدون
              التأثير على اللون أو التصميم.
            </p>

            <p
              className="text-white/60 leading-8 text-sm md:text-base"
              style={{
                marginTop: "20px",
              }}
            >
              في Brothers Protection نستخدم خامات عالمية توفر أعلى درجات الحماية
              مع مظهر فاخر وعمر افتراضي طويل.
            </p>
          </motion.div>
        </div>

        {/* FEATURES */}
        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "0 20px 120px",
          }}
        >
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
            className="text-center"
            style={{
              marginBottom: "70px",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black">
              لماذا تختار <span className="text-primary">PPF</span>؟
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
            style={{
              gap: "24px",
            }}
          >
            {[
              {
                icon: <ShieldIcon fontSize="inherit" />,
                title: "حماية كاملة",
                body:
                  "تحمي السيارة من الخدوش والأحجار الصغيرة والعوامل الخارجية.",
              },

              {
                icon: <AutoAwesomeIcon fontSize="inherit" />,
                title: "لمعة دائمة",
                body:
                  "تحافظ على لمعان السيارة وكأنها جديدة طوال الوقت.",
              },

              {
                icon: <VerifiedIcon fontSize="inherit" />,
                title: "ضمان حقيقي",
                body:
                  "خامات عالمية مع ضمان على الجودة والتركيب الاحترافي.",
              },

              {
                icon: <DirectionsCarFilledIcon fontSize="inherit" />,
                title: "مظهر فاخر",
                body:
                  "تعطي السيارة شكلًا احترافيًا وفخمًا بدون التأثير على اللون.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="bg-[#101010] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3"
                style={{
                  padding: "35px",
                  borderRadius: "28px",
                }}
              >
                <div
                  className="bg-primary/10 text-primary flex items-center justify-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "22px",
                    fontSize: "34px",
                    marginBottom: "24px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-2xl font-black"
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-white/60 leading-8 text-sm">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
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
          style={{
            padding: "0 20px 120px",
          }}
        >
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{
              marginBottom: "24px",
            }}
          >
            احجز خدمتك الآن
          </h2>

          <p
            className="text-white/60 max-w-2xl mx-auto leading-8"
            style={{
              margin: "0 auto 35px",
            }}
          >
            احصل على أفضل حماية احترافية لسيارتك باستخدام أحدث تقنيات أفلام
            الحماية العالمية.
          </p>

          <Link href="/#Booking">
            <button
              className="bg-primary text-white font-black hover:scale-105 transition-all duration-300"
              style={{
                width: "240px",
                height: "60px",
                borderRadius: "999px",
              }}
            >
              احجز الآن
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}