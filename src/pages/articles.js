import React from "react";
import Head from "next/head";
import Layout from "@/Container/Layout";
import AnimateHeading from "@/components/Animate/AnimatedHeading";
import FeatureArticle from "@/components/Articles/FeatureArticle";
import articlePagination from "../../public/images/articles/pagination component in reactjs.jpg";
import articlePagination2 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article1 from "../../public/images/articles/create loading screen in react js.jpg";
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article3 from "../../public/images/articles/What is higher order component in React.jpg";
import article4 from "../../public/images/articles/What is Redux with easy explanation.png";
import LiArticles from "@/components/Articles/LiArticles";

const articles = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>VS | Articles Page</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			<main className=" w-full mb-16 flex flex-col justify-center items-center overflow-hidden dark:text-light">
				<Layout className=" pt-16 ">
					<AnimateHeading
						text="This is articles list"
						className=" mb-16"
					/>

					<ul className=" grid grid-cols-2 gap-16">
						<FeatureArticle
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. 
								Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time="9 min read"
							link=""
							img={articlePagination}
						/>
						<FeatureArticle
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. 
								Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time="9 min read"
							link=""
							img={articlePagination2}
						/>
					</ul>

					{/* all remaining articles */}
					<h2 className=" font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
					<ul>
						<LiArticles
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
							date="October 2023"
							link="/"
							img={article1}
						/>
						<LiArticles
							title="Creating An Efficient Modal Component In React Using Hooks And Portals"
							date="October 2023"
							link="/"
							img={article2}
						/>
						<LiArticles
							title="Creating An Efficient Modal Component In React Using Hooks And Portals"
							date="October 2023"
							link="/"
							img={article3}
						/>
						<LiArticles
							title="Redux Simplified: A Beginner's Guide For Web Developers"
							date="October 2023"
							link="/"
							img={article4}
						/>
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
