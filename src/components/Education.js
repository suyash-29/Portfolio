import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ExIcon from './ExIcon'


const Details = ({degree,college ,info,time}) => {
  const ref = useRef(null);
  return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]'>
      <ExIcon refrence={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.8,type:"spring"}}>
        <h3 className='capitalize font-bold text-2xl  sm:text-lg md:text-xl'>
          {degree}&nbsp;from{college}
        </h3>
        <span className='font-medium text-dark/75 dark:text-light/50 sm:text-sm'>
          {time}
        </span>
        <p className='font-medium w-full sm:text-sm'>
          {info}
        </p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <div className='my-48 sm:mb-64'>
      <h2 className='font-bold text-8xl mb-32 text-center w-full md:text-5xl sm:text-4xl md:mb-16'>Education</h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:w-full'>

        <motion.div
        style={{scaleY:scrollYProgress}} 
        className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top  md:w-[2px] '/>


        <ul className='w-full flex flex-col items-start justify-between ml-8'>
         
          <Details 
            degree="Secondary" 
            time="2018 Indore"
            college="A.M.N.E.M School"
            
            info="Cleared class X from CBSE board scoring 91% in final exams.">

          </Details>
          <Details 
            degree="Higher Secondary" 
            time="2020 Indore"
            college="A.M.N.E.M School"
            
            info="Cleared class XII from CBSE board scoring 82% in final exams.">

          </Details>
          <Details 
            degree="B.tech" 
            time="2020 to present"
            college="@IIIT Kottayam"
            
            info="In Computer science and technology with current cgpa 6.7   ">

          </Details>
        </ul>
      </div>
    </div>
  )
}

export default Education