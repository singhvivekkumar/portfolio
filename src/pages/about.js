import Layout from "@/Layout/Layout";
import AnimateHeading from "@/components/Animate/AnimateHeading";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePhoto from "../../public/images/profile/profile-pic-2.png";
import AnimatedNumbers from "@/components/Animate/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";

// to use a component in framer motion... make it 
const FramerImage = motion(Image);

const about = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>VS | About Page</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			{/* content */}
			<main className=" flex flex-col items-center justify-center dark:text-light ">
				<Layout className="pt-10">
					{/* Heading */}
					<AnimateHeading
						text={"Passion for coding"}
						className={" !text-6xl mb-12"}
					/>

					{/* about page structure */}
					<div className=" w-full grid grid-cols-8 gap-16 ">
						{/* introduction about self */}
						<div className=" col-span-3 flex flex-col items-center justify-center gap-4 ">
							<h1 className=" text-lg font-bold uppercase text-dark/70 dark:text-light/75">
								Introduction
							</h1>
							<p className=" font-medium ">
								I am software engineer graduate, with a passion
								for coding and problem-solving. I am well
								acquainted with react js, tailwindCSS, node js
								and MySQL. I am an eager learner constantly
								striving to improve my skills. I am also a team
								player and enjoy collaborating on project.
							</p>
							<p className=" font-medium">
								I have strong understanding in core of computer
								science. I would like to tell about my project
								where I showcase my experience that reflect
								myself. Thank you for reading about me and have
								a good day
							</p>
							<p className=" font-medium">
								I have strong understanding in core of computer
								science. I would like to tell about my project
								where I showcase my experience that reflect
								myself. Thank you for reading about me and have
								a good day
							</p>
						</div>

						{/* your profile Image */}
						<div className=" col-span-3 min-h-full  rounded-2xl border-2 border-solid border-dark p-6 bg-light relative">
							<div className=" absolute top-0 -right-3 rounded-3xl h-[103%] w-[102%] bg-dark -z-10" />
							<FramerImage
								src={profilePhoto}
								alt="Vivek Singh"
								className=" h-auto rounded-2xl bg-gradient-to-tr from-cyan-300 p-4 pb-0 via-orange-200 to-pink-300"
								whileHover={{scale:1.05}}
								transition={{duration:1.7, delay:0.3}}
							/>
						</div>

						{/* number which make impact */}
						<div className=" col-span-2 flex flex-col items-end justify-between ">
							<div className=" flex flex-col items-end justify-center ">
								<span className=" inline-block text-7xl font-bold dark:text-light/75"><AnimatedNumbers value={50}/>+</span>
								<h1 className=" text-xl font-medium text-dark/75 dark:text-light/75  capitalize">client</h1>
							</div>
							<div className=" flex flex-col items-end justify-center ">
								<span className=" inline-block text-7xl dark:text-light/75 font-bold"><AnimatedNumbers value={40}/>+</span>
								<h1 className=" text-xl font-medium text-dark/75 dark:text-light/75 capitalize">client</h1>
							</div>
							<div className=" flex flex-col items-end justify-center">
								<span className=" inline-block text-7xl font-bold dark:text-light/75"><AnimatedNumbers value={570}/>+</span>
								<h1 className=" text-xl font-medium text-dark/75 dark:text-light/75 capitalize">client</h1>
							</div>
						</div>
					</div>

					{/* Skills section */}
					<Skills/>

					{/* Experience */}
					<Experience />

					{/* Education  */}
					<Education/>
				</Layout>
			</main>
		</>
	);
};

export default about;
