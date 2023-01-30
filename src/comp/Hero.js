import React from 'react'
import img from '../img/hero.gif'
export default function Hero() {
  return (
    <>
   
   <section id='home' class="text-gray-600 body-font">
  <div class="absolute container mx-auto flex px-5  lg:py-7 py-20 items-center justify-center flex-col">
    <img data-aos="zoom-in-down" class="lg:w-2/6 md:w-3/6 w-5/6 lg:ml-[100px] mb-10 object-cover object-center rounded" alt="hero" src={img}/>
    <div class="text-center lg:w-2/3 w-full ">
     
      
    
    </div> 
  </div>
</section>
<h1 data-aos="zoom-in-down"  class=" animate-gradient-text font-bold title-font sm:text-4xl text-3xl text-center px-0 lg:ml-[350px] lg:py-[400px] py-[300px] text-gray-900">Softwares,complex Websites,Mobile App,Landing pages services in one place</h1>

    </>
  )
}
