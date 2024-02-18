import { kSocials, kMenuItems } from '@/constant';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-950 w-full px-5 py-12 text-white mt-10">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row gap-10 justify-between px-5">
        <div className="flex flex-col items-center md:flex-row md:grid">
          <div className="font-bold text-lg">Menu</div>
          <ul className="flex items-center gap-8 mt-5">
            {kMenuItems.map((item, idx) => (
              <li style={idx > 0 ? { listStyleType: 'disc' } : null} key={idx}>
                <a className="text-sm" href={item.url}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-lg">Socials</div>
          <ul className="flex gap-2 mt-5 mx-auto items-center">
            {kSocials.map((item, idx) => (
              <li key={idx}>
                <a className="text-sm" href={item.url}>
                  <img src={item.iconSrc} alt={item.url} className="h-[48px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
