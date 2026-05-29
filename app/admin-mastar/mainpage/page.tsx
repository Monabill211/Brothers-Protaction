import React from 'react'
import SaveIcon from "@mui/icons-material/Save";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DashboardHeader from '../hedaer'
import Sidebar from '../controipanel'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Link from 'next/link';
export default function page() {
  return (
    <>
    <DashboardHeader />
   
    <div style={{marginRight:"300px"}}>
      <div>
        <div className='flex justify-evenly' style={{marginBottom:"50px",marginTop:"50px"}}>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1' >
              اليوم
        
            </span>
   <AssessmentIcon/>   
        </div>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1'>
              اسبوع
            </span>
   <AssessmentIcon/>   

        </div>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1'>
شهر
            </span>
   <AssessmentIcon/>   

        </div>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1'>
              سنة
            </span>
   <AssessmentIcon/>   
        </div>
        </div>
        <div className='flex justify-evenly'>
        <div className='bg-primary text-2xl text-white w-28 h-12 rounded-3xl flex items-center justify-center flex-col gap-3.5'
        style={{padding:"60px",marginBottom:"40px"}}
        >
             <span className='text-3x1'>
            الفرع الاول
            <br />
            <ArrowDownwardIcon style={{fontSize:"40px"}} />
            </span>

        </div>
         <div className='bg-primary text-2xl text-white w-28 h-12 rounded-3xl flex items-center justify-center flex-col gap-3.5'
        style={{padding:"60px"}}
        >
             <span className='text-3x1'>
            الفرع الثاني
            <br />
            <ArrowDownwardIcon style={{fontSize:"40px"}} />
            </span>

        </div>
        <div className='bg-primary text-2xl text-white w-28 h-12 rounded-3xl flex items-center justify-center flex-col gap-3.5'
        style={{padding:"60px"}}
        >
             <span className='text-3x1'>
            الفرع الثالث
            <br />
            <ArrowDownwardIcon style={{fontSize:"40px"}} />
            </span>

        </div>
         <div className='bg-primary text-2xl text-white w-28 h-12 rounded-3xl flex items-center justify-center flex-col gap-3.5'
        style={{padding:"60px"}}
        >
             <span className='text-3x1'>
             اجمالي الفروع
            <br />
            <ArrowDownwardIcon style={{fontSize:"40px"}} />
            </span>

        </div>
        </div>
      <div className='flex justify-evenly' style={{marginBottom:"50px"}}>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >الايردات<AccountBalanceWalletIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1$</span>
        </div>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >الايردات<AccountBalanceWalletIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1$</span>
        </div>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >الايردات<AccountBalanceWalletIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1$</span>
        </div>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >الايردات<AccountBalanceWalletIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1$</span>
        </div>
        </div>
      <div className='flex justify-evenly' style={{marginBottom:"50px"}}>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >زيرات <DirectionsRunIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >زيرات<DirectionsRunIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >زيرات<DirectionsRunIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        <div className='bg-primary text-2xl text-white w-52 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >زيرات<DirectionsRunIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        </div>
      <div className='flex justify-evenly' style={{marginBottom:'50px'}}>
        <div className='bg-primary text-2xl text-white w-60 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >سيارات اتعملت<ConstructionIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        <div className='bg-primary text-2xl text-white w-60 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >سيارات اتعملت<ConstructionIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        <div className='bg-primary text-2xl text-white w-60 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >سيارات اتعملت<ConstructionIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        <div className='bg-primary text-2xl text-white w-60 h-28 rounded-3xl flex items-center justify-center flex-col gap-3.5' style={{padding:'20px'}}>
         <span className='text-3x1 ' >سيارات اتعملت<ConstructionIcon style={{margin:"10px"}} /></span>  
           <span className='text-3x1'>1</span>
        </div>
        </div>
     <div className='flex justify-around '>
      <div className='flex items-center flex-wrap w-1/2 gap-1 '> 
      <Link
  href="/admin-mastar/upcoming-cars"
  className="w-1/3 block"
>
  <div className="justify-center items-center rounded-2xl font-bold cursor-pointer bg-primary-dark flex h-20">
    تفاصيل الزيارات القادمة
  </div>
</Link>
<Link href="/admin-mastar/revenue" className="w-1/3 block">
         <div className='felx justify-center items-center h-12 rounded-2xl font-bold cursor-pointer bg-primary-dark flex h-20 '>تفاصيل الايردات </div>

</Link>
<Link href="/admin-mastar/workingCars" className="w-1/3 block">
          <div className='felx justify-center items-center  h-12 rounded-2xl font-bold cursor-pointer bg-primary-dark flex h-20  '>تفاصيل الزيارات </div>

</Link>
<Link href="/admin-mastar/deliveredCars " className="w-1/3 block">
           <div className='felx justify-center items-center h-12 rounded-2xl font-bold cursor-pointer bg-primary-dark flex h-20 '>تفاصيل السيارات </div>
</Link>
      </div>
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
     </div>
        </div>
    </div>
     <Sidebar />
    </>
  )
}
