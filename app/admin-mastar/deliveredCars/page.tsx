import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

const deliveredCars = [
  {
    car: "BMW M4",
    service: "PPF",
    paid: 12000,
    deliveredAt: "2026-05-20",
  },

  {
    car: "Mercedes C200",
    service: "Nano Ceramic",
    paid: 8000,
    deliveredAt: "2026-05-18",
  },

  {
    car: "Audi RS5",
    service: "عزل حراري",
    paid: 5000,
    deliveredAt: "2026-05-15",
  },

  {
    car: "Toyota Corolla",
    service: "تلميع كامل",
    paid: 3500,
    deliveredAt: "2026-05-12",
  },
];

export default function Page() {
  const totalRevenue = deliveredCars.reduce(
    (acc, item) => acc + item.paid,
    0
  );

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
          className="bg-primary-dark border border-primary rounded-3xl"
          style={{
            padding: "25px",
            marginBottom: "30px",
          }}
        >
          <h1 className="text-4xl font-black text-center">
            السيارات التي تم تسليمها
          </h1>

          <p className="text-center text-white/60 mt-3">
            جميع السيارات التي انتهى العمل عليها وتم تسليمها للعملاء
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            className="bg-primary rounded-3xl text-center"
            style={{
              padding: "25px",
            }}
          >
            <h2 className="text-4xl font-black">
              {deliveredCars.length}
            </h2>

            <p className="font-bold mt-2">
              عدد السيارات المسلمة
            </p>
          </div>

          <div
            className="border border-primary rounded-3xl text-center"
            style={{
              padding: "25px",
            }}
          >
            <h2 className="text-4xl font-black text-primary">
              {totalRevenue} ج
            </h2>

            <p className="font-bold mt-2">
              إجمالي الإيرادات
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-primary rounded-3xl">
          <table className="w-full text-center">
            <thead className="bg-primary">
              <tr>
                <th className="py-5">نوع السيارة</th>
                <th>الخدمة</th>
                <th>المبلغ المدفوع</th>
                <th>تاريخ التسليم</th>
                <th>الحالة</th>
              </tr>
            </thead>

            <tbody>
              {deliveredCars.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/20 hover:bg-primary/10 transition"
                >
                  <td className="py-5 font-bold">
                    {item.car}
                  </td>

                  <td>{item.service}</td>

                  <td>{item.paid} ج</td>

                  <td>{item.deliveredAt}</td>

                  <td>
                    <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-bold">
                      تم التسليم
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}