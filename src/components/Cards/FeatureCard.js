import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import GithubIcon from '../IconComponents/GithubIcon';
import { motion } from "framer-motion";

// to use a component in framer motion... make it 
const FramerImage = motion(Image);

const FeatureCard = ({ type, title, summary, img, link, github}) => {
  return (
	<article className=' relative w-full flex items-center justify-center p-8 rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl'>
		<div className=" absolute top-0 -right-3 rounded-[2.3rem] rounded-br-[1.8rem] h-[103%] w-[101%] bg-dark dark:bglight -z-10" />

		<Link href={link} target="_blank" className=' w-1/2 cursor-pointer inline-block overflow-hidden rounded-lg'>
			<FramerImage alt={title} src={img} className=' w-full h-auto'
				whileHover={{scale:1.05}}
				transition={{duration:0.3}}
				priority 
            	sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw" />
		</Link>

		<div className=' w-1/2 flex flex-col items-start justify-between pl-6'>
			<span className=' text-primary dark:text-primary font-medium text-xl'>{type}</span>
			<Link href={link} target="_blank" className=' hover:underline underline-offset-2'>
				<h2 className=' my-2 w-full text-left text-4xl font-bold'>{title}</h2>
			</Link>
			<p className=' my-2 font-medium text-dark dark:text-light '>{summary}</p>
			<div className=' mt-2 flex items-center'>
				<Link href={github} target="_blank" className='  w-10 '><GithubIcon/></Link>
				<Link href={link} target="_blank" className=' ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold'>Visit Project</Link>
			</div>
		</div>
	</article>
  )
}

export default FeatureCard;