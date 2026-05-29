import React from 'react'
import SaveIcon from "@mui/icons-material/Save";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DashboardHeader from '../hedaer'
import Sidebar from '../controipanel'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
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
             <span className='text-4x1'>
              اليوم
            </span>

        </div>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1'>
              اسبوع
            </span>

        </div>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1'>
شهر
            </span>

        </div>
         <div className='bg-primary-light hover:bg-primary-dark transition-all duration-300 hover:brightness-110 hover:-translate-y-2 text-2xl text-white w-20 h-4 rounded-3xl flex items-center justify-center flex-col gap-3.5 cursor-pointer'
        style={{padding:"35px"}}
        >
             <span className='text-4x1'>
              سنة
            </span>

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
     
        </div>
    </div>
     <Sidebar />
    </>
  )
}
