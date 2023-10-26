import React from 'react'

const Layout = ({children , className=""}) => {
  return (
    <div className={`w-full h-full inline-block bg-light z-0 xs:p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 xl:pt-4 2xl:pt-4 2xl:p-24  dark:bg-dark ${className}`}>
      {children}
    </div>
  )
}

export default Layout