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
         <motion.img
                    src="/img/WhatsApp Image 2026-06-02 at 8.20.47 PM.png"
                    alt="Brothers Protection"
                    className="bg-cover "
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectPosition: "center top",
                      borderRadius: "32px",
                      position: "relative",
                      zIndex: 1,
                      boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)",
                    }}
                  />
                


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
 
           <p className="text-white/70 leading-9 text-lg">
  Brothers Protaction هي واحدة من الشركات الرائدة في مجال أفلام الحماية
  والعناية المتكاملة بالسيارات داخل مصر. تأسست الشركة بهدف تقديم مستوى
  احترافي عالمي يجمع بين الجودة العالية، التكنولوجيا الحديثة، والخبرة
  الكبيرة في حماية السيارات الفاخرة والرياضية.
</p>

<p className="text-white/70 leading-9 text-lg">
  نستخدم أحدث التقنيات والخامات العالمية في تركيب أفلام الحماية PPF،
  العزل الحراري، النانو سيراميك، والتلميع الاحترافي، لضمان الحفاظ على
  سيارتك بأفضل شكل ممكن لأطول فترة.
</p>

<p className="text-white/70 leading-9 text-lg">
  فريق Brothers Protaction مدرب على أعلى مستوى لتقديم تجربة احترافية
  بداية من الاستشارة وحتى تسليم السيارة، مع اهتمام دقيق بأصغر التفاصيل
  وحرص كامل على رضا العميل وجودة التنفيذ.
</p>
        
            </motion.div>
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-8 bg-white/5 border border-white/10 backdrop-blur-md"
  style={{
    borderRadius: "24px",
    padding: "24px",
  }}
>
  <div className="flex flex-wrap gap-6 items-center justify-between">
    <div>
      <h3
        className="font-black text-2xl text-primary"
        style={{ marginBottom: "10px" }}
      >
        BROTHERS PROTACTION FILM
      </h3>

      <p className="text-white/70 leading-8">
        نقوم بتطوير وتركيب أفلام حماية تحمل هوية Brothers Protaction
        بمعايير عالمية وخامات عالية الجودة لتوفير أقصى درجات الحماية
        والمظهر الفاخر لسيارتك.
      </p>
            <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/5 p-4 rounded-xl">
          <h4 className="text-primary font-black text-2xl">320</h4>
          <p className="text-white/70 text-sm">Microns</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h4 className="text-primary font-black text-2xl">8 mil</h4>
          <p className="text-white/70 text-sm">Thickness</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h4 className="text-primary font-black text-2xl">100%</h4>
          <p className="text-white/70 text-sm">Gloss & Shine</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h4 className="text-primary font-black text-2xl">100%</h4>
          <p className="text-white/70 text-sm">Self Healing</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl col-span-2">
          <h4 className="text-primary font-black text-2xl">100%</h4>
          <p className="text-white/70 text-sm">
            Resistance To Environmental Factors
          </p>
        </div>

      </div>
    </div>

    <div
      className="bg-primary text-white text-center"
      style={{
        minWidth: "170px",
        padding: "20px",
        borderRadius: "20px",
        margin:"auto"
      }}
    >
      <h4 className="text-5xl font-black">10</h4>
      <p className="font-bold mt-2">
        سنوات ضمان
      </p>
    </div>
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
                  margin:"auto"
                }}
              >
               <video
  src="\img\vides\VID-20260602-WA0151.mp4"
  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
  autoPlay
  muted
  loop
  playsInline
  style={{
    
  }}
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
                  bottom: "-30px",
                  right: "70px",
                  padding: "20px 24px",
                  borderRadius: "24px",
                }}
              >
                <h3 className="text-4xl font-black text-primary">+7</h3>

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
