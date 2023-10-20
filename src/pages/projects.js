import Layout from "@/Container/Layout";
import AnimateHeading from "@/components/Animate/AnimatedHeading";
import FeatureCard from "@/components/Cards/FeatureCard";
import Head from "next/head";
import React from "react";
import getTheSession from "../../public/images/projects/get-the-session.png"
import namTube from "../../public/images/projects/namtube-youtube-clone.png"
import portfolio from "../../public/images/projects/portfolio-project.png"
import foodieFan from "../../public/images/projects/foodie-fan-project.png"
import dashboradUI from "../../public/images/projects/dashboard-UI.png"
import pizzaTruck from "../../public/images/projects/pizza-truck-project.png"
import SimpleCard from "@/components/Cards/SimpleCard";
import TransitionEffect from "@/components/TransitionEffect";

const projects = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>VS | Project Page</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			<TransitionEffect/>
			{/* content */}
			<main className=" flex flex-col justify-center items-center dark:text-light ">
				<Layout className=" pt-16">
					{/* heading of page */}
					<AnimateHeading text="Project Activities" className=" mb-16 lg:!text-7xl sm:!mb-6 sm:!text-6xl xs:!text-4xl "/>

					{/* list of feature prtoject or simple project */}
					<div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-20 lg:gap-x-16 md:gap-x-8 xs:gap-x-4">

						<div className=" col-span-12 ">
							<FeatureCard
								type="Feature Project"
								title="Get the Session"
								summary="An appointment scheduling system is a web application that allows users to book appointments with consultants . The goal is to provide user with seamless way to view available time slots and book appointment, similiar to paltform like calendly. It also provide an interface for consultants to manage their availability and appointments."
								img={getTheSession}
								link=""
								github="https://github.com/singhvivekkumar/session-scheduler"

							/>
						</div>
						<div className=" col-span-6 sm:col-span-12 ">
							<SimpleCard
								type="Simple Project"
								title="Vivek Singh"
								img={portfolio}
								link="/"
								github="https://github.com/singhvivekkumar/portfolio"
							/>
						</div>
						<div className=" col-span-6 sm:col-span-12 ">
						<SimpleCard
								type="Simple Project"
								title="Foodie Fan"
								img={foodieFan}
								link="https://foodie-fan.vercel.app/"
								github="https://github.com/singhvivekkumar/Foodie-Fan"
							/>
						</div>
						<div className=" col-span-12 ">
						<FeatureCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								summary="This is NamTube which is clone of youtube for video streaming.  In this, I have added many feature which you have experience in youtube. I hope you would like. This project was a challenging but rewarding experience. I learned a lot about building scalable and performant web applications."
								img={namTube}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"

							/>
						</div>
						<div className=" col-span-6 sm:col-span-12">
						<SimpleCard
								type="Simple Project"
								title="DashBoard UI"
								img={dashboradUI}
								link="https://dashboard-vivek.netlify.app/"
								github="https://github.com/singhvivekkumar/dashboard"
							/>
						</div>
						<div className=" col-span-6 sm:col-span-12">
						<SimpleCard
								type="Simple Project"
								title="Pizza Truck"
								img={pizzaTruck}
								link="https://pizzatruck.netlify.app/"
								github="https://github.com/singhvivekkumar/food-blogging-website"
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
