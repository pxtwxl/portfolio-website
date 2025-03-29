"use client";
import clsx from 'clsx'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image';


const ItemLayout = ({children,className}) => {
    return <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.5}}
        viewport={{once:true}}
        className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center',className)}>
        {children}
    </motion.div>
}


const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full'>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="mt-6 font-light  text-xs sm:text-sm md:text-base   ">
            My journey in development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
            
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="">
            <sub className="font-semibold text-base">IIT Bombay Techfest 2023 Finalist</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="">
            <sub className="font-semibold text-base">1 Year Product Based Company Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-4 !p-0'}>
          <img className='w-full h-auto' 
          src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs/?username=pxtwxl&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} 
          alt="Anuj Patwal" loading='lazy'/>
        </ItemLayout>  

        <ItemLayout className={'col-span-8 !p-0'}>
          <img className='w-full h-auto' 
          src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=pxtwxl&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} 
          alt="Anuj Patwal" loading='lazy'/>
        </ItemLayout>   

         <ItemLayout className={'col-span-full'}>
          <img className='w-full h-auto' 
          src={`https://skillicons.dev/icons?i=appwrite,cloudflare,figma,firebase,git,github,graphql,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,java,cpp,react,tailwind,threejs,vercel,vite,vscode,js,html,css,typescript`} 
          alt="Anuj Patwal Skills" loading='lazy'/>
        </ItemLayout>  

        <ItemLayout className={'col-span-6'}>
            <div>
            <h2 className="text-4xl font-semibold col-span-full xs:col-span-6 lg:col-span-4 text-accent">Anuj Patwal LeetCode Stats</h2>
          <img className='mt-6 w-full h-auto' 
          src={`${process.env.NEXT_PUBLIC_LEETCODE_STATS_URL}/pxtwxl?ext=heatmap&theme=forest&show_rank=true`} 
          alt="Anuj Patwal" loading='lazy'/>
            </div>
        </ItemLayout> 

        <ItemLayout className={'col-span-6'}>
          <img className='w-full h-auto' 
          src={`${process.env.NEXT_PUBLIC_CODEFORCES_STATS_URL}/api/card?username=pxtwxl&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&border_color=no`}
          alt="Anuj Patwal" loading='lazy'/>
        </ItemLayout> 

        </div>
    </section>
  )
}

export default AboutDetails
