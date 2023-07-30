import Image from 'next/image'
import Navigation from './components/HeaderNav'

export default function Home() {
  return (
    <main className=" flex-1 flex-col"  id="home">
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
             {/*<h3 className="text-3xl capitalize font-medium text-violet-900 font-sans mt-4">About us</h3>
             <p className="text-sm mt-4">{"We are Spirit filled Christians who love the Lord Jesus Christ. We are from all different backgrounds and races and although we're not affiliated to any specific denomination, we worship Jesus the King of kings together. We are a Bible believing, charismatic international church, practising the gifts of the Holy Spirit and providing ministry in all areas such as Healing and Deliverance. We believe that God loved us so much that He sent Jesus into the world, to become a sacrifice for our sins. Through Jesus' death on the cross, and the grace he offered us. God\'s plan of salvation was shown for ALL mankind, that they may live."}</p>
             <p className="text-sm mt-4">We believe that by His Spirit, God raised Jesus from the dead and exalted Him as the Lord of lords, to be worshipped and adored. We believe that the second coming of Jesus will happen soon, we will see a mighty revival and a move of the Holy Spirit drawing many people to Christ before His return. It is this GOOD NEWS we love to share: that the love of the Father, salvation through Jesus and life by the Spirit is offered to you.</p>
             <p className="text-sm font-bold mt-2">Pastors Edward and Kyllikki Masih</p>*/}
             <div className="relative mx-10 mt-12 md:max-w-md xl:max-w-xl">
                <h3 className="py-7 text-5xl font-bold xl:text-6xl">Fully Equipped Private Training Facility in Dorset</h3>
                <ul className="list-disc ml-5 py-4">
                    <li>Fitness</li>
                    <li>Get Stronger</li>
                    <li>Motivation</li>
                    <li>Feel Good!</li>
                </ul>
                <button className="rounded-full bg-sky-400 px-5 py-2 mt-4">Book a free session</button>
             </div>
         </section>
          <section id="about" className="p-4 container mx-auto  max-w-screen-lg text-white min-h-screen">
              <h3 className="text-6xl md:text-9xl font-bold border-t text-zinc-900 border-zinc-900 pt-4">ABOUT</h3>
              <div className="mt-6 flex flex-col md:flex-row md:place-content-stretch">
                <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/3 md:mr-4">
                     <h4 className="text-2xl mb-4">Lifestyle Guidance</h4>
                     <p className="text-zinc-400 text-lg">
                     My own journey to settling into a healthy lifestyle hasn&apos;t been a linear one and I understand the many challenges that can be encountered. 
                     This enables me to bring a high level of empathy, respect, and patience.</p>
                </div>
                <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/3 md:mr-4">
                     <h4 className="text-2xl mb-4">Wellness Experience</h4>
                     <p className="text-zinc-400 text-lg">
                     Extensive personal experience allows me to guide you. 
                     My own success story and long career as a healthcare professional has equipped me with the ability to work in harmony with your wants and needs with a fair but firm approach.
                     </p>
                </div>
                <div className="bg-black mt-12 p-8 drop-shadow-md md:basis-1/3">
                     <h4 className="text-2xl mb-4">Active Coaching</h4>
                     <p className="text-zinc-400 text-lg">
                     My education and training completes my coaching arsenal - allowing me to provide you, the client, with the tools and methods you need to achieve your goals.</p>
                </div>
                
              </div>
              <div className="bg-black mt-6 p-8 drop-shadow-md">
                     <h4 className="text-2xl mb-4">Qualifications</h4>
                     <p className="text-zinc-400 text-lg">
                     Level 3 Personal Training / Level 3 Supporting Pre and Postnatal Exercise/ Level 3 Corrective Exercise/ Behaviour Change and Wellness Specialist/ Nutrition Coach/ Level 2 Group Fitness/ Senior Fitness Specialist/ Youth Exercise Specialist/ Mental Health First Aider/ Level 2 Adult Social Care </p>
                </div>
          </section>
          <section id="services" className="p-4 mt-12 container mx-auto  max-w-screen-lg text-white min-h-screen">
               <h3 className="text-6xl md:text-9xl font-bold border-t text-zinc-900 border-zinc-900 pt-4">SERVICES</h3>
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
                            alt="Free consultation"
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
          </section>
          <section id="contact" className="p-4 mt-24 container mx-auto  max-w-screen-lg text-white min-h-screen">
               <h3 className="text-6xl md:text-9xl font-bold border-t text-zinc-900 border-zinc-900 pt-4">CONTACT</h3>
          </section>
          
          <footer className="bg-black">
          <a href="#home">
              <Image
                        className="mt-12 mx-auto"
                        src="/pt-logo-512-3.png"
                        alt="Back to top"
                        width={128}
                        height={128}
                        priority={true}
                     />
            </a>
          </footer>          
    </main>
    
  )
}