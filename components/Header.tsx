import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState([
    { id: 1, name: "Jordan", slug: 11 },
    { id: 2, name: "Sneakers", slug: 8 },
    { id: 3, name: "Running shoes", slug: 64 },
    { id: 4, name: "Football shoes", slug: 107 },
  ]);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            className="w-[40px] md:w-[60px]"
            width="60"
            height="60"
            alt="logo"
          />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
      </div>
    </header>
  );
};

export default Header;
