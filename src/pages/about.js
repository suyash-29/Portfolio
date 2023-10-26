import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/pic2.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Transition from '@/components/Transition'

const about = () => {
  return (
    <>
      <Head>
        <title>Suyash | About page</title>
        <meta name='description' content='any description you want' />
      </Head>
      <Transition />
      <main className='flex w-full flex-col items-center justify-center dark:text-light '>
        <Layout className='pt-8'>
        <AnimatedText text="Crafting Digital Experiences: Full-Stack Developer's Showcase" className='mb-16 lg:!text-5xl sm:!text-2xl xl:!text-5xl md:!text-4xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 md:order-2 text-dark dark:text-light sm:gap-8 md:px-6'>
          <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 '>
          <h2 className='mb-4 text-sm font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>

            <p className='font-medium'> 
            Hi, I&apos;m Suyash singh chauhan, a fourth-year college student passionate about full-stack development, and this portfolio is the culmination of my journey so far. As a tech enthusiast, I&apos;ve navigated through a diverse range of programming languages, frameworks, and tools to build interactive and innovative web applications. I thrive in the dynamic world of web development.
            </p>
            <p className='font-medium my-4'> Within these digital walls, you&apos;ll find a curated collection of projects that showcase my skills and creativity. From responsive websites to robust web applications, each project represents a unique problem-solving journey. As a student in the final stages of my academic journey, I&apos;m excited to bring my skills and enthusiasm to the professional world of full-stack development.
            </p>
            <p className='font-medium mb-8'>
            So, why explore my portfolio? Because it&apos;s not just about the code, It&apos;s about my commitment to continuous learning and my dedication to creating user-friendly and scalable solutions Dive in and discover how I can contribute to your team&apos;s success, and let&apos;s connect to discuss potential collaborations. Your next full-stack developer is just a click away.&quot  
            </p>
          </div>
         


          <div className='col-span-3 relative h-max rounded-2xl border-solid border-dark border-2 bg-light p-4 dark:bg-dark dark:border-light md:order-1 md:col-span-8  mt-8 xl:col-span-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light '></div>
            <Image src={profilePic} alt="suyash image" className='w-full h-auto rounded-2xl boder border-solid border-transparent border-2 dark:border-light '
            priority
            sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'/>
            
          </div>

          <div className='col-span-1 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:col-span-8'></div>
        </div>
        <Skills />
        <Experience />
        <Education />
        <footer className='w-full border-t-2 border-solid border-dark text-light font-medium text-lg dark:text-dark dark:border-light sm:mt-12
        '>
      <Layout className='py-8 flex items-center justify-between text-light dark:text-dark
        '>
        <span>{new Date().getFullYear()} &copy; All rights Reserved</span>
        <div className='flex items-center text-xl px-1'>Build by @Suyash</div>
        <div href="/">Say hello</div>
      </Layout>
    </footer>
        </Layout>
        
      </main>
    </>
  )
}

export default about