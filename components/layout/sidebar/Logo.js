/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link href="/" >
        <span className="inline-flex items-center justify-center h-20 w-full bg-black cursor-pointer">
           <h1 className='text-white font-bold px-2 text-2xl'>K</h1>
        </span>
      </Link>
    );
};

export default Logo;