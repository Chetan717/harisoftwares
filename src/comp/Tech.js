import React from 'react'

export default function Tech() {
  return (
    <>
    <div class=" relative lg:bottom-[0px] bottom-[-20px] py- sm:py- lg:py-24">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
   
    <div class="mb-10 md:mb-16">
      <h2 data-aos="zoom-in-up" class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Technology Stacks</h2>

   
    </div>
  

    <div data-aos="zoom-in-up" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">


        <div class="flex flex-col border border-1 border-black rounded-[20px] shadow-xl items-center">
        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center  text-indigo-500  sm:mb-4 ">
          <img className='mt-3'  src='https://www.technoclusters.com/images/tech-1.png'></img>
        </div>

        <h3 class="text-lg md:text-xl font-semibold text-center mb-1">Frontend Technologies</h3>
        <ul class="  gap-10 list-disc  ">
  <li>React.js</li>
  <li>Javascript</li>
  
  <li>Html5</li>
  <li>Telwind css</li>

  </ul>

      
      </div>

   
      <div data-aos="zoom-in-up" class="flex flex-col border border-1 border-black rounded-[20px] shadow-xl items-center">
        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center  text-indigo-500 mb-2 sm:mb-4 ">
          <img className='mt-5' src='https://www.technoclusters.com/images/tech-6.png'></img>
        </div>

        <h3 class="text-lg  md:text-xl font-semibold text-center mb-1">Backend Technologies</h3>
        <ul class="  gap-10 m-2 list-disc  ">
  <li>Node JS</li>
  <li>AWS Cloud</li>
  <li>Javascript</li>
  <li>Mongo DB</li>
  <li>Mongo DB Atlas Cloud</li>
</ul>


      
      
      </div>
     



      <div data-aos="zoom-in-up" class="flex  flex-col border border-1 border-black rounded-[20px] shadow-xl  items-center">
        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center  text-indigo-500 mb-4 sm:mb-4 ">
          <img className='mt-6' src='https://www.technoclusters.com/images/tech-3.png'></img>
        </div>

        <h3 class="text-lg md:text-xl font-semibold text-center mb-1">Mobile App Devlopment</h3>
        <ul class=" list-disc  ">
  <li>React Native</li>
  <li>Android </li>
  <li>ios</li>
</ul>


      
      </div>
     
    
   

    </div>
  </div>
</div>
    
    
    
    
    
    </>
  )
}
