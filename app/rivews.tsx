"use client";

import React from "react";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

const reviews = [
  {
    name: "أحمد علي",
    car: "BMW M4",
    review:
      "الخدمة كانت ممتازة جدًا والتركيب نضيف بشكل احترافي والعربية فرق شكلها تمامًا بعد فيلم الحماية.",
    rating: 5,
  },
  {
    name: "محمد صلاح",
    car: "Mercedes C200",
    review:
      "العزل الحراري ممتاز والخامات فعلًا أصلية والتعامل محترم جدًا من أول الحجز لحد التسليم.",
    rating: 5,
  },
  {
    name: "عمر خالد",
    car: "Audi RS5",
    review:
      "أفضل مكان جربته في حماية السيارات، التفاصيل والاهتمام بالعربية كان فوق الممتاز.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section
      dir="rtl"
      style={{
        background: "#0a0a0a",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
          padding: "0 20px",
        }}
      >
        <p
        className="text-primary"
          style={{
            letterSpacing: "3px",
            fontSize: "12px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          CLIENT REVIEWS
        </p>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "900",
            color: "#fff",
            marginBottom: "14px",
          }}
        >
          آراء <span className="text-primary" >عملائنا</span>
        </h2>
      </div>

      {/* Slider */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="slider-track">
          {[...reviews, ...reviews].map((item, i) => (
            <div key={i} className="review-card">
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "18px",
                }}
              >
                {[...Array(5)].map((_, index) => (
                  <span
                  className="text-primary"
                    key={index}
                    style={{
                      color:
                        index < item.rating
                          ? "#df3939"
                          : "rgba(255,255,255,0.2)",
                      fontSize: "22px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="review-text">{item.review}</p>

              {/* User */}
              <div className="user-box">
                <div>
                  <h3 className="user-name">{item.name}</h3>

                  <div className="car-box">
                    <DirectionsCarFilledIcon
                      style={{
                        fontSize: "18px",
                      }}
                    />

                    {item.car}
                  </div>
                </div>

                <span className="quote">”</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .slider-track {
          display: flex;
          width: max-content;
          gap: 25px;
          animation: marquee 18s linear infinite;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .review-card {
          width: 380px;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          padding: 35px;
          backdrop-filter: blur(10px);
          transition: 0.4s;
        }

        .review-card:hover {
          transform: translateY(-10px);
          border-color: rgba(200, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .review-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 2;
          font-size: 15px;
          margin-bottom: 30px;
        }

        .user-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .user-name {
          color: #fff;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .car-box {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #df3939;
          font-size: 14px;
        }

        .quote {
          font-size: 70px;
          color: rgba(200, 0, 0, 0.1);
          line-height: 1;
          font-weight: 900;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(calc(-405px * 3));
          }
        }
      `}</style>
    </section>
  );
}