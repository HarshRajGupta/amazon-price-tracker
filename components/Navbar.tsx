"use strict";

import { black_heart, logo, search, user } from '@/public/assets/icons';
import Image from 'next/image';
import Link from 'next/link';

const navIcons = [
  { src: search, alt: 'search' },
  { src: black_heart, alt: 'heart' },
  { src: user, alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src={logo}
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Price<span className='text-primary'>Wise</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar