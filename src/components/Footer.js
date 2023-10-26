import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = ({className}) => {
  return (
    <footer className={`w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light ${className}`}>
      <Layout className='py-8 flex items-center justify-between
        '>
        <span>{new Date().getFullYear()} &copy; All rights Reserved</span>
        <div className='flex items-center text-xl px-1'>Build by @Suyash</div>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer