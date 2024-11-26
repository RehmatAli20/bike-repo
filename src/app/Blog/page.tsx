import React from 'react'
import Footer from '../../../Component/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog(){
  return (
     <>
     <div className="blogcontainer">
      <div className='sidebar'>
        <div className='sidesearch'>
        <input type="text" placeholder='search' />
        <Link href={"#"}><Image src={"/about/search.png"} alt="icon" width={20} height={20}></Image>
        </Link>
        </div>
        <h2>CATEGORY</h2>
        <ul className='category'>
          <li><Link className='list' href="#">Motor Bike</Link></li>
          <li><Link className='list' href="#">Bike Race Competetion</Link></li>
          <li><Link className='list' href="#">Adventure Sports Race</Link></li>
          <li><Link className='list' href="#">New Bike Auto Parts</Link></li>
          <li><Link className='list' href="#">Old Bike Auto Parts</Link></li>
        </ul>
        <h2>LATEST POST</h2>
        <div className='latestpost'>
          <div className='contaner'>
          <Image  src={"/blog/post_1.png"} width={50} height={50} alt="post"></Image>
           <Link className='list' href="#"><h4>Old Bike Auto Parts</h4></Link>
          </div>
          <div className='contaner'>
          <Image  src={"/blog/post_2.png"} width={50} height={50} alt="post"></Image>
          <Link className='list' href="#"><h4>Couple Riding Hard</h4></Link>
          </div>
          <div className='contaner'>
          <Image  src={"/blog/post_3.png"} width={50} height={50} alt="post"></Image>
          <Link className='list' href="#"><h4>Lets Race Begain</h4></Link>
          </div>
          <div className='contaner'>
          <Image  src={"/blog/post_4.png"} width={50} height={50} alt="post"></Image>
          <Link className='list' href="#"><h4>New Bike Auto Parts</h4></Link>
          </div>
         </div>
         <h2>TAGS</h2>
         <div className="tags">
          <Link  className='tagslink' href={"#"}>Bikes</Link>
          <Link  className='tagslink' href={"#"}>Motor Bike</Link>
          <Link  className='tagslink' href={"#"}>Race</Link>
          <Link  className='tagslink' href={"#"}>Bikes Race</Link>
          <Link  className='tagslink' href={"#"}>High Speed</Link>
          <Link  className='tagslink' href={"#"}>Bike Model</Link>
          <Link  className='tagslink' href={"#"}>Trending</Link>
         </div>
         <h2>FOLLOW US</h2>
         <div className='followus'>
         <Link  href={"#"}><Image src={"/footer/facebook.png"} alt='icon' width={20} height={20}></Image></Link>
         <Link  href={"#"}><Image src={"/footer/google.png"} alt='icon' width={20} height={20}></Image></Link>
         <Link  href={"#"}><Image src={"/footer/twitter.png"} alt='icon' width={20} height={20}></Image></Link>
         <Link  href={"#"}><Image src={"/footer/linkedin.png"} alt='icon' width={20} height={20}></Image></Link>
         <Link  href={"#"}><Image src={"/footer/instagram.png"} alt='icon' width={20} height={20}></Image></Link>
         </div>
      </div>
      <div className='postdisplay'>
        <div className='blogpost'>
          <Image src={"/blog/blog_page_1.png"} width={350} height={400} className='post' alt='post'></Image>
          <div className='postcontent'>
            <h3>How to Control Speed When Driving at High Speed</h3>
            <p>Maintaining control at high speeds is crucial for your safety and others on the road. First, always stay focused and anticipate potential hazards ahead. Gradually ease off the accelerator to reduce speed instead of slamming the brakes, which can cause your vehicle to skid. Use engine braking by shifting to a lower gear if necessary, especially on downhill roads. Keep a safe distance from other vehicles to allow enough time to react. Avoid sudden movements of the steering wheel, as they can destabilize the car at high speeds. Make sure your tires are in good condition and properly inflated, as they play a key role in stability. Always respect speed limits, and remember, it’s better to arrive late than never. Safe driving is about staying calm and in control at all times.</p>
            <button type='button'>READ MORE</button>
             </div>

        </div>
        <div className='blogpost'>
          <Image src={"/blog/blog_page_2.png"} width={350} height={400} className='post' alt='post'></Image>
          <div className='postcontent'>
            <h3>Mastering High-Speed Driving: Tips for Staying in Control</h3>
            <p>Driving at high speeds requires skill, focus, and responsibility. To stay in control, always keep your hands firmly on the steering wheel and maintain a balanced posture. Pay close attention to the road and anticipate changes in traffic or road conditions. Gradually reduce speed by easing off the accelerator rather than braking hard, as sudden braking can lead to loss of control. Ensure your vehicle's braking system and tires are in optimal condition for better handling. Use your mirrors frequently to stay aware of your surroundings and maintain a safe distance from other vehicles. Avoid distractions like using your phone or adjusting the radio, as every second counts when you're moving fast. Practicing defensive driving and staying within safe speed limits will not only keep you in control but also ensure a safer journey for everyone on the road.</p>
            <button type='button'>READ MORE</button>
          </div>
        </div>
        <div className='blogpost'>
          <Image src={"/blog/blog_page_3.png"} width={350} height={400} className='post' alt='post'></Image>
          <div className='postcontent'>
            <h3>The Art of Braking: How to Stop Safely at High Speeds</h3>
            <p>Braking safely at high speeds is a vital skill for every driver. Sudden, aggressive braking can cause your vehicle to skid or lose control, especially on wet or slippery roads. Instead, apply your brakes gradually and steadily to reduce speed in a controlled manner. If your car is equipped with an anti-lock braking system (ABS), let it do its job by pressing the brake pedal firmly without pumping it. Always keep a safe distance from the vehicle ahead to allow ample time for deceleration. On downhill roads, use engine braking by shifting to a lower gear to reduce reliance on the brakes. Stay focused on the road, and be prepared to adjust your braking technique based on traffic and weather conditions. Mastering the art of braking ensures not only your safety but also a smoother, more confident driving experience.</p>
            <button type='button'>READ MORE</button>

          </div>
        </div>
        <div className='blogpost'>
          <Image src={"/blog/blog_page_4.png"} width={350} height={400} className='post' alt='post'></Image>
          <div className='postcontent'>
            <h3>Staying Calm Under Pressure: Handling Emergencies at High Speed</h3>
            <p>Driving at high speeds can be thrilling, but emergencies can arise unexpectedly, requiring a calm and composed response. The key to handling such situations is to stay focused and avoid panic. If you need to stop suddenly, apply the brakes gently and steadily, keeping your vehicle straight. Avoid sudden steering movements, as they can lead to loss of control. In case of a tire blowout, hold the steering wheel firmly, reduce speed gradually, and steer to the side of the road when it's safe. Always maintain a safe following distance to give yourself enough time to react. Familiarize yourself with your car’s safety features, like ABS or traction control, and ensure regular vehicle maintenance for optimal performance. Staying alert, calm, and prepared helps you manage high-speed emergencies effectively, protecting you and others on the road.</p>
            <button type='button'>READ MORE</button>

          </div>
        </div>
      </div>

      </div>
    </>
  )
}
