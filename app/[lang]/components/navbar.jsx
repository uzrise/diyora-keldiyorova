"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScrollToSection = (e, sectionId) => {
      e.preventDefault();
      const targetElement = document.querySelector(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      const sectionId = link.getAttribute("href");
      link.addEventListener("click", (e) =>
        handleScrollToSection(e, sectionId)
      );
    });

    return () => {
      links.forEach((link) => {
        const sectionId = link.getAttribute("href");
        link.removeEventListener("click", (e) =>
          handleScrollToSection(e, sectionId)
        );
      });
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="bg-transparent h-[120px] max-w-[1600px] px-16 2xl:p-0 w-full mx-auto flex items-center justify-between"
    >
      <span>
        <Logo />
      </span>
      <nav>
        <ul className="text-[#878787] text-xl font-normal lg:flex gap-[60px] hidden">
          <li className="cursor-pointer">
            <a href="#about-us" className="nav-link">
              About me
            </a>{" "}
          </li>
          <li className="cursor-pointer">Results</li>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">Key connections</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
