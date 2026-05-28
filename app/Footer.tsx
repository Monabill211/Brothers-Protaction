"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const iconStyle = {
  padding: "8px",
  borderRadius: "12px",
  fontSize: "38px",
};

const contactIconStyle = {
  padding: "6px",
  borderRadius: "10px",
  fontSize: "34px",
};

export default function Footer() {
  return (
    <footer
      dir="rtl"
      style={{
        background: "#060606",
        color: "#fff",
        marginTop: "100px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "80px 24px 50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        {/* Brand */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <img src="\img\452863198_122094958910449527_15294905101800547_n.png" alt="carprogeny logo" className="w-12" />
      

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "900",
              }}
            >
              كاربروجيني
            </h2>
          </div>

          <p
            style={{
              fontSize: "14px",
              lineHeight: "2",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "420px",
            }}
          >
            نقدم حلول احترافية متطورة في أفلام الحماية PPF والعزل الحراري
            وتقنيات النانو لحماية السيارات بأعلى جودة عالمية وعلى يد فريق
            متخصص بخبرة كبيرة في مجال العناية الفائقة بالسيارات.
          </p>

          {/* Social */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {[FacebookIcon, InstagramIcon, LinkedInIcon, XIcon].map(
              (Icon, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "14px",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  className="hover:bg-[#C8A84B] hover:text-black"
                >
                  <Icon
                    style={{
                      ...iconStyle,
                      color: "#9ca3af",
                    }}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Services */}
        <div
          style={{
            flex: "1 1 180px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            خدماتنا
          </h3>

          {[
            "أفلام الحماية PPF",
            "العزل الحراري",
            "النانو سيراميك",
            "تلميع السيارات",
            "حماية داخلية",
          ].map((item) => (
            <span
              key={item}
              onClick={() => scrollTo("services")}
              className="hover:text-[#C8A84B] transition-all duration-300 cursor-pointer"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
                width: "max-content",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Quick Links */}
        <div
          style={{
            flex: "1 1 180px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            روابط سريعة
          </h3>

          {[
            { label: "الرئيسية", id: "hero" },
            { label: "من نحن", id: "about" },
            { label: "الخدمات", id: "services" },
            { label: "أعمالنا", id: "gallery" },
            { label: "تواصل معنا", id: "contact" },
          ].map((item) => (
            <span
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="hover:text-[#C8A84B] transition-all duration-300 cursor-pointer"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
                width: "max-content",
              }}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            معلومات التواصل
          </h3>

          <a
            href="#"
            className="hover:text-[#C8A84B] transition-all duration-300"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <AddLocationAltIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            جمهورية مصر العربية
          </a>
          <a
            href="#"
            className="hover:text-[#C8A84B] transition-all duration-300"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <AddLocationAltIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            جمهورية مصر العربية
          </a>
          <a
            href="#"
            className="hover:text-[#C8A84B] transition-all duration-300"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <AddLocationAltIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            جمهورية مصر العربية
          </a>

          <a
            href="tel:+201021219588"
            className="hover:text-[#C8A84B] transition-all duration-300"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <CallIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            01021219588
          </a>

          <a
            href="mailto:info@carprogeny.com"
            className="hover:text-[#C8A84B] transition-all duration-300"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <AttachEmailIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            info@carprogeny.com
          </a>

          <a
            href="https://wa.me/201021219588"
            className="hover:text-[#C8A84B] transition-all duration-300"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <WhatsAppIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            واتساب مباشر
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <AccessTimeIcon
              style={{
                ...contactIconStyle,
                background: "rgba(200,168,75,0.12)",
                color: "#C8A84B",
              }}
            />
            يوميًا من 12 ظهرًا حتى 10 مساءً
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.08)",
        }}
      />

      {/* Bottom */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "22px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          © 2026 كاربروجيني — جميع الحقوق محفوظة.
        </p>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          متخصصون في حماية وعناية السيارات بأحدث التقنيات العالمية
        </p>
      </div>
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "22px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.4)",
            margin:"auto",
          }}
        >
Developed by <a style={{padding:"5px"}} href="https://mohamedelhemaya.com" className="bg-[#C8A84B] text-black font-bold hover:bg-[#a8883b] rounded-2xl transition-all duration-300">MoSalah</a>
        </p>

       
      </div>
    </footer>
  );
}