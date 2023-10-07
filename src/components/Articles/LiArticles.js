import Link from 'next/link';
import React from 'react'

const LiArticles = ({ img, title, date, link}) => {

  return (
	<li className=' relative p-4 py-6 my-4 flex items-center justify-between rounded-xl bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
		<Link href={link} target="_blank">
		<h2 className=' font-semibold capitalize text-xl hover:underline'>{title}</h2>
		</Link>
		<span className=' text-primary font-semibold pl-2'>{date}</span>
	</li>
  )
}

export default LiArticles;