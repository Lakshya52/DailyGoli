import React, { useState, useEffect } from "react";
import { Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: <Instagram /> },
  { icon: <Linkedin /> },
  { icon: <Twitter /> },
];

const navLinks = [
  { text: "Ingredients", href: "#ingredients", rotate: "hover:-rotate-3" },
  { text: "Benefits", href: "#benefits", rotate: "hover:-rotate-3" },
  { text: "Reviews", href: "#reviews", rotate: "hover:rotate-3" },
  { text: "FAQs", href: "#faqs", rotate: "hover:rotate-3" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScroll > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed w-full z-9999 flex items-center justify-between ${scrolledPastHero ? "h-[15dvh] bg-(--color-primary)/20" : "h-[20dvh]"}  px-[100px] backdrop-blur-2xl  transition-all duration-400 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* social media links */}
        <div className="flex items-center justify-center w-fit gap-1">
          {socialLinks.map((item, index) => (
            <div
              key={index}
              className="h-10 w-10 rounded-full bg-(--white) text-(--color-primary) flex items-center justify-center hover:-translate-y-4 hover:-rotate-3 transition-all duration-400 cursor-pointer hover:bg-(--color-primary) hover:text-(--white)"
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* navigation links */}
        <ul className="flex gap-1 items-end">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`hover:-translate-y-4 ${item.rotate} transition-all duration-400 cursor-pointer group`}
            >
              <li className="h-10 w-fit px-4 text-(--white) rounded-full bg-(--color-primary)  flex items-center justify-center font-lex-reg group-hover:text-(--color-primary) group-hover:bg-(--white) group-hover:border border-(--color-primary)  transition-all duration-400 ">
                {item.text}
              </li>
            </a>
          ))}
        </ul>

        {/* buy now cta button */}
        <a href="#product">
          <div className="flex items-center justify-center w-fit group cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-(--white) group-hover:bg-(--color-primary) group-hover:text-(--white) text-(--color-primary) flex items-center justify-center transition-transform duration-[400ms] group-hover:translate-x-[90px]">
              <ArrowUpRight />
            </div>
            <span className="h-10 w-fit flex items-center justify-center px-4 rounded-full bg-(--white) group-hover:bg-(--color-primary) group-hover:text-(--white) text-(--color-primary) font-lex-reg transition-all duration-[400ms] group-hover:-translate-x-[50px] group-hover:-rotate-6">
              Buy Now
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
