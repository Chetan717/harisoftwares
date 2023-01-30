import React from 'react'
import haris from "../img/haris1.gif"
export default function Footer() {
  return (
    <>
    
    
    
    <div id='contact' class=" py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

    <div class="mb-10 md:mb-16">
      <h2 data-aos="zoom-in-up" class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Get in touch</h2>
      <h1 data-aos="zoom-in-up" class="  font-bold title-font sm:text-4xl text-sm mt- text-center  text-gray-900">chaudharichaitanya998@gmail.com</h1>
  
    </div>
  
    <form  action="https://formspree.io/f/mkneaooo"
  method="POST" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
      <div data-aos="zoom-in-up">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">First name*</label>
        <input name="first-name" maxLength="20" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div data-aos="zoom-in-up">
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Last name*</label>
        <input name="last-name" maxLength="20" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div data-aos="zoom-in-up" class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Company</label>
        <input name="company" maxLength="20" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div data-aos="zoom-in-up" class="sm:col-span-2">
        <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
        <input name="email" maxLength="40" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div data-aos="zoom-in-up" class="sm:col-span-2">
        <label for="subject" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Subject*</label>
        <input name="subject" maxLength="200" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div data-aos="zoom-in-up" class="sm:col-span-2">
        <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
        <textarea name="message" maxLength="200" class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
      </div>

      <div  class="sm:col-span-2 flex justify-between items-center">
        <button data-aos="zoom-in-left" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>


      </div>
   
      
    </form>

  </div>
</div>
    
<div class=" pt-4 sm:pt-10 lg:pt-12">
  <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6 lg:px-[200px]">
   
    <img data-aos="zoom-in-right" className="h-[200px] relative" src={haris}></img>
     
    <label data-aos="zoom-in-right"  class="inline-block absolute text-gray-800 text-sm text-center sm:text-base lg:ml-[200px] mb-12">Hari Software solutions<br/>+917387427755<br/>Sangmaner,Ahmednagar</label>
    </div>

    <div class="text-gray-400 text-sm text-center py-">© 2021 - Present . All rights reserved.</div>
  </footer>
</div>  
    
    
    
    </>
  )
}
