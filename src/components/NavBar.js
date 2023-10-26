import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import {motion} from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CustomLink = ({href, title ,  className=""}) => {
   const router = useRouter();


  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
      ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </Link>

  )
}

const CustomMobileLink = ({href, title ,  className="",toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle()
    router.push(href)
  }

 return(
   <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
     {title}

     <span className={`h-[1.5px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark 
     ${router.asPath === href ? 'w-full' : 'w-0'}`}
     >&nbsp;</span>
   </button>

 )
}

const NavBar = () => {

  const [mode,setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <header
    className='z-10 w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light  lg:px-16 sm:px-8 md:px-12'
    >
      <button className=' hidden lg:flex flex-col justify-center items-center'
      onClick={handleClick}>
        <span className={`transition-all duration-300 ease-out bg-dark dark:bg-light block w-6 rounded-sm h-0.5  ${isOpen ? 'rotate-45 translate-y-1' : 'translate-y-0.5'}`}></span>
        <span className={`transition-all duration-300 ease-out bg-dark dark:bg-light block w-6 rounded-sm h-0.5 -translate-y-2.5  ${isOpen ? 'opacity-0 my-0.5' : 'opacity-1 my-1'}`}></span>
        <span className={`transition-all duration-300 ease-out bg-dark dark:bg-light block w-6 rounded-sm h-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : '-translate-y-1'}`}></span>
      </button>

      
      <div className='w-full  justify-between items-center flex lg:hidden'>
      <nav className='flex items-center  justify-center'>
        <CustomLink href="/" title="Home" className='mx-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='ml-4'/>
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
      
        <motion.a 
        href="https://github.com/suyash-29" 
        target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:1.2}}
        className='w-6 mx-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a 
        href="https://www.linkedin.com/in/suya-singh-b20289198/" 
        target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:1.2}}
        className='w-6 mx-3'
        >
          <LinkedInIcon />
        </motion.a>
        
        <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 
                     ${mode === "light" ? "bg-dark text-light":"bg-light text-dark"}`}>
          {
            mode === "dark" ?
            <SunIcon className={"fill-dark"} />
            : <MoonIcon className={"fill dark"} />
          }

        </button>
      </nav>
      
      </div>

      {
        isOpen  ?
        <motion.div 
        initial={{scale:0,opacity:0,x:"-50%" , y:"-50%"}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.6}}
        
        
        className='z-30 bg-dark/90 dark:bg-light/75 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md py-32 '>
      <nav className='flex items-center flex-col justify-center'>
        <CustomMobileLink href="/" title="Home" className='my-2' toggle={handleClick}/>
        <CustomMobileLink href="/about" title="About" className='my-2' toggle={handleClick}/>
        <CustomMobileLink href="/projects" title="Projects" className='my-2' toggle={handleClick}/>
      </nav>
      
      <nav className='flex items-center justify-center felx-wrap'>
        
        <motion.a 
        href="https://github.com/suyash-29" 
        target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:1.2}}
        className='mx-3 w-8  bg-light rounded-full p-1 dark:bg-dark'
        >
          <GithubIcon />
        </motion.a>
        <motion.a 
        href="https://www.linkedin.com/in/suya-singh-b20289198/"
        target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:1.2}}
        className='w-8  bg-white rounded-full p-1 mx-3'
        >
          <LinkedInIcon />
        </motion.a>
        
        <button
        
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
          handleClick();
        }}
        className={`ml-3 w-8 flex items-center justify-center rounded-full p-1 
                     ${mode === "light" ? "bg-dark text-light":"bg-light text-dark"}`}>
          {
            mode === "dark" ?
            <SunIcon className={"fill-dark"} />
            : <MoonIcon className={"fill dark"} />
          }

        </button>
      </nav>
      
      </motion.div>

        :null
      }
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo />
      </div>
      
    </header>
  )
}

export default NavBar