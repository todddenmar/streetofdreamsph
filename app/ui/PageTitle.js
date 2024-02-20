import React from 'react';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
});

function PageTitle({ text }) {
  return (
    <h2 className={`${lobster.className} text-6xl md:text-8xl -rotate-3`}>
      {text}
    </h2>
  );
}

export default PageTitle;
