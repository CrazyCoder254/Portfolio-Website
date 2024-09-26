"use client";
import React, { useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import {animate, motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id:1,
    title:"React Portfolio Website",
    description: "I designed and developed a modern portfolio website using Next.js and Tailwind CSS to showcase my skills as a full-stack software engineer. The site features an interactive and responsive design optimized for all devices, with sections highlighting my key projects, skills, and professional experience. It incorporates dynamic elements like TypeAnimation for enhanced user engagement, and includes detailed project showcases, along with a contact form for easy communication. The portfolio reflects my expertise in web development and serves as an online resume to display my technical abilities.",
    image: "/images/projects/portfolio.png",
    tag:["All", "Web"],
    gitUrl: "https://github.com/CrazyCoder254/Portfolio-Website",
    previewUrl: "https://kentech-portfolio.vercel.app/",
  },
  {
    id:2,
    title:"DocFinder",
    description: "The Medical App is a comprehensive healthcare platform designed to enhance patient care and streamline communication between patients and healthcare providers. The app enables users to book appointments, access medical records, receive real-time notifications for prescriptions and health updates, and consult with doctors through a secure video chat system. Equipped with advanced features like AI-powered symptom checking and integration with wearable devices, the app empowers users to monitor their health proactively. Additionally, it offers healthcare professionals a user-friendly interface for managing patient data, scheduling, and telemedicine services, ensuring a seamless healthcare experience for all.",
    image: "/images/projects/medical.png",
    tag:["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:3,
    title:"Poultry Management",
    description: "The Poultry Management App is a comprehensive software solution designed to streamline and optimize the daily operations of poultry farms. It enables farmers to efficiently manage flock health, feeding schedules, egg production, and inventory tracking. The app offers real-time monitoring of bird growth, mortality rates, and environmental conditions, helping to ensure optimal productivity and animal welfare. Additionally, it provides detailed analytics and reports, making it easier for farmers to make data-driven decisions for improved profitability. With features for farm staff management and automated reminders, the app simplifies the complexities of poultry farming, empowering farmers to run their operations more effectively.",
    image: "/images/projects/poultry.png",
    tag:["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:4,
    title:"Rental Management System",
    description: "The Rental Management App is a comprehensive platform designed to streamline the rental process for property owners and tenants alike. It offers features such as property listings, tenant applications, lease agreements, and payment tracking, enabling landlords to manage their properties efficiently while providing a user-friendly experience for renters. With an integrated calendar for scheduling viewings and reminders for rent due dates, the app enhances communication between landlords and tenants. Additionally, it incorporates analytics tools to help property owners assess rental performance and optimize pricing strategies. By leveraging technology to simplify the rental management process, the app aims to reduce administrative burdens and improve the overall rental experience for all users.",
    image: "/images/projects/rental.png",
    tag:["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:5,
    title:"Movie Streaming Site",
    description: "The Movie Streaming App is a user-friendly platform designed to provide an extensive library of films and television series, catering to diverse tastes and preferences. Users can easily browse and discover new content through an intuitive interface, featuring personalized recommendations based on viewing history. The app supports various streaming qualities and allows users to create custom watchlists, share recommendations with friends, and engage in discussions through integrated social features. Additionally, it offers offline viewing options for users on the go, ensuring seamless access to their favorite films anytime, anywhere. With a robust search functionality and regular updates to the content library, the Movie Streaming App aims to enhance the entertainment experience for film enthusiasts around the world.",
    image: "/images/projects/moviestreaming.png",
    tag:["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project)=>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y:50, opacity:0},
    animate: {y:0, opacity: 1}
  };

  return (
    <section id='projects'>
    <h2 className='text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6  '>
      <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
      <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
      <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-0 md:gap-12'>{filteredProjects.map((project, index)=> 
      <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration:0.3, delay: index*0.4}}>
      <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
      </motion.li>
      )}
      </ul>
    </section>
  )
}

export default ProjectsSection