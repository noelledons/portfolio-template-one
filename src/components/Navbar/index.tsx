import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navigation'><div className='navigation__logocontainer'><Link href="/">ND</Link></div></nav>
  )
}

export default Navbar