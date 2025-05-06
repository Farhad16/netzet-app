"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="relative">
      <div className="flex items-start justify-between h-[74px] mt-[35px]">
        <div className="w-6 md:hidden" />
        <div className="relative mx-auto md:ml-[211px] w-[105px] h-[45px] md:w-[174px] sm:h-[74px]">
          <Image
            src="/fame.svg"
            alt="logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex space-x-6 md:mr-[100px] lg:mr-[211px]">
          <a
            href="/"
            className="font-semibold text-[18px] leading-[100%] tracking-[0%] text-center flex items-center justify-center h-full"
          >
            About us
          </a>
          <a
            href="/about"
            className="font-semibold text-[18px] leading-[100%] tracking-[0%] text-center flex items-center justify-center h-full"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button (right) */}
        <button
          className="md:hidden mr-[29px] cursor-pointer"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar (slides in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-20 shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Menu"
            className="cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="/" onClick={() => setSidebarOpen(false)}>
            Home
          </a>
          <a href="/about" onClick={() => setSidebarOpen(false)}>
            About
          </a>
        </nav>
      </div>

      {/* Overlay behind sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
};
