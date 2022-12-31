import Image from 'next/image'
import img1 from '../public/assets/Section_2/whatsnew-img-1.svg'
import img2 from '../public/assets/Section_2/whatsnew-img-2.svg'
import img3 from '../public/assets/Section_2/whatsnew-img-3.svg'

export default function Section_2() {
  return (
    <div id="section-2" className='pl-[1.4rem]'>
        <h1 className='text-[2.2rem] pt-[6rem]'>
            Innovation in <br/> every tap
        </h1>
        <div className='pt-[2rem] pb-[3rem]'>
            <Image className='h-[160px] w-[160px]' src={img1} alt=" "/>
            <p className='text-[1.2rem] text-[#575050] pt-[1rem]'>Preicse search engine <br/> that reflects your search.</p>
        </div>
        <div className='flex flex-col items-end pb-[1rem] pr-[1.4rem]'>
            <Image className='h-[160px] w-[160px]' src={img2} alt=" "/>
            <p className='text-[1.2rem] text-[#575050] text-end pt-[1rem]'>Personalized content <br/> according to your interest.</p>
        </div>
        <div className='pt-[2rem]'>
            <Image src={img3} alt=" "/>
            <p className='text-[1.2rem] text-[#575050] pt-[1rem]'>Choose the Host or tenant <br/> who match your mindset</p>
        </div>
    </div>
  )
}
