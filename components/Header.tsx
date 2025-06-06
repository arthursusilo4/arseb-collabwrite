import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
     <Link href='/' className='md:flex-1'>
          <Image 
               src="/assets/icons/folder-3.svg"
               alt="Logo name"
               width={65}
               height={34}
               className="hidden md:block"
          />
          <Image 
               src="/assets/icons/folder-3.svg"
               alt="Logo"
               width={54}
               height={54}
               className="mr-2 md:hidden"
          />
     </Link>
     { children }     
    </div>
  )
}
export default Header
