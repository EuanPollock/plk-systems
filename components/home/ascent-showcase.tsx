"use client";

import Image from "next/image";
import { motion } from "motion/react";

const reveal = {
  initial: {
    opacity: 0,
    y: 45,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const Phone = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#111] p-[5px] shadow-[0_50px_140px_rgba(0,0,0,0.65)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={1300}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

type AscentShowcaseProps = {
  hideIntro?: boolean;
};

export default function AscentShowcase({
  hideIntro = false,
}: AscentShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-[#f1f1ef] text-[#111]">

      {!hideIntro && (
  <>

      {/* ============================================================ */}
      {/* INTRO                                                        */}
      {/* ============================================================ */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-28 sm:px-10 lg:px-16 lg:pb-36 lg:pt-40">

        <motion.div
          {...reveal}
          className="flex items-center justify-between border-t border-black/[0.1] pt-7"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/50">
              Selected Work / 03
            </span>
          </div>

          <span className="hidden text-[7px] font-medium uppercase tracking-[0.2em] text-black/30 sm:block">
            Mobile Product
          </span>
        </motion.div>

        <motion.div
          {...reveal}
          className="mt-20 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div>
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-black/45">
              Built to perform
            </p>

            <h2 className="text-[5rem] font-semibold leading-[0.78] tracking-[-0.08em] text-black sm:text-[7rem] lg:text-[10rem] xl:text-[11rem]">
              ASCENT.
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-8 text-black/55 sm:text-lg">
              A training experience designed around workouts, progress and
              consistency.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/[0.1] pt-6">
              {[
                "Training",
                "Progress",
                "Exercises",
                "Coaching",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/35"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
              </motion.div>

    </div>
  </>
)}

{/* ============================================================ */}
{/* HERO PHONE                                                   */}
      {/* ============================================================ */}

      <div className="relative min-h-[1050px] overflow-hidden bg-[#111] lg:min-h-[1150px]">

        {/* background */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-[42%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[180px]" />

          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.035]" />

          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-white/[0.025]" />

          <div className="absolute left-[8%] top-[15%] text-[12rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[18rem] lg:text-[25rem]">
            A
          </div>

        </div>

        {/* heading */}
        <motion.div
          {...reveal}
          className="relative z-20 mx-auto max-w-[1500px] px-6 pt-20 text-center sm:px-10 lg:px-16 lg:pt-28"
        >
          <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
            The daily experience
          </p>

          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
            Everything starts today.
          </h3>
        </motion.div>

        {/* phones */}
        <div className="relative z-10 mx-auto mt-16 h-[780px] max-w-[1400px] px-6 sm:px-10 lg:px-16">

          {/* progress */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              y: 50,
              rotate: -8,
            }}
            whileInView={{
              opacity: 0.48,
              x: 0,
              y: 0,
              rotate: -6,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[7%] top-[10%] hidden w-[230px] lg:block xl:w-[260px]"
          >
            <p className="mb-4 text-center text-[7px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Progress
            </p>

            <Phone
              src="/ascent-progress.png"
              alt="Ascent progress"
            />
          </motion.div>

          {/* workout */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
              y: 70,
              rotate: -5,
            }}
            whileInView={{
              opacity: 0.72,
              x: 0,
              y: 0,
              rotate: -3,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[24%] top-[18%] hidden w-[250px] md:block xl:w-[280px]"
          >
            <Phone
              src="/ascent-workout.png"
              alt="Ascent workout"
            />
          </motion.div>

          {/* MAIN PHONE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-0 z-30 w-[290px] -translate-x-1/2 sm:w-[320px] lg:w-[350px]"
          >
            <div className="mb-5 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-white/50">
                Today
              </span>
            </div>

            <Phone
              src="/ascent-today.png"
              alt="Ascent today dashboard"
            />

            <div className="mt-6 text-center">
              <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-white/45">
                Train · Track · Progress
              </p>
            </div>
          </motion.div>

          {/* exercises */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              y: 70,
              rotate: 5,
            }}
            whileInView={{
              opacity: 0.72,
              x: 0,
              y: 0,
              rotate: 3,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[24%] top-[18%] hidden w-[250px] md:block xl:w-[280px]"
          >
            <Phone
              src="/ascent-exercises.png"
              alt="Ascent exercises"
            />
          </motion.div>

          {/* coach */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              y: 50,
              rotate: 8,
            }}
            whileInView={{
              opacity: 0.48,
              x: 0,
              y: 0,
              rotate: 6,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[7%] top-[10%] hidden w-[230px] lg:block xl:w-[260px]"
          >
            <p className="mb-4 text-center text-[7px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Coach
            </p>

            <Phone
              src="/ascent-coach.png"
              alt="Ascent coach"
            />
          </motion.div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* TRAIN / TRACK / PROGRESS                                     */}
      {/* ============================================================ */}

      <div className="relative mx-auto max-w-[1500px] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">

        <motion.div {...reveal}>

          <div className="mb-16 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/40">
              Built around the athlete
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">

            {[
              {
                number: "01",
                title: "TRAIN.",
                copy:
                  "Workouts structured around exercises, sets, reps and progression.",
              },
              {
                number: "02",
                title: "TRACK.",
                copy:
                  "Every session becomes part of a clear training history.",
              },
              {
                number: "03",
                title: "PROGRESS.",
                copy:
                  "Performance data turns consistency into visible progress.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${
                  index > 0
                    ? "lg:border-l lg:border-black/[0.1] lg:pl-12"
                    : ""
                } ${index < 2 ? "lg:pr-12" : ""}`}
              >
                <span className="text-[8px] font-semibold text-black/35">
                  {item.number}
                </span>

                <h3 className="mt-6 text-5xl font-semibold tracking-[-0.065em] text-black lg:text-6xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-sm text-sm leading-7 text-black/50">
                  {item.copy}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* WORKOUT FEATURE                                              */}
      {/* ============================================================ */}

      <div className="bg-[#dededb]">

        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 py-32 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-44">

          {/* phone */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              rotate: -3,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center"
          >
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[120px]" />

            <div className="relative w-[280px] sm:w-[320px]">
              <Phone
                src="/ascent-workout.png"
                alt="Ascent workout tracking"
              />
            </div>
          </motion.div>

          {/* statement */}
          <motion.div {...reveal}>

            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/40">
              Workout Experience
            </p>

            <h3 className="mt-6 text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] text-black sm:text-[5.5rem] lg:text-[6.5rem]">
              EVERY
              <span className="block">
                REP.
              </span>

              <span className="block text-black/25">
                RECORDED.
              </span>
            </h3>

            <p className="mt-9 max-w-md text-base leading-8 text-black/50">
              A focused training interface designed to keep the workout simple
              while the system handles the data behind it.
            </p>

          </motion.div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* PROGRESS + COACH                                             */}
      {/* ============================================================ */}

      <div className="relative bg-[#111]">

        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">

          <motion.div
            {...reveal}
            className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Beyond the workout
              </p>

              <h3 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                SEE THE
                <span className="block text-white/25">
                  PROGRESS.
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40 lg:justify-self-end">
              Training data becomes useful when it helps the user understand
              where they&apos;ve been and where they&apos;re going.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* progress */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center"
            >
              <span className="mb-5 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Progress
              </span>

              <div className="w-[270px] sm:w-[300px]">
                <Phone
                  src="/ascent-progress.png"
                  alt="Ascent progress tracking"
                />
              </div>
            </motion.div>

            {/* coach */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center lg:pt-24"
            >
              <span className="mb-5 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Coach
              </span>

              <div className="w-[270px] sm:w-[300px]">
                <Phone
                  src="/ascent-coach.png"
                  alt="Ascent coaching"
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* FINAL                                                        */}
      {/* ============================================================ */}

      <div className="bg-[#f1f1ef]">

        <div className="mx-auto max-w-[1500px] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">

          <motion.div {...reveal}>

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Ascent
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

              <h3 className="text-[3.8rem] font-semibold leading-[0.86] tracking-[-0.07em] text-black sm:text-[5.5rem] lg:text-[7rem]">
                EVERY SESSION
                <span className="block text-black/25">
                  MOVES YOU
                </span>

                <span className="block">
                  FORWARD.
                </span>
              </h3>

              <div className="max-w-md lg:justify-self-end">

                <p className="text-base leading-8 text-black/50">
                  Product strategy, interface design and application
                  development brought together as one complete digital
                  experience.
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-black/[0.1] pt-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/35">
                    Built by PLK Systems
                  </span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}