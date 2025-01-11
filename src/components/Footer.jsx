import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {FaTwitter,FaGithub} from "react-icons/fa"
import { BiLogoFacebookSquare } from "react-icons/bi";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-[#F1EEE5] p-5'>
        <div className='flex justify-around gap-5'>
        <div className='flex flex-col items-start'>
            <img src="./logo.PNG" alt="" width={60} height={60}/>
            <h1 className='font-bold text-[24px]' style={{fontFamily:"Space Grotesk"}}>Legal PDF</h1>
            <small className='max-w-[300px] text-[18px]'>Email's Messages into An organised Document</small>
        </div>

        <div className='flex justify-center gap-5'>
        <div className='flex flex-col items-start gap-2'>
            <h1>Contact</h1>
            <small>London Office</small>
            <div className='flex items-center gap-1'>
            <MdOutlinePhone className='text-[#90900B]'/>
            <small>+44 70837733</small>
            </div>
            <div className='flex items-center gap-1'>
            <MdOutlinePhone className='text-[#90900B]'/>
            <small>+44 70837733</small>
            </div>
            <div className='flex items-center gap-1'>
                <CiLocationOn className='text-[#90900B]'/>
                <small>18 Elington Road, E8 3PA</small>
            </div>
        </div>
        <div className='flex items-start flex-col'>
            <h1 className='mb-2'>Legal</h1>
            <small>Terms Of Service</small>
            <small>Privacy Policy</small>
            <small>Cookies Policy</small>
            <small>Google API Services</small>
        </div>
        </div>
        </div>

        <div className='w-[900px] ml-auto mr-auto h-[0.5px] bg-[#B1B1B1] m-6' />

        <div className='capitalize flex items-center justify-around'>
            <small>Copyright 2020 © LegalPDF All Rights Reserved</small>
            <div className='flex items-center gap-3'>
                <TbBrandInstagramFilled className='bg-[#8C8C8CCC] rounded-full p-2' size={40}/>
                <BiLogoFacebookSquare className='bg-[#8C8C8CCC] rounded-full p-2' size={40} />
                <FaTwitter className='bg-[#8C8C8CCC] rounded-full p-2' size={40} />
                <FaGithub className='bg-[#8C8C8CCC] rounded-full p-2' size={40} />
            </div>
            <div className='bg-[#8C8C8CCC] w-[92px] h-[40px] p-3 rounded-[5px] flex items-center gap-1'>
                <img src="./england.PNG" alt="" width={20} height={20}/>
                <small>English</small>
            </div>
        </div>

    </div>
  )
}

export default Footer