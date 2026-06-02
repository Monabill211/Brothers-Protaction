"use client";

import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    date: "",
    branch: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg =
      `🚗 *حجز جديد — Brothers Protection*%0A%0A` +
      `👤 *الاسم:* ${formData.name}%0A` +
      `📞 *الهاتف:* ${formData.phone}%0A` +
      `🚘 *السيارة:* ${formData.car}%0A` +
      `🛠 *الخدمة:* ${formData.service}%0A` +
      `📅 *التاريخ:* ${formData.date}%0A` +
      `📍 *الفرع:* ${formData.branch}%0A` +
      `📝 *ملاحظات:* ${formData.notes || "لا يوجد"}`;

    window.open(`https://wa.me/201021219588?text=${msg}`, "_blank");

    setFormData({ name: "", phone: "", car: "", service: "", date: "", branch: "", notes: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="Booking"
      dir="rtl"
      style={{
        padding: "100px 16px",
        background: "#fff",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
        style={{ marginBottom: "70px" }}
      >
        <p style={{
          color: "#DC2626", letterSpacing: "4px", fontSize: "0.75rem",
          fontWeight: 700, marginBottom: "12px",
        }}>
          BOOK YOUR APPOINTMENT
        </p>

        <h2 style={{
          fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900,
          color: "#111", marginBottom: "20px",
        }}>
          احجز{" "}
          <span style={{
            background: "linear-gradient(90deg,#DC2626,#F97316)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            موعدك الآن
          </span>
        </h2>

        <p style={{
          color: "#6b7280", fontSize: "0.95rem", maxWidth: "560px",
          margin: "0 auto", lineHeight: 1.9,
        }}>
          احجز خدمة حماية أو عناية كاملة لسيارتك وسيتم التواصل معك من فريق
          Brothers Protection لتأكيد الحجز.
        </p>
      </motion.div>

      {/* Main */}
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center"
        style={{ gap: "40px" }}
      >
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -120, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl"
          style={{
            background: "#fff",
            border: "1.5px solid #f3f4f6",
            borderRadius: "30px",
            padding: "40px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{
            textAlign: "center", fontWeight: 900, fontSize: "1.8rem",
            color: "#111", marginBottom: "40px",
          }}>
            احجز خدمتك
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px" }}>
              <Field label="الاسم بالكامل">
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="اكتب اسمك هنا..." style={inputStyle} />
              </Field>
              <Field label="رقم الهاتف">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="اكتب رقم هاتفك..." style={inputStyle} />
              </Field>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px" }}>
              <Field label="نوع السيارة">
                <input type="text" name="car" value={formData.car} onChange={handleChange}
                  placeholder="BMW M4" style={inputStyle} />
              </Field>
              <Field label="الخدمة المطلوبة">
                <select name="service" value={formData.service} onChange={handleChange} style={inputStyle}>
                  <option value="">اختر الخدمة</option>
                  <option>أفلام حماية PPF</option>
                  <option>عزل حراري</option>
                  <option>نانو سيراميك</option>
                  <option>تلميع سيارات</option>
                </select>
              </Field>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px" }}>
              <Field label="اليوم المناسب">
                <input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} />
              </Field>
              <Field label="الفرع المناسب">
                <select name="branch" value={formData.branch} onChange={handleChange} style={inputStyle}>
                  <option value="">اختر الفرع</option>
                  <option>الشيخ زايد</option>
                  <option>المهندسين</option>
                  <option>التجمع الخامس</option>
                </select>
              </Field>
            </div>

            {/* Notes */}
            <Field label="ملاحظات إضافية">
              <textarea rows={5} name="notes" value={formData.notes} onChange={handleChange}
                placeholder="اكتب أي تفاصيل إضافية..."
                style={{ ...inputStyle, height: "auto", padding: "20px", resize: "none", borderRadius: "24px" }} />
            </Field>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%", height: "60px", borderRadius: "999px", border: "none",
                background: "linear-gradient(135deg,#DC2626)",
                color: "#fff", fontWeight: 900, fontSize: "1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                boxShadow: "0 4px 20px rgba(220,38,38,0.30)",
                marginTop: "10px",
              }}
            >
                احجز الآن
              <SendIcon />
            </motion.button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 120, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col w-full max-w-md"
          style={{ gap: "20px" }}
        >
          {/* Card */}
          <motion.div
            whileHover={{ y: -8 }}
            style={{
              background: "#fff",
              border: "1.5px solid #f3f4f6",
              borderRadius: "28px",
              padding: "35px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <img src="\img\452863198_122094958910449527_15294905101800547_n.png"
              alt="Brothers Protection logo" className="w-12 mb-4" />
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#111", marginBottom: "16px" }}>
              حماية احترافية
            </h2>
            <p style={{ color: "#6b7280", lineHeight: 1.9, fontSize: "0.88rem" }}>
              نستخدم أحدث تقنيات الحماية والعناية للحفاظ على سيارتك بأفضل شكل
              ممكن مع خامات عالمية وضمان حقيقي.
            </p>
          </motion.div>

          {/* Contact Cards */}
          {[
            { title: "رقم الهاتف", value: "01021219588", icon: <CallIcon />, link: "tel:+201021219588" },
            { title: "واتساب", value: "01021219588", icon: <WhatsAppIcon />, link: "https://wa.me/201021219588" },
            { title: "البريد الإلكتروني", value: "info@brothersprotection.com", icon: <AttachEmailIcon />, link: "mailto:info@brothersprotection.com" },
            { title: "فرع الشيخ زايد", value: "السادس من أكتوبر، محافظة الجيزة، مصر", icon: <AddLocationAltIcon />, link: "#" },
            { title: "فرع المهندسين", value: "٦ خان يونس متفرع من شارع شهاب، الجيزة", icon: <AddLocationAltIcon />, link: "#" },
            { title: "فرع التجمع الخامس", value: "التجمع الخامس، القاهرة الجديدة، مصر", icon: <AddLocationAltIcon />, link: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ textDecoration: "none" }}
            >
              <motion.div
                whileHover={{ x: -4 }}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: "16px", padding: "20px", borderRadius: "24px",
                  background: "#fff", border: "1.5px solid #f3f4f6",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ textAlign: "right" }}>
                  <h3 style={{ color: "#9ca3af", fontSize: "0.78rem", marginBottom: "5px", fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "#111" }}>
                    {item.value}
                  </p>
                </div>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "16px",
                  background: "linear-gradient(135deg,rgba(220,38,38,0.1),rgba(249,115,22,0.1))",
                  color: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "28px", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", color: "#374151", fontWeight: 700, fontSize: "0.88rem", marginBottom: "10px" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", height: "56px", padding: "0 20px",
  borderRadius: "18px", border: "1.5px solid #e5e7eb",
  outline: "none", fontSize: "0.9rem", background: "#fafafa",
  color: "#111", direction: "rtl",
  boxSizing: "border-box",
};