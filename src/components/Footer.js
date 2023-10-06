import Layout from '@/Layout/Layout';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
	<footer className=' w-full border-t-2 border-solid border-dark '>
		<Layout className={"py-8 flex items-center justify-between"}>
			<span>{ new Date().getFullYear()} &copy; All rights are reserved</span>
			<div className=' text-lg flex items-center'>
				Build by &nbsp; <span className=' text-primary '> &#9825; &nbsp; </span> <Link href="https://github.com/singhvivekkumar/portfolio" className=' underline' target={"_blank"}>singhvivekkumar</Link>
			</div>
			<Link href='/'>Know More</Link>
		</Layout>
	</footer>
  )
}

export default Footer;