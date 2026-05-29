import React from "react";
import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function Page() {
  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div style={{ marginRight: "300px", padding: "30px" }}>
        {/* Stats */}
        <div
          className="flex justify-evenly flex-wrap"
          style={{ marginBottom: "50px", gap: "20px" }}
        >
          <div
            className="bg-primary text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3 shadow-lg"
            style={{ padding: "20px" }}
          >
            <span className="text-xl font-bold">
              الإيرادات
              <AccountBalanceWalletIcon style={{ marginRight: "10px" }} />
            </span>
            <span className="text-2xl font-black">$1,250</span>
          </div>

          <div
            className="bg-primary text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3 shadow-lg"
            style={{ padding: "20px" }}
          >
            <span className="text-xl font-bold">
              الخدمات
              <ConstructionIcon style={{ marginRight: "10px" }} />
            </span>
            <span className="text-2xl font-black">35</span>
          </div>

          <div
            className="bg-primary text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3 shadow-lg"
            style={{ padding: "20px" }}
          >
            <span className="text-xl font-bold">
              الزيارات
              <DirectionsRunIcon style={{ marginRight: "10px" }} />
            </span>
            <span className="text-2xl font-black">120</span>
          </div>

          <div
            className="bg-primary text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3 shadow-lg"
            style={{ padding: "20px" }}
          >
            <span className="text-xl font-bold">
              التقارير
              <AssessmentIcon style={{ marginRight: "10px" }} />
            </span>
            <span className="text-2xl font-black">8</span>
          </div>
        </div>

        {/* Cars Sections */}
        <div
          className="flex justify-center flex-wrap"
          style={{ gap: "30px" }}
        >
          {/* Upcoming Cars */}
          <div
            className="flex flex-col gap-5 border border-primary rounded-[10px]"
            style={{ padding: "20px" }}
          >
            <div className="text-white text-center text-2xl font-black">
              العربيات القادمة
            </div>

            <div
              className="bg-primary-dark w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              BMW M4 - غدًا
            </div>

            <div
              className="bg-primary-dark w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              Mercedes C200 - الأحد
            </div>

            <div
              className="bg-primary-dark w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              Audi RS5 - الإثنين
            </div>

            <div
              className="bg-primary-dark w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              Toyota Corolla - الثلاثاء
            </div>
          </div>

          {/* Last Worked Cars */}
          <div
            className="flex flex-col gap-5 border border-primary rounded-[10px]"
            style={{ padding: "20px" }}
          >
            <div className="text-white text-center text-2xl font-black">
              آخر عربيات تم العمل عليها
            </div>

            <div
              className="bg-primary-light w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              BMW M5
            </div>

            <div
              className="bg-primary-light w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              Audi A6
            </div>

            <div
              className="bg-primary-light w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              Mercedes E200
            </div>

            <div
              className="bg-primary-light w-72 text-[20px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ padding: "12px" }}
            >
              Hyundai Elantra
            </div>
          </div>
          {/* إضافة سيارة جديدة */}
<div
  className="border border-primary rounded-[10px] mt-10"
  style={{ padding: "25px" }}
>
  <h2
    className="text-2xl font-black text-center text-white"
    style={{ marginBottom: "25px" }}
  >
    إضافة سيارة تم العمل عليها
  </h2>

  <form className="grid md:grid-cols-2 gap-5">

    {/* اسم السيارة */}
    <div>
      <label className="block font-bold mb-2">
        اسم السيارة
      </label>
      <input
        type="text"
        placeholder="BMW M4"
        className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
        style={{ padding: "10px" }}
      />
    </div>

    {/* المبلغ الكلي */}
    <div>
      <label className="block font-bold mb-2">
        المبلغ الكلي
      </label>
      <input
        type="number"
        placeholder="5000"
        className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
        style={{ padding: "10px" }}
      />
    </div>

    {/* المدفوع */}
    <div>
      <label className="block font-bold mb-2">
        المدفوع
      </label>
      <input
        type="number"
        placeholder="3000"
        className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
        style={{ padding: "10px" }}
      />
    </div>

    {/* المتبقي */}
    <div>
      <label className="block font-bold mb-2">
        المتبقي
      </label>
      <input
        type="number"
        placeholder="2000"
        className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
        style={{ padding: "10px" }}
      />
    </div>

    {/* تاريخ التسليم */}
    <div>
      <label className="block font-bold mb-2">
        تاريخ التسليم
      </label>
      <input
        type="date"
        className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
        style={{ padding: "10px" }}
      />
    </div>

    {/* حالة السيارة */}
    <div>
      <label className="block font-bold mb-2">
        حالة السيارة
      </label>

      <select
        className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
        style={{ padding: "10px" }}
      >
        <option>جاري العمل عليها</option>
        <option>تم التسليم</option>
      </select>
    </div>

    {/* ملاحظات */}
    <div className="md:col-span-2">
      <label className="block font-bold mb-2">
        ملاحظات
      </label>

      <textarea
        rows={4}
        placeholder="أي ملاحظات إضافية..."
        className="w-full rounded-xl bg-primary-dark border border-primary outline-none resize-none"
        style={{ padding: "10px" }}
      />
    </div>

    {/* زر الحفظ */}
    <button
      type="submit"
      className="md:col-span-2 bg-primary h-14 rounded-2xl text-xl font-black hover:scale-105 transition-all duration-300"
    >
      إضافة السيارة
    </button>

  </form>
</div>
        </div>
      </div>
    </>
  );
}