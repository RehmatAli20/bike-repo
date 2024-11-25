import React from 'react'
import Image  from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
      <>
      <div className='footer'>
       <div className='footercontainer'>
        <Image src="/logo.jpg" alt='' width={90} height={60}></Image>
        <p>This 2021 model car is Brilliant Black Crystal Pearlcoat with a Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge Black Crystal Pearlcoat</p>
        <div className='icon'>
           <Image src="/footer/facebook.png" alt='' width={20} height={20}></Image>
           <Image src="/footer/instagram.png" alt='' width={20} height={20}></Image>
           <Image src="/footer/twitter.png" alt='' width={20} height={20}></Image>
           <Image src="/footer/linkedin.png" alt='' width={20} height={20}></Image>
           <Image src="/footer/google.png" alt='' width={20} height={20}></Image>
        </div>
        </div>  
      
      
        <ul  id="orderlist">
        <h2 className='quicklinks'>Quick Links</h2>
          <li><Link className="link" href="/">Home</Link></li>
          <li><Link className="link" href="/About">About</Link></li>
          <li><Link className="link" href="/Services">Our Services</Link></li>
          <li><Link className="link" href="/Blog">Blog</Link></li>
          <li><Link className="link" href="/Contact">Contact</Link></li>
        </ul>

        
         
          <ul className='information'>
          <h2 className='quicklinks'>Information</h2>
            <li><Image src="/footer/home.png" alt='' width={30} height={30}></Image><Link  className='textcolor'  href="/">1 N. Cactus Ave., WI 54302</Link></li>
            <li><Image src="/footer/phone.png" alt='' width={30} height={30}></Image><Link className='textcolor'  href="#">1800-1234-567800</Link></li>
            <li><Image src="/footer/mail.png" alt='' width={30} height={30}></Image><Link className='textcolor'  href="#">mail.id@yourmail.com</Link></li>
            <li><Image src="/footer/globe.png" alt='' width={30} height={30}></Image><Link className='textcolor'  href="#">www.com</Link></li>
          </ul>
         <div className='insta'>
          <h2 className='quicklinks'>Instagram</h2>
          <div className='post'>
          <Image src="/footer/insta_1.png" alt='' width={80} height={80}></Image>
           <Image src="/footer/insta_2.png" alt='' width={80} height={80}></Image>
           <Image src="/footer/insta_3.png" alt='' width={80} height={80}></Image>
           <Image src="/footer/insta_4.png" alt='' width={80} height={80}></Image>
           <Image src="/footer/insta_5.png" alt='' width={80} height={80}></Image>
           <Image src="/footer/insta_6.png" alt='' width={80} height={80}></Image>

          </div>

         </div>

        </div>
  
      
      
      </>
  )
}
