import React from "react";
import { motion, useScroll } from "framer-motion";

const ListIcon = ({ reference }) => {
	// console.log(reference)
	const { scrollYProgress } = useScroll({
		target: reference,
		offset: ["center end", "center center"],
	});
	return (
		<figure className=" absolute left-0 xs:-left-9 w-10 h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 stroke-dark dark:stroke-light">
			<svg className=" -rotate-90 " width="75" height="75" viewBox="0 0 100 100">
				<circle
					cx="75"
					cy="50"
					r="20"
					className=" stroke-primary stroke-1 fill-none "
				/>
				<motion.circle
					style={{ pathLength : scrollYProgress}}
					whileInView={{ transition: { duration: 0.8}}}
					cx="75"
					cy="50"
					r="20"
					className=" stroke-[5px] fill-light dark:fill-dark "
				/>
				<circle
					cx="75"
					cy="50"
					r="10"
					className=" stroke-1 animate-pulse fill-primary "
				/>
			</svg>
		</figure>
	);
};

export default ListIcon;
