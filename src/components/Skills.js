import React from "react";
import { motion } from "framer-motion";

export const Skill = ({ name, x, y }) => {
	// console.log(name, x, y);
	return (
		<motion.div
			className=" cursor-pointer flex justify-center items-center font-semibold rounded-full bg-dark text-light shadow-dark dark:bg-light/90 dark:text-dark  dark:shadow-white py-3 px-6 absolute "
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
			<h1 className=" font-bold text-8xl mt-64 w-full text-center">
				Skills
			</h1>
			<div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
				<motion.div
					className=" cursor-pointer flex justify-center items-center font-semibold rounded-full p-6 bg-dark text-light dark:bg-light dark:text-dark shadow-dark"
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
