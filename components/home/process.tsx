"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "DISCOVER.",
    eyebrow: "Understand",
    description:
      "We start with the problem — how your business works today, what gets in the way and what needs to change.",
  },
  {
    number: "02",
    title: "DESIGN.",
    eyebrow: "Shape",
    description:
      "We map the workflow, experience and technology around what your business actually needs.",
  },
  {
    number: "03",
    title: "BUILD.",
    eyebrow: "Create",
    description:
      "We turn the plan into working software, testing and refining it as the system comes together.",
  },
  {
    number: "04",
    title: "LAUNCH.",
    eyebrow: "Deliver",
    description:
      "We deploy the finished product, make sure everything works properly and support what comes next.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#f1f1ef] text-[#111]">

      {/* ============================================================ */}
      {/* BACKGROUND                                                   */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-15%] top-[10%] h-[650px] w-[650px] rounded-full bg-white/60 blur-[180px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-black/[0.025] blur-[180px]" />
      </div>

      {/* ============================================================ */}
      {/* INTRO                                                        */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-40">

        <motion.div
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
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-black/40">
              How PLK Builds
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

            <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] text-black sm:text-[6rem] lg:text-[8rem]">
              FROM IDEA
              <span className="block text-black/20">
                TO REALITY.
              </span>
            </h2>

            <p className="max-w-md text-base leading-8 text-black/50 lg:justify-self-end">
              A straightforward process designed to take an idea, problem or
              opportunity and turn it into something that works.
            </p>

          </div>
        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* PROCESS                                                      */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-32 sm:px-10 lg:px-16 lg:pb-44">

        {/* desktop progress line */}
        <div className="relative hidden lg:block">

          <div className="absolute left-0 right-0 top-[15px] h-px bg-black/[0.1]" />

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-[15px] h-px origin-left bg-gradient-to-r from-black/60 via-black/25 to-black/10"
          />

        </div>

        <div className="grid gap-14 lg:grid-cols-4 lg:gap-0">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                amount: 0.35,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative ${
                index > 0 ? "lg:pl-10 xl:pl-12" : ""
              } ${index < steps.length - 1 ? "lg:pr-10 xl:pr-12" : ""}`}
            >

              {/* ==================================================== */}
              {/* POINT                                                */}
              {/* ==================================================== */}

              <div className="relative z-10 mb-10 flex items-center gap-4">

                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.12,
                  }}
                  className="flex h-[31px] w-[31px] items-center justify-center rounded-full border border-black/[0.14] bg-[#f1f1ef]"
                >
                  <motion.span
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.3 + index * 0.12,
                    }}
                    className="h-2 w-2 rounded-full bg-[#111]"
                  />
                </motion.div>

                {/* mobile line */}
                {index < steps.length - 1 && (
                  <div className="h-px flex-1 bg-black/[0.1] lg:hidden" />
                )}

              </div>

              {/* ==================================================== */}
              {/* CONTENT                                              */}
              {/* ==================================================== */}

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                {step.number} / {step.eyebrow}
              </span>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.055em] text-black sm:text-4xl">
                {step.title}
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-black/45">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* ============================================================ */}
      {/* CLOSING                                                      */}
      {/* ============================================================ */}

      <div className="relative z-10 border-t border-black/[0.08]">

        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"
          >

            <p className="max-w-2xl text-xl font-semibold tracking-[-0.035em] text-black sm:text-2xl">
              You bring the problem.
              <span className="text-black/30">
                {" "}We&apos;ll work out how to solve it.
              </span>
            </p>

            <div className="flex shrink-0 items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-black" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/35">
                PLK Systems
              </span>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}