'use client'

import { useEffect, useState } from 'react';


const Navigation = () => {
    //const [clientWindowHeight, setClientWindowHeight] = useState("");


    return (
         <div  className="sticky bg-white top-0 z-20">
            <ul className="flex flex-col md:flex-row ">
                <li>
                    <h1 className="text-4xl md:text-6xl capitalize font-bold text-violet-900 font-sans">Luton</h1>
                    <h1 className="text-4xl md:text-6xl capitalize font-bold text-violet-900 font-sans">International</h1>
                    <h1 className="text-4xl md:text-6xl capitalize font-bold text-violet-900 font-sans">Church</h1></li>
                <li className="flex">
                    <h2 className="text-2xl capitalize font-light text-violet-900 font-sans md:self-center mt-2 md:p-10 md:text-right">Enlarging the tent to inherit the Nations</h2>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;