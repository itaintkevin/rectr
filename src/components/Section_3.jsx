import Image from 'next/image'
import img1 from '../assets/Section_3/whatyouget-img-1.png'
import img2 from '../assets/Section_3/whatyouget-img-2.png'
import img3 from '../assets/Section_3/whatyouget-img-3.png'
import img4 from '../assets/Section_3/whatyouget-img-4.png'

export default function Section_3() {
  return (
    <div className='text-[1.2rem] px-[1.4rem]'>
        <h1 className='text-[2.2rem] pt-[6rem]'>What does it Mean <br/> to you.</h1>
        <div className='flex items-center justify-between pt-[3rem]'>
            <p>
                Book your house in advance <br/> & be the  
                <span className='text-[#03B5AA] font-bold'> prior </span> 
                one to get it.
            </p>
            <Image src={img1} alt=""/>
        </div>
        <div className='flex items-center justify-between pt-[3rem]'>
            <p>
                Pay rent 
                <span className='text-[#03B5AA] font-bold'> without </span> 
                money, <br/> yup it&apos;s true using Rectr pay. 
            </p>
            <Image src={img2} alt=""/>
        </div>
        <div className='flex items-center justify-between pt-[3rem]'>
            <p>
                <span className='text-[#03B5AA] font-bold'>Get to know </span>  
                your community / area, <br/> crime rates etc.</p>
            <Image src={img3} alt=""/>
        </div>
        <div className='flex items-center justify-between pt-[3rem]'>
            <p>
                Listing only 
                <span className='text-[#03B5AA] font-bold'> verified profiles,</span> 
                <br/> we respect your privacy.
            </p>
            <Image src={img4} alt=""/>
        </div>
    </div>
  )
}
