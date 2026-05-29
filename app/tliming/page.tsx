    "use client";

import { motion } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../Footer";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DiamondIcon from "@mui/icons-material/Diamond";
import BoltIcon from "@mui/icons-material/Bolt";

export default function TlimingPage() {
  return (
    <>
      <Navbar />

      <section
        dir="rtl"
        className="bg-[#0a0a0a] text-white overflow-hidden"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          margin:"auto",
        }}
        
      >
        {/* Hero */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{
              gap: "60px",
              padding: "0 20px",
            }}
          >
            {/* Text */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <p
                className="text-primary tracking-[4px] text-xs font-bold"
                style={{
                  marginBottom: "18px",
                }}
              >
                CAR POLISHING
              </p>

              <h1
                className="text-5xl md:text-7xl font-black leading-tight"
                style={{
                  marginBottom: "30px",
                }}
              >
                تلميع <span className="text-primary">السيارات</span>
              </h1>

              <p className="text-white/60 leading-9 text-sm md:text-base">
                خدمة تلميع السيارات الاحترافية تساعد على استعادة لمعان الطلاء
                وإزالة الخدوش البسيطة وآثار الاستخدام اليومي للحصول على مظهر
                فاخر وكأن السيارة جديدة تمامًا.
              </p>

              <div
                className="flex flex-wrap"
                style={{
                  gap: "16px",
                  marginTop: "35px",
                }}
              >
                <button
                  className="bg-primary text-white font-black hover:scale-105 transition-all duration-300"
                  style={{
                    height: "58px",
                    padding: "0 34px",
                    borderRadius: "18px",
                  }}
                >
                  احجز الخدمة الآن
                </button>

                <button
                  className="border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                  style={{
                    height: "58px",
                    padding: "0 34px",
                    borderRadius: "18px",
                  }}
                >
                  اعرف المزيد
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px]" />

              <img
                src="/img/372f563cb2330eb70d3a01aca0a3ebfe.jpg"
                alt="تلميع سيارات"
                className="relative z-10 w-full h-[550px] object-cover rounded-[35px] border border-white/10"
              />
            </motion.div>
          </div>
        </div>

        {/* What is polishing */}
        <div
          className="max-w-7xl mx-auto"
          style={{
            marginTop: "140px",
            padding: "0 20px",
          }}
        >
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
            className="text-center"
            style={{
              marginBottom: "70px",
            }}
          >
            <p
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{
                marginBottom: "14px",
              }}
            >
              WHAT IS POLISHING
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              ما هو <span className="text-primary">تلميع السيارات؟</span>
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{
              gap: "50px",
            }}
          >
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              src="/img/623250-بوجاتى-تشيرون.webp"
              alt="polishing"
              className="w-full h-[450px] object-cover rounded-[35px] border border-white/10"
            />

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
              <p className="text-white/60 leading-9 text-sm md:text-base">
                تلميع السيارات هو عملية احترافية تهدف إلى إزالة الطبقات
                التالفة والخدوش الخفيفة من سطح الطلاء باستخدام مواد وتقنيات
                متطورة، مما يعيد للسيارة لمعانها الأصلي ويحافظ على مظهرها
                الفاخر لفترة طويلة.
                <br />
                <br />
                يتم تنفيذ التلميع بأجهزة متخصصة وخامات عالية الجودة لضمان أفضل
                نتيجة بدون التأثير على طبقة الطلاء الأساسية للسيارة.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div
          className="max-w-7xl mx-auto"
          style={{
            marginTop: "140px",
            padding: "0 20px",
          }}
        >
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
            className="text-center"
            style={{
              marginBottom: "70px",
            }}
          >
            <p
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{
                marginBottom: "14px",
              }}
            >
              BENEFITS
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              مميزات <span className="text-primary">التلميع</span>
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
                icon: <AutoFixHighIcon />,
                title: "استعادة اللمعان",
                body:
                  "يعيد للسيارة لمعانها الأصلي ويجعل الطلاء يبدو جديدًا.",
              },
              {
                icon: <CheckCircleIcon />,
                title: "إزالة الخدوش",
                body:
                  "التخلص من الخدوش الخفيفة وآثار الاستخدام اليومي.",
              },
              {
                icon: <DiamondIcon />,
                title: "مظهر فاخر",
                body:
                  "يمنح السيارة مظهرًا احترافيًا وفخمًا بشكل واضح.",
              },
              {
                icon: <BoltIcon />,
                title: "حماية إضافية",
                body:
                  "يساعد في الحفاظ على الطلاء وتقليل تأثير العوامل الخارجية.",
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
                  duration: 0.8,
                  delay: i * 0.2,
                }}
                viewport={{ once: true }}
                className="bg-[#111111] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-4"
                style={{
                  padding: "35px",
                  borderRadius: "30px",
                }}
              >
                <div
                  className="bg-primary/10 text-primary flex items-center justify-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "22px",
                    fontSize: "34px",
                    marginBottom: "26px",
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