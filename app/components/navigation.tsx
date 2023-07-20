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
  const h1 = "2.25rem"; // Define your regular font size in rem (e.g., 4rem)
  const h1smaller = `${parseInt(h1) * 0.7}rem`; // Reduce by 10% (0.9)
  const h2 = "1.5rem"; // Define your regular font size in rem (e.g., 4rem)
  const h2smaller = `${parseInt(h2) * 0.9}rem`; // Reduce by 10% (0.9)
  const logoWidth = 64;
  const logoWidthSmaller = 32;

  // Calculate the class name based on scroll position
  const h1FontClass = clientWindowHeight > 0 ? h1smaller : h1;
  const h2FontClass = clientWindowHeight > 0 ? h2smaller : h2;
  const logoWidthClass = clientWindowHeight > 0 ? logoWidthSmaller : logoWidth;

  return (
    <div className="sticky bg-white -top-1 shadow-gray-400 flex flex-row items-center">
     <Image
                className="flex-none -mt-7 mr-3"
                src="/logo-512.png"
                alt="Luton International Church"
                width={64}
                height={64}
                priority={true}
             />
      <ul className="flex flex-col mb-10">
        <li>
          <h1
            className="mt-3 capitalize font-bold text-violet-900 font-sans flex-grow"
            style={{ fontSize: h1FontClass }}
          >
            Luton International Church
          </h1>
        </li>
        <li className="flex">
          <h2
            className="capitalize -mt-2 font-light text-violet-900 font-sans mb-3"
            style={{ fontSize: h2FontClass }}
          >
            Enlarging the tent to inherit the Nations
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
