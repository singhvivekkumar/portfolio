import Layout from '@/Container/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profile-removebg-2.png"
import AnimateHeading from '@/components/Animate/AnimatedHeading'
import Link from 'next/link'
import LinkArrow from '@/components/IconComponents/LinkArrow'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivek Singh</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=' flex items-center text-dark min-h-screen  dark:text-light'>
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          {/* stucture */}
          <div className=' flex items-center justify-between w-full lg:flex-col'>

            {/* Heading */}
            <div className=' w-1/2 flex flex-col items-center self-center lg:w-full  md:order-2'>
              {/* Heading intro */}
              <AnimateHeading text={`I'm software engineer gradute with passion of problem-sloving.`} className=" !text-6xl !text-left xl:!text-5xl md:!text-3xl sm:!text-2xl "/>
              <p className=' my-4 text-base md:text-sm font-medium md:font-normal '> As a skilled full-stack developer, I am dedicated to turning ideas into innovative applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>

              {/* Two Button for more */}
              <div className=' flex items-center self-start mt-2 space-x-5 lg:self-center '>
                {/* For resume pdf */}
                <Link href="/" target={"_blank"}
                  className=' flex items-center self-center text-center text-lg ring-2 ring-transparent ring-offset-0 hover:ring-dark p-2 px-4 rounded-lg font-semibold bg-dark text-light hover:bg-dark/5 active:bg-green-100 hover:text-dark transition-all hover:shadow-inner hover:scale-105 duration-500 ease-out dark:bg-light dark:text-dark hover:dark:ring-light hover:dark:bg-dark hover:dark:text-light' 
                >Resume <LinkArrow className={" w-6 ml-1 "}/></Link>
                {/* send email to my address */} 
                <Link href="mailto:singhvivekkumar309@gmail.com" target={"_blank"}
                  className=' flex items-center self-center text-center text-lg ring-2 ring-dark ring-offset-0 p-2 px-4 rounded-lg font-semibold hover:bg-dark/5 active:bg-dark/5  transition-all hover:shadow-inner hover:scale-105 duration-500 ease-out underline underline-offset-1 '
                >CONTACT</Link>
              </div>
            </div>

            {/* profile photo */}
            <div className=' w-1/2 lg:hidden md:inline-block md:w-full md:order-1'>
              <Image alt='Vivek Singh' className='w-full h-auto dark:brightness-[0.9] dark:contrast-[1.2] ' src={profilePic} 
              priority 
              sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw"/>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
