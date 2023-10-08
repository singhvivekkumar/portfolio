import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const imgRef = useRef(null);

	const handleMouse = (event) => {
		imgRef.current.style.display = " inline-block ";
		x.set(event.pageX);
		y.set(-10);
		// console.log(event.pageX);
	}

	const handleMouseLeave = (event) => {
		imgRef.current.style.display = "none";
		x.set(0);
		y.set(0);
	}
	return (
		<Link href={link} target="_blank" 
			onMouseMove={handleMouse}
			onMouseLeave={handleMouseLeave}>
			<h2 className=" font-semibold capitalize text-xl hover:underline">
				{title}
			</h2>
			<FramerImage
				style={{ x:x, y:y}}
				transition={{ duration: 0.5}}
			 ref={imgRef} alt={`${title} article image`} src={img} className=" z-10 hidden w-96 h-auto absolute rounded-lg translate-x-[-50%]"
			/>
		</Link>
	);
};

const LiArticles = ({ img, title, date, link }) => {
	return (
		<motion.li className=" relative p-4 py-6 my-4 flex items-center justify-between rounded-xl bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
			initial={{y:200}}
			whileInView={{y:0, transition:{ duration:0.5, ease:"easeInOut"}}}
			viewport={{once:true}}>
			<MovingImg img={img} title={title} link={link} />
			<span className=" text-primary font-semibold pl-2">{date}</span>
		</motion.li>
	);
};

export default LiArticles;
