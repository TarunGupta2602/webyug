"use client";
import { useState, useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css"; // Ensure dark mode styles are defined in this file
import Home from "./header/page";
import Footer from "./footer/page";
import HeroSection from './home/page';

// Custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode with localStorage and class on body element
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); // Save dark mode preference
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Dark Mode</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Pass down darkMode and toggleDarkMode to children */}
        <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        {children}
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </body>
    </html>
  );
}
