"use client";

import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

export default function Booking() {
  return (
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

        <h2
          className="text-4xl md:text-5xl font-black"
          style={{
            marginBottom: "20px",
          }}
        >
          احجز <span className="text-primary">موعدك الآن</span>
        </h2>

        <p
          className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-8 text-center "
          style={{ margin: "auto" }}
        >
          احجز خدمة حماية أو عناية كاملة لسيارتك وسيتم التواصل معك من فريق
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
            احجز خدمتك
          </h2>

          <form
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

            {/* Row 2 */}
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
                  نوع السيارة
                </label>

                <input
                  type="text"
                  placeholder="BMW M4"
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
                  الخدمة المطلوبة
                </label>

                <select
                  className="w-full border border-white/10 bg-[#0d0d0d] text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{
                    height: "56px",
                    padding: "0 20px",
                    borderRadius: "18px",
                  }}
                >
                  <option>اختر الخدمة</option>
                  <option>أفلام حماية PPF</option>
                  <option>عزل حراري</option>
                  <option>نانو سيراميك</option>
                  <option>تلميع سيارات</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
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
                  اليوم المناسب
                </label>

                <input
                  type="date"
                  className="w-full border border-white/10 bg-[#0d0d0d] text-white focus:outline-none focus:ring-2 focus:ring-[#c84b4b]"
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
                  الوقت المناسب
                </label>

                <select
                  className="w-full border border-white/10 bg-[#0d0d0d] text-white focus:outline-none focus:ring-2 focus:ring-[#c84b4b]"
                  style={{
                    height: "56px",
                    padding: "0 20px",
                    borderRadius: "18px",
                  }}
                >
                  <option>اختر الوقت</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                  <option>06:00 PM</option>
                </select>
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
                ملاحظات إضافية
              </label>

              <textarea
                rows={5}
                placeholder="اكتب أي تفاصيل إضافية..."
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
              احجز الآن
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
              alt="carprogeny logo"
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
              value: "01021219588",
              icon: <CallIcon />,
              link: "tel:+201021219588",
            },
            {
              title: "واتساب",
              value: "تواصل مباشر",
              icon: <WhatsAppIcon />,
              link: "https://wa.me/201021219588",
            },
            {
              title: "البريد الإلكتروني",
              value: "info@carprogeny.com",
              icon: <AttachEmailIcon />,
              link: "mailto:info@carprogeny.com",
            },
            {
              title: "العنوان",
              value: "جمهورية مصر العربية",
              icon: <AddLocationAltIcon />,
              link: "#",
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
    </motion.section>
  );
}