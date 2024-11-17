import Link from 'next/link'
import React from 'react'
import NavLink from './navLink'

const links = [
  {url:"/", title:"Home"},
  {url:"/about", title:"About"},
  {url:"/portfolio", title:"Portfolio"},
  {url:"/contact", title:"Contact"}
]

const Navbar = () => {
  return (
    <header className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 sm:text-lg'>
     <div className="">
    <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
    <span className='text-white mr-1 '>Saurabh</span>
    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center px-1'>Sahani</span>
    </Link>
     </div>
     <nav className='fixed z-20 sm:relative flex flex-row top-14 sm:top-0 gap-3 right-4 px-2 sm:px-0 sm:right-0 writing-vertical-lr sm:writing-horizontal-tb'>
      {links.map(link=>(
        <NavLink link={link} key={link.title}/>
      ))}
     </nav>
    </header>
  )
}

export default Navbar
