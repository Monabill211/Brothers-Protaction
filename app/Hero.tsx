"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import carImg from "@/public/download.jpg";

export default function PPFHeroPage() {
  const [scrollY, setScrollY] = useState(0);
  const [filmProgress, setFilmProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      const progress = Math.min(sy / 800, 1);
      setFilmProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filmLayers = [
    {
      style: {
        top: 0, left: 0, right: 0,
        height: "50%",
        transformOrigin: "top center",
        transform: `scaleY(${Math.min(filmProgress * 4, 1)})`,
        opacity: Math.min(filmProgress * 4, 0.82),
      },
      gradient: "linear-gradient(to bottom, rgba(180,220,255,0.55) 0%, rgba(120,180,240,0.18) 100%)",
    },
    {
      style: {
        bottom: 0, left: 0, right: 0,
        height: "50%",
        transformOrigin: "bottom center",
        transform: `scaleY(${Math.min(Math.max((filmProgress - 0.25) * 4, 0), 1)})`,
        opacity: Math.min(Math.max((filmProgress - 0.25) * 4, 0), 0.82),
      },
      gradient: "linear-gradient(to top, rgba(180,220,255,0.55) 0%, rgba(120,180,240,0.18) 100%)",
    },
    {
      style: {
        top: 0, bottom: 0, left: 0,
        width: "50%",
        transformOrigin: "left center",
        transform: `scaleX(${Math.min(Math.max((filmProgress - 0.5) * 4, 0), 1)})`,
        opacity: Math.min(Math.max((filmProgress - 0.5) * 4, 0), 0.82),
      },
      gradient: "linear-gradient(to right, rgba(180,220,255,0.55) 0%, rgba(120,180,240,0.18) 100%)",
    },
    {
      style: {
        top: 0, bottom: 0, right: 0,
        width: "50%",
        transformOrigin: "right center",
        transform: `scaleX(${Math.min(Math.max((filmProgress - 0.75) * 4, 0), 1)})`,
        opacity: Math.min(Math.max((filmProgress - 0.75) * 4, 0), 0.82),
      },
      gradient: "linear-gradient(to left, rgba(180,220,255,0.55) 0%, rgba(120,180,240,0.18) 100%)",
    },
  ];

  const carScale = 1 - scrollY * 0.0002;
  const carY = -scrollY * 0.18;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #c8a84b;
          --gold-light: #f0d080;
          --white: #f5f5f0;
          --dark: #080808;
          --blue-film-edge: rgba(100, 180, 255, 0.9);
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--dark);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .hero-sticky-wrap { height: 500vh; position: relative; }

        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--dark);
        }

        .bg-noise {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(ellipse 80% 50% at 50% 40%, rgba(30,40,60,0.8) 0%, transparent 70%),
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px);
          pointer-events: none; z-index: 0;
        }

        .bg-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none; z-index: 0;
        }

        .header {
          position: absolute; top: 0; left: 0; right: 0;
          padding: 28px 48px;
          display: flex; justify-content: space-between; align-items: center;
          z-index: 10;
        }

        .logo { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 4px; color: var(--white); }
        .logo span { color: var(--gold); }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--white); }

        .car-stage { position: relative; z-index: 4; width: min(860px, 90vw); transition: transform 0.05s linear; }

        /* ──────────────────────────────────────────
           THE FIX:
           - Image sits at z-index 1 (via inline style)
           - .film-layer at z-index 2 → renders ON TOP of image
           - overflow: hidden on wrapper clips everything cleanly
        ────────────────────────────────────────── */
        .car-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          border-radius: 8px;
          overflow: hidden;
          background: #111;   /* fallback while image loads */
        }

        .film-layer {
          position: absolute;
          pointer-events: none;
          border-radius: 8px;
          z-index: 2;
        }

        .film-shimmer {
          position: absolute; inset: 0;
          border-radius: 8px;
          z-index: 3;
          background: linear-gradient(125deg, transparent 30%, rgba(200,230,255,0.14) 50%, transparent 70%);
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; transform: translateX(-100%) skewX(-15deg); }
          50%       { opacity: 1; transform: translateX(200%) skewX(-15deg); }
        }

        .film-full-overlay {
          position: absolute; inset: 0;
          border-radius: 8px;
          background: rgba(160,210,255,0.13);
          pointer-events: none;
          z-index: 2;
        }

        .film-edge {
          position: absolute; inset: 0;
          border-radius: 8px;
          border: 1.5px solid var(--blue-film-edge);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s;
          z-index: 4;
          box-shadow: inset 0 0 40px rgba(100,180,255,0.15), 0 0 60px rgba(100,180,255,0.1);
        }
        .film-edge.visible { opacity: 1; }

        .headline-wrap { position: relative; z-index: 5; text-align: center; margin-bottom: 48px; }
        .eyebrow { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; display: block; }
        .headline { font-family: 'Bebas Neue', sans-serif; font-size: clamp(52px, 8vw, 96px); line-height: 0.95; letter-spacing: 2px; color: var(--white); }
        .headline em { font-style: normal; color: var(--gold); }

        .progress-bar { position: absolute; bottom: 48px; left: 50%; transform: translateX(-50%); z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .progress-steps { display: flex; gap: 8px; }
        .step-dot { width: 28px; height: 3px; border-radius: 2px; background: rgba(255,255,255,0.15); transition: background 0.3s; }
        .step-dot.active { background: var(--gold); }
        .step-dot.done   { background: rgba(200,168,75,0.5); }
        .scroll-hint { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.3); animation: fadeUpDown 2s ease-in-out infinite; }
        @keyframes fadeUpDown { 0%, 100% { opacity: 0.3; transform: translateY(0); } 50% { opacity: 0.6; transform: translateY(4px); } }

        .film-badge {
          position: absolute; top: -16px; right: 24px;
          background: rgba(100,180,255,0.12);
          border: 1px solid rgba(100,180,255,0.3);
          border-radius: 20px; padding: 5px 14px;
          font-size: 11px; letter-spacing: 1.5px;
          color: rgba(180,220,255,0.85); text-transform: uppercase;
          opacity: 0; transition: opacity 0.5s, transform 0.5s;
          transform: translateY(6px); z-index: 8; white-space: nowrap;
        }
        .film-badge.visible { opacity: 1; transform: translateY(0); }

        .film-info-strip {
          position: absolute; bottom: -40px; left: 0; right: 0;
          display: flex; justify-content: center; gap: 32px;
          opacity: 0; transition: opacity 0.5s 0.3s; z-index: 8;
        }
        .film-info-strip.visible { opacity: 1; }
        .film-stat { text-align: center; }
        .film-stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 20px; color: var(--gold-light); letter-spacing: 1px; }
        .film-stat-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-top: 2px; }

        .below-fold { padding: 120px 48px; max-width: 1100px; margin: 0 auto; }
        .films-section-title { font-family: 'Bebas Neue', sans-serif; font-size: 48px; letter-spacing: 2px; color: var(--white); margin-bottom: 48px; text-align: center; }
        .films-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
        .film-card { border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 28px 24px; background: rgba(255,255,255,0.03); transition: border-color 0.3s, background 0.3s; cursor: pointer; }
        .film-card:hover { border-color: rgba(200,168,75,0.35); background: rgba(200,168,75,0.04); }
        .film-card-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(100,180,255,0.1); border: 1px solid rgba(100,180,255,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 18px; }
        .film-card-name { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 1px; color: var(--white); margin-bottom: 6px; }
        .film-card-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .film-card-tag { display: inline-block; margin-top: 14px; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); border: 1px solid rgba(200,168,75,0.3); border-radius: 20px; padding: 3px 10px; }
      `}</style>

      <div className="hero-sticky-wrap" ref={heroRef}>
        <div className="hero-sticky">
          <div className="bg-noise" />
          <div className="bg-lines" />

          <header className="header">
            <div className="logo">SHIELD<span>PRO</span></div>
            <nav>
              <ul className="nav-links">
                <li><a href="#">الأفلام</a></li>
                <li><a href="#">معرض الأعمال</a></li>
                <li><a href="#">تواصل معنا</a></li>
              </ul>
            </nav>
          </header>

          <div className="headline-wrap">
            <span className="eyebrow">أفلام حماية السيارات الفاخرة</span>
            <h1 className="headline">
              احمي<em> بورشك</em><br />
              من كل جهة
            </h1>
          </div>

          <div
            className="car-stage"
            style={{ transform: `translateY(${carY}px) scale(${Math.max(carScale, 0.88)})` }}
          >
            <div className={`film-badge ${filmProgress >= 1 ? "visible" : ""}`}>
              ✦ PPF مُطبَّق — حماية كاملة
            </div>

            <div className="car-image-wrap">

              {/* ── صورة البورش — z-index 1 تحت الفيلم ── */}
              <Image
                src={carImg}
                alt="Porsche 911 Carrera"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
                priority
              />

              {/* ── طبقات الفيلم — z-index 2 فوق الصورة ── */}
              {filmLayers.map((layer, i) => (
                <div
                  key={i}
                  className="film-layer"
                  style={{ ...layer.style, background: layer.gradient, position: "absolute" }}
                />
              ))}

              {filmProgress >= 0.95 && <div className="film-full-overlay" />}
              {filmProgress >= 0.85 && <div className="film-shimmer" />}
              <div className={`film-edge ${filmProgress >= 0.95 ? "visible" : ""}`} />
            </div>

            <div className={`film-info-strip ${filmProgress >= 1 ? "visible" : ""}`}>
              {[
                { num: "200μm", label: "سماكة الفيلم" },
                { num: "10 سنين", label: "ضمان" },
                { num: "9H", label: "صلابة" },
                { num: "UV+", label: "حماية شمس" },
              ].map((s) => (
                <div className="film-stat" key={s.label}>
                  <div className="film-stat-num">{s.num}</div>
                  <div className="film-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-steps">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`step-dot ${
                    filmProgress >= (i + 1) / 4 ? "done"
                    : filmProgress >= i / 4    ? "active"
                    : ""
                  }`}
                />
              ))}
            </div>
            {filmProgress < 1 ? (
              <span className="scroll-hint">اسكرول لتطبيق الفيلم ↓</span>
            ) : (
              <span className="scroll-hint" style={{ color: "rgba(200,168,75,0.7)" }}>
                ✦ الفيلم مُطبَّق بالكامل
              </span>
            )}
          </div>
        </div>
      </div>

      <section className="below-fold">
        <h2 className="films-section-title">أنواع أفلام الحماية</h2>
        <div className="films-grid">
          {[
            { icon: "◆", name: "Crystal Clear",  desc: "شفافية 99% — يحافظ على لون السيارة الأصلي بدون أي تغيير", tag: "الأكثر طلباً" },
            { icon: "◈", name: "Matte Ceramic",  desc: "لمسة مطفية فاخرة — يحوّل أي سيارة لاكير لمطفي",           tag: "مميز" },
            { icon: "✦", name: "Self-Healing",   desc: "الخدوش الخفيفة تختفي لوحدها بالحرارة — تقنية ذاتية الإصلاح", tag: "تقنية متقدمة" },
            { icon: "◉", name: "Ultra Black",    desc: "حماية قصوى مع تعميق اللون الأسود لمظهر أكثر فخامة",        tag: "للرياضية" },
          ].map((film) => (
            <div className="film-card" key={film.name}>
              <div className="film-card-icon">{film.icon}</div>
              <div className="film-card-name">{film.name}</div>
              <p className="film-card-desc">{film.desc}</p>
              <span className="film-card-tag">{film.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}