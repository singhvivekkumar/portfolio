import React, { useRef } from "react";
import ListIcon from "./IconComponents/ListIcon";
import { motion } from "framer-motion";

const Details = ({ position, campany, companyLink, time, address, work }) => {
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
				{position} &nbsp; <a className=" text-primary " href={companyLink}>@{campany}</a>
			</h3>
			<span className=" capitalize text-dark/75 font-medium">
				{time} | {address}
			</span>
			<p className=" font-medium w-full">{work}</p>
			</motion.div>
		</li>
	);
};

export default Details;
