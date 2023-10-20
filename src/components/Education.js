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
		<h2 className=' text-8xl font-bold mb-16 w-full text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>Education</h2>
		<div className=' w-[75%] mx-auto relative lg:w-[80%] sm:w-[90%] xs:w-full ' ref={ref} >

			<motion.div className=' absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top sm:left-0 md:-[2px]'
				style={{scaleY:scrollYProgress}}/>
			<ul className=" flex flex-col justify-between items-start ml-4 ">
				<EducationDetails 
					type="Bachelor of Technology" 
					time="2023"
					place="Patna, Bihar, India"
					info="I am graduated from BP Mandal College of Engineering. I have completed my bachelor degree in computer science and technology with 8.14 CGPA. I have studied core concept of computer science like computer organization , theory of computer, compiler design, operating system and database management system" />
				<EducationDetails 
					type="Intermediate" 
					time="2018"
					place="Ara, Bihar, India"
					info="I have completed my high schooling from TOWN INTER STARIYA SCHOOL with first division. In the intermediate, Main subjects are Physics, Chemistry and Mathematics then addational subjects are Hindi and English. " />
				<EducationDetails 
					type="Matriculation" 
					time="2016"
					place="Patna, Bihar, India"
					info="I did my matriculation from MOTHER'S INTERNATIONAL ACADEMY with 8.8 CGPA." />
				
			</ul>
		</div>
	</div>
  )
}

export default Education;