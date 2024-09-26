"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import Script from "next/script"; // Import the Script component for Google Tag

export default function Home() {
  useEffect(() => {
    // Initialize Google Tag Manager after the component has mounted
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YFS9PQG3BF'); // Replace with your actual Google Tag ID
  }, []);

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        strategy="afterInteractive" // Ensures the script loads after the page becomes interactive
        src={`https://www.googletagmanager.com/gtag/js?id=G-YFS9PQG3BF`} // Replace with your Google Tag ID
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YFS9PQG3BF');
        `}
      </Script>

      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
