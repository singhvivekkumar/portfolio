import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import GithubIcon from '../IconComponents/GithubIcon';
import { motion } from "framer-motion";

// to use a component in framer motion... make it 
const FramerImage = motion(Image);

const SimpleCard = ({ type, title, img, link, github}) => {
  return (
	<article className=' relative w-full flex flex-col items-center justify-center p-8 rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl'>
		<div className=" absolute top-0 -right-3 rounded-[2rem] rounded-br-[1.7rem] h-[103%] w-[102%] bg-dark dark:bg-light -z-10 md:-right-2 md:h-[102%] md:w-[101%] xs:roudned-[1.5rem] " />
		<Link href={link} target="_blank" className=' w-full cursor-pointer inline-block overflow-hidden rounded-lg'>
			<FramerImage alt={title} src={img} className=' w-full h-auto' 
				whileHover={{scale:1.05}}
				transition={{duration:0.3}}
				priority 
              	sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw"/>
		</Link>

		<div className=' w-full flex flex-col items-start justify-between mt-4'>
			<span className=' text-primary dark:text-primaryDark font-medium text-xl md:text-lg xs:text-base'>{type}</span>
			<Link href={link} target="_blank" className=' hover:underline underline-offset-2'>
				<h2 className=' my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl '>{title}</h2>
			</Link>

			<div className=' w-full mt-2 flex items-center justify-between'>
				<Link href={link} target="_blank" className='rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'>Visit Project</Link>
				<Link href={github} target="_blank" className='  w-10 '><GithubIcon/></Link>
			</div>
		</div>
	</article>
  )
}

export default SimpleCard;