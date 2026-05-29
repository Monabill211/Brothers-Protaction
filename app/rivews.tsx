"use client";

import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "أحمد علي",
    car: "BMW M4",
    review:
      "الخدمة كانت ممتازة جدًا والتركيب احترافي والعربية فرق شكلها تمامًا بعد فيلم الحماية.",
    rating: 5,
  },

  {
    name: "محمد خالد",
    car: "Mercedes C200",
    review:
      "العزل الحراري ممتاز والخامات أصلية جدًا والتعامل راقي من أول الحجز للتسليم.",
    rating: 5,
  },

  {
    name: "عمر أشرف",
    car: "Audi RS7",
    review:
      "أفضل مكان جربته في حماية السيارات، اهتمام بالتفاصيل بشكل رهيب.",
    rating: 5,
  },

  {
    name: "كريم طارق",
    car: "Porsche 911",
    review:
      "الشغل نضيف جدًا والخدمة فوق الممتازة وفعلًا العربية بقت مختلفة.",
    rating: 5,
  },

  {
    name: "يوسف محمد",
    car: "Range Rover",
    review:
      "النانو سيراميك ممتاز ولمعة العربية فضلت ثابتة بشكل محترم جدًا.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#0a0a0a] text-white overflow-hidden"
      style={{
        padding: "120px 20px",
      }}
    >
      {/* Heading */}
      <div
        className="text-center"
        style={{
          marginBottom: "70px",
        }}
      >
        <p
          className="text-primary tracking-[4px] text-xs font-bold"
          style={{
            marginBottom: "12px",
          }}
        >
          CLIENT REVIEWS
        </p>

        <h2
          className="text-4xl md:text-6xl font-black"
          style={{
            marginBottom: "20px",
          }}
        >
          آراء <span className="text-primary">عملائنا</span>
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto leading-8">
          تقييمات وتجارب عملائنا بعد خدمات الحماية والعناية الاحترافية.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
          scale: 0.9,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="reviewSwiper"
      >
        {reviews.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="review-card">
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "18px",
                }}
              >
                {[...Array(item.rating)].map((_, index) => (
                  <span
                    key={index}
                    className="text-primary"
                    style={{
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS */}
      <style jsx>{`
        .reviewSwiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 70px;
        }

        .reviewSwiper :global(.swiper-slide) {
          width: auto !important;
        }

        .review-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 35px;
          backdrop-filter: blur(10px);
          transition: 0.5s;
          min-height: 300px;
        }

        .review-card:hover {
          transform: translateY(-10px);
          border-color: rgba(223, 57, 57, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .review-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 2;
          font-size: 15px;
          margin-bottom: 35px;
        }

        .user-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .user-name {
          color: #fff;
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .car-box {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #df3939;
          font-size: 14px;
          font-weight: 700;
        }

        .quote {
          font-size: 70px;
          color: rgba(223, 57, 57, 0.12);
          line-height: 1;
          font-weight: 900;
        }

        .reviewSwiper :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.3);
          width: 10px;
          height: 10px;
          opacity: 1;
        }

        .reviewSwiper
          :global(.swiper-pagination-bullet-active) {
          background: #df3939;
          width: 28px;
          border-radius: 999px;
        }

        @media (max-width: 768px) {
          .review-card {
            padding: 25px;
            min-height: 270px;
          }

          .user-name {
            font-size: 18px;
          }

          .review-text {
            font-size: 14px;
          }
        }

      `}</style>
      <style jsx global>{`
  .swiper-pagination-bullet {
    background: rgba(223, 57, 57, 0.35) !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-active {
    background: #df3939 !important;
    width: 28px !important;
    border-radius: 999px !important;
  }
`}</style>
    </section>
  );
}