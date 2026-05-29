import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

const revenues = [
  {
    car: "BMW M4",
    service: "PPF",
    branch: "الفرع الأول",
    total: 12000,
    paid: 10000,
    remain: 2000,
    status: "جاري العمل",
  },

  {
    car: "Audi RS5",
    service: "Nano Ceramic",
    branch: "الفرع الثاني",
    total: 8000,
    paid: 8000,
    remain: 0,
    status: "تم التسليم",
  },

  {
    car: "Mercedes C200",
    service: "عزل حراري",
    branch: "الفرع الثالث",
    total: 5000,
    paid: 3000,
    remain: 2000,
    status: "جاري العمل",
  },
];

export default function Page() {
  const totalRevenue = revenues.reduce(
    (acc, item) => acc + item.paid,
    0
  );

  const totalRemain = revenues.reduce(
    (acc, item) => acc + item.remain,
    0
  );

  const totalCars = revenues.length;

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
            تفاصيل الإيرادات
          </h1>

          <p className="text-center text-white/60 mt-3">
            متابعة إيرادات الفروع والمدفوعات
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          style={{
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div
            className="bg-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-4xl font-black">
              {totalRevenue} ج
            </h3>

            <p className="font-bold mt-2">
              إجمالي الإيرادات
            </p>
          </div>

          <div
            className="bg-primary-dark border border-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-4xl font-black">
              {totalRemain} ج
            </h3>

            <p className="font-bold mt-2">
              المبالغ المتبقية
            </p>
          </div>

          <div
            className="bg-primary-dark border border-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-4xl font-black">
              {totalCars}
            </h3>

            <p className="font-bold mt-2">
              عدد السيارات
            </p>
          </div>

          <div
            className="bg-primary-dark border border-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-4xl font-black">
              3
            </h3>

            <p className="font-bold mt-2">
              عدد الفروع
            </p>
          </div>
        </div>

        {/* Branch Revenue */}
        <div
          className="grid md:grid-cols-3"
          style={{
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div
            className="border border-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-2xl font-black mb-3">
              الفرع الأول
            </h3>

            <p className="text-primary text-3xl font-black">
              45,000 ج
            </p>
          </div>

          <div
            className="border border-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-2xl font-black mb-3">
              الفرع الثاني
            </h3>

            <p className="text-primary text-3xl font-black">
              38,000 ج
            </p>
          </div>

          <div
            className="border border-primary rounded-3xl text-center"
            style={{ padding: "25px" }}
          >
            <h3 className="text-2xl font-black mb-3">
              الفرع الثالث
            </h3>

            <p className="text-primary text-3xl font-black">
              42,000 ج
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-primary rounded-3xl">
          <table className="w-full text-center">
            <thead className="bg-primary">
              <tr>
                <th className="py-5">السيارة</th>
                <th>الخدمة</th>
                <th>الفرع</th>
                <th>السعر</th>
                <th>المدفوع</th>
                <th>المتبقي</th>
                <th>الحالة</th>
              </tr>
            </thead>

            <tbody>
              {revenues.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/20 hover:bg-primary/10 transition"
                >
                  <td className="py-5 font-bold">
                    {item.car}
                  </td>

                  <td>{item.service}</td>

                  <td>{item.branch}</td>

                  <td>{item.total} ج</td>

                  <td>{item.paid} ج</td>

                  <td>{item.remain} ج</td>

                  <td>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold ${
                        item.status === "تم التسليم"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Export Button */}
        <div
          className="flex justify-center"
          style={{ marginTop: "30px" }}
        >
          <button
            className="bg-primary rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            style={{
              padding: "15px 40px",
            }}
          >
            تصدير Excel
          </button>
        </div>
      </div>
    </>
  );
}