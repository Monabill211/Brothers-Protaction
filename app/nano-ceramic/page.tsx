"use client";

import { motion } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../Footer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShieldIcon from "@mui/icons-material/Shield";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function NanoCeramicPage() {
  return (
    <>
      <Navbar />

      <section
        dir="rtl"
        className="bg-[#0a0a0a] text-white overflow-hidden"
        style={{
          paddingTop: "120px",
          margin:"auto",
        }}
      >
        {/* Hero */}
        <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <img
            src="/img/452863198_122094958910449527_15294905101800547_n.png"
            alt="Nano Ceramic"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{
                marginBottom: "16px",
              }}
            >
              NANO CERAMIC
            </motion.p>

            <motion.h1
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
              className="text-5xl md:text-7xl font-black"
              style={{
                marginBottom: "24px",
              }}
            >
              ما هو <span className="text-primary">النانو سيراميك</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="text-white/70 max-w-3xl mx-auto leading-8 text-sm md:text-lg"
            >
              طبقة حماية متطورة تمنح سيارتك لمعانًا فخمًا وتحافظ على الطلاء من
              الأتربة والعوامل الجوية والخدوش البسيطة.
            </motion.p>
          </div>
        </div>

        {/* About */}
        <div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center"
          style={{
            gap: "60px",
            padding: "120px 20px",
          }}
        >
          {/* Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{
                marginBottom: "18px",
              }}
            >
              WHAT IS NANO CERAMIC
            </p>

            <h2
              className="text-4xl md:text-5xl font-black"
              style={{
                marginBottom: "28px",
              }}
            >
              حماية ولمعان <span className="text-primary">بأحدث التقنيات</span>
            </h2>

            <p className="text-white/60 leading-9 text-sm md:text-base">
              النانو سيراميك عبارة عن طبقة شفافة يتم تطبيقها على سطح السيارة
              لتوفير حماية قوية ضد الأتربة والمياه وأشعة الشمس والخدوش البسيطة،
              كما تمنح السيارة لمعانًا عميقًا ومظهرًا احترافيًا يدوم لفترات
              طويلة.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                gap: "20px",
                marginTop: "40px",
              }}
            >
              {[
                "حماية من الأتربة",
                "مقاومة للمياه",
                "لمعان قوي",
                "حماية من الشمس",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/10 rounded-[20px]"
                  style={{
                    padding: "20px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <ShieldIcon className="text-primary" />

                    <span className="font-bold">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <img
                src="/img/372f563cb2330eb70d3a01aca0a3ebfe.jpg"
                alt="Nano Ceramic"
                className="w-full rounded-[35px] object-cover"
              />

              <div className="absolute inset-0 rounded-[35px] border border-white/10" />
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "0 20px 120px",
          }}
        >
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
              marginBottom: "70px",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black">
              مميزات <span className="text-primary">النانو سيراميك</span>
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
            style={{
              gap: "25px",
            }}
          >
            {[
              {
                icon: <AutoAwesomeIcon />,
                title: "لمعان فاخر",
                text: "يعطي السيارة مظهرًا لامعًا وفخمًا لفترات طويلة.",
              },

              {
                icon: <WaterDropIcon />,
                title: "طرد المياه",
                text: "يمنع التصاق المياه والأتربة على سطح السيارة.",
              },

              {
                icon: <SunnyIcon />,
                title: "حماية من الشمس",
                text: "يقلل تأثير الحرارة وأشعة UV على الطلاء.",
              },

              {
                icon: <ShieldIcon />,
                title: "حماية إضافية",
                text: "يحافظ على الطلاء من العوامل الخارجية والخدوش البسيطة.",
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
                className="bg-[#111111] border border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 rounded-[30px]"
                style={{
                  padding: "35px",
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
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
          className="max-w-5xl mx-auto text-center bg-[#111111] border border-white/10"
          style={{
            margin: "140px auto ",
            padding: "70px 30px",
            borderRadius: "40px",
          }}
        >
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{
              marginBottom: "25px",
            }}
          >
            خلي عربيتك ترجع <span className="text-primary">زيرو</span>
          </h2>

          <p className="text-white/60 leading-8 max-w-2xl mx-auto">
            احجز خدمة التلميع الاحترافي الآن واستمتع بمظهر لامع وفخم لسيارتك
            باستخدام أفضل التقنيات والخامات العالمية.
          </p>

          <button
            className="bg-primary text-white font-black hover:scale-105 transition-all duration-300"
            style={{
              marginTop: "35px",
              height: "60px",
              padding: "0 40px",
              borderRadius: "20px",
            }}
          >
            احجز الآن
          </button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}