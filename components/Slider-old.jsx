import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { CgLoadbar } from 'react-icons/cg'

export default function ImageCarousel() {
  const slides = [
    {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/travel-quotes-1523907497.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*"
    },
    {
        url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        url: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  } 

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  } 

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="h-[30rem] w-full m-auto py-16 px-4 relative group">
      <div 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-300'>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='z-10 flex bottom-0 justify-center items-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <CgLoadbar size={currentIndex === slideIndex ? 20 : 15 } className={ currentIndex === slideIndex ? "text-[#03B5AA]" : "text-[#D9D9D9]"} />
          </div>
        ))}
      </div>
    </div>
  )
}
