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
    // Zone parente fixe en haut de l'écran pour orchestrer le déploiement
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4 font-mono transition-all duration-500">
      <header
        className={`relative bg-slate-950 border-4 border-double border-pink-500/60 transition-all duration-500 ease-in-out flex items-center justify-center 
          ${
            isOpen
              ? "w-[32vw] h-[32vw] rounded-full shadow-[0_0_30px_rgba(244,63,94,0.25)] mt-20"
              : "w-[18vw] h-[56px] rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:border-cyan-400/80 py-10 px-30"
          }`}
        role="banner"
      >
        {/* INTERRUPTEUR CENTRAL (DÉPLOIE / RÉTRACTE LA ROUE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={
            isOpen ? "Fermer le menu système" : "Ouvrir le menu système"
          }
          className={`absolute flex flex-col items-center justify-center text-center select-none z-20 cursor-pointer p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-300
            ${isOpen ? "w-36 h-36 bg-slate-900 border-2 border-dashed border-slate-800 rounded-full" : "w-full h-full rounded-xl"}`}
        >
          <div className="overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typewriter animate-blink min-h-[24px]">
            <span className="text-cyan-400 font-bold text-sm tracking-wider">
              {isOpen ? ">_ CLOSE_CORE" : ">_ RETRO_CORE"}
            </span>
          </div>

          {/* Sous-titre dynamique */}
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

        {/* CONTENEUR DE NAVIGATION ORBITALE DYNAMIQUE */}
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

export default Header;
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// interface NavItem {
//   href: string;
//   src: string;
//   alt: string;
//   color: string;
// }

// export function Header() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [activeItem, setActiveItem] = useState<NavItem | null>(null);

//   const navItems: NavItem[] = [
//     {
//       href: "#rss",
//       src: "https://img.icons8.com/dusk/64/rss.png",
//       alt: "Flux RSS",
//       color: "text-amber-400",
//     },
//     {
//       href: "#weather",
//       src: "https://img.icons8.com/dusk/64/partly-cloudy-day--v1.png",
//       alt: "Météo",
//       color: "text-sky-400",
//     },
//     {
//       href: "#books",
//       src: "https://img.icons8.com/dusk/64/open-book--v1.png",
//       alt: "Lectures et Livres",
//       color: "text-indigo-400",
//     },
//     {
//       href: "#dice",
//       src: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dice-geek-culture-flaticons-lineal-color-flat-icons-7.png",
//       alt: "Générateur de dés de jeu",
//       color: "text-purple-400",
//     },
//     {
//       href: "#finance",
//       src: "https://img.icons8.com/dusk/64/money-box--v1.png",
//       alt: "Tirelire et Finances",
//       color: "text-emerald-400",
//     },
//     {
//       href: "#workspace",
//       src: "https://img.icons8.com/dusk/64/home-office.png",
//       alt: "Espace Bureau Hub",
//       color: "text-rose-400",
//     },
//     {
//       href: "#settings",
//       src: "https://img.icons8.com/dusk/64/settings.png",
//       alt: "Configuration Système",
//       color: "text-cyan-400",
//     },
//     {
//       href: "#account",
//       src: "https://img.icons8.com/clouds/100/red-panda.png",
//       alt: "Profil Utilisateur",
//       color: "text-orange-400",
//     },
//   ];

//   const totalItems = navItems.length;
//   const radius = 160;

//   return (
//     <div className="w-full flex items-center justify-center min-h-[550px] pt-6 font-mono">
//       <header
//         className={`relative bg-slate-950 border-4 border-double border-pink-500/60 transition-all duration-500 ease-in-out flex items-center justify-center
//           ${
//             isOpen
//               ? "w-[450px] h-[450px] rounded-full shadow-[0_0_30px_rgba(244,63,94,0.25)]"
//               : "w-[240px] h-[64px] rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:border-cyan-400/80"
//           }`}
//         role="banner"
//       >
//         {/* INTERRUPTEUR CENTRAL (DÉPLOIE / RÉTRACTE LA ROUE) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen}
//           aria-label={
//             isOpen ? "Fermer le menu système" : "Ouvrir le menu système"
//           }
//           className={`absolute flex flex-col items-center justify-center text-center select-none z-20 cursor-pointer p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-300
//             ${isOpen ? "w-36 h-36 bg-slate-900 border-2 border-dashed border-slate-800 rounded-full" : "w-full h-full rounded-xl"}`}
//         >
//           <div className="overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typewriter animate-blink min-h-[24px]">
//             <span className="text-cyan-400 font-bold text-base tracking-wider">
//               {isOpen ? ">_ CLOSE_CORE" : ">_ RETRO_CORE"}
//             </span>
//           </div>

//           {/* Sous-titre dynamique */}
//           <div className="h-3 mt-1">
//             <span
//               className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-150 ${activeItem && isOpen ? activeItem.color : "text-slate-500 animate-pulse"}`}
//             >
//               {isOpen
//                 ? activeItem
//                   ? activeItem.alt
//                   : "SELECT_MODULE"
//                 : "[ DEPLOY_SYS ]"}
//             </span>
//           </div>
//         </button>

//         {/* CONTENEUR DE NAVIGATION ORBITALE DYNAMIQUE */}
//         <nav
//           aria-label="Navigation principale du Hub"
//           className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//         >
//           <ul>
//             {navItems.map((item, index) => {
//               const angle = (index * 360) / totalItems;

//               return (
//                 <li
//                   key={index}
//                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
//                   style={{
//                     // Les éléments jaillissent du centre (0px à scale 0) vers leur orbite finale (radius à scale 1)
//                     transform: isOpen
//                       ? `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg) scale(1)`
//                       : `rotate(${angle}deg) translate(0px) rotate(${-angle}deg) scale(0)`,
//                   }}
//                 >
//                   <a
//                     href={item.href}
//                     tabIndex={isOpen ? 0 : -1}
//                     className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-transparent bg-slate-900/40 p-2 transition-all duration-150 hover:scale-115 hover:border-cyan-400/80 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-md"
//                     onMouseEnter={() => setActiveItem(item)}
//                     onMouseLeave={() => setActiveItem(null)}
//                     onFocus={() => setActiveItem(item)}
//                     onBlur={() => setActiveItem(null)}
//                   >
//                     <Image
//                       src={item.src}
//                       alt=""
//                       width={index === 7 ? 54 : 44}
//                       height={index === 7 ? 54 : 44}
//                       className="transition-transform duration-150 filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
//                       unoptimized
//                     />
//                     <span className="sr-only">{item.alt}</span>
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;
