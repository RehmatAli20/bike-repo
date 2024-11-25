import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
   <>
   <div className='about-container'>
    {/* <div> */}
    <Image  className='aboutimage' src="/about/about.png" alt='about us' width={600} height={400}></Image>
    {/* </div> */}
    <div className='aboutcontent' >
      <h1>About us</h1>
      <p>"Welcome to Throttle your ultimate destination for all things biking! We are passionate about bikes and committed to helping riders of all levels find the perfect ride. Whether you're a seasoned cyclist, a daily commuter, or just starting out, our website provides everything you need – from the latest bike models and gear to expert tips, reviews, and maintenance advice. We believe that biking isn’t just a mode of transport; it’s a lifestyle, a passion, and a community. Join us on this journey as we bring you closer to the biking world and support you in making the most of every ride!"</p>
      <button type='button' className='aboutbutton'>READ MORE</button>
    </div>
   </div>

   <div className='team'>
    <h1>OUR WELL TRAINED TEAM</h1>
    <div className='layout'>
    <div className='member'>
      <Image src="/about/team_1.png"  id="teamimage"  alt='' width={200} height={280}></Image>
      
    </div>
    <div className='member'>
      <Image src="/about/team_2.png"  id="teamimage" alt='' width={200} height={280}></Image>
    
    </div>
    <div className='member'>
      <Image src="/about/team_3.png"  id="teamimage"  alt='' width={200} height={280}></Image>
  
      
    </div>
    <div className='member'>
      <Image src="/about/team_4.png"  id="teamimage"  alt='' width={200} height={280}></Image>

    </div>
   </div>
   </div>

   <div className='client'>
    <h1>CLIENT REVIEWS</h1>
    <div className='layout'>
    <div className='customer'>
      <Image src="/about/team_2.png" id="customerimage" alt="h" height={100} width={100}></Image>
      <h2>James Robert</h2>
      <p>Absolutely love my new bike! The ride is smooth, and the build quality is impressive. It handles both city streets and rough trails with ease. Highly recommended!</p>
    </div>
    <div className='customer'>
      <Image src="/about/team_1.png" id="customerimage" alt="h" height={100} width={100}></Image>
      <h2>John Doe</h2>
      <p>I had an amazing experience shopping here. The team helped me pick the perfect bike for my daily commute. It's comfortable, fast, and stylish – exactly what I needed</p>
    </div>
    <div className='customer'>
      <Image src="/about/team_3.png" id="customerimage" alt="h" height={100} width={100}></Image>
      <h2>Sarah T</h2>
      <p>This is my third bike purchase from Throttle, and they never disappoint! The delivery was quick, and the bike arrived in perfect condition. Great service and fantastic bikes!</p>
    </div>
   </div>
   </div>
   
   </>
  )
}
