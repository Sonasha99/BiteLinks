import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className = 'h-15 bg-blue-700 flex justify-between px-3 items-center text-white '>
       <div className= " logo font-bold text-lg">
        BiteLinks
       </div>
       <ul className='flex justify-centre gap-4 items-centre'>
      <Link href = "/"><li>Home</li></Link>
      <Link href = "/about"><li>About</li></Link>
      <Link href = "/generate"><li>Short</li></Link>
      <Link href = "/contact"><li>Contact</li></Link>
       <li className = 'flex gap-3'>
        <Link href = "/generate"><button className='bg-blue-500 rounded-lg p-3 py-1 font-bold'> Try Now</button></Link>
       <Link href = "/github"><button className='bg-blue-500 rounded-lg p-3 py-1 font-bold'> Github</button></Link>
       </li>
</ul>
       
</nav>
  )
}
export default Navbar