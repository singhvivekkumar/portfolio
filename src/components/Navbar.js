import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<header className="w-full py-8 font-medium flex items-center justify-around">
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/articles">Articles</Link>
			</nav>
			<div className=" translate-x-[-50%] ">
				<Logo />
			</div>
			<nav>
				<Link href="/" target={"_blank"}>
					T
				</Link>
				<Link href="/" target={"_blank"}>
					T
				</Link>
				<Link href="/" target={"_blank"}>
					T
				</Link>
				<Link href="/" target={"_blank"}>
					T
				</Link>
				<Link href="/" target={"_blank"}>
					T
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
