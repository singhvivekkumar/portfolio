import Layout from "@/Layout/Layout";
import AnimateHeading from "@/components/Animate/AnimateHeading";
import FeatureCard from "@/components/Cards/FeatureCard";
import Head from "next/head";
import React from "react";
import featureProject1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import SimpleCard from "@/components/Cards/SimpleCard";

const projects = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>VS | Project Page</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			{/* content */}
			<main className=" flex flex-col justify-center items-center dark:text-light ">
				<Layout className=" pt-16">
					{/* heading of page */}
					<AnimateHeading text="Projects of all semester" className=" mb-16 "/>

					{/* list of feature prtoject */}
					<div className=" grid grid-cols-12 gap-24 gap-y-36 ">

						<div className=" col-span-12 ">
							<FeatureCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								summary="This is NamTube which is clone of youtube for video streaming.  In this, I have added many feature which you have experience in youtube. I hope you would like. This project was a challenging but rewarding experience. I learned a lot about building scalable and performant web applications."
								img={featureProject1}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"

							/>
						</div>
						<div className=" col-span-6 ">
							<SimpleCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								img={featureProject1}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"
							/>
						</div>
						<div className=" col-span-6 ">
						<SimpleCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								img={featureProject1}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"
							/>
						</div>
						<div className=" col-span-12 ">
						<FeatureCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								summary="This is NamTube which is clone of youtube for video streaming.  In this, I have added many feature which you have experience in youtube. I hope you would like. This project was a challenging but rewarding experience. I learned a lot about building scalable and performant web applications."
								img={featureProject1}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"

							/>
						</div>
						<div className=" col-span-6 ">
						<SimpleCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								img={featureProject1}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"
							/>
						</div>
						<div className=" col-span-6 ">
						<SimpleCard
								type="Feature Project"
								title="NamTube - Youtube Clone"
								img={featureProject1}
								link="https://youtube-clone-vivek-singh.netlify.app"
								github="https://github.com/singhvivekkumar/youtube-clone"
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
