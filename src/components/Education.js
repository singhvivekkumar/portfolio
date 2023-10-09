import React, { useRef } from 'react'
import EducationDetails from './EducationDetails';
import {motion, useScroll } from 'framer-motion';

const Education = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start']
	})
  return (
	<div className=' my-64'>
		<h2 className=' text-8xl font-bold mb-16 w-full text-center'>Education</h2>
		<div className=' w-[75%] mx-auto relative ' ref={ref} >

			<motion.div className=' absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top'
				style={{scaleY:scrollYProgress}}/>
			<ul className=" flex flex-col justify-between items-start ml-4 ">
				<EducationDetails 
					type="Web Development Intern" 
					time="2020 - Present"
					place="Bangalore, India"
					info="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				<EducationDetails 
					type="Web Development Intern" 
					time="2020 - Present"
					place="Bangalore, India"
					info="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				<EducationDetails 
					type="Web Development Intern" 
					time="2020 - Present"
					place="Bangalore, India"
					info="I have worked as a web development intern at Tech Martin. I have worked on various projects such as
					I have worked as a web development intern at Tech Martin. I have worked as a web development intern at Tech Martin." />
				
			</ul>
		</div>
	</div>
  )
}

export default Education;