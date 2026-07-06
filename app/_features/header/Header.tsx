"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Header.css";

interface NavItem {
  href: string;
  src: string;
  alt: string;
  color: string;
  iconFilter?: string;
}

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<NavItem | null>(null);

  const navItems: NavItem[] = [
    {
      href: "#rss",
      src: "https://img.icons8.com/dusk/64/rss.png",
      alt: "Flux RSS",
      color: "text-amber-400",
    },
    {
      href: "#weather",
      src: "https://img.icons8.com/dusk/64/partly-cloudy-day--v1.png",
      alt: "Météo",
      color: "text-sky-400",
    },
    {
      href: "#books",
      src: "https://img.icons8.com/dusk/64/open-book--v1.png",
      alt: "Lectures et Livres",
      color: "text-indigo-400",
    },
    {
      href: "#dice",
      src: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dice-geek-culture-flaticons-lineal-color-flat-icons-7.png",
      alt: "Générateur de dés de jeu",
      color: "text-purple-400",
    },
    {
      href: "#finance",
      src: "https://img.icons8.com/dusk/64/money-box--v1.png",
      alt: "Tirelire et Finances",
      color: "text-emerald-400",
    },
    {
      href: "#workspace",
      src: "https://img.icons8.com/dusk/64/home-office.png",
      alt: "Espace Bureau Hub",
      color: "text-rose-400",
    },
    {
      href: "#conversation",
      src: "https://img.icons8.com/dusk/64/chat-message--v1.png",
      alt: "Conversation IA",
      color: "text-cyan-400",
    },
    {
      href: "#settings",
      src: "https://img.icons8.com/dusk/64/settings.png",
      alt: "Configuration Système",
      color: "text-cyan-400",
    },
    {
      href: "#account",
      src: "https://img.icons8.com/clouds/100/red-panda.png",
      alt: "Profil Utilisateur",
      color: "none",
    },
  ];

  const totalItems = navItems.length;
  const radius = 160;

  return (
    <div className="relative z-50 flex w-full justify-center px-3 pt-4 sm:px-6 sm:pt-6">
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-2xl" />
      </div>

      <header
        className={`relative z-50 flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_24px_rgba(255,255,255,0.08)] transition-all duration-500 ease-in-out will-change-[width,height,border-radius]
        ${
          isOpen
            ? "w-[88vw] max-w-[360px] aspect-square rounded-full sm:w-[32vw] sm:max-w-[360px] sm:min-w-[280px] sm:h-[32vw] sm:max-h-[360px]"
            : "w-[90vw] max-w-[320px] h-16 rounded-2xl sm:w-[60%] sm:max-w-[420px] sm:h-20"
        }`}
        role="banner"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={
            isOpen ? "Fermer le menu système" : "Ouvrir le menu système"
          }
          className={`absolute flex flex-col items-center justify-center text-center select-none z-20 cursor-pointer p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-300
            ${
              isOpen
                ? "w-36 h-36 rounded-full border border-white/20 bg-slate-900/70 sm:w-40 sm:h-40"
                : "w-full h-full rounded-2xl"
            }`}
        >
          <div className="min-h-[24px] overflow-hidden whitespace-nowrap">
            <span className="typewriter-text text-cyan-400 font-bold text-sm tracking-wider">
              {isOpen ? ">_ CLOSE_CORE" : ">_ RETRO_CORE"}
            </span>
          </div>

          <div className="h-3 m-3">
            <span
              className={`text-[9px] font-bold tracking-widest uppercase transition-colors duration-150 ${activeItem && isOpen ? activeItem.color : "text-slate-500 animate-pulse"}`}
            >
              {isOpen
                ? activeItem
                  ? activeItem.alt
                  : "SELECT_MODULE"
                : "[ DEPLOY_SYS ]"}
            </span>
          </div>
        </button>

        <nav
          aria-label="Navigation principale du Hub"
          className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ul>
            {navItems.map((item, index) => {
              const angle = (index * 360) / totalItems;

              return (
                <li
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
                  style={{
                    transform: isOpen
                      ? `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg) scale(1)`
                      : `rotate(${angle}deg) translate(0px) rotate(${-angle}deg) scale(0)`,
                  }}
                >
                  <a
                    href={item.href}
                    tabIndex={isOpen ? 0 : -1}
                    className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-transparent bg-slate-900/40 p-2 transition-all duration-150 hover:scale-115 hover:border-cyan-400/80 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-md"
                    onMouseEnter={() => setActiveItem(item)}
                    onMouseLeave={() => setActiveItem(null)}
                    onFocus={() => setActiveItem(item)}
                    onBlur={() => setActiveItem(null)}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      width={index === 7 ? 54 : 44}
                      height={index === 7 ? 54 : 44}
                      className="transition-transform duration-150 filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                      style={{ filter: item.iconFilter ?? undefined }}
                      unoptimized
                    />
                    <span className="sr-only">{item.alt}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
