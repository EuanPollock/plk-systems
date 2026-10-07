"use client";



import { motion, AnimatePresence } from "motion/react";

import { useMemo, useState } from "react";



const buildTypes = [

  {

    id: "website",

    label: "Website",

    description: "A high-performance digital presence.",

  },

  {

    id: "mobile-app",

    label: "Mobile App",

    description: "A product your customers or team can carry.",

  },

  {

    id: "business-system",

    label: "Business System",

    description: "Software built around your operation.",

  },

  {

    id: "automation",

    label: "Automation",

    description: "Remove repetitive work and connect processes.",

  },

];



const features = [

  "Take bookings",

  "Manage customers",

  "Take payments",

  "Manage jobs",

  "Create quotes",

  "Customer portal",

  "Reporting",

  "Automate admin",

];



const audiences = [

  "Customers",

  "My team",

  "Both",

];



function CheckIcon() {

  return (

    <svg

      viewBox="0 0 20 20"

      fill="none"

      className="h-3.5 w-3.5"

      aria-hidden="true"

    >

      <path

        d="M4 10.5L8 14.5L16 5.5"

        stroke="currentColor"

        strokeWidth="1.7"

        strokeLinecap="round"

        strokeLinejoin="round"

      />

    </svg>

  );

}



function PlusIcon() {

  return (

    <svg

      viewBox="0 0 20 20"

      fill="none"

      className="h-3.5 w-3.5"

      aria-hidden="true"

    >

      <path

        d="M10 4V16M4 10H16"

        stroke="currentColor"

        strokeWidth="1.5"

        strokeLinecap="round"

      />

    </svg>

  );

}



export default function SystemBuilder() {

  const [buildType, setBuildType] = useState<string>("business-system");

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([

    "Manage customers",

    "Manage jobs",

    "Reporting",

  ]);

  const [audience, setAudience] = useState<string>("My team");



  const selectedBuild = buildTypes.find(

    (item) => item.id === buildType

  );



  const toggleFeature = (feature: string) => {

    setSelectedFeatures((current) =>

      current.includes(feature)

        ? current.filter((item) => item !== feature)

        : [...current, feature]

    );

  };



  const componentCount = selectedFeatures.length + 1;



  const enquiryText = useMemo(() => {

    const featuresText =

      selectedFeatures.length > 0

        ? selectedFeatures.join(", ")

        : "Not selected yet";



    return [

      `I'm interested in a ${selectedBuild?.label ?? "custom system"}.`,

      `Features: ${featuresText}.`,

      `Users: ${audience}.`,

    ].join(" ");

  }, [selectedBuild, selectedFeatures, audience]);



  const handleDiscuss = () => {

    window.dispatchEvent(

      new CustomEvent("plk-system-builder", {

        detail: {

          message: enquiryText,

          buildType: selectedBuild?.label,

          features: selectedFeatures,

          audience,

        },

      })

    );



    const contact =

      document.getElementById("contact") ||

      document.getElementById("enquiry");



    if (contact) {

      contact.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }

  };



  return (

    <section className="relative overflow-hidden bg-[#f2f1ed] text-[#0a0d10]">



      {/* ========================================================== */}

      {/* BACKGROUND                                                 */}

      {/* ========================================================== */}



      <div className="pointer-events-none absolute inset-0">



        <div className="plk-grid absolute inset-0 opacity-[0.025]" />



        <div className="absolute left-[-15%] top-[20%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.035] blur-[200px]" />



        <div className="absolute right-[-10%] top-[45%] h-[700px] w-[700px] rounded-full bg-cyan-500/[0.03] blur-[200px]" />



      </div>



      {/* ========================================================== */}

      {/* INTRO                                                      */}

      {/* ========================================================== */}



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

            amount: 0.2,

          }}

          transition={{

            duration: 0.75,

            ease: [0.22, 1, 0.36, 1],

          }}

        >



          <div className="mb-8 flex items-center gap-3">

            <span className="h-px w-8 bg-blue-500" />



            <span className="text-[8px] font-semibold uppercase tracking-[0.26em] text-blue-600">

              Your Turn

            </span>

          </div>



          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">



            <h2 className="text-[4rem] font-semibold leading-[0.82] tracking-[-0.07em] text-[#0a0d10] sm:text-[6rem] lg:text-[8rem]">

              BUILD YOUR

              <span className="block text-black/25">

                SYSTEM.

              </span>

            </h2>



            <p className="max-w-md text-base leading-8 text-black/55 lg:justify-self-end">

              Choose what you need. We'll show you how the pieces could

              come together.

            </p>



          </div>



        </motion.div>



      </div>



      {/* ========================================================== */}

      {/* BUILDER                                                    */}

      {/* ========================================================== */}



      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-32 sm:px-10 lg:px-16 lg:pb-44">



        <div className="grid gap-10 xl:grid-cols-[1fr_0.82fr] xl:gap-16">



          {/* ====================================================== */}

          {/* LEFT — OPTIONS                                        */}

          {/* ====================================================== */}



          <motion.div

            initial={{

              opacity: 0,

              x: -35,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

              amount: 0.1,

            }}

            transition={{

              duration: 0.75,

              ease: [0.22, 1, 0.36, 1],

            }}

          >



            {/* ==================================================== */}

            {/* STEP 01                                              */}

            {/* ==================================================== */}



            <div className="border-t border-black/[0.10] py-8">



              <div className="mb-7 flex items-center justify-between">



                <div className="flex items-center gap-4">



                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.06] text-[7px] font-semibold text-blue-400">

                    01

                  </span>



                  <div>

                    <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/50">

                      What do you want to build?

                    </p>

                  </div>



                </div>



                <span className="hidden text-[7px] uppercase tracking-[0.18em] text-black/30 sm:block">

                  Select one

                </span>



              </div>



              <div className="grid gap-3 sm:grid-cols-2">



                {buildTypes.map((item) => {

                  const active = buildType === item.id;



                  return (

                    <button

                      key={item.id}

                      type="button"

                      onClick={() => setBuildType(item.id)}

                      className={`group relative overflow-hidden rounded-xl border p-5 text-left transition-all duration-300 ${

                        active

                          ? "border-blue-600/35 bg-blue-600/[0.07]"

                          : "border-black/[0.10] bg-white/35 hover:border-black/[0.20] hover:bg-white/65"

                      }`}

                    >



                      {active && (

                        <motion.div

                          layoutId="build-type-glow"

                          className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-transparent"

                        />

                      )}



                      <div className="relative z-10">



                        <div className="mb-6 flex items-center justify-between">



                          <span

                            className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${

                              active

                                ? "border-blue-600/30 bg-blue-600/[0.1] text-blue-600"

                                : "border-black/[0.12] text-black/35"

                            }`}

                          >

                            {active ? <CheckIcon /> : <PlusIcon />}

                          </span>



                          {active && (

                            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-blue-600">

                              Selected

                            </span>

                          )}



                        </div>



                        <p

                          className={`text-sm font-semibold ${

                            active ? "text-[#0a0d10]" : "text-black/55"

                          }`}

                        >

                          {item.label}

                        </p>



                        <p className="mt-2 text-xs leading-5 text-black/45">

                          {item.description}

                        </p>



                      </div>



                    </button>

                  );

                })}



              </div>



            </div>



            {/* ==================================================== */}

            {/* STEP 02                                              */}

            {/* ==================================================== */}



            <div className="border-t border-black/[0.10] py-8">



              <div className="mb-7 flex items-center justify-between">



                <div className="flex items-center gap-4">



                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.06] text-[7px] font-semibold text-blue-400">

                    02

                  </span>



                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/50">

                    What should it do?

                  </p>



                </div>



                <span className="hidden text-[7px] uppercase tracking-[0.18em] text-black/30 sm:block">

                  Select any

                </span>



              </div>



              <div className="flex flex-wrap gap-2.5">



                {features.map((feature) => {

                  const active = selectedFeatures.includes(feature);



                  return (

                    <button

                      key={feature}

                      type="button"

                      onClick={() => toggleFeature(feature)}

                      className={`flex items-center gap-2.5 rounded-full border px-4 py-3 text-xs transition-all duration-300 ${

                        active

                          ? "border-blue-600/30 bg-blue-600/[0.08] text-[#0a0d10]"

                          : "border-black/[0.10] bg-white/35 text-black/45 hover:border-black/[0.20] hover:text-black/70"

                      }`}

                    >



                      <span

                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${

                          active

                            ? "border-blue-600/40 bg-blue-600/[0.1] text-blue-600"

                            : "border-black/[0.12] text-black/30"

                        }`}

                      >

                        {active ? <CheckIcon /> : <PlusIcon />}

                      </span>



                      {feature}



                    </button>

                  );

                })}



              </div>



            </div>



            {/* ==================================================== */}

            {/* STEP 03                                              */}

            {/* ==================================================== */}



            <div className="border-y border-black/[0.10] py-8">



              <div className="mb-7 flex items-center gap-4">



                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.06] text-[7px] font-semibold text-blue-400">

                  03

                </span>



                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/50">

                  Who will use it?

                </p>



              </div>



              <div className="grid grid-cols-3 gap-2">



                {audiences.map((item) => {

                  const active = audience === item;



                  return (

                    <button

                      key={item}

                      type="button"

                      onClick={() => setAudience(item)}

                      className={`rounded-lg border px-3 py-4 text-center text-xs transition-all duration-300 ${

                        active

                          ? "border-blue-600/30 bg-blue-600/[0.08] text-[#0a0d10]"

                          : "border-black/[0.10] bg-white/35 text-black/45 hover:border-black/[0.20] hover:text-black/70"

                      }`}

                    >

                      {item}

                    </button>

                  );

                })}



              </div>



            </div>



          </motion.div>



          {/* ====================================================== */}

          {/* RIGHT — LIVE SYSTEM                                   */}

          {/* ====================================================== */}



          <motion.div

            initial={{

              opacity: 0,

              x: 35,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

              amount: 0.1,

            }}

            transition={{

              duration: 0.75,

              delay: 0.1,

              ease: [0.22, 1, 0.36, 1],

            }}

            className="xl:sticky xl:top-24 xl:self-start"

          >



            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#08101c] shadow-[0_50px_160px_rgba(0,0,0,0.6)]">



              {/* glow */}

              <div className="pointer-events-none absolute left-1/2 top-[35%] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[120px]" />



              {/* header */}

              <div className="relative flex items-center justify-between border-b border-white/[0.07] px-6 py-5">



                <div>



                  <p className="text-[7px] font-semibold uppercase tracking-[0.22em] text-blue-400">

                    Live Configuration

                  </p>



                  <p className="mt-1.5 text-sm font-semibold text-white">

                    Your System

                  </p>



                </div>



                <div className="flex items-center gap-2">



                  <span className="relative flex h-1.5 w-1.5">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  </span>



                  <span className="text-[7px] uppercase tracking-[0.18em] text-slate-600">

                    Building

                  </span>



                </div>



              </div>



              {/* ================================================== */}

              {/* SYSTEM MAP                                         */}

              {/* ================================================== */}



              <div className="relative min-h-[500px] px-6 py-10 sm:px-10">



                {/* central line */}

                <div className="absolute bottom-12 left-[39px] top-12 w-px bg-gradient-to-b from-blue-400/50 via-blue-400/20 to-transparent sm:left-[55px]" />



                {/* main product */}

                <div className="relative z-10 flex gap-5">



                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-[#0c1a2b] shadow-[0_0_25px_rgba(59,130,246,0.15)]">

                    <span className="h-2 w-2 rounded-full bg-blue-400" />

                  </div>



                  <div className="flex-1 rounded-xl border border-blue-400/20 bg-blue-400/[0.05] p-4">



                    <div className="flex items-center justify-between gap-4">



                      <div>

                        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-blue-600">

                          Core

                        </span>



                        <AnimatePresence mode="wait">

                          <motion.p

                            key={selectedBuild?.label}

                            initial={{

                              opacity: 0,

                              y: 6,

                            }}

                            animate={{

                              opacity: 1,

                              y: 0,

                            }}

                            exit={{

                              opacity: 0,

                              y: -6,

                            }}

                            transition={{

                              duration: 0.2,

                            }}

                            className="mt-1.5 text-sm font-semibold text-white"

                          >

                            {selectedBuild?.label}

                          </motion.p>

                        </AnimatePresence>



                      </div>



                      <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-2.5 py-1 text-[6px] font-semibold uppercase tracking-[0.16em] text-blue-400">

                        Connected

                      </span>



                    </div>



                  </div>



                </div>



                {/* selected features */}

                <div className="mt-4 space-y-3">



                  <AnimatePresence initial={false}>



                    {selectedFeatures.length > 0 ? (

                      selectedFeatures.map((feature, index) => (

                        <motion.div

                          key={feature}

                          initial={{

                            opacity: 0,

                            x: -12,

                            height: 0,

                          }}

                          animate={{

                            opacity: 1,

                            x: 0,

                            height: "auto",

                          }}

                          exit={{

                            opacity: 0,

                            x: 10,

                            height: 0,

                          }}

                          transition={{

                            duration: 0.25,

                          }}

                          className="relative flex gap-5 overflow-hidden"

                        >



                          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-[#0b1421]">



                            <span className="text-[7px] font-semibold text-slate-500">

                              {String(index + 1).padStart(2, "0")}

                            </span>



                          </div>



                          <div className="flex flex-1 items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-4 py-3">



                            <span className="text-xs text-slate-300">

                              {feature}

                            </span>



                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />



                          </div>



                        </motion.div>

                      ))

                    ) : (

                      <motion.div

                        initial={{

                          opacity: 0,

                        }}

                        animate={{

                          opacity: 1,

                        }}

                        className="ml-[52px] rounded-lg border border-dashed border-white/[0.08] px-4 py-5 sm:ml-[52px]"

                      >

                        <p className="text-xs text-slate-600">

                          Select features to start building your system.

                        </p>

                      </motion.div>

                    )}



                  </AnimatePresence>



                </div>



              </div>



              {/* ================================================== */}

              {/* SUMMARY                                            */}

              {/* ================================================== */}



              <div className="relative border-t border-white/[0.07] bg-black/[0.12] px-6 py-6 sm:px-10">



                <div className="grid grid-cols-2 gap-5">



                  <div>



                    <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-600">

                      Components

                    </p>



                    <AnimatePresence mode="wait">

                      <motion.p

                        key={componentCount}

                        initial={{

                          opacity: 0,

                          y: 5,

                        }}

                        animate={{

                          opacity: 1,

                          y: 0,

                        }}

                        exit={{

                          opacity: 0,

                          y: -5,

                        }}

                        className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white"

                      >

                        {componentCount}

                      </motion.p>

                    </AnimatePresence>



                  </div>



                  <div>



                    <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-600">

                      Built For

                    </p>



                    <AnimatePresence mode="wait">

                      <motion.p

                        key={audience}

                        initial={{

                          opacity: 0,

                          y: 5,

                        }}

                        animate={{

                          opacity: 1,

                          y: 0,

                        }}

                        exit={{

                          opacity: 0,

                          y: -5,

                        }}

                        className="mt-2 text-sm font-semibold text-white"

                      >

                        {audience}

                      </motion.p>

                    </AnimatePresence>



                  </div>



                </div>



                <div className="mt-6 border-t border-white/[0.07] pt-6">



                  <p className="text-sm leading-6 text-slate-500">

                    A connected{" "}

                    <span className="text-slate-300">

                      {selectedBuild?.label.toLowerCase()}

                    </span>{" "}

                    designed around your workflow.

                  </p>



                  <button

                    type="button"

                    onClick={handleDiscuss}

                    className="group mt-6 flex w-full items-center justify-between rounded-lg bg-white px-5 py-4 text-left transition-transform duration-300 hover:scale-[1.01]"

                  >



                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#050a13]">

                      Discuss this system

                    </span>



                    <span className="text-sm text-[#050a13] transition-transform duration-300 group-hover:translate-x-1">

                      →

                    </span>



                  </button>



                </div>



              </div>



            </div>



          </motion.div>



        </div>



      </div>



      {/* ========================================================== */}

      {/* END STATEMENT                                              */}

      {/* ========================================================== */}



      <div className="relative z-10 border-t border-black/[0.10]">



        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">



          <motion.div

            initial={{

              opacity: 0,

              y: 30,

            }}

            whileInView={{

              opacity: 1,

              y: 0,

            }}

            viewport={{

              once: true,

              amount: 0.3,

            }}

            transition={{

              duration: 0.7,

              ease: [0.22, 1, 0.36, 1],

            }}

            className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"

          >



            <h3 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#0a0d10] sm:text-4xl lg:text-5xl">

              Your business doesn't work like everyone else's.

              <span className="text-black/40">

                {" "}Your software shouldn't either.

              </span>

            </h3>



            <div className="flex shrink-0 items-center gap-3">



              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />



              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40">

                Built around you

              </span>



            </div>



          </motion.div>



        </div>



      </div>



    </section>

  );

}