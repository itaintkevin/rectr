import Image from 'next/image'
import speed from '../assets/Section_5/speed.svg'
import security from '../assets/Section_5/security.svg'
import ease from '../assets/Section_5/ease.svg'
import triangle from '../assets/Section_5/triangle.svg'
import arrow from '../assets/Section_5/arrow.svg'

export default function Section_5() {
  return (
    <div className='text-[1.2rem] px-[1.4rem]'>
      <h1 className='text-[2.2rem] pt-[6rem] pb-[1rem]'>We Claim</h1>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center py-[2rem]'>
            <Image src={speed} alt="" />
            <p className='text-center'>
              Increased <br/> Speed & Efficiency
            </p>
          </div>
          <div className='flex flex-col items-center py-[2rem]'>
            <Image src={security} alt="" />
            <p className='text-center'>
              Security <br/> We Sealed it
            </p>
          </div>
          <div className='flex flex-col items-center py-[2rem]'>
            <Image src={ease} alt="" />
            <p className='text-center'>
              Easy to use
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='px-[1.5rem] py-[5.5rem]'>
            <Image src={arrow} alt="" />
          </div>
          <div className='px-[1.5rem] py-[5.5rem]'>
            <Image src={arrow} alt="" />
          </div>
          <div className='px-[1.5rem] py-[5.5rem]'>
            <Image src={arrow} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-center py-[4.75rem]'>
            40% <br/> <span className='text-[#03B5AA]'>than current market</span>.
          </div>
            <div className='text-center py-[4.75rem]'>
            No <br/> compromise
          </div>
          <div className='py-[5.5rem]'>
            Gen Z & Millineals
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center'>
          <div className='flex items-center'>Security</div>
          <Image src={triangle} alt=""/>
          <div className='flex items-center'>Efficiency</div>
        </div>
        <div className='py-[2rem]'>Easy to use</div>
      </div>
    </div>
  )
}
