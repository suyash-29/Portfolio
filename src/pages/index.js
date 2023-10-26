import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/lightbulb.svg'
import Transition from '@/components/Transition'


export default function Home() {
  return (
    <>
      <Head>
        <title>ssc29 portfolio</title>
        <meta name="Suyash " content="fuck you bitch" />
      </Head>
      <Transition />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='lg:pt-8 md:pt-4 sm:pt-4 pt-0  '>
          <div className='flex items-center justify-between w-full md:flex-col'>
            <div className='w-1/2 md:w-3/5 lg:w-1/2'>
              <Image src={profilePic} alt="Image" className='w-full h-auto md:inline-block md:w-full' 
              priority
              sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'/>
            </div>
            <div className=' w-1/2 flex flex-col items-center self-center md:w-full md:text-center'>
              <AnimatedText text="Transforming Vision into Reality" className='2xl:!text-6xl !text-left xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl'/>
              <p className='my-4 text-base font-medium'> I&aposm a fourth-year college student, a passionate full-stack developer dedicated to bringing ideas to life in the form of innovative web applications.
              Feel free to explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/resume.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark border-3
                  dark:border-light '>
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:suyash290403@gmail.com" target={'_blank'}
                className='ml-8 text-lg font-medium capitalize text-dark underline dark:text-light dark:underline-light hover:scale-125 hover:font-semibold'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout> 
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-12 md:hidden'>
          <Image src={lightBulb} alt="image" className='w-full h-fullm' />
        </div>
      </main>
    </>
  )
}
