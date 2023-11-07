import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/project1.jpg'
import Footer from '@/components/Footer'
import Transition from '@/components/Transition'
import dashboard from '../../public/images/projects/dashboard.png'
import gym from '../../public/images/projects/gym.png'
import store from '../../public/images/projects/store.png'
import WanderNest from '../../public/images/projects/wandernest.png'





const FeaturedProjects = ({type , title , summary , img , link , github , text}) => {
  return(
    <article className='relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl
    dark:bg-dark dark:border-light lg:flex-col lg:p-8 sm:rounded-2xl sm:p-4 '>

      <div 
      className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-2xl bg-primary sm:-right-2 '></div>

      <Link href={link} target='_blank' className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg '>
        <Image src={img} alt={title} className='w-full h-auto'
        priority
        sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'/>
      </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-8 '>
          <span className='text-primary font-medium text-xl sm:text-base'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
          <h2 className='mx-2 text-left text-4xl font-bold dark:text-light sm:text-xl '>{title}</h2>
          </Link>
          <p className='font-medium text-dark dark:text-light my-2'>{summary}</p>
          <div className='mt-2 flex items-center '>
            <Link href={github} target='_blank'  className='hover:scale-110 w-10 dark:bg-light rounded-full '><GithubIcon /></Link>
            <Link href={link} target='_blank' className='hover:scale-110 ml-4 rounded bg-dark text-light p-2 px-6 font-semibold text-lg dark:bg-light dark:text-dark sm:text-sm sm:px-4'>{text}</Link>
          </div>
        </div>
       

    </article>
  )
}

const Project = ({type , title , summary , img , link , github , text}) => {
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark p-6 bg-light relative shadow-2xl dark:bg-dark
    dark:border-light sm:p-3'>

     <div 
      className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-2xl bg-primary sm:-right-2'></div>

      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg '>
        <Image src={img} alt={title} className='w-full h-auto '
        priority
        sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'/>
      </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4 '>
          <span className='text-primary font-medium text-xl lg:text-lg md:text-base sm:text-sm'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
          <h2 className='mx-2 text-left text-2xl text-dark font-bold dark:text-light lg:text-lg md:text-base sm:text-sm'>{title}</h2>
          </Link>
          <p className='font-medium text-dark my-2 dark:text-light sm:text-sm'>{summary}</p>
          <div className='w-full mt-2 flex items-center justify-between '>
           <Link href={github} target='_blank'  className='hover:scale-110 w-6 dark:bg-light rounded-full  '><GithubIcon /></Link>
            
            <Link href={link} target='_blank' className=' hover:scale-110 ml-4 rounded bg-dark text-light p-2  font-semibold text-lg  dark:bg-light dark:text-dark sm:text-sm sm:p-2  '>{text}</Link>
            
          </div>
        </div>
       

    </article>
  )
}


const projects = () => {
  return (
    <>
     <Head>
        <title>Suyash | Projects page</title>
        <meta name='description' content='any description you want' />
      </Head>
      <Transition  />
      <main className='w-full  flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Discover My Showcase of Creative Endeavors'
          className='mb-20 lg:!text-7xl sm:mb-8 md:!text-5xl sm:!text-3xl'
           />
          <div className='grid grid-col-12 gap-24 gap-y-32 lg:gap-x-16 md:gap-x-8 xl:gap-x-20 sm:gap-x-8 md:gap-y-20 '>
            <div className='col-span-12 sm:col-span-10'>
              <FeaturedProjects 
              title="Full stack(dashboard)"
              img={dashboard}
              summary="Using React JS, Next JS, Tailwind CSS, Prisma, MySQL, and Clerk authentication, I've created a versatile backend dashboard for managing multiple stores and their products.(for more please reat ReadME file on github)
              "
              link='https://ecommerce-dashboard-dun.vercel.app/'
              text="Deployed Link"
              github='https://github.com/suyash-29/ecommerce-dashboard'
              type="Featured Project"
              />
            </div>
            <div className='col-span-12 sm:col-span-10'>
              <FeaturedProjects 
              title="Full stack (Store)"
              img={store}
              summary="Utilizing React JS, Next JS, Tailwind CSS, Prisma, MySQL, and Stripe integration, I've developed a responsive online store.This is managed by dashboard project .(for more please reat ReadME file on github)
              "
              link='https://ecommerce-store-alpha-hazel.vercel.app/'
              text="Deployed Link"
              github='https://github.com/suyash-29/ecommerce-store'
              type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-10'>
              <Project 
              title="WanderNest"
              img={WanderNest}
              summary="Utilizing React JS, Next JS, MongoDB, Tailwind CSS, and Prisma, I've designed a user-friendly website for booking vacation homes in various locations.(for more please read ReadME file on github) "
              link='https://www.youtube.com/watch?v=lJRM428MdTU'
              text="Demo video"
              github='https://github.com/suyash-29/WanderNest'
              type="Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-10'>
              <Project 
              title=" GYM Exercises"
              img={gym}
              summary="Incorporating React JS, Node JS, Material UI, Framer Motion, and Rapid API, I've created an exercise application. It enables users to search for exercises based on filters"
              link='https://www.youtube.com/watch?v=Q00wQphT2v0'
              text="Demo video"
              github='https://github.com/suyash-29/exerciseapp'
              type="Project"
              /></div>
            
            <div className='col-span-6 sm:col-span-10'></div>
            <div className='col-span-6 sm:col-span-10'></div>

          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects