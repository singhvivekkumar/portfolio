import React from "react";
import { motion } from "framer-motion";

export const Skill = ({ name, x, y }) => {
	// console.log(name, x, y);
	return (
		<motion.div
			className=" cursor-pointer flex justify-center items-center font-semibold rounded-full bg-dark text-light shadow-dark dark:bg-light/90 dark:text-dark  dark:shadow-white py-3 px-6 absolute lg:py-2 lg:px-4 md:p-1 md:px-3 md:font-normal xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
			viewport={{once: true}}>
			{name}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<h1 className=" font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:text-5xl sm:mt-24 ">
				Skills
			</h1>
			<div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:scale-y-80 sm:scale-y-100 lg:h-[90vh] md:h-[80vh] xs:h-[40vh] overflow-clip xs:translate-y-48 xs:scale-150 xs:scale-x-125 ">
				<motion.div
					className=" cursor-pointer flex justify-center items-center font-semibold rounded-full p-6 bg-dark text-light dark:bg-light dark:text-dark shadow-dark lg:p-4 md:p-2.5 "
					whileHover={{ scale: 1.05 }}>
					Web
				</motion.div>
				<Skill name="c/c++" x="-27vw" y="-10vw" />
				<Skill name="HTML" x="13vw" y="-2vw" />
				<Skill name="CSS" x="-7vw" y="10vw" />
				<Skill name="TailwindCSS" x="-23vw" y="8vw" />
				<Skill name="JavaScript" x="10vw" y="10vw" />
				<Skill name="Reactjs" x="-13vw" y="0vw" />
				<Skill name="Redux ToolKit" x="-25vw" y="-3vw" />
				<Skill name="TypeScript" x="-12vw" y="-13vw" />
				<Skill name="Nextjs" x="-2vw" y="-19vw" />
				<Skill name="Nodejs" x="-3vw" y="19vw" />
				<Skill name="Expressjs" x="10vw" y="-10vw" />
				<Skill name="MySQL" x="25vw" y="-5vw" />
				<Skill name="MongoDB" x="23vw" y="13vw" />
			</div>
		</>
	);
};

export default Skills;
