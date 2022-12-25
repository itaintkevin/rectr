import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import rectrMobileLogo from '../assets/Navbar/rectr-mobile-logo.svg'
import mobileMenu from '../assets/Navbar/mobile-menu.svg'

export default function Navbar() {

  const [mobileNav, setMobileNav] = useState(false);
  
  const handleMobileNav = () => {
    mobileNav === false 
        ? setMobileNav(true)
        : setMobileNav(false)
  }
  
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
    {mobileNav && <div className='z-10 fixed top-0 left-0 w-screen bg-white'>
        <ul className='flex flex-col items-start justify-start h-screen w-full text-[2rem] font-bold pl-[2.5rem] pt-[3rem]'>
            <button onClick={handleMobileNav}>
                <AiOutlineCloseCircle className='fixed top-10 right-10 h-10 w-10'/>
            </button>
            <li className='py-[1rem]'>What we do</li>
            <li className='py-[1rem]'>What&apos;s new</li>
            <li className='py-[1rem]'>What you get</li>
            <li className='py-[1rem]'>How it works</li>
            <li className='py-[1rem]'>Results</li>
            <li className='py-[1rem]'>Join the story of Rectr</li>
            <li className='py-[1rem]'>Contact Us</li>
            <li className='py-[1rem]'>Core Team</li>
            <li className='py-[1rem]'>FAQ</li>
        </ul>
    </div>}
    </>
  )
}
