import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='flex left-4 bottom-4 fixed items-center justify-center first-letter overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:pr-0'>
      <div className='w-40 h-auto flex items-center justify-center relative md:w-24'>
      <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link href="mailto:suyash290403@gmail.com" target={'_blank'} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-18 h-16 rounded-full font-semibold hover:scale-110 dark:bg-light dark:text-dark dark:text-semibold md:w-10 md:h-10 '><div className='text-sm p-1.5 md:text-[8px] md:p-0'>Hire me</div></Link>
      </div>
    </div>
  )
}

export default HireMe