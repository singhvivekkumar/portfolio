import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import GithubIcon from '../IconComponents/GithubIcon';

const SimpleCard = ({ type, title, img, link, github}) => {
  return (
	<article className=' relative w-full flex flex-col items-center justify-center p-8 rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
		<div className=" absolute top-0 -right-3 rounded-[2rem] rounded-br-[1.7rem] h-[103%] w-[102%] bg-dark -z-10" />
		<Link href={link} target="_blank" className=' w-full cursor-pointer overflow-hidden rounded-lg'>
			<Image alt={title} src={img} className=' w-full h-auto' />
		</Link>

		<div className=' w-full flex flex-col items-start justify-between mt-4'>
			<span className=' text-primary font-medium text-xl'>{type}</span>
			<Link href={link} target="_blank" className=' hover:underline underline-offset-2'>
				<h2 className=' my-2 w-full text-left text-3xl font-bold'>{title}</h2>
			</Link>

			<div className=' w-full mt-2 flex items-center justify-between'>
				<Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
				<Link href={github} target="_blank" className='  w-10 '><GithubIcon/></Link>
			</div>
		</div>
	</article>
  )
}

export default SimpleCard;