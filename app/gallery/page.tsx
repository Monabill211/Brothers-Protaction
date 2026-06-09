"use client";

import { motion } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../Footer";
const projects = [
  {
    car: "Mercedes GLC 300",
    service: "أفلام حماية PPF كاملة",
    video: "/img/vides/VID-20260602-WA0054.mp4",
  },

  {
    car: "Avatr 12 ",
    service: "تلميع احترافي + حماية",
    video: "/img/vides/VID-20260602-WA0118.mp4",
  },

  {
    car: "Lamborghini Urus",
    service: "حماية شاملة PPF",
    video: "/img/vides/VID-20260602-WA0119.mp4",
  },

  {
    car: "Kia Carens",
    service: "حماية Brothers Protaction",
    video: "/img/vides/VID-20260602-WA0068.mp4",
  },

  {
    car: "Lotus Emira",
    service: "حماية شاملة PPF",
    video: "/img/vides/VID-20260602-WA0120.mp4",
  },
  {
    car: "BMW M4  ",
    service: "حماية شاملة PPF",
    video: "/img/vides/VID-20260602-WA0122.mp4",
  },
  {
    car: "Toyota Land Cruiser",
    service: "حماية شاملة PPF",
    video: "/img/vides/VID-20260602-WA0144.mp4",
  },
  {
    car: "Jeep Grand Cherokee ",
    service: "حماية شاملة PPF",
    video: "/img/vides/VID-20260602-WA0148.mp4",
  },
  {
    car: "Mercedes GLC 200 ",
    service: "حماية شاملة PPF",
    video: "/img/vides/VID-20260602-WA0149.mp4",
  },
];

export default function page() {
  return (
    <>
    <Navbar />
  
    <section
      id="portfolio"
      dir="rtl"
      className="relative bg-white text-black overflow-hidden"
      style={{
        padding: "120px 20px",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 bg-primary" />

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
          className="text-primary tracking-[4px] text-xs font-bold"
          style={{
            marginBottom: "14px",
          }}
        >
          OUR WORK
        </p>

        <h2
          className="text-4xl md:text-6xl font-black"
          style={{
            marginBottom: "20px",
          }}
        >
          معرض <span className="text-primary">الأعمال</span>
        </h2>

        <p className="text-white/60 max-w-3xl mx-auto leading-8 text-sm md:text-base" style={{margin:"auto"}}>
          بعض من أعمال BROTHERS PROTACTION في حماية وعناية السيارات بأعلى
          جودة واحترافية.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto relative z-10"
        style={{
          gap: "28px",margin:"auto"
        }}
      >
        {projects.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111111] hover:border-primary/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <video
  src={item.video}
  className="w-full h-[340px] object-cover transition-all duration-700 group-hover:scale-110"
  autoPlay
  muted
  loop
  playsInline
/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent" />

              {/* Hover Layer */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* Content */}
            <div
              className="absolute bottom-0 left-0 w-full z-10"
              style={{
                padding: "30px",
              }}
            >
              {/* Service */}
              <div
                className="bg-primary text-white font-bold inline-flex items-center"
                style={{
                  height: "36px",
                  padding: "0 18px",
                  borderRadius: "999px",
                  marginBottom: "16px",
                  fontSize: "13px",
                }}
              >
                {item.service}
              </div>

              {/* Car */}
              <h3 className="text-3xl font-black text-white">
                {item.car}
              </h3>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[34px] border border-transparent group-hover:border-primary/30 transition duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
      <Footer />
    </>
  );
}