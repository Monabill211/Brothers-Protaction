import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

const bookings = [
  {
    car: "BMW M4",
    service: "أفلام حماية PPF",
    date: "2026-06-01",
    time: "الشيخ زايد",
    notes: "حماية كاملة للواجهة الأمامية",
  },

  {
    car: "Mercedes C200",
    service: "نانو سيراميك",
    date: "2026-06-02",
    time: "الشيخ زايد",
    notes: "تلميع قبل تركيب النانو",
  },

  {
    car: "Audi RS5",
    service: "عزل حراري",
    date: "2026-06-03",
    time: "المهندسين",
    notes: "عزل زجاج كامل",
  },

  {
    car: "Toyota Corolla",
    service: "تلميع سيارات",
    date: "2026-06-04",
    time: "التجمع الخامس",
    notes: "إزالة خدوش بسيطة",
  },
];

export default function Page() {
  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div
        style={{
          marginRight: "300px",
          padding: "30px",
        }}
      >
        {/* Title */}
        <div
          className="border border-primary rounded-3xl bg-primary-dark"
          style={{
            padding: "25px",
            marginBottom: "30px",
          }}
        >
          <h1 className="text-4xl font-black text-center">
            الزيارات القادمة
          </h1>

          <p className="text-center text-white/60 mt-3">
            جميع الحجوزات القادمة الخاصة بالعملاء
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-primary rounded-3xl">
          <table className="w-full text-center">
            <thead className="bg-primary">
              <tr>
                <th className="py-5">نوع السيارة</th>
                <th>الخدمة</th>
                <th>التاريخ</th>
                <th>الرف</th>
                <th>الملاحظات</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/20 hover:bg-primary/10 transition"
                >
                  <td className="py-5 font-bold">
                    {booking.car}
                  </td>

                  <td>{booking.service}</td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>{booking.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats */}
        <div
          className="grid md:grid-cols-3"
          style={{
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            className="bg-primary rounded-3xl text-center"
            style={{
              padding: "25px",
            }}
          >
            <h3 className="text-4xl font-black">
              {bookings.length}
            </h3>

            <p className="font-bold mt-2">
              إجمالي الحجوزات
            </p>
          </div>

          <div
            className="bg-primary-dark border border-primary rounded-3xl text-center"
            style={{
              padding: "25px",
            }}
          >
            <h3 className="text-4xl font-black">
              3
            </h3>

            <p className="font-bold mt-2">
              هذا الأسبوع
            </p>
          </div>

          <div
            className="bg-primary-dark border border-primary rounded-3xl text-center"
            style={{
              padding: "25px",
            }}
          >
            <h3 className="text-4xl font-black">
              1
            </h3>

            <p className="font-bold mt-2">
              اليوم
            </p>
          </div>
        </div>
      </div>
    </>
  );
}