import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mail from '../public/assets/Section-8/mail-icon.svg'
import money from '../public/assets/Section-8/money-icon.svg'
import insta from '../public/assets/Section-8/insta-icon.svg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { motion } from "framer-motion"

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


  const Animation = {
    offscreen: {
      y: 50
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const dropAnimation = {
    offscreen: {
      y: 15
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    
    <motion.div 
      id="section-8" 
      className='bg-[#03B5AA] rounded-t-[25px] shadow-2xl px-[3rem] pt-[3rem] mt-[3rem] text-white'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className='flex justify-between w-full'>
        <div className='w-[85%]'>
          <h1 className='text-[3.4rem] pb-[1.2rem]'>FAQ ?</h1>
          <div>
            <motion.div 
              className='pr-[2rem]'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className='flex items-center justify-between' variants={Animation} onClick={handleDropDown1}>
                <h1 className='text-[1.6rem]'>How to use </h1>
                <button className='text-black'>{  dropdown1 ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}</button>
              </motion.div>
              {dropdown1 && 
                <motion.div 
                  className='text-[1.2rem] pr-[2.5rem]'
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.p className='py-[0.5rem]' variants={dropAnimation}><span className='text-black font-bold'>Download</span> the app from play store ( Launching  Soon).</motion.p>
                  <motion.p className='py-[0.5rem]' variants={dropAnimation}><span className='text-black font-bold'>Search</span> the desired Rental house you prefer from filters and search.Absolutely Free.</motion.p>
                  <motion.p className='text-black py-[0.5rem] font-bold' variants={dropAnimation}>Register. Scheduled-Visit. Own-it.</motion.p>
                </motion.div>
              }
            </motion.div>
            <motion.div 
              className='pr-[2rem]'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className='flex items-center justify-between' variants={Animation} onClick={handleDropDown2}>
                <h1 className='text-[1.6rem]'>Host your property</h1>
                <button className='text-black'>{  dropdown2 ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}</button>
              </motion.div>
              {dropdown2 && 
                <motion.div 
                  className='text-[1.2rem] text-black'
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.p className='py-[0.5rem]' variants={dropAnimation}>For Now we accepting Rental house around <span className='font-bold'>Tamilnadu.</span></motion.p>
                  <motion.p className='py-[0.5rem]' variants={dropAnimation}>Submit Your Property for Free <Link href="https://forms.gle/X4HVW5itC3niWhB5A" className='underline animate-pulse'>Here!</Link>.</motion.p>
                  {/* <motion.p><Link className='py-[0.5rem] underline animate-pulse' variants={dropAnimation} href="https://forms.gle/X4HVW5itC3niWhB5A">Click the link!</Link></motion.p> */}
                </motion.div>
              }
            </motion.div>
          </div>
        </div>
        <motion.div className='w-[15%]' variants={Animation}>
          <button 
            onClick={() => window.location = 'mailto:sresanjai.founder@rectr.in'}
          >
            <Image className="py-[1rem]" src={mail} alt="Mail Icon"/>
          </button>
          <Link href="https://instagram.com/rectr.in">
            <Image className="pt-[1rem]" src={insta} alt="Instagram Icon"/>
          </Link>
        </motion.div>
      </div>
      <motion.div className='flex flex-col items-center py-[1rem]' variants={Animation}>
        <Image src={money} alt="Invest Icon"/>
        <p className='text-[1.6rem] text-center'>Invest in what you Believe</p>
      </motion.div>
    </motion.div>
  )
}
