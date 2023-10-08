import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import TwitterIcon from "./IconComponents/TwitterIcon";
import GithubIcon from "./IconComponents/GithubIcon";
import LinkedInIcon from "./IconComponents/LinkedInIcon";
import PinterestIcon from "./IconComponents/PinterestIcon";
import InstagramIcon from "./IconComponents/InstagramIcon";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import SunIcon from "./IconComponents/SunIcon";
import MoonIcon from "./IconComponents/MoonIcon";

const CustomeLink = ({href, title, className="" }) => {

	const router = useRouter();
	
	return (
		<Link href={href} className={`${className} relative group `}>
			{title}
			<span className={`absolute left-0 -bottom-0.5 h-[2px] inline-block bg-black group-hover:w-full 
			transition-[width] ease-linear duration-300 ${router.asPath === href? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
		</Link>
	);
};

const Navbar = () => {

	const [mode, setMode] = useThemeSwitcher();
	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light ">
			{/* list pages */}
			<nav>
				<CustomeLink href="/" title="Home" className=" mr-4 "/>
				<CustomeLink href="/about" title="About" className=" mx-4 "/>
				<CustomeLink href="/projects" title="Projects" className=" mx-4 "/>
				<CustomeLink href="/articles" title="Articles" className=" ml-4 "/>
			</nav>
			
			{/* social media or theme */}
			<nav className=" flex justify-center items-center flex-wrap">
				<motion.a href="https://twitter.com/Vivek20022001" target={"_blank"}
				whileHover={{y:-2}}
				whileTap={{scale:0.9}}
				className=" w-8 mr-3 "
				>
					<TwitterIcon/>
				</motion.a>
				<motion.a href="https://github.com/singhvivekkumar" target={"_blank"}
				whileHover={{y:-2}}
				whileTap={{scale:0.9}}
				className=" w-8 mx-3 ">
					<GithubIcon/>
				</motion.a>
				<motion.a href="https://www.linkedin.com/in/singhvivekkumar309/" target={"_blank"}
				whileHover={{y:-2}}
				whileTap={{scale:0.9}}
				className=" w-8 mx-3 ">
					<LinkedInIcon/>
				</motion.a>
				<motion.a href="https://www.instagram.com/singhvivekkumar309/" target={"_blank"}
				whileHover={{y:-2}}
				whileTap={{scale:0.9}}
				className=" w-8 mx-3 ">
					<PinterestIcon/>
				</motion.a>
				<motion.a href="https://www.instagram.com/singhvivekkumar309/" target={"_blank"}
				whileHover={{y:-2}}
				whileTap={{scale:0.9}}
				className=" w-10 ml-3 ">
					<InstagramIcon/>
				</motion.a>

				<button
					className={`flex items-center justify-center rounded-full ml-3 p-2 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
					onClick={ ()=> setMode(mode === "light" ? "dark" : "light")}>
					{
						mode === "dark" ? <SunIcon className={" fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
					}
				</button>
			</nav>

			<div className=" absolute left-[50%] translate-x-[-50%] ">
				<Logo />
			</div>
		</header>
	);
};

export default Navbar;
