"use client";

import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import Navbar from '../navbar'
import Footer from '../Footer'
import { useState } from "react";


export default function page() {

 const branches = [
  {
    country: "مصر",
    city: "القاهرة",
    address: "المهندسين - ٦ خان يونس متفرع من شارع شهاب",
    map:
      "https://maps.app.goo.gl/Ph5ucUxPeMuBY3UV8?g_st=ic",
  },
  {
    country: "مصر",
    city: "القاهرة",
    address: "التجمع الخامس - التسعين الشمالي - مول اللوتس ٣",
    map:
      "https://www.google.com/maps/search/Codill%20East%20Mall/@30.030609130859375,31.505521774291992,17z?hl=en",
  },
  {
    country: "مصر",
    city: "الشيخ زايد",
    address: "الشيخ زايد - محور جمال عبد الناصر - ممشي Square One",
    map:
      "https://www.google.com/maps?q=29.99244499206543,30.94668960571289&z=17&hl=en",
  },
];
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  message: "",
}); 
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  e.preventDefault();

  const text = `
الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}

الرسالة:
${formData.message}
`;

  const whatsappUrl = `https://wa.me/201003397852?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <>
      <Navbar />
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      id="contact"
      dir="rtl"
      className="bg-[#0a0a0a] text-white overflow-hidden"
      style={{
        padding: "100px 16px",
      }}
    >
      {/* Heading */}
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
          className="text-primary/70 tracking-[4px] text-xs font-bold"
          style={{
            marginBottom: "12px",
          }}
        >
          BOOK YOUR APPOINTMENT
        </p>

        <h1
          className="text-4xl md:text-5xl font-black"
          style={{
            marginBottom: "20px",
          }}
        >
          تواصل معنا <span className="text-primary"> الآن</span>
        </h1>

        <p
          className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-8 text-center "
          style={{ margin: "auto" }}
        >
          تواصل معنا لطلب خدمة حماية أو عناية كاملة لسيارتك وسيتم التواصل معك من فريق
          برازر برودكشن لتأكيد الحجز.
        </p>
      </motion.div>

      {/* Main */}
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center"
        style={{
          gap: "40px",
          margin: "auto",
        }}
      >
        {/* Form */}
        <motion.div
          initial={{
            opacity: 0,
            x: -120,
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
          className="w-full max-w-3xl bg-[#111111] border border-white/10 rounded-[30px] shadow-2xl"
          style={{
            padding: "40px",
          }}
        >
          <h2
            className="text-center font-black text-3xl md:text-4xl"
            style={{
              marginBottom: "40px",
            }}
          >
             تواصل معانا
          </h2>

         <form
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  }}
>
            {/* Row 1 */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                gap: "20px",
              }}
            >
              <div>
                <label
                  className="block text-white/70 font-medium"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  الاسم بالكامل
                </label>

                <input
  type="text"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  placeholder="اكتب اسمك هنا..."
                  className="w-full border border-white/10 bg-[#0d0d0d] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#c84b4b]"
                  style={{
                    height: "56px",
                    padding: "0 20px",
                    borderRadius: "18px",
                  }}
/>
              </div>

              <div>
                <label
                  className="block text-white/70 font-medium"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  رقم الهاتف
                </label>

               <input
  type="tel"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  placeholder="اكتب رقم هاتفك..."
                  className="w-full border border-white/10 bg-[#0d0d0d] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#c84b4b]"
                  style={{
                    height: "56px",
                    padding: "0 20px",
                    borderRadius: "18px",
                  }}
/>
              </div>
            </div>

         
            {/* Notes */}
            <div>
              <label
                className="block text-white/70 font-medium"
                style={{
                  marginBottom: "10px",
                }}
              >
                 رسالتك
              </label>

             <textarea
  rows={5}
                placeholder="اكتب  تفاصيل رسالتك..."
                className="w-full resize-none border border-white/10 bg-[#0d0d0d] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#c84b4b]"
                style={{
                  borderRadius: "24px",
                  padding: "20px",
                }}
/>
            </div>

            {/* Button */}
          <button
  type="submit"
  className="w-full bg-primary text-white font-black transition-all duration-300 hover:brightness-110 hover:-translate-y-2 flex items-center justify-center gap-3"
  style={{
    height: "60px",
    borderRadius: "999px",
    marginTop: "10px",
  }}
>
  ارسال الآن
  <SendIcon />
</button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="flex flex-col w-full max-w-md"
          style={{
            gap: "20px",
          }}
        >
          {/* Card */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            className="bg-[#111111] border border-white/10 rounded-[28px]"
            style={{
              padding: "35px",
            }}
          >
            <img
              src="\img\452863198_122094958910449527_15294905101800547_n.png"
              alt=" Brothers Protaction
  logo"
              className="w-12 mb-4"
            />

            <h2
              className="text-3xl font-black"
              style={{
                marginBottom: "16px",
              }}
            >
              حماية احترافية
            </h2>

            <p className="text-white/60 leading-8 text-sm">
              نستخدم أحدث تقنيات الحماية والعناية للحفاظ على سيارتك بأفضل شكل
              ممكن مع خامات عالمية وضمان حقيقي.
            </p>
          </motion.div>

          {/* Contact Cards */}
          {[
            {
              title: "رقم الهاتف",
              value: "0100 3397852",
              icon: <CallIcon />,
              link: "tel:+201003397852",
            },
            {
              title: "واتساب",
              value: "0100 3397852",
              icon: <WhatsAppIcon />,
              link: "https://wa.me/201003397852",
            },
            {
              title: "البريد الإلكتروني",
              value: "info@Brothers Protaction.com",
              icon: <AttachEmailIcon />,
              link: "mailto:info@Brothers Protaction.com",
            },
            
          ].map((item, i) => (
            <motion.a
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              key={i}
              href={item.link}
            >
              <div
                className="flex justify-between items-center bg-[#111111] border border-white/10 hover:border-primary-light/40 hover:bg-[#161616] transition-all duration-300 hover:-translate-x-2"
                style={{
                  gap: "16px",
                  padding: "20px",
                  borderRadius: "24px",
                }}
              >
                <div className="text-right">
                  <h3
                    className="text-white/50 text-sm"
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="font-bold text-sm md:text-base">
                    {item.value}
                  </p>
                </div>

                <div
                  className="bg-primary/10 text-primary flex items-center justify-center"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    fontSize: "30px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
        <div
        style={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
flexWrap: "wrap",
        }}
      >
        {branches.map((item, i) => (
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
              delay: i * 0.15,
            }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {/* Text */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
              }}
              viewport={{ once: true }}
              style={{
                textAlign: "right",
                flex: 1,
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: "900",
                  marginBottom: "10px",
                }}
              >
                {item.country}
              </h3>

              <h2
              className="text-primary text-4x1 font-black "
                style={{
                  marginBottom: "15px",
                }}
                >
                {item.city}
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "25px",
                }}
              >
                {item.address}
              </p>

              <a href="tel:+20100 3397852">
                <button
                className="w-36 h-12 bg-primary-light hover:bg-primary-dark rounded-3xl cursor-pointer text-white font-bold transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                
                >
                  اتصل الآن
                </button>
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: i * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              style={{
                width: "250px",
                height: "190px",
                borderRadius: "18px",
                overflow: "hidden",
                flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <iframe
                src={item.map}
                width="100%"
                height="100%"
                style={{
                  border: "0",
                }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
      <Footer />
    </>
  )
}
