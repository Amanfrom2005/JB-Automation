import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const items = [
  { name: "Cup Filling Machine", path: "/cup-filling-machine" },
  { name: "Bottle Filling Machine", path: "/bottle-filling-machine" },
  { name: "Vacuum Packaging Machine", path: "/vacuum-packaging-machine" },
  { name: "Labeling Machine", path: "/labeling-machine" },
  { name: "Ghee Jar Filling Machine", path: "/ghee-jar-filling-machine" },
  { name: "Shrink Wrapping Machine", path: "/shrink-wrapping-machine" },
  { name: "Handling Systems", path: "/handling-systems" },
  { name: "Robotics Automation", path: "/robotics-automation" },
  { name: "Customized Solutions", path: "/customized-solutions" },
];

export default function Overview() {
  return (
    <main className="font-sans bg-[#F7FAFD] text-slate-800">
      {/* Header */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-start gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
            Overview
          </span>
          <h1 className="text-pretty text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Who we are, what we build, and the latest from our company
          </h1>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
            Discover our mission, explore our product capabilities, and stay
            informed with company news and updates.
          </p>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Who We Are */}
          <motion.article
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <img
                src="/overwive/img1.svg"
                alt="Empower people illustration"
                className="h-10 w-10"
              />
              <h2 className="text-xl font-semibold text-slate-900">
                Who We Are
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700"
            >
              <p>
                JB Automation is one of the world's leading providers of
                innovative complete solutions for packaging machines, industrial
                automations and robotics. Our technologies help production lines
                run smoothly and flexibly to meet ever-changing demand with
                increased profitability.
              </p>
              <p>
                With a dedicated in-house R&D team and strong after-sales
                support, we design, develop and manufacture both individual
                machines and complete lines across food, dairy, pharmaceuticals
                and cosmetics. Our robotics and automation expertise gives
                customers a competitive edge to meet growing market needs.
              </p>
            </motion.div>
          </motion.article>

          {/* Our Products */}
          <motion.aside
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <img
                src="/overwive/img2.svg"
                alt="Connected systems illustration"
                className="h-10 w-10"
              />
              <h2 className="text-xl font-semibold text-slate-900">
                Our Products
              </h2>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-700"
            >
              {items.map((item) => (
                <motion.li
                  key={item.name}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-lg border border-slate-200/60 bg-slate-50 px-3 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-sky-500"></span>
                  <Link to={item.path} className="flex-1">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>

          {/* Company News */}
          <motion.aside
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <img
                src="/overwive/img3.svg"
                alt="Data and insights illustration"
                className="h-10 w-10"
              />
              <h2 className="text-xl font-semibold text-slate-900">
                Company News
              </h2>
            </motion.div>

            <div className="mt-4 space-y-6">
              <motion.div variants={fadeUp} className="group">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Apr 23–25, 2015
                </p>
                <a
                  href="#"
                  className="mt-1 block text-sm font-semibold text-sky-700 hover:text-sky-900"
                >
                  India International Dairy Expo — Mumbai
                </a>
                <p className="mt-1 text-sm text-slate-700">
                  Visit us at India International Dairy Expo at Stall no A 45 in
                  Bombay Exhibition Center, Mumbai, India.
                </p>
                <div className="mt-4 h-px w-full bg-slate-200" />
              </motion.div>

              <motion.div variants={fadeUp} className="group">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Apr 08, 2015
                </p>
                <a
                  href="#"
                  className="mt-1 block text-sm font-semibold text-sky-700 hover:text-sky-900"
                >
                  Shifted to New Premises
                </a>
                <p className="mt-1 text-sm text-slate-700">
                  To cater to customers on a larger scale, our factory has
                  shifted to a new location for more effective service.
                </p>
              </motion.div>
            </div>
          </motion.aside>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 text-white"
        >
          <div className="flex flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h3 className="text-pretty text-lg font-semibold sm:text-xl">
                Ready to optimize your production?
              </h3>
              <p className="text-sm/6 text-white/90">
                Talk to our experts to design a solution tailored to your line.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm ring-1 ring-inset ring-white/20 hover:bg-slate-100"
              >
                Contact Sales
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-lg bg-sky-700/20 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/30 hover:bg-sky-700/30"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
