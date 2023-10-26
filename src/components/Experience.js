import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ExIcon from './ExIcon'

const Details = ({position,company , companyLink , time , address, work}) => {
  const ref = useRef(null);
  return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <ExIcon refrence={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.8,type:"spring"}}>
        <h3 className='capitalize font-bold text-2xl sm:text-lg md:text-xl '>
          {position}&nbsp;{company}
        </h3>
        <span className='font-medium text-dark/75 dark:text-light/50 sm:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full sm:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <div className='my-48 '>
      <h2 className='font-bold text-8xl mb-32 text-center w-full md:text-5xl sm:text-4xl md:mb-16 '>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:w-full'>

        <motion.div
        style={{scaleY:scrollYProgress}} 
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] '/>


        <ul className='w-full flex flex-col items-start justify-between ml-8'>
          <Details 
            position="Intern" 
            companyLink="www.google.com"
            company="@Conative IT Solutions"
            time="May to july 2023 " 
            address="Indore, M.P"
            work="Skills Used - React JS, framer motion, CSS, JS 
            1) Worked with a team to design a restaurant website .
            2) Developed various reusable UI components using React.JS while maintaining Responsiveness using tailwind CSS.
            3) Added animations to the component using framer motion.
            4) Also created a footer for another website they were already working on when I joined.">

          </Details>
          
          
        </ul>
      </div>
    </div>
  )
}

export default Experience