"use client";

import { motion } from "framer-motion";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const clients = [
  {
    img: "/img/clients/client1.png",
    href: "https://www.instagram.com/reel/DbJiL6qMczE/?exln=N3QxN3RzZzlyZWg5",
    name: "أستاذ يوسف",
    opinion: "خدمة احترافية وتركيب على أعلى مستوى",
  },
  {
    img: "/img/clients/client2.png",
    href: "https://www.instagram.com/reel/DePqXM0MS2G/?mdxt=Nzl1eGgwM3U2NmVk",
    name: "كابتن حسام عبد المجيد ",
    opinion: "أفضل مكان جربته في حماية السيارات",
    center: true,
  },
  {
    img: "/img/clients/client3.png",
    href: "https://www.instagram.com/reel/DePqdGvM74X/?dlrf=MThzNWg4eDZ6d2VmZw==",
    name: "كابتن يوسف اوباما",
    opinion: "الشغل نضيف وفريق محترف جداً",
  },
];

const IgSVG = () => (
  <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: "#fff" }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function ClientsSection() {
  return (
    <section
      dir="rtl"
      className="bg-white overflow-hidden"
      style={{ padding: "120px 20px" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "70px" }}
        >
          <p className="text-primary tracking-[4px] text-xs font-bold" style={{ marginBottom: "12px" }}>
            CLIENT MOMENTS
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-black">
            رأي <span className="text-primary">  عملائنا المميزين</span> 
          </h2>
          <p className="text-gray-800 max-w-xl mx-auto leading-8 text-sm" style={{ margin: "16px  auto " }}>
            لحظات حقيقية من داخل Brothers Protection
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="flex items-end justify-center gap-4 md:gap-6"
          style={{ minHeight: 560 }}
        >
          {clients.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: item.center ? 60 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative block overflow-hidden flex-shrink-0"
              style={{
                textDecoration: "none",
                borderRadius: 28,
                width: item.center ? "32%" : "27%",
                aspectRatio: "9/16",
                maxHeight: item.center ? 560 : 460,
                border: item.center ? "2px solid #DC2626" : "1px solid rgba(0,0,0,0.08)",
                boxShadow: item.center
                  ? "0 24px 60px rgba(220,38,38,0.25)"
                  : "0 8px 24px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
                }}
              />

              {/* Instagram badge */}
              <div
                className="absolute top-4 left-4 flex items-center gap-1.5 backdrop-blur-sm rounded-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "5px 12px",
                }}
              >
                <IgSVG />
                <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>Reel</span>
              </div>

              {/* Center badge */}
              {item.center && (
                <div
                  className="absolute top-4 right-4 backdrop-blur-sm rounded-full"
                  style={{
                    background: "#DC2626",
                    padding: "5px 14px",
                  }}
                >
                  <span style={{ color: "#fff", fontSize: 11, fontWeight: 800 }}>⭐ مميز</span>
                </div>
              )}

              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                  style={{
                    width: item.center ? 72 : 56,
                    height: item.center ? 72 : 56,
                    background: item.center ? "rgba(220,38,38,0.5)" : "rgba(255,255,255,0.18)",
                    border: "2px solid rgba(255,255,255,0.35)",
                  }}
                >
                  <PlayCircleIcon style={{ fontSize: item.center ? 38 : 28, color: "#fff" }} />
                </div>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 right-0 left-0 px-5 py-5">
                {item.center && (
                  <p className="text-white/75 text-[13px] leading-relaxed m-0 mb-2" style={{ fontStyle: "italic" }}>
                    "{item.opinion}"
                  </p>
                )}
                <p className="text-white font-black m-0" style={{ fontSize: item.center ? 17 : 15 }}>
                  رأي {item.name} فينا
                </p>
                <p className="text-white/50 text-[12px] m-0 mt-0.5">دوس لمشاهدة الفيديو ←</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "50px" }}
        >
          <a
            href="https://www.instagram.com/brothers.protection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-black text-[14px] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg,#DC2626)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "16px",
            }}
          >
            <IgSVG />
            شوف المزيد على انستجرام
          </a>
        </motion.div>

      </div>
    </section>
  );
}