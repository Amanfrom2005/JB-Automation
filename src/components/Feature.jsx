import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Technological edge",
    desc: "Our Solutions are based on latest technology to provide you edge over competetor...",
    img: "/feature/img1.svg",
    alt: "Illustration of person empowerment badge",
    link: "/service"
  },
  {
    title: "Value For Money",
    desc: "Our solutions gives you piece of mind & cost effectiveness & world class solutions.",
    img: "/feature/img2.svg",
    alt: "Illustration of a connected cloud and circuitry",
    link: "/products"
  },
  {
    title: "Need Help?",
    desc: "Our solutions are easy to use.Asloweprovide 24X7 support as & when required.",
    img: "/feature/img3.svg",
    alt: "Illustration of analytics bars on a device",
    link: "/contact"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Page() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          >
            Everyone and everything: Visible, Connected and Optimized.
          </motion.h1>
          <motion.div variants={fadeUp}>
            <Link to="/about" className="inline-flex items-center gap-2 text-base font-medium">
              LEARN MORE ABOUT US
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
          {/* Features */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-10 md:mt-10 md:flex-row md:gap-8">
            {features.map((f, i) => (
              <motion.article
                key={f.title}
                className="flex flex-1 flex-col items-start gap-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                  <img
                    src={f.img || "/placeholder.svg"}
                    alt={f.alt}
                    className="h-14 w-14"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{f.desc}</p>
                <Link to={f.link} className="hover:underline">more..</Link>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* Learn More Anchor */}
      <section id="learn-more" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Why this matters</h2>
          <p className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
            A streamlined experience that equips people, connects platforms, and unlocks data helps teams move faster
            with confidence. Replace this placeholder with your own content or link to deeper pages.
          </p>
        </div>
      </section>
    </main>
  );
}
