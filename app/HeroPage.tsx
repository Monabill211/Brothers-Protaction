export default function HeroPage() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="\img\372f563cb2330eb70d3a01aca0a3ebfe.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — في النص */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center gap-6">
        
        <h1 className="text-5xl md:text-7xl font-black">
          برازر برودكشن
        </h1>

        <h2 className="text-lg md:text-2xl font-semibold text-white/80 max-w-xl">
          برازر برودكشن هي أكبر شركة أفلام حماية في مصر
        </h2>

        {/* Stats */}
        <div className="flex gap-6 mt-4 flex-wrap justify-center">
          {[
            { label: "عميل راضٍ", value: "+1000" },
            { label: "سنوات خبرة", value: "+10" },
            { label: "تقييم العملاء", value: "5★" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-4 text-center min-w-[120px]"
            >
              <span className="block text-3xl font-black text-yellow-400">
                {s.value}
              </span>
              <span className="block text-sm text-white/70 mt-1 font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}