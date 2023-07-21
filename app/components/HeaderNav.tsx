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
    const h1smaller = `${parseInt(h1) * 0.95}rem`; // Reduce by 10% (1)
    const h2 = "1rem";
    const h2smaller = `${parseInt(h2) - 0.2}rem`; // Reduce by -2 (0.7)
    const logoWidth = 48;
    const logoWidthSmaller = 42;
    const opacity = "0.95";
    const shadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";

    // Calculate the class name based on scroll position
    const h1FontClass = clientWindowHeight > 0 ? h1smaller : h1;
    const h2FontClass = clientWindowHeight > 0 ? h2smaller : h2;
    const logoWidthClass = clientWindowHeight > 0 ? logoWidthSmaller : logoWidth;    
    const opacityClass = clientWindowHeight > 0 ? opacity : 1;      
    const shadowClass = clientWindowHeight > 0 ? shadow : '';    
   // console.log('image: ', logoWidthClass)

    return (
        <div className="sticky bg-white -top-1" style={{ boxShadow: shadowClass, opacity: opacityClass }}>
            <div className=" shadow-gray-400 flex flex-row items-center pt-3 pb-4 border-b border-violet-800">
              <a href="/">
                <Image
                    src="/logo-512.png"
                    alt="EMC Personal Training"
                    width={logoWidthClass}
                    height={48}
                    priority={true}
                    //style={{ width: "auto", height: "auto" }}

                />
              </a>
                <ul className="flex flex-col ml-3">
                <li>
                  <h1 className="text-lg capitalize font-bold text-violet-900 font-sans"
                    style={{ fontSize: h1FontClass }}
                  >
                    PT Site
                  </h1>
                </li>
                <li className="flex">
                  <h2
                    className="text-sm capitalize font-light text-violet-900 font-sans"
                    style={{ fontSize: h2FontClass }}
                  >
                    PT Site description
                  </h2>
                </li>
              </ul>
            </div>
            <nav className="pb-2 ml-1 mt-2">
                <ul className="flex flex-row space-x-4 text-violet-900">
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#about">Section 1</a></li>
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#outreach">Section 2</a></li>
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#services">Section 3</a></li>
                    <li><a className="border-b-4 border-white hover:border-violet-900 active:border-violet-600" href="#contact">Section 4</a></li>

                </ul>
            </nav>
      </div>
  );
};

export default Navigation;