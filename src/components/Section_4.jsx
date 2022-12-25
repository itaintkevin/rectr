import Image from 'next/image'
import headingIcon from '../assets/Section_4/heading-icon.svg'
import aiMl from '../assets/Section_4/ai-ml.svg'
import bigData from '../assets/Section_4/big-data.svg'
import algo from '../assets/Section_4/algo.svg'
import arrows from '../assets/Section_4/arrows.svg'
import arrow from '../assets/Section_4/arrow.svg'
import rectr from '../assets/Section_4/rectr.svg'


export default function Section_4() {
  return (
    <div className='text-[1.8rem] px-[1.4rem]'>
        <h1 className='flex items-center text-[2.2rem] py-[4rem]'>
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
    </div>
  )
}
