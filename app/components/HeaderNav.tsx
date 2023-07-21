'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'

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
    const h1 = "1.125rem";
    const h1smaller = `${parseInt(h1) * 0.9}rem`; // Reduce by 10% (0.9)
    const h2 = "0.9rem";
    const h2smaller = `${parseInt(h2) - 0.1}rem`; // Reduce by 10% (0.9)
    const logoWidth = 64;
    const logoWidthSmaller = 48;


    // Calculate the class name based on scroll position
    const h1FontClass = clientWindowHeight > 0 ? h1smaller : h1;
    const h2FontClass = clientWindowHeight > 0 ? h2smaller : h2;
        
    const logoWidthClass = clientWindowHeight > 0 ? logoWidthSmaller : logoWidth;

    const opacity = "0.95";
    const opacityClass = clientWindowHeight > 0 ? opacity : 1;

    const shadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
    const shadowClass = clientWindowHeight > 0 ? shadow : '';    
   // console.log('shadow: ', shadowClass)

    return (
        <div className="sticky bg-white -top-1" style={{ boxShadow: shadowClass, opacity: opacityClass }}>
        <div className=" shadow-gray-400 flex flex-row items-center pt-3 pb-1">
          <a href="/">
            <Image
                className="flex-none mr-3"
                src="/logo-512.png"
                alt="Luton International Church"
                width={logoWidthClass}
                height={64}
                style={{ width: "100%", height: "auto" }}
                priority={true}

            />
          </a>
            <ul className="flex flex-col">
            <li>
              <h1 className="text-lg md:text-4xl capitalize font-bold text-violet-900 font-sans flex-grow"
                style={{ fontSize: h1FontClass }}
              >
                Luton International Church
              </h1>
            </li>
            <li className="flex">
              <h2
                className="text-sm capitalize -mt-2 font-light text-violet-900 font-sans mb-3"
                style={{ fontSize: h2FontClass }}
              >
                Enlarging the tent to inherit the Nations
              </h2>
            </li>
          </ul>
            </div>
            <nav className="pb-2 ml-2">
                <ul className="flex flex-row space-x-4 text-violet-900">
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#about">About</a></li>
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#outreach">Outreach</a></li>
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#services">Services</a></li>
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#contact">Contact</a></li>

                </ul>
            </nav>
      </div>
  );
};

export default Navigation;