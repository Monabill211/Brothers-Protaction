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
      height: "72px",
      padding: "0 12px",
    }}
  >
    {/* LOGO */}
    <Link
      href="/"
      className="flex items-center flex-1 min-w-0"
      style={{
        gap: "10px",
      }}
    >
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <img
          src="/img/452863198_122094958910449527_15294905101800547_n.png"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="min-w-0">
        <h2
          className="font-black truncate"
          style={{
            fontSize: "14px",
          }}
        >
          <span style={{ color: "#df3939" }}>B</span>
          <span style={{ color: "white" }}>
            ROTHERS PROTACTION
          </span>
        </h2>

        <p
          className="text-white/50 truncate"
          style={{
            fontSize: "10px",
          }}
        >
          PREMIUM PPF & CAR CARE
        </p>
      </div>
    </Link>

    {/* DESKTOP NAV */}
    <nav
      className="hidden lg:flex items-center"
      style={{
        gap: "10px",
      }}
    >
      {menuItems.map((item) => (
        <Link key={item.id} href={item.id}>
          <button
            className="font-bold transition-all cursor-pointer duration-300 hover:bg-[#b91d1d8c]"
            style={{
              color: "rgba(255,255,255,0.82)",
              height: "46px",
              padding: "0 22px",
              borderRadius: "14px",
            }}
          >
            {item.label}
          </button>
        </Link>
      ))}
    </nav>

    {/* DESKTOP CTA */}
    <div
      className="hidden lg:flex items-center"
      style={{
        gap: "12px",
      }}
    >
      <a
        href="https://wa.me/201021219588"
        className="text-primary"
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

      <Link href="/#Booking">
        <button
          className="font-black bg-primary"
          style={{
            height: "50px",
            padding: "0 28px",
            borderRadius: "16px",
          }}
        >
          احجز موعدك الآن
        </button>
      </Link>
    </div>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setOpen(true)}
      className="lg:hidden flex items-center justify-center text-white shrink-0"
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <MenuIcon />
    </button>
  </div>
</header>
      
    </>
  );
}