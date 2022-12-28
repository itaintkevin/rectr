import { useState } from 'react'
import Image from 'next/image'
import mail from '../assets/Section-8/mail-icon.svg'
import money from '../assets/Section-8/money-icon.svg'
import twitter from '../assets/Section-8/twitter-icon.svg'
import insta from '../assets/Section-8/insta-icon.svg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Section_9() {

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleDropDown1 = () => {
    dropdown1 === false
      ? setDropdown1(true)
      : setDropdown1(false)
  }

  const handleDropDown2 = () => {
    dropdown2 === false
      ? setDropdown2(true)
      : setDropdown2(false)
  }


  return (
    <div className='bg-[#03B5AA] rounded-t-[15px] px-[3rem] pt-[3rem] text-white'>
      <div className='flex justify-between w-full'>
        <div className='w-[85%]'>
          <h1 className='text-[3.4rem] pb-[1.2rem]'>FAQ ?</h1>
          <div>
            <div className='pr-[2rem]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[1.6rem]'>How to use </h1>
                <button className='text-black' onClick={handleDropDown1}>{  dropdown1 ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}</button>
              </div>
              {dropdown1 && 
                <div className='text-[1.2rem] pr-[2.5rem]'>
                  <p className='py-[0.5rem]'><span className='text-black font-bold'>Download</span> the app from play store ( Launching  Soon).</p>
                  <p className='py-[0.5rem]'><span className='text-black font-bold'>Search</span> the desired Rental house you prefer from filters and search.Absolutely Free.</p>
                  <p className='text-black py-[0.5rem] font-bold'>Register. Scheduled-Visit. Own-it.</p>
                </div>
              }
            </div>
            <div className='pr-[2rem]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[1.6rem]'>Host your property</h1>
                <button className='text-black' onClick={handleDropDown2}>{  dropdown2 ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}</button>
              </div>
              {dropdown2 && 
                <div className='text-[1.2rem] text-black'>
                  <p className='py-[0.5rem]'>For Now we accepting Rental house around <span className='font-bold'>Tamilnadu.</span></p>
                  <p className='py-[0.5rem]'>Submit Your Property for Free.</p>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='w-[15%]'>
          <Image className="pb-[1rem]" src={twitter} alt="Twitter Icon"/>
          <Image className="py-[1rem]" src={mail} alt="Mail Icon"/>
          <Image className="pt-[1rem]" src={insta} alt="Instagram Icon"/>
        </div>
      </div>
      <div className='flex flex-col items-center py-[1rem]'>
        <Image src={money} alt="Invest Icon"/>
        <p className='text-[1.6rem] text-center'>Invest in what you Believe</p>
      </div>
    </div>
  )
}
