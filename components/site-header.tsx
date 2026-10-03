"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Stop page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ====================================================== */}
      {/* HEADER                                                 */}
      {/* ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[100]">
        <div className="border-b border-white/[0.06] bg-[#050a13]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12">
            
            {/* LOGO */}

            <Link
              href="/"
              className="relative z-[120] flex items-center"
              aria-label="PLK Systems home"
            >
              <Image
                src="/plk-logo.png"
                alt="PLK Systems"
                width={160}
                height={50}
                priority
                className="h-auto w-[118px] object-contain sm:w-[130px]"
              />
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.slice(0, 4).map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-white"
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-blue-400 transition-all duration-300 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* DESKTOP CTA */}

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group flex items-center gap-4 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/[0.08]"
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                  Start a project
                </span>

                <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="relative z-[120] flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div className="relative h-4 w-6">
                <motion.span
                  animate={
                    menuOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 2 }
                  }
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-0 h-px w-6 bg-white"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[7px] h-px w-6 bg-white"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 12 }
                  }
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-[14px] h-px w-6 bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ====================================================== */}
      {/* FULL SCREEN MOBILE MENU                                */}
      {/* ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#050a13] lg:hidden"
          >
            {/* GRID */}

            <div className="plk-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

            {/* GLOWS */}

            <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

            <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[160px]" />

            {/* MENU CONTENT */}

            <div className="relative flex min-h-screen flex-col px-6 pb-10 pt-[120px] sm:px-10">
              
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-400">
                  Navigation
                </span>
              </div>

              {/* LINKS */}

              <nav className="flex flex-col">
                {navigation.map((item, index) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between border-b border-white/[0.06] py-4"
                      >
                        <span
                          className={`text-[clamp(2.4rem,12vw,5rem)] font-semibold leading-none tracking-[-0.06em] transition-colors ${
                            active
                              ? "text-white"
                              : "text-slate-600 group-hover:text-white"
                          }`}
                        >
                          {item.label.toUpperCase()}.
                        </span>

                        <span
                          className={`text-lg transition-all duration-300 group-hover:translate-x-1 ${
                            active
                              ? "text-blue-400"
                              : "text-slate-700"
                          }`}
                        >
                          ↗
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* BOTTOM */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-auto flex items-end justify-between pt-8"
              >
                <div>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-slate-700">
                    PLK Systems
                  </p>

                  <p className="mt-2 max-w-[200px] text-xs leading-5 text-slate-600">
                    Software built around your business.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[8px] uppercase tracking-[0.18em] text-slate-600">
                    Available
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}