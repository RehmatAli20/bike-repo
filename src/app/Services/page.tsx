import React from 'react'
import Image from 'next/image'

export default function Services() {
  return (
    <>
    <div className='services'>
      <div className='servicescontainer'>
        <div className='container'>
            <Image  src="/services/24-hours.png" alt='icon' width={50} height={50}></Image>
            <p>24X7</p>
            <p>availability</p>
        </div>
        <div className='container'>
        <Image  src="/services/door.png" alt='icon' width={50} height={50}></Image>
          <p>door step</p>  
          <p>facility</p>
        </div>
        <div className='container'>
        <Image  src="/services/cost.png" alt='icon' width={50} height={50}></Image>

          <p>low cost</p>
          <p>services</p>
            
        </div>
        <div className='container'>
        <Image  src="/services/wash.png" alt='icon' width={50} height={50}></Image>

            <p>eco</p>
            <p>washing</p>
            </div>
            <div className='container'>
            <Image  src="/services/road.png" alt='icon' width={50} height={50}></Image>

            <p>road side</p>
            <p>assistance</p>
        </div>
        <div className='container'>
        <Image  src="/services/warranty.png" alt='icon' width={50} height={50}></Image>

            <p>1 year cashback</p>
            <p>warranty</p>
        </div>

      </div>


      <div className='servicescontent'>
        <h1>OUR SERVICES</h1>
         <p>Welcome to our one-stop destination for all your bike needs! We specialize in offering a diverse range of high-quality bikes for sale, from reliable commuter bikes to high-performance models for adventure seekers. Alongside our extensive selection, we provide expert bike services to keep your ride in top condition. From routine maintenance and repairs to complete tune-ups, our skilled technicians are committed to ensuring your bike performs at its best. With our dedication to quality and customer satisfaction, we're here to support every rider—whether you’re purchasing your first bike or servicing a trusted companion. Ride with confidence and style with our sales and services!</p>
         <button>READ MORE</button>
      </div>
    </div>
    </>
  )
}
