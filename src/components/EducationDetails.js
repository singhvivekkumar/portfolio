import React, { useRef } from "react";
import ListIcon from "./IconComponents/ListIcon";
import { motion } from "framer-motion";

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null);
	return (
		<li ref={ref} className="  my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col justify-between">
			<ListIcon reference={ref} />
			<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{
					duration: 0.5,
					delay: 0.2
				}}
			>
			<h3 className=" capitalize font-bold text-2xl ">
				{type}
			</h3>
			<span className=" capitalize text-dark/75 dark:text-light/75 font-medium">
				{time} | {place}
			</span>
			<p className=" font-medium w-full">{info}</p>
			</motion.div>
		</li>
	);
};

export default Details;
