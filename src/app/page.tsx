import Image from "next/image";
import styles from "./page.module.css";

import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="displayimage">
        <div className="bikeiamge">
          <Image  id="bikeimage" src="/home/banner_bike.png" alt="bike" height={500} width={550}></Image>
        </div>
        <div className="heading">
          <h1>GET THE MOST OF YOUR VEHICLE</h1>
          <button type="button" id="buton" >GET OFFER</button>
        </div>
       

      </div>
      <div className="collection">
          <div className="bikes">
            <Image src="/home/banner_bike.png"  alt="bike" id="bikeimg" width={600} height={400}></Image>
            <button id="bikebuton">Get Details</button>
          </div>
          <div className="bikes">
          <Image src="/home/yamaha.jpg"  alt="bike" id="bikeimg" width={600} height={400}></Image>

            <button id="bikebuton">Get Details</button>
          </div>
          <div className="bikes">
          <Image src="/home/ducati.jpg"  alt="bike" id="bikeimg" width={600} height={400}></Image>

            <button id="bikebuton">Get Details</button>
          </div>
          <div className="bikes">
          <Image src="/home/Honda.jpg"  alt="bike" id="bikeimg" width={600} height={400}></Image>

            <button id="bikebuton">Get Details</button>
          </div>
          <div className="bikes">
          <Image src="/home/kmc.jpg"  alt="bike" id="bikeimg" width={600} height={400}></Image>

            <button id="bikebuton">Get Details</button>
          </div>
          <div className="bikes">
            <Image src="/home/PANIGALEV4.jpg" alt="bike" id="bikeimg" width={600} height={400}></Image>
            <button id="bikebuton">Get Details</button>
          </div>

          <div className="bikes">
            <Image src="/home/prime.png" alt="bike" id="bikeimg" width={600} height={400}></Image>
            <button id="bikebuton">Get Details</button>
          </div>
          <div className="bikes">
            <Image src="/home/prime1.jpg" alt="bike" id="bikeimg" width={600} height={400}></Image>
            <button id="bikebuton">Get Details</button>
          </div>
          
        </div>
    </div>
  )
}
