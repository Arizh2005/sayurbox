import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return <Link href={'/'}>
        <Image
            src="/Logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-auto"
        />
    </Link>;
};

export default Logo;