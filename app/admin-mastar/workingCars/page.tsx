import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

const workingCars = [
  {
    car: "BMW M4",
    service: "PPF",
    total: 12000,
    paid: 7000,
    remain: 5000,
    progress: 60,
    deliveryDate: "2026-06-05",
  },

  {
    car: "Mercedes C200",
    service: "Nano Ceramic",
    total: 8000,
    paid: 4000,
    remain: 4000,
    progress: 50,
    deliveryDate: "2026-06-03",
  },

  {
    car: "Audi RS5",
    service: "عزل حراري",
    total: 5000,
    paid: 3000,
    remain: 2000,
    progress: 80,
    deliveryDate: "2026-06-01",
  },
];

export default function Page() {
  const totalPaid = workingCars.reduce(
    (acc, item) => acc + item.paid,
    0
  );

  const totalRemain = workingCars.reduce(
    (acc, item) => acc + item.remain,
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
        {/* Header */}
        <div className="bg-primary-dark border border-primary rounded-3xl p-6 mb-8">
          <h1 className="text-4xl font-black text-center">
            السيارات الجاري العمل عليها
          </h1>

          <p className="text-center text-white/60 mt-3">
            جميع السيارات الموجودة حاليًا داخل المركز
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div className="bg-primary rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-black">
              {workingCars.length}
            </h2>

            <p className="font-bold mt-2">
              سيارات قيد التنفيذ
            </p>
          </div>

          <div className="border border-primary rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-black text-primary">
              {totalPaid} ج
            </h2>

            <p className="font-bold mt-2">
              المدفوع
            </p>
          </div>

          <div className="border border-primary rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-black text-primary">
              {totalRemain} ج
            </h2>

            <p className="font-bold mt-2">
              المتبقي
            </p>
          </div>
        </div>

        {/* Cars */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {workingCars.map((car, index) => (
            <div
              key={index}
              className="border border-primary rounded-3xl bg-primary-dark p-6"
            >
              <h2 className="text-2xl font-black mb-4">
                {car.car}
              </h2>

              <div className="space-y-3">
                <p>
                  <span className="font-bold text-primary">
                    الخدمة:
                  </span>{" "}
                  {car.service}
                </p>

                <p>
                  <span className="font-bold text-primary">
                    إجمالي السعر:
                  </span>{" "}
                  {car.total} ج
                </p>

                <p>
                  <span className="font-bold text-primary">
                    المدفوع:
                  </span>{" "}
                  {car.paid} ج
                </p>

                <p>
                  <span className="font-bold text-primary">
                    المتبقي:
                  </span>{" "}
                  {car.remain} ج
                </p>

                <p>
                  <span className="font-bold text-primary">
                    التسليم المتوقع:
                  </span>{" "}
                  {car.deliveryDate}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="flex justify-between mb-2">
                  <span>نسبة الإنجاز</span>
                  <span>{car.progress}%</span>
                </div>

                <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{
                      width: `${car.progress}%`,
                    }}
                  />
                </div>
              </div>

              {/* Status */}
              <div className="mt-5">
                <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold">
                  جاري العمل
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}