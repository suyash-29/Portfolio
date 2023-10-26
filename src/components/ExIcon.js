import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'



const ExIcon = ({refrence}) => {
  const {scrollYProgress} = useScroll(
    {
      target:refrence,
      offset:["center end","center center"]
    }
  )
  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
      <svg className="-rotate-[90] " width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="50" cy="21" r="20" className='stroke-primary stroke-4 fill-none dark:stroke-primaryDark'/>
        <motion.circle 
        style={{
          pathLength:scrollYProgress,
        }}
        cx="50" cy="21" r="20" className=' fill-light stroke-[5px] dark:fill-dark'/>
        <circle cx="50" cy="21" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark'/>
      </svg>
    </figure>
  )
}

export default ExIcon