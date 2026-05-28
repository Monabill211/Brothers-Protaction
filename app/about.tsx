const reasons = [
  {
    num: "1",
    title: "وكالة حصرية",
    body: "كاربروجيني وكالة حصرية لعدد من الشركات العالمية المرموقة في صناعة العناية بالسيارات. بفضل شراكتنا الاستراتيجية، قمنا بتقديم حلول مبتكرة في مجالات أفلام الحماية والعزل الحراري وتقنيات النانو والعناية الفائقة بالسيارات.",
  },
  {
    num: "2",
    title: "خبرة عالمية",
    body: "تولي الشركة أهمية كبيرة لتطوير وتدريب فريقها لضمان تقديم خدمات متميزة ومستوى عالٍ من الاحترافية على يد خبراء عالميين. هذا التدريب العالمي ساهم في تعزيز قدرات فريق كاربروجيني وتطويرهم باستمرار.",
  },
  {
    num: "3",
    title: "ضمان حقيقي",
    body: "تهدف الشركة إلى ضمان رضا عملائها والتأكد من أنهم يحصلون على خدمة ممتازة وجودة عالية. لذلك فإن لدينا ضمان حقيقي على الخدمات والمنتجات، فإن الشركة ملتزمة بإصلاحها أو استبدالها بدون تكلفة إضافية للعميل.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      dir="rtl"
      className="bg-[#0d0d0e] text-white"
      style={{
        padding: "80px 20px",
      }}
    >
      {/* الجزء الأول */}
      <div
        className="flex flex-col md:flex-row items-center"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          gap: "40px",
        }}
      >
        <p
          className="text-right"
          style={{
            fontSize: "14px",
            lineHeight: "1.9",
            color: "rgba(255,255,255,0.6)",
            flex: 1,
          }}
        >
          كاربروجيني هي الوكالة الحصرية لعدد من الشركات العالمية المرموقة
          في صناعة العناية بالسيارات. بفضل شراكتنا الاستراتيجية، قمنا
          بتقديم حلول مبتكرة ومتطورة في مجالات أفلام الحماية والعزل
          الحراري وتقنيات النانو والعناية الفائقة بالسيارات.
        </p>

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            flex: 1,
          }}
        >
          <img
            src="\img\623250-بوجاتى-تشيرون.webp"
            alt="سيارة كاربروجيني"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* العنوان */}
      <p
        className="text-center font-bold"
        style={{
          color: "rgba(200,168,75,0.7)",
          marginBottom: "8px",
          letterSpacing: "3px",
          fontSize: "12px",
        }}
      >
        OUR STORY
      </p>

      <h2
        className="text-center font-black"
        style={{
          fontSize: "48px",
          marginBottom: "50px",
        }}
      >
        لماذا <span style={{ color: "#C8A84B" }}>كاربروجيني؟</span>
      </h2>

      {/* الكروت */}
      <div
        className="flex flex-col md:flex-row"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 50px auto",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {reasons.map((r, index) => (
          <div
            key={r.num}
            style={{
              position: "relative",
              background: "#0d0d0e",
              padding: "40px",
              flex: 1,
              borderLeft:
                index !== reasons.length - 1
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "20px",
                fontSize: "90px",
                fontWeight: "900",
                lineHeight: "1",
                color: "rgba(200,168,75,0.1)",
                userSelect: "none",
              }}
            >
              {r.num}
            </span>

            <div
              style={{
                width: "35px",
                height: "2px",
                background: "#C8A84B",
                borderRadius: "999px",
                marginBottom: "20px",
              }}
            />

            <h3
              style={{
                fontSize: "24px",
                fontWeight: "900",
                marginBottom: "16px",
              }}
            >
              {r.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {r.body}
            </p>
          </div>
        ))}
      </div>

      {/* الزر */}
      <div className="text-center">
        <a
          href="#contact"
          style={{
            background: "#C8A84B",
            color: "#0d0d0e",
            padding: "14px 40px",
            borderRadius: "14px",
            fontWeight: "900",
            fontSize: "16px",
            display: "inline-block",
            transition: "0.3s",
          }}
        >
          تعرف على كاربروجيني
        </a>
      </div>
    </section>
  );
}