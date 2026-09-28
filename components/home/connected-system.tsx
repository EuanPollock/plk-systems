"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { useRef } from "react";

export default function ConnectedSystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.25],
    [60, 0]
  );

  const titleOpacity = useTransform(
    smoothProgress,
    [0.02, 0.18],
    [0, 1]
  );

  const systemScale = useTransform(
    smoothProgress,
    [0.1, 0.32],
    [0.9, 1]
  );

  const systemOpacity = useTransform(
    smoothProgress,
    [0.08, 0.24],
    [0, 1]
  );

  const glowOpacity = useTransform(
    smoothProgress,
    [0.1, 0.4, 0.8],
    [0.1, 0.8, 0.25]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050a13]"
    >
      {/* ======================================================== */}
      {/* BACKGROUND                                               */}
      {/* ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="plk-grid absolute inset-0 opacity-[0.18]" />

        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute left-1/2 top-[48%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.09] blur-[170px]"
        />

        <div className="absolute left-[-15%] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />

        <div className="absolute right-[-15%] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />
      </div>

      {/* ======================================================== */}
      {/* CONTENT                                                  */}
      {/* ======================================================== */}

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">

        {/* ====================================================== */}
        {/* HEADING                                                */}
        {/* ====================================================== */}

        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="relative z-30 mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-[10px]">
              One connected ecosystem
            </p>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          <h2 className="text-[3.5rem] font-semibold leading-[0.86] tracking-[-0.065em] text-white sm:text-[5rem] lg:text-[6.5rem]">
            EVERYTHING

            <span className="block bg-gradient-to-r from-slate-500 via-white to-slate-500 bg-clip-text text-transparent">
              CONNECTED.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Your website, mobile app, internal systems and
            automation shouldn&apos;t work in isolation. We
            design digital products that connect your
            customers, team and data.
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* ECOSYSTEM                                              */}
        {/* ====================================================== */}

        <motion.div
          style={{
            scale: systemScale,
            opacity: systemOpacity,
          }}
          className="relative mx-auto mt-12 h-[520px] max-w-[1050px] sm:mt-14 sm:h-[550px] lg:h-[580px]"
        >
          {/* ORBITAL CIRCLES */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] sm:h-[500px] sm:w-[500px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/[0.05] sm:h-[390px] sm:w-[390px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] sm:h-[260px] sm:w-[260px]" />

          {/* ==================================================== */}
          {/* CONNECTION LINES                                     */}
          {/* ==================================================== */}

          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(59 130 246)"
                  stopOpacity="0.1"
                />

                <stop
                  offset="50%"
                  stopColor="rgb(96 165 250)"
                  stopOpacity="0.75"
                />

                <stop
                  offset="100%"
                  stopColor="rgb(34 211 238)"
                  stopOpacity="0.1"
                />
              </linearGradient>

              <filter id="lineGlow">
                <feGaussianBlur
                  stdDeviation="3"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <ConnectionPath
              d="M 180 140 C 300 170, 360 235, 500 300"
              delay={0}
            />

            <ConnectionPath
              d="M 820 140 C 700 170, 640 235, 500 300"
              delay={0.25}
            />

            <ConnectionPath
              d="M 130 430 C 280 420, 350 350, 500 300"
              delay={0.5}
            />

            <ConnectionPath
              d="M 870 430 C 720 420, 650 350, 500 300"
              delay={0.75}
            />

            <ConnectionPath
              d="M 500 520 C 500 430, 500 380, 500 300"
              delay={1}
            />
          </svg>

          {/* ==================================================== */}
          {/* MOVING DATA PARTICLES                                */}
          {/* ==================================================== */}

          <DataParticle
            path="M 180 140 C 300 170, 360 235, 500 300"
            delay={0}
          />

          <DataParticle
            path="M 820 140 C 700 170, 640 235, 500 300"
            delay={1.2}
          />

          <DataParticle
            path="M 130 430 C 280 420, 350 350, 500 300"
            delay={2.4}
          />

          <DataParticle
            path="M 870 430 C 720 420, 650 350, 500 300"
            delay={0.7}
          />

          {/* ==================================================== */}
          {/* WEBSITE                                              */}
          {/* ==================================================== */}

          <SystemNode
            className="left-[2%] top-[8%] sm:left-[6%]"
            label="Website"
            description="Customer experience"
            icon="W"
            delay={0}
          />

          {/* ==================================================== */}
          {/* MOBILE APP                                           */}
          {/* ==================================================== */}

          <SystemNode
            className="right-[2%] top-[8%] sm:right-[6%]"
            label="Mobile App"
            description="iOS · Android"
            icon="M"
            delay={0.12}
          />

          {/* ==================================================== */}
          {/* PAYMENTS                                             */}
          {/* ==================================================== */}

          <SystemNode
            className="bottom-[11%] left-[0%] sm:left-[4%]"
            label="Payments"
            description="Transactions"
            icon="£"
            delay={0.24}
          />

          {/* ==================================================== */}
          {/* AUTOMATION                                           */}
          {/* ==================================================== */}

          <SystemNode
            className="bottom-[11%] right-[0%] sm:right-[4%]"
            label="Automation"
            description="Workflows"
            icon="A"
            delay={0.36}
          />

          {/* ==================================================== */}
          {/* DASHBOARD                                            */}
          {/* ==================================================== */}

          <SystemNode
            className="bottom-[0%] left-1/2 -translate-x-1/2"
            label="Dashboard"
            description="Control · Reporting"
            icon="D"
            delay={0.48}
          />

          {/* ==================================================== */}
          {/* CENTRAL SYSTEM                                       */}
          {/* ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            {/* PULSE RING */}

            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.25, 0, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[-35px] rounded-full border border-blue-400/20"
            />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[-18px] rounded-full border border-blue-500/20"
            />

            {/* CORE */}

            <div className="relative flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full border border-blue-400/25 bg-[#091523]/95 shadow-[0_0_70px_rgba(37,99,235,0.16)] backdrop-blur-xl sm:h-[170px] sm:w-[170px]">

              <div className="absolute inset-2 rounded-full border border-white/[0.035]" />

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.35)]">
                <span className="text-sm font-bold text-white">
                  PLK
                </span>
              </div>

              <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-white">
                Core System
              </p>

              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[6px] uppercase tracking-[0.15em] text-slate-600">
                  Connected
                </span>
              </div>

            </div>
          </motion.div>

          {/* ==================================================== */}
          {/* STATUS — DATA                                        */}
          {/* ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 1.1,
              duration: 0.6,
            }}
            className="absolute left-[18%] top-[44%] hidden rounded-xl border border-white/[0.07] bg-[#09131f]/80 px-3 py-2 backdrop-blur-lg lg:block"
          >
            <p className="text-[6px] uppercase tracking-[0.16em] text-slate-600">
              Data
            </p>

            <p className="mt-1 text-[8px] font-medium text-emerald-400">
              Synced ✓
            </p>
          </motion.div>

          {/* ==================================================== */}
          {/* STATUS — API                                         */}
          {/* ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 1.3,
              duration: 0.6,
            }}
            className="absolute right-[18%] top-[44%] hidden rounded-xl border border-white/[0.07] bg-[#09131f]/80 px-3 py-2 backdrop-blur-lg lg:block"
          >
            <p className="text-[6px] uppercase tracking-[0.16em] text-slate-600">
              API
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />

              <p className="text-[8px] font-medium text-blue-400">
                Live
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* ====================================================== */}
        {/* BOTTOM MESSAGE                                         */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="relative z-20 mx-auto mt-4 flex max-w-3xl items-center justify-center gap-5 border-t border-white/[0.06] pt-7 text-center"
        >
          <span className="hidden h-px w-12 bg-white/[0.08] sm:block" />

          <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:text-[10px]">
            One partner

            <span className="mx-3 text-blue-500/40">
              ◆
            </span>

            One ecosystem

            <span className="mx-3 text-blue-500/40">
              ◆
            </span>

            Built around you
          </p>

          <span className="hidden h-px w-12 bg-white/[0.08] sm:block" />
        </motion.div>

      </div>
    </section>
  );
}

/* ========================================================================== */
/* CONNECTION PATH                                                            */
/* ========================================================================== */

function ConnectionPath({
  d,
  delay,
}: {
  d: string;
  delay: number;
}) {
  return (
    <>
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.035)"
        strokeWidth="1"
      />

      <motion.path
        d={d}
        fill="none"
        stroke="url(#connectionGradient)"
        strokeWidth="1.4"
        filter="url(#lineGlow)"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.4,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
}

/* ========================================================================== */
/* DATA PARTICLE                                                              */
/* ========================================================================== */

function DataParticle({
  path,
  delay,
}: {
  path: string;
  delay: number;
}) {
  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.circle
        r="4"
        fill="rgb(96 165 250)"
        filter="url(#lineGlow)"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3.2,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <animateMotion
          dur="3.2s"
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={path}
        />
      </motion.circle>
    </svg>
  );
}

/* ========================================================================== */
/* SYSTEM NODE                                                                */
/* ========================================================================== */

function SystemNode({
  className,
  label,
  description,
  icon,
  delay,
}: {
  className: string;
  label: string;
  description: string;
  icon: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.04,
        y: -4,
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="group min-w-[130px] rounded-2xl border border-white/[0.09] bg-[#09131f]/90 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-blue-500/20 sm:min-w-[155px] sm:p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/15 bg-blue-500/[0.08] text-[9px] font-semibold text-blue-400 transition duration-300 group-hover:bg-blue-500/[0.13]">
            {icon}
          </div>

          <div>
            <p className="text-[9px] font-medium text-white sm:text-[10px]">
              {label}
            </p>

            <p className="mt-1 text-[6px] uppercase tracking-[0.12em] text-slate-600 sm:text-[7px]">
              {description}
            </p>
          </div>

        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2.5">

          <span className="text-[6px] uppercase tracking-[0.15em] text-slate-700">
            Connected
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

        </div>

      </div>
    </motion.div>
  );
}