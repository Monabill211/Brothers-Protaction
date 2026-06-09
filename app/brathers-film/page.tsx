"use client";

import { motion } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../Footer";
import ShieldIcon from "@mui/icons-material/Shield";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const specs = [
  { label: "السُمك", value: "8 mils", sub: "320 ميكرون" },
  { label: "اللمعان", value: "100%", sub: "Gloss Finish" },
  { label: "الترميم الذاتي", value: "100%", sub: "Self Healing" },
  { label: "مقاومة البيئة", value: "100%", sub: "UV & Chemicals" },
  { label: "ضمان", value: "10", sub: "سنوات" },
];

const features = [
  {
    icon: <ShieldIcon />,
    title: "حماية قصوى",
    body: "طبقة PPF تحمي الطلاء من الخدوش والحجارة الطائرة والعوامل الخارجية القاسية بشكل كامل.",
  },
  {
    icon: <AutoFixHighIcon />,
    title: "ترميم ذاتي",
    body: "خاصية الـ Self Healing تُزيل خدوش السطح تلقائيًا بمجرد التعرض للحرارة أو أشعة الشمس.",
  },
  {
    icon: <WaterDropIcon />,
    title: "مقاومة الماء والأوساخ",
    body: "السطح فائق النعومة يمنع التصاق الأوساخ والماء، مما يجعل تنظيف السيارة أسهل بكثير.",
  },
  {
    icon: <StarIcon />,
    title: "لمعان دائم",
    body: "يحافظ على لمعان الطلاء الأصلي بنسبة 100% ويمنع الاصفرار أو التآكل لسنوات طويلة.",
  },
];

export default function PpfPage() {
  return (
    <>
      <Navbar />

      <section
        dir="rtl"
        className="bg-[#0a0a0a] text-white overflow-hidden"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          margin: "auto",
        }}
      >
        {/* Hero */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "60px", padding: "0 20px" }}
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p
                className="text-primary tracking-[4px] text-xs font-bold"
                style={{ marginBottom: "18px" }}
              >
                PAINT PROTECTION FILM
              </p>

              <h1
                className="text-5xl md:text-7xl font-black leading-tight"
                style={{ marginBottom: "30px" }}
              >
                حماية <span className="text-primary">PPF</span>
              </h1>

              <p className="text-white/60 leading-9 text-sm md:text-base">
                فيلم حماية الطلاء الاحترافي من Brothers — أقوى طبقة حماية
                شفافة في السوق بسُمك 8 mils وضمان 10 سنوات، تحمي سيارتك من كل
                شيء وتخليها لامعة زي أول يوم.
              </p>

              {/* Warranty Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30"
                style={{
                  marginTop: "28px",
                  marginBottom: "35px",
                  padding: "14px 24px",
                  borderRadius: "16px",
                }}
              >
                <WorkspacePremiumIcon className="text-primary" style={{ fontSize: "28px" }} />
                <div>
                  <p className="text-primary font-black text-sm">ضمان Brothers الرسمي</p>
                  <p className="text-white/50 text-xs">10 سنوات على المنتج والتركيب</p>
                </div>
              </motion.div>

              <div className="flex flex-wrap" style={{ gap: "16px", marginTop: "8px" }}>
                <button
                  className="bg-primary text-white font-black hover:scale-105 transition-all duration-300"
                  style={{ height: "58px", padding: "0 34px", borderRadius: "18px" }}
                >
                  احجز الخدمة الآن
                </button>

                <button
                  className="border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                  style={{ height: "58px", padding: "0 34px", borderRadius: "18px" }}
                >
                  اعرف المزيد
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px]" />
              <img
                src="/img/WhatsApp Image 2026-06-03 at 1.13.59 AM.jpeg"
                alt="حماية PPF"
                className="relative z-10 w-full h-[750px]  rounded-[35px] border border-white/10"
              />
            </motion.div>
          </div>
        </div>

        {/* Specs Bar */}
        <div
          className="max-w-7xl mx-auto"
          style={{ marginTop: "100px", padding: "0 20px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 bg-[#111111] border border-white/10"
            style={{ borderRadius: "30px", overflow: "hidden" }}
          >
            {specs.map((spec, i) => (
              <div
                key={i}
                className="text-center border-white/10 hover:bg-white/5 transition-all duration-300"
                style={{
                  padding: "36px 20px",
                  borderLeft: i !== specs.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <p className="text-primary font-black" style={{ fontSize: "38px", lineHeight: 1 }}>
                  {spec.value}
                </p>
                <p className="text-white font-bold text-sm" style={{ marginTop: "8px" }}>
                  {spec.label}
                </p>
                <p className="text-white/40 text-xs" style={{ marginTop: "4px" }}>
                  {spec.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What is PPF */}
        <div
          className="max-w-7xl mx-auto"
          style={{ marginTop: "140px", padding: "0 20px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: "70px" }}
          >
            <p
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{ marginBottom: "14px" }}
            >
              WHAT IS PPF
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              إيه هو <span className="text-primary">فيلم الحماية؟</span>
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "50px" }}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/img/WhatsApp Image 2026-06-03 at 1.13.59 AM.jpeg"
              alt="PPF detail"
              className="w-full h-[750px] rounded-[35px] border border-white/10"
            />

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-white/60 leading-9 text-sm md:text-base">
                Paint Protection Film هو فيلم بوليمر شفاف فائق الجودة بسُمك
                8 mils (320 ميكرون) يُركَّب مباشرة على طلاء السيارة ليشكّل
                درعًا غير مرئي يمتص الصدمات والخدوش الناتجة عن الاستخدام
                اليومي.
                <br />
                <br />
                بفضل تقنية الترميم الذاتي، تختفي الخدوش الخفيفة لوحدها عند
                التعرض للحرارة، فيما يحافظ الفيلم على اللمعان الكامل لسطح
                السيارة بنسبة 100% طوال فترة الضمان البالغة 10 سنوات.
              </p>

              <div
                className="flex flex-col"
                style={{ gap: "14px", marginTop: "32px" }}
              >
                {[
                  "سُمك 8 mils يوفر حماية استثنائية من الحجارة الطائرة",
                  "شفافية كاملة — لا يغير من شكل السيارة أو لونها",
                  "مقاوم لأشعة UV والمواد الكيميائية والأوساخ",
                  "ضمان Brothers الرسمي لمدة 10 سنوات",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <VerifiedIcon
                      className="text-primary"
                      style={{ fontSize: "20px", marginTop: "2px", flexShrink: 0 }}
                    />
                    <p className="text-white/70 text-sm leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div
          className="max-w-7xl mx-auto"
          style={{ marginTop: "140px", padding: "0 20px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: "70px" }}
          >
            <p
              className="text-primary tracking-[4px] text-xs font-bold"
              style={{ marginBottom: "14px" }}
            >
              BENEFITS
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              مميزات <span className="text-primary">PPF</span>
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
            style={{ gap: "25px" }}
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#111111] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-4"
                style={{ padding: "35px", borderRadius: "30px" }}
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

                <h3 className="text-2xl font-black" style={{ marginBottom: "16px" }}>
                  {item.title}
                </h3>

                <p className="text-white/60 leading-8 text-sm">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Warranty Section */}
        <div
          className="max-w-7xl mx-auto"
          style={{ marginTop: "140px", padding: "0 20px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-white/10 relative overflow-hidden"
            style={{ borderRadius: "40px", padding: "70px 50px" }}
          >
            {/* BG Glow */}
            <div
              className="absolute bg-primary/10 blur-[100px] rounded-full"
              style={{ width: "400px", height: "400px", top: "-100px", left: "-100px" }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "50px" }}>
              <div>
                <p
                  className="text-primary tracking-[4px] text-xs font-bold"
                  style={{ marginBottom: "14px" }}
                >
                  WARRANTY
                </p>
                <h2 className="text-4xl md:text-5xl font-black" style={{ marginBottom: "24px" }}>
                  ضمان Brothers{" "}
                  <span className="text-primary">الرسمي</span>
                </h2>
                <p className="text-white/60 leading-9 text-sm md:text-base">
                  كل سيارة بتتركب عليها PPF من Brothers بتاخد ضمان رسمي لمدة
                  10 سنوات يشمل المنتج والتركيب، مع خدمة ما بعد البيع الكاملة.
                </p>
              </div>

              <div className="grid grid-cols-1" style={{ gap: "16px" }}>
                {[
                  { num: "10", label: "سنوات ضمان على المنتج" },
                  { num: "320", label: "ميكرون — أقوى سُمك في السوق" },
                  { num: "100%", label: "ترميم ذاتي للخدوش الخفيفة" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5 bg-white/5 border border-white/10"
                    style={{ padding: "22px 28px", borderRadius: "20px" }}
                  >
                    <p
                      className="text-primary font-black"
                      style={{ fontSize: "32px", minWidth: "80px" }}
                    >
                      {item.num}
                    </p>
                    <p className="text-white/70 text-sm leading-7">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center bg-[#111111] border border-white/10"
          style={{ margin: "140px auto 0", padding: "70px 30px", borderRadius: "40px" }}
        >
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ marginBottom: "25px" }}
          >
            احمي سيارتك{" "}
            <span className="text-primary">للسنين الجاية</span>
          </h2>

          <p className="text-white/60 leading-8 max-w-2xl mx-auto">
            احجز تركيب PPF الاحترافي من Brothers دلوقتي واستمتع بحماية كاملة
            بضمان 10 سنوات وأعلى مواصفات في السوق.
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