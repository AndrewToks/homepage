import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {FaInstagram,FaFacebook,FaTwitter,FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-[#F1EEE5] p-5'>
        <div>
            <img src="./logo.PNG" alt="" width={40} height={40}/>
            <h1>Legal PDF</h1>
            <small>Email's Messages into An organised Document</small>
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

        <div className='h-[0.5px] bg-[#B1B1B1] m-3' />

        <div className='capitalize'>
            <small>Copyright 2020 © LegalPDF All Rights Reserved</small>
            <div>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaGithub />
            </div>
            <div>
                <small>English</small>
            </div>
        </div>

    </div>
  )
}

export default Footer