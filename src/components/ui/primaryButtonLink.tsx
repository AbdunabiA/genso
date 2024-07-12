import Link from 'next/link';
import React from 'react'
import { cn } from '@/lib/utils';

interface PrimaryButtonLinkType {
  title: string;
  to: string;
  className?:string;
}

const PrimaryButtonLink = ({title, to, className }:PrimaryButtonLinkType) => {
  return (
    <Link href={to} className={cn("text-white py-[15px] px-[30px] bg-primaryGreen rounded-[50px]", className)}>
      {title}
    </Link>
  );
}

export default PrimaryButtonLink