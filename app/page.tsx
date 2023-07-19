import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto px-5 mt-8 pb-20 max-w-screen-lg"  id="home">
         <div className="w-full">
             <ul className="flex flex-col md:flex-row">
                <li>
                    <h1 className="text-4xl md:text-6xl capitalize font-bold text-violet-900 font-sans">Luton</h1>
                    <h1 className="text-4xl md:text-6xl capitalize font-bold text-violet-900 font-sans">International</h1>
                    <h1 className="text-4xl md:text-6xl capitalize font-bold text-violet-900 font-sans">Church</h1></li>
                <li className="flex">
                    <h2 className="text-2xl capitalize font-light text-violet-900 font-sans md:self-center mt-2 md:p-10 md:text-right">Enlarging the tent to inherit the Nations</h2>
                </li>
             </ul>
            
           
             <Image
                className="mt-8"
                src="/pastors-edward-kyllikki-3.jpg"
                alt="Pastors of Luton International Church"
                width={1100}
                height={300}
                priority
             />
             <h3 className="text-3xl capitalize font-medium text-violet-900 font-sans mt-4">About us</h3>
              <p className="text-sm mt-4">{"We are Spirit filled Christians who love the Lord Jesus Christ. We are from all different backgrounds and races and although we're not affiliated to any specific denomination, we worship Jesus the King of kings together. We are a Bible believing, charismatic international church, practising the gifts of the Holy Spirit and providing ministry in all areas such as Healing and Deliverance. We believe that God loved us so much that He sent Jesus into the world, to become a sacrifice for our sins. Through Jesus' death on the cross, and the grace he offered us. God\'s plan of salvation was shown for ALL mankind, that they may live."}</p>
             <p className="text-sm mt-4">We believe that by His Spirit, God raised Jesus from the dead and exalted Him as the Lord of lords, to be worshipped and adored. We believe that the second coming of Jesus will happen soon, we will see a mighty revival and a move of the Holy Spirit drawing many people to Christ before His return. It is this GOOD NEWS we love to share: that the love of the Father, salvation through Jesus and life by the Spirit is offered to you.</p>
             <p className="text-sm font-bold mt-2">Pastors Edward and Kyllikki Masih</p>
         </div>
         <div>
             <Image
                    className="mt-8"
                    src="/outreach-team-luton.jpg"
                    alt="Join us for Out Reach in Luton Town Centre most Saturdays"
                    width={1100}
                    height={300}
                    priority
                 />
                 <h3 className="text-3xl capitalize font-medium text-violet-900 font-sans mt-4">Join Us</h3>
                 <p className="text-sm mt-4">Luton Town Centre most Saturdays from 10am - 1pm</p>

          </div>
          <div>
              <iframe className="mt-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.62865022137!2d-0.379155283869235!3d51.88599079077175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487637d6dc19b5a7%3A0x24604b227076bccc!2sRaynham+Way+Community+Centre!5e0!3m2!1sen!2suk!4v1565102859193!5m2!1sen!2suk" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true}></iframe>
              <h3 className="text-3xl capitalize font-medium text-violet-900 font-sans mt-4">Services</h3>
              <p className="text-sm mt-4"><span className="font-bold">We meet each Sunday 10.30am at:</span></p><br/>
                  <ul>
                      <li>Raynham Way Community Centre</li>
                      <li>66 Eaton Green Rd</li>
                      <li>Luton</li>
                      <li>LU2 9JE</li>
                  </ul>
              
              <p className="text-sm mt-4"><span className="font-bold">Tuesday Homegroups:</span><br />
                  At various locations in Luton
                  Contact us for more information</p>
              <p className="text-sm mt-4"><span className="font-bold">Fasting and Prayer Meeting:</span><br />
                  1st Friday each month</p>
          </div>
          <footer>
          <a href="#home">
              <Image
                        className="mt-12 mx-auto"
                        src="/logo-512.png"
                        alt="Back to top"
                        width={128}
                        height={128}
                        priority
                     />
            </a>
          </footer>          
    </main>
    
  )
}