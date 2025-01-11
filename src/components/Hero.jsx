import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import { MdRadioButtonChecked } from "react-icons/md";

const Hero = () => {
  return (
    <div className='mb-5'>
        <div className='text-[38px] font-medium text-center m-2'>
            <h1>Extract Emails Into A Neat PDF,<span className='text-[#C5764F]'>Ready For Legal Processing.</span></h1>
            <h1>Best For Lawyers !</h1>
        </div>
        <div className='max-w-[900px] ml-auto mr-auto flex gap-[10px] rounded-tl-[25px] border-[1.5px] border-[#E0DAD4] text-[13px]'
         style={{fontFamily:"Space Grotesk"}}>

          {/* first row/column */}
          <section className='gap-[20px] rounded-tl-[25px] flex flex-col p-5 border-[2px] border-[#E0DAD4] bg-gradient-to-br from-white to-[#FFEDE8] font-light '>
          <h1 className='text-[18px]'>Convert Messages To PDF</h1>
          <small className='font-medium'>Choose Your Email Provider</small>
          <article className='text-[13px] flex flex-col gap-2'>
            <div className='flex gap-1 items-center'>
            <input type="radio"/>
            <img src="./mail.PNG" alt="" width={15} height={15} />
            <small>Gmail Or Google Suites</small>
            </div>
            <div className='flex gap-1 items-center'>
            <input type="radio"/>
            <img src="./outlook.PNG" alt="" width={15} height={15}  />
            <small>Outlook Express Or Hotmail Accounts</small>
            </div>
          </article>
          <div className='flex flex-col gap-2'>
          <article className='flex flex-col gap-2'>
            <small className='text-[13px]'>Login To Your Email</small>
            <input type="text" 
            placeholder='Your Email Address Or Any Google Suite' 
            className='max-w-[400px]
             outline-none text-[10px] border-[1.5px]
            border-[#E0DAD4] px-3 py-2 rounded-[15px]'/>
          </article>
          <article className='flex flex-col gap-2'>
            <small className='text-[13px]'>Now, Whose Whatsapp Should We Search To Extract?</small>
            <input type="text" placeholder='Enter WhatsApp Number You wish To Extract'
            className='max-w-[400px] outline-none text-[10px] border-[1.5px] border-[#E0DAD4] px-3 py-2 rounded-[15px]' />
          </article>
          </div>
          <div className='flex gap-[2px] items-center'>
          <MdRadioButtonChecked className='text-[green]'/>
          <RiWhatsappFill className='text-[green]'/>
            {/* <img src="./icon.PNG" alt="" width={30} height={30}  /> */}
            <small className='text-[12px]'>Would You Like To Extract Whatsapp Messages Instead?</small>
          </div>

          <article>
            <h3 className='text-[12px]'>With Which Of Your Contacts Would You Like To Extract 
              The Correspondence?</h3>
              <div className='flex gap-2'>
                <input type="text" placeholder='Contact name'
                className='max-w-[400px]
                outline-none text-[10px] border-[1.5px]
               border-[#E0DAD4] px-3 py-2 rounded-[15px]' />
                <input type="text" placeholder='+444 | Contact Number' 
                className='max-w-[400px]
                outline-none text-[10px] border-[1.5px]
               border-[#E0DAD4] px-3 py-2 rounded-[15px]' />
              </div>
          </article>

          <article>
            <div>
              <h3 className='text-center'>Connect To Whatsapp</h3>

              <div className='w-[400px] ml-auto mr-auto h-[0.5px] bg-[#B1B1B1] mt-5 mb-3' />

              <div />

              <h1 className='capitalize'>
              What About Keywords? Do You want to highlight some?
              </h1>
              <input type="text" 
              placeholder='Keywords To Highlight, Separate By Comma'
              className='max-w-[400px] w-full mt-2
                outline-none text-[10px] border-[1.5px]
               border-[#E0DAD4] px-3 py-2 rounded-[15px]' />
            </div>
            <div className='flex flex-col gap-2 mt-3'>
            <article className='flex gap-1 items-center'>
              < MdRadioButtonChecked className='text-[green]'/>
              <small className='capitalize text-[12px]'>Extract only messages containing these keywords</small>
            </article>
            <article className='flex gap-1 items-center'>
              <input type="radio" name="" id="" />
              <small className='capitalize text-[12px]'>Extract all found messages, and highlight the keywords</small>
            </article>
            </div>

            <div className='mt-3'>
              <h1 className='capitalize'>View other additional information</h1>
              <small className='capitalize'>Should we list the attachments too?</small>
              <article className='flex items-center gap-1'>
                <input type="radio"/>
                <small className='capitalize'>No, i don't need the attachment list</small>
              </article>
              <article className='flex items-center gap-1'>
                <input type="radio"/>
                <small className='capitalize'>I want only the list of attachments, not correspondences</small>
              </article>
              <article className='flex items-center gap-1'>
                <MdRadioButtonChecked  className='text-[green]'/>
                <small className='capitalize'>I want them both- attachment and correspondences</small>
              </article>
            </div>

            <div>
              <h1 className='capitalize'>What about time frame?</h1>
              <div className='flex gap-3 items-center'>
                <input type="text"  className='max-w-[400px]
             outline-none text-[10px] border-[1.5px]
            border-[#E0DAD4] px-3 py-2 rounded-[15px]'
            placeholder='Dd/Mm/Yyyy'/>
            <h1>To</h1>
                <input type="text"  className='max-w-[400px]
             outline-none text-[10px] border-[1.5px]
            border-[#E0DAD4] px-3 py-2 rounded-[15px]'
            placeholder='Dd/Mm/Yyyy'/>
              </div>
            </div>
          </article>
          </section>


          {/* second row/column */}

          <section className='gap-[20px] flex flex-col items-center'>
          <h1 className='text-[18px] capitalize mt-5'>Law firm? Register here</h1>
          <small className='capitalize text-[12px] font-light'>We have an awesome solution for you!</small>
          <article className='w-[300px] flex items-center justify-center gap-1 h-[40px] py-3 px-3 bg-[#F2F2F2] rounded-[10px] border-[1px] border-[#8C8C8CCC]'>
            <img src="./mail.PNG" alt="" width={20} height={20}/>
            <small className='capitalize'>Continue with your google account</small>
          </article>
          <h1>Or</h1>
            <small className='capitalize py-3 px-3 text-center w-[300px] h-[40px]  bg-[#F2F2F2] rounded-[10px] border-[1px] border-[#8C8C8CCC]'>Continue with your google account</small>
            <button className='bg-[#C5764F] w-[300px] h-[40px] text-center rounded-[10px] text-white'>Sign Up</button>

            {/* horizontal Line */}
            <div className='w-[300px] h-[0.5px] bg-[#B1B1B1] mt-5 mb-3' />

            <h2 className='capitalize'>How it works? watch below!</h2>
            <img src="./display.PNG" alt="" width={300}/>
          </section>
        </div>
    </div>
  )
}

export default Hero

// width: Fill (400px)px;
// height: Hug (48px)px;
// padding: 11px 22px 11px 22px;
// gap: 4px;
// border-radius: 10px 0px 0px 0px;
// opacity: 0px;
