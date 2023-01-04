import Image from 'next/image'
import headingIcon from '../public/assets/Section_4/heading-icon.svg'
import aiMl from '../public/assets/Section_4/ai-ml.svg'
import bigData from '../public/assets/Section_4/big-data.svg'
import algo from '../public/assets/Section_4/algo.svg'
import arrows from '../public/assets/Section_4/arrows.svg'
import arrow from '../public/assets/Section_4/arrow.svg'
import rectr from '../public/assets/Section_4/rectr.svg'
import ss1 from '../public/assets/Section_4/app-ss-1.png'
import ss2 from '../public/assets/Section_4/app-ss-2.png'
import ss3 from '../public/assets/Section_4/app-ss-3.png'


export default function Section_4() {
  return (
    <div id="section-4" className='text-[1.8rem] px-[1.4rem]'>
        <h1 className='flex items-center text-[2.2rem] pt-[6rem] pb-[3rem]'>
            Inside the Factory.
            <Image className='pl-[0.5rem]' src={headingIcon} alt="heading icon"/>
        </h1>
        <div className='flex items-center justify-between px-[5rem]'>
            <div>
                <Image src={aiMl} alt="ai ml logo"/>
                <p className='pt-[1rem]'>AI/ML</p>
            </div>
            <div>
                <Image src={bigData} alt="big data logo"/>
                <p className='pt-[1rem]'>Big Data</p>
            </div>
        </div>
        <div className='flex justify-center py-[2rem]'>
            <Image src={arrows} alt="arrows"/>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={algo} alt="algorithm logo"/>
            <p className='pt-[1rem]'>Proprietary Algorithm</p>
        </div>
        <div className='flex justify-center py-[2rem]'>
            <Image src={arrow} alt="arrow"/>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={rectr} alt="rectr logo"/>
            <p className='pt-[1rem]'>Solution</p>
        </div>
        <h2 className='text-[2.25rem] font-semibold pt-[5rem]'>3 step Process</h2>
        <div className='flex flex-col items-center py-[2rem]'>
            <div className='flex justify-evenly items-start w-full'>
                <div>
                    <div><Image src={ss1} alt=""/></div>
                    <p className='py-[1rem] text-center'>Search </p>
                </div>
                <div className='bg-[#5DC979] text-white rounded-full py-[1rem] px-[2.1rem]'>1</div>
            </div>
            <p className='py-[2rem] text-center'>Use our effective search engine and filters to select your desired independent rental homes.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex justify-evenly items-start w-full'>
                <div>
                    <div><Image src={ss2} alt=""/></div>
                    <p className='py-[1rem] text-center'>Register</p>
                </div>
                <div className='bg-[#5DC979] text-white rounded-full py-[1rem] px-[1.9rem]'>2</div>
            </div>
            <p className='py-[2rem] text-center'>Click Register based on Owner/Tenant conditions.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex justify-evenly items-start w-full'>
                <div className='flex flex-col items-center'>
                    <div><Image src={ss3} alt=""/></div>
                    <p className='py-[1rem]'>Scheduled-visit</p>
                </div>
                <div className='bg-[#5DC979] text-white rounded-full py-[1rem] px-[1.9rem]'>3</div>
            </div>
            <p className='py-[2rem] text-center'>Book the Date & time of visiting the house in physical. Know each other. Deal Closed 🌟</p>
        </div>
    </div>
  )
}
