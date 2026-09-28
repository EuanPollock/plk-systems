"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [secondState, setSecondState] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      /*
       * Compact sticky sequence:
       *
       * 0%  → NOT OFF THE SHELF
       * 45% → switch
       * 100% → release into Horizon
       */
setSecondState(latest >= 0.18);    });
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
className="relative h-[125vh] bg-[#050a13]"    >
      {/* ====================================================== */}
      {/* STICKY SCREEN                                          */}
      {/* ====================================================== */}

      <div className="sticky top-0 h-screen overflow-hidden bg-[#050a13]">

        {/* ==================================================== */}
        {/* BACKGROUND                                           */}
        {/* ==================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div className="plk-grid absolute inset-0 opacity-[0.06]" />

          {/* horizontal guide */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.02]" />

          {/* vertical guide */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-white/[0.02]" />

          {/* ambient centre glow */}
          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[170px]" />

          {/* stronger blue glow after change */}
          <motion.div
            animate={{
              opacity: secondState ? 1 : 0,
              scale: secondState ? 1 : 0.7,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[42%] top-1/2 h-[600px] w-[300px] -translate-y-1/2 rotate-[18deg] bg-blue-500/[0.07] blur-[110px]"
          />

          {/* light streak */}
          <motion.div
            animate={{
              opacity: secondState ? 0.45 : 0,
              x: secondState ? 160 : -180,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 h-[550px] w-px -translate-x-1/2 -translate-y-1/2 rotate-[18deg] bg-blue-300"
          />
        </div>

        {/* ==================================================== */}
        {/* MAIN CONTENT                                         */}
        {/* ==================================================== */}

        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-12">

            {/* ================================================== */}
            {/* EYEBROW                                            */}
            {/* ================================================== */}

            <div className="mb-8 h-[18px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={secondState ? "built" : "approach"}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`h-px w-8 transition-colors duration-500 ${
                      secondState
                        ? "bg-blue-500"
                        : "bg-slate-700"
                    }`}
                  />

                  <p
                    className={`text-[9px] font-semibold uppercase tracking-[0.28em] transition-colors duration-500 sm:text-[10px] ${
                      secondState
                        ? "text-blue-400"
                        : "text-slate-600"
                    }`}
                  >
                    {secondState
                      ? "Built for your business"
                      : "The PLK approach"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ================================================== */}
            {/* HEADLINE                                           */}
            {/* ================================================== */}

            <div className="relative">
              <AnimatePresence mode="wait">

                {!secondState ? (
                  <motion.div
                    key="off-the-shelf"
                    initial={{
                      opacity: 0,
                      y: 35,
                      filter: "blur(6px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -35,
                      filter: "blur(6px)",
                    }}
                    transition={{
                      duration: 0.38,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <h2 className="select-none text-[4rem] font-semibold leading-[0.8] tracking-[-0.07em] text-slate-700 sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.5rem]">
                      NOT OFF

                      <span className="block">
                        THE SHELF.
                      </span>
                    </h2>
                  </motion.div>
                ) : (
                  <motion.div
                    key="built-around-you"
                    initial={{
                      opacity: 0,
                      y: 35,
                      filter: "blur(6px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -35,
                      filter: "blur(6px)",
                    }}
                    transition={{
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <h2 className="select-none text-[4rem] font-semibold leading-[0.8] tracking-[-0.07em] text-white sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.5rem]">
                      BUILT

                      <span className="block">
                        AROUND YOU.
                      </span>
                    </h2>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* ================================================== */}
            {/* SECOND STATE DETAILS                               */}
            {/* ================================================== */}

            <div className="relative mt-8 min-h-[100px]">
              <AnimatePresence>
                {secondState && (
                  <motion.div
                    key="second-details"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* blue line */}

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-px w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-300 to-transparent"
                    />

                    {/* line glow */}

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="-mt-[4px] h-[8px] w-full origin-left bg-gradient-to-r from-blue-500/20 via-cyan-300/10 to-transparent blur-md"
                    />

                    {/* description */}

                    <div className="mt-8 flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                      <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                        No two businesses work exactly the same
                        way. The technology behind them
                        shouldn&apos;t have to either.
                      </p>

                      <div className="flex items-center gap-3">
                        <motion.span
                          animate={{
                            opacity: [0.45, 1, 0.45],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]"
                        />

                        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-slate-600">
                          Designed · Built · Connected
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* BOTTOM DETAILS                                       */}
        {/* ==================================================== */}

        <div className="pointer-events-none absolute bottom-8 left-6 z-30 hidden lg:block">
          <span className="text-[7px] uppercase tracking-[0.2em] text-slate-800">
            PLK / 04
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-6 z-30 hidden items-center gap-3 lg:flex">
          <span className="text-[7px] uppercase tracking-[0.2em] text-slate-800">
            {secondState
              ? "Continue to explore"
              : "Keep scrolling"}
          </span>

          <motion.span
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[9px] text-slate-700"
          >
            ↓
          </motion.span>
        </div>

        {/* ==================================================== */}
        {/* SMALL SCROLL PROGRESS                                 */}
        {/* ==================================================== */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-px bg-white/[0.03]">
          <motion.div
            style={{
              scaleX: scrollYProgress,
            }}
            className="h-full origin-left bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300"
          />
        </div>
      </div>
    </section>
  );
}