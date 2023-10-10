import Layout from '@/Container/Layout';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
	<footer className=' w-full border-t-2 border-solid border-dark	dark:border-light dark:text-light '>
		<Layout className={"py-8 flex items-center justify-between lg:flex-col lg:py-5 space-y-2"}>
			<span>{ new Date().getFullYear()} &copy; All rights are reserved</span>
			<div className=' text-lg flex items-center'>
				Build with &nbsp; <span className=' font-bold text-2xl text-primary '> &#9825; &nbsp; </span> by &nbsp; <Link href="https://github.com/singhvivekkumar/portfolio" className=' underline' target={"_blank"}>singhvivekkumar</Link>
			</div>
			<Link href='/'>Know More</Link>
		</Layout>
	</footer>
  )
}

export default Footer;