"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ t }) => {
  const pathname = usePathname();

  const { push } = useRouter();
  const currentLang = pathname?.split("/")[1] || "uz";
  const [language, setLanguage] = useState(currentLang);
  const navbarRef = useRef(null);

  useEffect(() => {
    setLanguage(currentLang); // Update language when URL changes
  }, [currentLang]);

  // Scroll to sections smoothly
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

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    push(`/${selectedLang}`);
  };

  return (
    <header
      ref={navbarRef}
      className="bg-[#0000003D] backdrop-blur-xl left-0 right-0 fixed top-0 h-[120px]  w-full mx-auto flex"
    >
      <div className="max-w-[1600px] w-full mx-auto px-16 2xl:p-0 flex items-center justify-between">
        <Link href={`/${language}`}>
          <Logo />
        </Link>
        <nav className="flex items-center gap-8">
          <ul className="text-[#878787] text-xl font-normal lg:flex gap-[60px] hidden">
            <li className="cursor-pointer">
              <a href="#about-me" className="nav-link">
                {t.nav.about_me}
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#results" className="nav-link">
                {t.nav.results}
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#gallery" className="nav-link">
                {t.nav.gallery}
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#connections" className="nav-link">
                {t.nav.key_connections}
              </a>
            </li>
          </ul>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="text-[#878787] text-xl font-normal bg-transparent outline-none"
          >
            <option value="uz" className="bg-[#252525]">
              Uz
            </option>
            <option className="bg-[#252525]" value="ru">
              Ru
            </option>
            <option className="bg-[#252525]" value="en">
              En
            </option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
