"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/svg/dam-ng.svg";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
    { name: "Policies", href: "/policies" },
  ];

  return (
    <header className="fixed z-100 w-full bg-white text-(--color-text-gray)">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14 py-4">
        <Link href="/">
          <Image
            src={logo}
            alt=""
            width={70}
            height={70}
            className="w-auto h-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-(--color-text-gray) font-medium transition hover:text-gray-900"
          >
            Log In
          </Link>

          <Link
            href="#"
            className="bg-(--color-primary-medium) px-4 py-2 font-medium text-white transition hover:bg-(--color-primary-hover)"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[12px] font-medium transition hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="#"
                className="text-sm text-(--color-text-gray) font-medium text-center transition hover:text-gray-900"
              >
                Log In
              </Link>

              <Link
                href="#"
                className="bg-(--color-primary-medium) px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-(--color-primary-hover)"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
