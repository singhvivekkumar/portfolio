import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";

// to use a component in framer motion... make it 
const FramerImage = motion(Image);


const FeatureArticle = ({img , title, time, summary, link }) => {
  return (
	<li className=' relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl '>
		<div className=" absolute top-0 -right-3 rounded-[2rem] rounded-br-[1.7rem] h-[103%] w-[102%] bg-dark dark:bg-light -z-10" />
		<Link href={link} target="_blank" className=' w-full inline-block cursor-pointer overflow-hidden rounded-xl '>
			<FramerImage alt={title} src={img} className=' w-full h-auto' 
				whileHover={{scale:1.05}}
				transition={{duration:0.3}}
				priority 
                sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw"
			/>
		</Link>
		<Link href={link} target="_blank">
			<h2 className=' capitalize text-2xl font-bold my-2 hover:underline underline-offset-1'>{title}</h2>
		</Link>
		<p className=' text-sm mb-2'>{summary}</p>
		<span className=' text-primary dark:text-primaryDark font-semibold'>{time}</span>
	</li>
  )
}

export default FeatureArticle;