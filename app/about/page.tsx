"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Navbar from "../navbar";
import Footer from "../Footer";

export default function Page() {
     const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <>
      <Navbar />

      <section
        dir="rtl"
        className="relative min-h-screen overflow-hidden bg-black text-white"
      >
        {/* Background */}
        <img
          src="\img\WhatsApp Image 2026-06-02 at 6.38.54 PM.jpeg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div
          className="relative z-10"
          style={{
            maxWidth: "1400px",
            margin: "auto",
            padding: "140px 20px 100px",
          }}
        >
          {/* Small title */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary tracking-[4px] font-bold text-sm text-center"
            style={{
              marginBottom: "18px",
            }}
          >
            ABOUT BROTHERS PROTACTION
          </motion.p>

          {/* Main Title */}
          <motion.div
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary-dark text-center " style={{marginBottom:"100px"}}>
            <Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString(
        '<span style="color:#df3939">B</span><span style="color:white">ROTHERS PROTACTION</span>'
      )
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
  options={{
    autoStart: true,
    loop: true,
    delay: 70,
    cursor: "|",
  }}
/>
          </h1>
        </motion.div>


          {/* Content Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Right Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{
                  marginBottom: "30px",
                  lineHeight: "1.4",
                }}
              >
                نحن نصنع <span className="text-primary">الحماية المثالية</span>{" "}
                لسيارتك
              </h2>
 
             <div ref={ref} className="text-white/70 leading-9 text-lg"
 >
      {inView && (
        <Typewriter

        onInit={(typewriter) => {
            typewriter
              .typeString(
               "Brothers Protaction هي واحدة من الشركات الرائدة في مجال أفلام الحماية والعناية المتكاملة بالسيارات داخل مصر. تأسست الشركة بهدف تقديم مستوى احترافي عالمي يجمع بين الجودة العالية، التكنولوجيا الحديثة، والخبرة الكبيرة في حماية السيارات الفاخرة والرياضية."
              )
              .start();
          }}
          options={{
            cursor: "|",
            delay: 20,
          }}
        />
      )}
    </div>
             <div ref={ref} className="text-white/70 leading-9 text-lg"
 >
      {inView && (
        <Typewriter

        onInit={(typewriter) => {
            typewriter
              .typeString(
               " نستخدم أحدث التقنيات والخامات العالمية في تركيب أفلام الحماية PPF، العزل الحراري، النانو سيراميك، والتلميع الاحترافي، لضمان الحفاظ على سيارتك بأفضل شكل ممكن لأطول فترة."
              )
              .start();
          }}
          options={{
            cursor: "|",
            delay: 20,
          }}
        />
      )}
    </div>
             <div ref={ref} className="text-white/70 leading-9 text-lg"
 >
      {inView && (
        <Typewriter

        onInit={(typewriter) => {
            typewriter
              .typeString(
               " فريق Brothers Protaction مدرب على أعلى مستوى لتقديم تجربة احترافية بداية من الاستشارة وحتى تسليم السيارة، مع اهتمام دقيق بأصغر التفاصيل وحرص كامل على رضا العميل وجودة التنفيذ."
              )
              .start();
          }}
          options={{
            cursor: "|",
            delay: 20,
          }}
        />
      )}
    </div>

        
            </motion.div>

            {/* Left Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="overflow-hidden border border-white/10"
                style={{
                  borderRadius: "30px",
                }}
              >
               <video
  src="\img\vides\VID-20260602-WA0151.mp4"
  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
  autoPlay
  muted
  loop
  playsInline
/>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bg-[#111111] border border-white/10 backdrop-blur"
                style={{
                  bottom: "1px",
                  right: "90px",
                  padding: "20px 24px",
                  borderRadius: "24px",
                }}
              >
                <h3 className="text-4xl font-black text-primary">+10</h3>

                <p className="text-white/60 text-sm">
                  سنوات خبرة في حماية السيارات
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
<section
  dir="rtl"
  className="relative bg-white text-black overflow-hidden"
  style={{
    padding: "120px 20px",
  }}
>
  {/* Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 bg-primary" />

  {/* Heading */}
  <motion.div
    initial={{
      opacity: 0,
      y: 70,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{ once: true }}
    className="text-center relative z-10"
    style={{
      marginBottom: "90px",
    }}
  >
    <p
      className="text-primary tracking-[4px] font-bold text-xs"
      style={{
        marginBottom: "14px",
      }}
    >
      WHY CHOOSE US
    </p>

    <h2
      className="text-4xl md:text-6xl font-black"
      style={{
        marginBottom: "20px",
      }}
    >
      لماذا تختار <span className="text-primary">BROTHERS PROTACTION</span>
    </h2>

    <p className="text-white/60 max-w-3xl mx-auto leading-8 text-sm md:text-base" style={{margin:"auto"}}>
      نحن نقدم أعلى مستويات الحماية والعناية الاحترافية للسيارات باستخدام أحدث
      التقنيات العالمية وخامات أصلية مع ضمان حقيقي على جميع الخدمات.
    </p>
  </motion.div>

  {/* Cards */}
  <div
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto relative z-10"
    style={{
      gap: "25px",
      margin:"auto",
    }}
  >
    {[
      {
        num: "01",
        title: "خامات أصلية",
        body:
          "نستخدم أفضل خامات أفلام الحماية والعزل الحراري العالمية لضمان أعلى جودة وحماية تدوم لسنوات.",
      },
      {
        num: "02",
        title: "فريق احترافي",
        body:
          "فريق متخصص بخبرة كبيرة في تركيب أفلام الحماية والعناية الفائقة بالسيارات بأعلى دقة ممكنة.",
      },
      {
        num: "03",
        title: "ضمان حقيقي",
        body:
          "نوفر ضمانًا فعليًا على الخدمات والخامات للحفاظ على ثقة عملائنا وراحة بالهم.",
      },
      {
        num: "04",
        title: "أحدث التقنيات",
        body:
          "نعتمد على أحدث معدات وتقنيات العناية والحماية للحصول على أفضل نتيجة ممكنة.",
      },
    ].map((item, i) => (
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
          delay: i * 0.2,
          duration: 0.8,
        }}
        viewport={{ once: true }}
        className="group relative bg-white border border-white/10 rounded-[32px] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-4"
        style={{
          padding: "40px 30px",
        }}
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-primary/10 to-transparent" />

        {/* Number */}
        <span className="absolute top-5 left-5 text-[70px] font-black text-white/5 group-hover:text-primary/10 transition duration-500 leading-none">
          {item.num}
        </span>

        {/* Line */}
        <div
          className="bg-primary rounded-full"
          style={{
            width: "50px",
            height: "4px",
            marginBottom: "25px",
          }}
        />

        {/* Title */}
        <h3
          className="text-2xl font-black relative z-10"
          style={{
            marginBottom: "18px",
          }}
        >
          {item.title}
        </h3>

        {/* Text */}
        <p className="text-black/60 leading-8 text-sm relative z-10">
          {item.body}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Vision & Mission */}
  <div
    className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto relative z-10"
    style={{
      gap: "30px",
      margin: "100px auto",
    }}
  >
    {/* Vision */}
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="bg-white border border-white/10 rounded-[30px] hover:border-primary/40 transition-all duration-500"
      style={{
        padding: "45px",
      }}
    >
      <p
        className="text-primary tracking-[3px] text-xs font-bold"
        style={{
          marginBottom: "16px",
        }}
      >
        OUR VISION
      </p>

      <h3
        className="text-3xl font-black"
        style={{
          marginBottom: "24px",
        }}
      >
        رؤيتنا
      </h3>

      <p className="text-black/60 leading-9 text-sm md:text-base" style={{margin:"auto"}} >
        نسعى لأن نكون الوجهة الأولى في الشرق الأوسط في مجال أفلام الحماية
        والعناية الفائقة بالسيارات من خلال تقديم خدمات عالمية وتجربة استثنائية
        لكل عميل.
      </p>
    </motion.div>

    {/* Mission */}
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="bg-white border border-white/10 rounded-[30px] hover:border-primary/40 transition-all duration-500"
      style={{
        padding: "45px",
      }}
    >
      <p
        className="text-primary tracking-[3px] text-xs font-bold"
        style={{
          marginBottom: "16px",
        }}
      >
        OUR MISSION
      </p>

      <h3
        className="text-3xl font-black"
        style={{
          marginBottom: "24px",
        }}
      >
        مهمتنا
      </h3>

      <p className="text-black/60 leading-9 text-sm md:text-base">
        تقديم أعلى جودة ممكنة في خدمات حماية وعناية السيارات باستخدام أحدث
        التقنيات العالمية وفريق احترافي يضمن الحفاظ على جمال وقيمة السيارة
        لأطول فترة ممكنة.
      </p>
    </motion.div>
  </div>
</section>

      <Footer />
    </>
  );
}
