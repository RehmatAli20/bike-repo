"use client"
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { useState } from "react";


export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const opensidebar = () => setIsSidebarOpen(true);
  const closesidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className="navsection">
        <div className="logo">
          <Image src="/logo.jpg" alt="Logo" width={85} height={50} />
        </div>
        <ul className="orderlist">
          <li><Link className="link" href="/">Home</Link></li>
          <li><Link className="link" href="/About">About</Link></li>
          <li><Link className="link" href="/Services">Our Services</Link></li>
          <li><Link className="link" href="/Blog">Blog</Link></li>
          <li><Link className="link" href="/Contact">Contact</Link></li>
        </ul>
        <li className="menu" onClick={opensidebar}>
          <Image src="/nav/menu.png" alt="menu" height={30} width={30} />
        </li>
      </nav>

      {isSidebarOpen && (
        <ul className="showlist">
          <ul>
            <li className="closenav" onClick={closesidebar}>
              <Image src="/nav/close.png" alt="icon" height={30} width={30} />
            </li>
          </ul>
          <li><Link className="link" href="/">Home</Link></li>
          <li><Link className="link" href="/About">About</Link></li>
          <li><Link className="link" href="/Services">Our Services</Link></li>
          <li><Link className="link" href="/Blog">Blog</Link></li>
          <li><Link className="link" href="/Contact">Contact</Link></li>
        </ul>
      )}
    </>
  );
}
