
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

import "../App.css";
import haris from "../img/haris1.gif"



export default function Head() {
  const [openc, setOpenc] = useState(false);

  
  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={openc} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpenc}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[#F5FBFF] pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpenc(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
              
                      <Tab.List className="-mb-px flex flex-col space-x-8 gap-4 px-4">
                      <p>Menu</p>
                      <a href="#home" >Home </a>
                      <a href="#service">Product</a>
                      <a href="#price" >Pricing</a>
                      <a href="#client" >Client</a>
                      <a href="#contact" >Contact us</a>

                      </Tab.List>
        
                    <Tab.Panels as={Fragment}>
                
                    </Tab.Panels>
                  </Tab.Group>

                 


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
       
        <header data-aos="zoom-in-down" className=" fixed w-full top-[5px] rounded-full  shadow-2xl  bg-[#F5FBFF] ">
         

          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
               

                {/* Logo */}
                <div className=" relative lg:right-[0px] right-[55px] flex lg:ml-0">
                  <a>
                    <span className="sr-only">Your Company</span>
                 
                    <img className="h-[200px] relative" src={haris}></img>
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
{/*                    
                  <Link to="/"> <p className="py-6 text-sm font-title">Men</p>
                 <Link to="/"><p className="py-6 text-sm font-title">Women</p>
                 <Link to="/"><p className="py-6 text-sm font-title">Kids</p> */}
                  
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center justify-between  gap-10">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      
                   <a href="#home" className="text-sm m-3 font-bold text-gray-700 hover:text-gray-800">
                      Home 
                    </a>
                  
                    <a href="#service" className="text-sm  m-3 font-bold text-gray-700 hover:text-gray-800">
                      Product 
                    </a>
                    <a href="#price" className="text-sm  m-3 font-bold text-gray-700 hover:text-gray-800">
                      Pricing 
                    </a>
                    <a href="#client" className="text-sm  m-3 font-bold text-gray-700 hover:text-gray-800">
                      Client 
                    </a>
                    <a href="#contact" className="text-sm  m-3 font-bold text-gray-700 hover:text-gray-800">
                      Contact us
                    </a>
                 
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                  <button class="inline-block lg:block text-[10px] lg:h-[50px] h-[35px] relative lg:right-[0px] right-[20px]  bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-2 py-2">+917387427755</button>
                  <button
                  type="button"
                  className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpenc(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
                </button>
                  </div>

                 
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      
    </>
  );
}


