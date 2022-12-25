import Image from 'next/image'
import img1 from '../assets/Section_2/whatsnew-img-1.png'
import img2 from '../assets/Section_2/whatsnew-img-2.png'
import img3 from '../assets/Section_2/whatsnew-img-3.png'

export default function Section_2() {
  return (
    <div className='pl-[1.4rem]'>
        <h1 className='text-[2.2rem] pt-[5rem]'>
            Innovation in <br/> every tap
        </h1>
        <div className='pt-[2rem] pb-[3rem]'>
            <Image src={img1} alt=" "/>
            <p className='text-[1.2rem] text-[#575050] pt-[1rem]'>Preicse search engine <br/> that reflects your search.</p>
        </div>
        <div className='flex flex-col items-end pb-[1rem] pr-[1.4rem]'>
            <Image src={img2} alt=" "/>
            <p className='text-[1.2rem] text-[#575050] text-end pt-[1rem]'>Personalized content <br/> according to your interest.</p>
        </div>
        <div className='pt-[2rem] pb-[3rem]'>
            <Image src={img3} alt=" "/>
            <p className='text-[1.2rem] text-[#575050] pt-[1rem]'>Choose the Host or tenant <br/> who match your mindset</p>
        </div>
    </div>
  )
}
