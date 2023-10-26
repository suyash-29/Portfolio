import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:mx-3 sm:bg-transparent  sm:dark:bg-transparent sm:dark:text-light sm:dark:font-bold sm:text-dark'
        whileHover={{scale:1.1}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.8}}}
        viewport={{once:true}}>
          {name} 
        </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-6xl mt-48 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[50vh] md:h-[70vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd '>
        
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light md:p-4 sm:text-xs sm:p-2 '
        whileHover={{scale:1.1}}>
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="ReactJS" x="-18vw" y="0vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="5vw" y="10vw" />
        <Skill name="TailwindCSS" x="-10vw" y="15vw" />
        <Skill name="TailwindCSS" x="10vw" y="-15vw" />
        <Skill name="Cpp" x="18vw" y="0vw" />
        <Skill name="HTML" x="25vw" y="8vw" />
        <Skill name="SQL" x="-25vw" y="8vw" />
        <Skill name="Framer Motion" x="-30vw" y="-8vw" />
        <Skill name="APIs" x="28vw" y="-4vw" />
        <Skill name="Material UI" x="5vw" y="20vw" />
        <Skill name="Stripe" x="-5vw" y="-20vw" />
      </div>
    </>
  )
}

export default Skills