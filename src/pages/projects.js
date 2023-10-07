import Layout from "@/Layout/Layout";
import AnimateHeading from "@/components/Animate/AnimateHeading";
import Head from "next/head";
import React from "react";

const projects = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>VS | Project Page</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			{/* content */}
			<main className=" flex flex-col justify-center items-center ">
				<Layout className=" pt-16">
					{/* heading of page */}
					<AnimateHeading text="Projects of all semester"/>

					{/* list of feature project */}
					<div className=" grid grid-cols-12 gap-24 ">

						<div className=" col-span-12 ">
							feature projects 1
						</div>
						<div className=" col-span-6 ">
							projects-1
						</div>
						<div className=" col-span-6 ">
							projects-2
						</div>
						<div className=" col-span-12 ">
							feature projects 2
						</div>
						<div className=" col-span-6 ">
							projects-4
						</div>
						<div className=" col-span-6 ">
							projects-4
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
