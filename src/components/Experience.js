import React, { useRef } from 'react'
import Details from './Details';
import {motion, useScroll } from 'framer-motion';

const Experience = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start']
	})
  return (
	<div className=' my-64'>
		<h2 className=' text-8xl font-bold mb-16 w-full text-center'>Experience</h2>
		<div className=' w-[75%] mx-auto relative ' ref={ref} >

			<motion.div className=' absolute left-9 top-0 w-1 h-full bg-dark origin-top'
				style={{scaleY:scrollYProgress}}/>
			<ul className=" flex flex-col justify-between items-start ml-4 ">
				<Details 
					position="Web Development Intern" 
					campany="Tech Martin" 
					companyLink="/about"
					time="2020 - Present"
					address="Bangalore, India"
					work="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				<Details 
					position="Web Development Intern" 
					campany="Tech Martin" 
					companyLink="/about"
					time="2020 - Present"
					address="Bangalore, India"
					work="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				<Details 
					position="Web Development Intern" 
					campany="Tech Martin" 
					companyLink="/about"
					time="2020 - Present"
					address="Bangalore, India"
					work="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				<Details 
					position="Web Development Intern" 
					campany="Tech Martin" 
					companyLink="/about"
					time="2020 - Present"
					address="Bangalore, India"
					work="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				<Details 
					position="Web Development Intern" 
					campany="Tech Martin" 
					companyLink="/about"
					time="2020 - Present"
					address="Bangalore, India"
					work="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				
			</ul>
		</div>
	</div>
  )
}

export default Experience;