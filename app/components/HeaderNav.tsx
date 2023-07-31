'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    // Calculate the reduced font size in rem units
    const h1 = "1.5rem";
    const h1smaller = `${parseInt(h1) * 0.95}rem`; // Reduce by 10% (1)
    const h2 = "1.125rem";
    const h2smaller = `${parseInt(h2) - 0.2}rem`; // Reduce by -2 (0.7)
    const logoWidth = 64;
    const logoWidthSmaller = 48;
    const opacity = "0.85";
    const shadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";

    // Calculate the class name based on scroll position
    const h1FontClass = clientWindowHeight > 0 ? h1smaller : h1;
    const h2FontClass = clientWindowHeight > 0 ? h2smaller : h2;
    const logoWidthClass = clientWindowHeight > 0 ? logoWidthSmaller : logoWidth;    
    const opacityClass = clientWindowHeight > 0 ? opacity : 1;      
    const shadowClass = clientWindowHeight > 0 ? shadow : '';    
   // console.log('image: ', logoWidthClass)

    return (
        <div className="sticky bg-black -top-1 z-40" style={{ boxShadow: shadowClass, opacity: opacityClass }}>
            <div className="shadow-black flex flex-row items-center p-4 pb-4 border-b border-zinc-700 container mx-auto  max-w-screen-lg">
              <a href="/">
              <motion.div 
                    style={{ margin:'0 auto', textAlign:'center' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{delay:0.4}}
                    > 
                    <Image
                        src="/pt-logo-512-3.png"
                        alt="EMC Personal Training"
                        width={logoWidthClass}
                        height={48}
                        priority={true}
                        //style={{ width: "auto", height: "auto" }}

                    />
               </motion.div>
              </a>
              <motion.div                        
                                className="mt-2 mx-4"
                                initial={{ opacity: 0, x: 80}}
                                animate={{ opacity: 1, x: 0}}
                                transition={{delay:0.6}}>
                <ul className="flex flex-col ml-3 -mt-2">
                <li>
                  <h1 className="text-lg uppercase font-bold text-sky-400 font-sans font-medium"
                    style={{ fontSize: h1FontClass }}
                  >
                    Personal Training
                  </h1>
                </li>
                <li className="flex">
                  <h2
                    className="text-sm uppercase font-light text-white font-sans tracking-widest"
                    style={{ fontSize: h2FontClass }}
                  >
                    Wellness Coaching 
                  </h2>
                </li>
              </ul>
              </motion.div>
            </div>
            <nav className="p-4 container mx-auto  max-w-screen-lg">
                <ul className="flex flex-row space-x-4 text-white font-semibold">
                    <li><a className="p-1 hover:bg-white hover:text-black active:border-cyan-100" href="#about">ABOUT</a></li>
                    <li><a className="p-1 hover:bg-white hover:text-black active:border-cyan-100" href="#services">SERVICES</a></li>
                    <li><a className="p-1 hover:bg-white hover:text-black active:border-cyan-100" href="#contact">CONTACT</a></li>

                </ul>
            </nav>
      </div>
  );
};

export default Navigation;