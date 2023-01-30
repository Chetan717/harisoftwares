import Head from './comp/Head';
import Hero from './comp/Hero';
import Review from './comp/Review';
import Services from './comp/Services';
import Tech from './comp/Tech';
import img from '../src/img/whatsapp.png'
import Footer from './comp/Footer';
import Faq from './comp/Faq';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Pricing from './comp/Pricing';
function App() {

  useEffect(()=>{
    AOS.init({duration:1000});
    },[])

  return (
    <>
    
  
  
    <Hero/>
    <Services/>
    <Tech/>
    <Faq/>
    <Review/>
    <Pricing/>
    <Footer/>
    <Head/>
   <a  href='https://wa.me/message/TG2DXE2CHRKNG1'> <img className='fixed lg:top-[550px] lg:left-[1250px] animate-bounce left-[300px] md:left[600px] shadow-3xl top-[500px] w-12 h-12' src={img}/></a>
    </>
    
  );
}

export default App;
