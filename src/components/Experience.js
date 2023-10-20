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
	<div className=' my-64 xs:mt-80 '>
		<h2 className=' text-8xl font-bold mb-16 w-full text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>Experience</h2>
		<div className=' w-[75%] mx-auto relative lg:w-[80%] sm:w-[90%] xs:w-full ' ref={ref} >

			<motion.div className=' absolute left-9 xs:left-0 top-0 w-1 md:-[2px] h-full bg-dark dark:bg-light origin-top'
				style={{scaleY:scrollYProgress}}/>
			<ul className=" flex flex-col justify-between items-start ml-4 xs:ml-2 ">
				<Details 
					position="Web Development Intern" 
					campany="Code caluse" 
					companyLink="/about"
					time="Aug 2023 - Sept 2023"
					address="remote"
					work="I have develop three website. First one is to-list after that  i have developed portfolio and last dashboard UI which is showing details about company where also authentication is added. The mainly focused on css styling and design part for any websites." />
				<Details 
					position="Web Development Intern" 
					campany="Tech Martin" 
					companyLink="/about"
					time="Oct 2021 - Feb 2022"
					address="remote"
					work="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				
				
			</ul>
		</div>
	</div>
  )
}

export default Experience;