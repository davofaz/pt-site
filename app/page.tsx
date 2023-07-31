'use client'
import React, { ReactNode, useEffect } from "react";
import Image from 'next/image'
import Navigation from './components/HeaderNav'
import { useAnimation, motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import DfCredit from './components/DfCredit'

const sectionVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
  hidden: { opacity: 0, scale: 0.5 }
};

function Section({ children }: { children: ReactNode}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      className="pt-36"
    >{children}</motion.div>
  );
}

export default function Home() {
  return (
    <motion.main 
        className=" flex-1 flex-col"
        id="home"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
        >
          <Navigation />
          <section id="home" className="p-4 container mx-auto max-w-screen-lg text-white min-h-screen">
             <Image
                className="mt-8"
                src="/gym-hero-background-2.jpg"
                alt="Fully Equipped Private Gym in Dorset"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                priority={true}
             />
             <motion.div                        
                className="mt-2 mx-4"
                initial={{ opacity: 0, x: 10}}
                animate={{ opacity: 1, x: 0}}
                transition={{delay:1.2}}>
             <div className="relative mx-10 mt-12 md:max-w-md xl:max-w-xl">
                <h3 className="py-4 text-5xl font-bold xl:text-6xl">Fully Equipped Private Training Facility in Dorset</h3>
                <ul className="list-disc ml-5 py-4">
                    <li>Fitness</li>
                    <li>Get Stronger</li>
                    <li>Motivation</li>
                    <li>Feel Good!</li>
                </ul>
                <a href="#contact"><button className="rounded-full bg-sky-400 px-5 py-2 mt-4 hover:bg-white hover:text-black">Book a free session</button></a>
             </div>
             </motion.div>
         </section>
          <section id="about" className="p-4 container mx-auto  max-w-screen-lg text-white min-h-screen">
          <Section>
              <h3 className="text-6xl md:text-9xl font-bold border-t text-zinc-900 border-zinc-900">ABOUT</h3>
              <div className="mt-6 flex flex-col md:flex-row md:place-content-stretch">
                <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/3 md:mr-4">
                     <h4 className="text-2xl text-sky-500 mb-4">Lifestyle Guidance</h4>
                     <p className="text-zinc-400 text-lg">
                     My own journey to settling into a healthy lifestyle hasn&apos;t been a linear one and I understand the many challenges that can be encountered. 
                     This enables me to bring a high level of empathy, respect, and patience.</p>
                </div>
                <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/3 md:mr-4">
                     <h4 className="text-2xl text-sky-500 mb-4">Wellness Experience</h4>
                     <p className="text-zinc-400 text-lg">
                     Extensive personal experience allows me to guide you. 
                     My own success story and long career as a healthcare professional has equipped me with the ability to work in harmony with your wants and needs with a fair but firm approach.
                     </p>
                </div>
                <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/3">
                     <h4 className="text-2xl text-sky-500 mb-4">Active Coaching</h4>
                     <p className="text-zinc-400 text-lg">
                     My education and training completes my coaching arsenal - allowing me to provide you, the client, with the tools and methods you need to achieve your goals.</p>
                </div>
                
              </div>
              <div className="bg-black mt-6 p-8 drop-shadow-md">
                     <h4 className="text-2xl text-sky-500 mb-4">Qualifications</h4>
                     <p className="text-zinc-400 text-lg">
                     Level 3 Personal Training / Level 3 Supporting Pre and Postnatal Exercise/ Level 3 Corrective Exercise/ Behaviour Change and Wellness Specialist/ Nutrition Coach/ Level 2 Group Fitness/ Senior Fitness Specialist/ Youth Exercise Specialist/ Mental Health First Aider/ Level 2 Adult Social Care </p>
                </div>
            </Section>
          </section>
          <section id="services" className="p-4 mt-12 container mx-auto  max-w-screen-lg text-white min-h-screen">
          <Section>
               <h3 className="text-6xl md:text-9xl font-bold border-t text-zinc-900 border-zinc-900">SERVICES</h3>
                <div className="mt-6 flex flex-col md:flex-row md:place-content-stretch">
                       <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/2 md:mr-4">
                         <Image
                            src="/services-consultation-4.jpg"
                            alt="Free consultation"
                            width={640}
                            height={430}
                            priority={true}
                         />                      
                         <h4 className="text-2xl text-sky-500 my-4">Free Consultation</h4>
                         <p className="text-zinc-400 text-lg">
                         30 Min | Free</p>
                    </div>
                    <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/2 md:mr-4">
                        <Image
                            src="/services-coaching-4.jpg"
                            alt="1 to 1 Coaching"
                            width={640}
                            height={430}
                            priority={true}
                         />         
                         <h4 className="text-2xl text-sky-500 my-4">1 to 1 Coaching Session</h4>
                         <p className="text-zinc-400 text-lg">
                         &#163; 1hr | 25
                         </p>
                    </div>                
              </div>
            </Section>
          </section>
          <section id="contact" className="p-4 mt-24 container mx-auto  max-w-screen-lg text-white min-h-screen">
            <Section>
               <h3 className="text-6xl md:text-9xl font-bold border-t text-zinc-900 border-zinc-900">CONTACT</h3>
               <div className="mt-6 flex flex-col md:flex-row md:place-content-stretch">

                       <div className="bg-black mt-12 p-8 drop-shadow-md flex flex-col md:flex-row">
                            <div className="mr-6 md:basis-1/2 mb-6">
                                <h4 className="text-2xl text-sky-500 my-4">Put your health first and get in contact</h4>

                                <ul>
                                    <li>40 Henbury View Road</li>
                                    <li>Corfe Mullen</li>
                                    <li>Wimborne</li>
                                    <li>BH21 3TT</li>
                                    <li>United Kingdom</li>
                                    
                                </ul>

                                <h4 className="text-2xl text-sky-500 my-4">To book a session or contact for more info:</h4>
                                <ul>
                                    <li>
                                        <a href="mailto:info@emcpersonaltrainer.uk">
                                            <button className="rounded-full bg-sky-400 px-5 py-2 mt-4 hover:bg-white hover:text-black">Email</button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:07725584005">
                                            <button className="rounded-full bg-sky-400 px-5 py-2 mt-4 hover:bg-white hover:text-black">Call: 07725584005</button>
                                        </a>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="md:basis-1/2">
                                <Image
                                
                                    src="/contact-me.jpg"
                                    alt="Contact Me!"
                                    width={640}
                                    height={430}
                                    priority={true}
                                 />  
                            </div>
                        </div>
                </div>
              </Section>
           </section>
          <footer className="bg-black py-8 w-full text-white items-center">
          <a href="#home">
              <Image
                        className="my-12 mx-auto"
                        src="/pt-logo-512-3.png"
                        alt="Back to top"
                        width={128}
                        height={128}
                        priority={true}
                     />
            </a>
            <small className="text-zinc-400 block text-center mx-auto">
                Copyright &copy; 2023 Em C coaching for a healthier life<br />All Rights Reserved.
            </small>
            
          </footer>
          <DfCredit />
    </motion.main>
    
  )
}