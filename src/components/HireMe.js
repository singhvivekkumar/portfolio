import React from 'react'
import CircularText from './IconComponents/CircularText';
import Link from 'next/link';

const HireMe = () => {
  return (
	<div className=' fixed lg:absolute right-6 top-1/3 lg:top-0 lg:left-auto lg:bottom-auto  flex items-center justify-center overflow-hidden'>
		<div className=' w-48 md:w-[6.4rem] h-auto flex items-center justify-center relative '>
		<CircularText className={" fill-dark animate-spin-slow dark:fill-light dark:text-light "}/>
		<Link href="mailto:singhvivekkumar309@gmail.com" className=' font-semibold flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[47%] h-[47%] rounded-full text-xl md:text-xs text-light bg-dark shadow-lg ring-2 ring-offset-2  ring-dark  dark:bg-light dark:text-dark hover:dark:ring-light hover:dark:bg-dark hover:dark:text-light md:w-12 md:h-12'>Hire Me</Link>
		</div>
	</div>
  )
}

export default HireMe;