import Image from 'next/image'
import speed from '../public/assets/Section_5/speed.svg'
import security from '../public/assets/Section_5/security.svg'
import ease from '../public/assets/Section_5/ease.svg'
import triangle from '../public/assets/Section_5/triangle.svg'
import arrow from '../public/assets/Section_5/arrow.svg'

export default function Section_5() {
  return (
    <div id="section-5" className='text-[1.2rem] px-[1.4rem]'>
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
        <div className='flex flex-col items-center text-[1.4rem] font-semibold'>
          <div className='text-center py-[4.25rem]'>
            40% <br/> <span className='text-[#03B5AA]'>than current market</span>.
          </div>
            <div className='text-center py-[4rem]'>
            No <br/> compromise
          </div>
          <div className='py-[5.15rem]'>
            Gen Z & Millineals
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-[1.4rem] font-semibold pt-[1rem]'>
        <div className='flex justify-center'>
          <div className='flex items-center'>Security</div>
          <Image className="h-[18rem] w-[18rem]"  src={triangle} alt=""/>
          <div className='flex items-center'>Efficiency</div>
        </div>
        <div className='py-[2rem]'>Easy to use</div>
      </div>
    </div>
  )
}
