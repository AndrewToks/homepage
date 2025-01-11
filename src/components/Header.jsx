import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#F1EEE5] flex justify-between items-center rounded-[25px] border-[1px] border-[#E6E6E6] p-5 m-5'>
        <div className='flex gap-[8px] items-center'>
            <img src="./logo.PNG" alt="" width={100} height={100}/>
            <h1 className='font-bold text-[26px]' style={{fontFamily:"Space Grotesk"}}>Legal PDF</h1>
        </div>
        <div className='relative'>
        <div className='max-w-[213px] flex gap-[4px] items-center text-[14px] bg-white rounded-[30px] py-[11px] px-[22px]'>
            <h1>Ziv Rozen.Adv</h1>
            <img src="./busand.jpg" alt="" width={40} height={40} className='rounded-full'/>
        </div>
        <div className='flex w-[200px] mt-2 z-50 flex-col justify-center items-center gap-[8px] absolute h-[122px] rounded-[8px] 
        bg-gradient-to-br from-white to-[#F6EFEB] font-light 
        text-[14px]'>
            <p>Order List</p>
            <p>Logout</p>
        </div>
        </div>
    </div>
  )
}

export default Header