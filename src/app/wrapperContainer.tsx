import { cn } from '@/lib/utils';
import React from 'react'

const WrapperContainer = ({
  children,className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className={cn('container mx-auto max-w-[1200px] px-5', className)}>{children}</div>
  );
};

export default WrapperContainer