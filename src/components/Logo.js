import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className="flex items-center  justify-center mt-2">
			<MotionLink
				href="/"
				className="w-16 h-16 md:w-12 md:h-12 rounded-full flex text-2xl md:text-xl items-center justify-center font-bold bg-black text-white dark:bg-dark
					border border-solid border-transparent dark:border-light"
				whileHover={{
					scale: 1.08,
					transition:{
						duration:1.0,
						repeat: Infinity
					},
					backgroundColor: [
						"#121212",
						"rgba(131,58,180,1)",
						"rgba(253,29,29,1)",
						"rgba(252,176,69,1)",
						"rgba(131,58,180,1)",
						"#121212",
					],
				}}>
				VKS
			</MotionLink>
		</div>
	);
};

export default Logo;
