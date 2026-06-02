"use client";

import { useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  const menuItems = [
    { label: "الرئيسية", id: "/" },
    { label: "عن الشركة", id: "about" },
    { label: "خدماتنا", id: "services" },
    { label: " أعمالنا", id: "gallery" },
    { label: " تواصل معانا", id: "contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(120,10,10,0.50)",
          backdropFilter: "blur(14px)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            height: "82px",
            padding: "0 18px",
          }}
        >
          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="flex items-center"
            style={{
              gap: "14px",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
        <img src="\img\452863198_122094958910449527_15294905101800547_n.png" alt=" Brothers Protaction
  logo" className="w-full" />
            </div>

            <div>
              <h2
                className="font-black "
                style={{
                  fontSize: "18px",
                  marginBottom: "3px",
                }}
              >
                <span style={{ color: "#df3939" }}>B</span>
                <span style={{ color: "white" }}>ROTHERS PROTACTION</span>
              </h2>

              <p
                className="text-white/50"
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                PREMIUM PPF & CAR CARE
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="hidden lg:flex items-center"
            style={{
              gap: "10px",
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.id} >
              <button
                key={item.id}
                // onClick={() => scrollTo(item.id)}
                className="font-bold transition-all cursor-pointer duration-300 hover:bg-[#b91d1d8c] hover:text-primary"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  height: "46px",
                  padding: "0 22px",
                  borderRadius: "14px",
                  fontSize: "14px",
                }}
              >
                {item.label}
              </button>
              </Link>
            ))}
          </nav>

          {/* ================= CTA ================= */}

          <div
            className="hidden lg:flex items-center"
            style={{
              gap: "12px",
            }}
          >
            <a
              href="https://wa.me/201021219588"
              className="transition-all duration-300 hover:-translate-y-1 text-primary"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              
              
              }}
            >
              <WhatsAppIcon />
            </a>
<Link href="/#Booking" >
            <button
              onClick={() => scrollTo("contact")}
              className="font-black transition-all duration-300 hover:brightness-110 hover:-translate-y-1 bg-primary cursor-pointer"
              style={{
                height: "50px",
                padding: "0 28px",
                borderRadius: "16px",
               
             
                fontSize: "14px",
              }}
            >
              احجز موعدك الآن
            </button>
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex items-center justify-center text-white transition"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* ================= MOBILE DRAWER ================= */}

      <div
        className={`fixed top-0 right-0 h-full z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "310px",
          background: "#0b0b0c",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          className="flex items-center justify-between"
          style={{
            marginBottom: "35px",
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: "12px",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
                <img src="\img\452863198_122094958910449527_15294905101800547_n.png" alt=" Brothers Protaction
  logo" className="w-full" />

            </div>

            <div>
              <h2
                className="font-black "
                style={{
                  fontSize: "17px",
                }}
              >
                <span style={{ color: "#df3939" }}>B</span>
                <span style={{ color: "white" }}>ROTHERS PROTACTION</span>  
              </h2>

              <p
                className="text-white/40"
                style={{
                  fontSize: "11px",
                }}
              >
                القائمة الرئيسية
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white transition hover:rotate-90"
          >
            <CloseIcon />
          </button>
        </div>

        {/* LINKS */}
        <nav
          className="flex flex-col"
          style={{
            gap: "10px",
          }}
        >
          {menuItems.map((item) => (
            <Link key={item.id} href={item.id}>
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
                className="font-bold transition-all cursor-pointer duration-300 hover:bg-[#b91d1d8c] hover:text-primary"
              style={{
                height: "54px",
                borderRadius: "16px",
                color: "rgba(255,255,255,0.82)",
                padding: "0 18px",
                fontSize: "15px",
              }}
            >
              {item.label}
            </button>
            </Link>
          ))}
        </nav>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "25px",
          }}
        >
          <Link href="/#Booking" >
          <button
            onClick={() => scrollTo("contact")}
            className="w-full font-black transition-all duration-300 hover:brightness-110"
            style={{
              height: "56px",
              borderRadius: "18px",
              background: "var(--color-primary)",
              color: "var(--color-text)",
              fontSize: "15px",
            }}

          >
            احجز موعدك الآن
          </button>
</Link>
          <p
            className="text-center text-white/35"
            style={{
              fontSize: "12px",
              marginTop: "18px",
              lineHeight: "1.8",
            }}
          >
            أفلام حماية — نانو سيراميك — عزل حراري
          </p>
        </div>
      </div>
    </>
  );
}