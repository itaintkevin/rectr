import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import rectrMobileLogo from '../assets/Navbar/rectr-mobile-logo.svg'
import mobileMenu from '../assets/Navbar/mobile-menu.svg'
import { motion } from "framer-motion"
import { Link } from "react-scroll"

export default function Navbar() {

  const [mobileNav, setMobileNav] = useState(false);
  
  const handleMobileNav = () => {
    mobileNav === false 
        ? setMobileNav(true)
        : setMobileNav(false)
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

  return (
    <>
    <div className='flex justify-between items-center border-b-2 border-[#03B5AA]'>
        <div className='flex items-center'>
            <div className="p-[1rem]"><Image src={rectrMobileLogo} alt='Rectr Mobile Logo' /></div>
            <div className='pr-[3rem]'>
                <div className='text-[2.4rem]'>Rectr</div>
                <div className='text-[1.2rem]'>Innovate the way you live</div>
            </div>
        </div>
        <button className='p-[5%]' onClick={handleMobileNav}>
            <Image src={mobileMenu} alt='Mobile Menu' />
        </button>
    </div>
    { mobileNav && 
        <motion.div 
            className='z-10 fixed top-0 left-0 w-screen bg-white pt-[2rem]'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <button onClick={handleMobileNav}>
                    <AiOutlineCloseCircle className='fixed top-10 right-10 h-10 w-10'/>
            </button>
            <motion.ul className='flex flex-col items-start justify-start h-screen w-full text-[2rem] font-bold pl-[2.5rem] pt-[3rem]' variants={Animation}>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-1" className='py-[1rem]'>What we do</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-2"  className='py-[1rem]'>What&apos;s new</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-3"  className='py-[1rem]'>What you get</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-4"  className='py-[1rem]'>How it works</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-5"  className='py-[1rem]'>Results</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-6"  className='py-[1rem]'>Join the story of Rectr</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-7"  className='py-[1rem]'>Core Team</Link>
                <Link onClick={handleMobileNav} activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="section-8"  className='py-[1rem]'>FAQ</Link>
            </motion.ul>
        </motion.div>
    }
    </>
  )
}
