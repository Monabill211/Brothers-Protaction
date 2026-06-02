"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../Footer";
import { section } from "framer-motion/client";

const services = [
  {
    title: "أفلام الحماية PPF",
    body:
      "حماية كاملة لطلاء السيارة ضد الخدوش والعوامل الخارجية باستخدام خامات عالمية عالية الجودة.",
    image: "/img/WhatsApp Image 2026-06-02 at 6.09.57 PM (1).jpeg",
    section: "/aflam-ppf",
  },

  {
    title: "العزل الحراري",
    body:
      "تقليل حرارة الشمس داخل السيارة مع الحفاظ على الرؤية والشكل الفخم للسيارة.",
    image: "/img/WhatsApp Image 2026-06-02 at 6.09.57 PM (2).jpeg",
    section: "/thermal-insulation",
  },

  {
    title: "النانو سيراميك",
    body:
      "طبقة حماية ولمعان قوية تحافظ على الطلاء وتعطي السيارة مظهرًا احترافيًا دائمًا.",
    image: "/img/WhatsApp Image 2026-06-02 at 6.09.57 PM.jpeg",
    section: "/nano-ceramic",

  },

  {
    title: "تلميع السيارات",
    body:
      "إزالة الخدوش والعيوب البسيطة واستعادة لمعان السيارة بأحدث تقنيات التلميع.",
    image: "/img/WhatsApp Image 2026-06-02 at 6.09.58 PM.jpeg",
    section: "/tliming",

  },
];

export default function page() {
  return (
    <>
    <Navbar />
    <section
      id="services"
      dir="rtl"
      className="w- relative bg-white  text-black overflow-hidden"
      style={{
        padding: "120px 20px",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 bg-primary" />

      {/* Heading */}
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
        className="text-center relative z-10"
        style={{
          marginBottom: "90px",
        }}
      >
        <p
          className="text-primary tracking-[4px] font-bold text-xs"
          style={{
            marginBottom: "14px",
          }}
        >
          OUR SERVICES
        </p>

        <h2
          className="text-4xl md:text-6xl font-black"
          style={{
            marginBottom: "20px",
          }}
        >
          خدمات <span className="text-primary">BROTHERS PROTACTION</span>
        </h2>

        <p className="text-black/60 text-center max-w-3xl mx-auto leading-8 text-sm md:text-base" style={{margin:"auto"}}>
          نقدم مجموعة متكاملة من خدمات حماية وعناية السيارات باستخدام أحدث
          التقنيات العالمية لضمان أفضل حماية ومظهر احترافي لسيارتك.
        </p>
      </motion.div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto relative z-10"
        style={{
          gap: "25px",
        }}
      >
        {services.map((item, i) => (
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
            className="group relative bg-white border border-white/10 rounded-[32px] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-4"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#101010] to-transparent" /> */}
            </div>

            {/* Content */}
            <div
              className="relative z-10"
              style={{
                padding: "30px",
              }}
            >
              {/* Line */}
              <div
                className="bg-primary rounded-full"
                style={{
                  width: "50px",
                  height: "4px",
                  marginBottom: "22px",
                }}
              />

              {/* Title */}
              <h3
                className="text-2xl font-black"
                style={{
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-black/60 leading-8 text-sm">
                {item.body}
              </p>

              {/* Button */}
              <Link href="/#Booking" >
              <button
                className="bg-primary text-white font-bold hover:scale-105 transition-all duration-300"
                style={{
                  marginTop: "28px",
                  width: "100%",
                  height: "52px",
                  borderRadius: "18px",
                }}
              >
                احجز الخدمة
              </button></Link>
              {item.section && (

              <Link href={item.section} >
              <button
                className="bg-primary text-white font-bold hover:scale-105 transition-all duration-300"
                style={{
                  marginTop: "28px",
                  width: "100%",
                  height: "52px",
                  borderRadius: "18px",
                }}
              >
                 ما هو {item.title}؟
              </button>
             
              </Link> )}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}