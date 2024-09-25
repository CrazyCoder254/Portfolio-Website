"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Ultra } from 'next/font/google';

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Java</li>
                <li>Node.JS</li>
                <li>Flutter</li>
                <li>Kotlin</li>
                <li>React JS</li>
                <li>Python</li>
                <li>Frappe ERPNext</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of Science in Software Engineering</li>
                <li>Kenya Certificate of Secondary Education B+</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Cisco Certified Network Associate</li>
                <li>Hacker Rank Certified</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    };
  return (
    <section className='text white'>
        <div className='md-grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src= "/images/developer.jpg" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg text-white'>
                I am a versatile full-stack Software Engineer with a strong foundation in web and mobile development. 
                Proficient in JavaScript, PHP, Flutter, and Kotlin, I build dynamic web applications and robust mobile solutions. As a Cisco Certified Network Associate, 
                I also excel in network management and hardware diagnostics, offering a comprehensive approach to solving complex tech challenges. 
                </p>
                <div className='flex flex-row mt-8 justify-start text-purple-700'>
                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={()=> handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={()=> handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                </div>
                <div className='text-white'>
                    {TAB_DATA.find((t)=>t.id === tab).content}
                </div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection;