import React, { useRef } from "react";
import ListIcon from "./IconComponents/ListIcon";
import { motion } from "framer-motion";

const Details = ({ position, campany, companyLink, time, address, work }) => {
	const ref = useRef(null);
	return (
		<li ref={ref} className="  my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col justify-between md:w-[80%] xs:w-[90%]">
			<ListIcon reference={ref} />
			<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{
					duration: 0.5,
					delay: 0.2
				}}
			>
			<h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
				{position} &nbsp; <a className=" text-primary " href={companyLink}>@{campany}</a>
			</h3>
			<span className=" capitalize text-dark/75 font-medium xs:text-sm">
				{time} | {address}
			</span>
			<p className=" font-medium w-full sm:text-sm sm:font-normal">{work}</p>
			</motion.div>
		</li>
	);
};

export default Details;
