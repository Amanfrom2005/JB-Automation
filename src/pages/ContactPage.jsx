import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, handleSubmit] = useForm("mrbaywkz"); // Formspree form ID
  const loading = state.submitting;
  const sent = state.succeeded;

  // Show toast on success or error and clear form on success
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", { position: "top-center" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } else if (state.errors && state.errors.length > 0) {
      toast.error("Failed to send message. Please try again.", { position: "top-center" });
    }
  }, [state.succeeded, state.errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <main className="min-h-dvh bg-slate-50 text-neutral-900 mt-28">
      {/* Toast container (once per app; fine to keep here for this page) */}
      <ToastContainer position="top-center" autoClose={4000} closeOnClick pauseOnHover />
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-medium text-blue-500 bg-slate-300 w-16 text-center rounded-lg"
          >
            Contact
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-pretty text-3xl font-semibold sm:text-4xl md:text-5xl">
            Let’s build something great together
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-sm leading-relaxed text-gray-500">
            Reach us by form, email, or phone. We usually respond within one business day.
          </motion.p>
        </motion.div>

        {/* Content: Info + Form */}
        <div className="mt-10 flex flex-col gap-8 md:flex-row">
          {/* Info column */}
          <motion.aside
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="basis-full md:basis-2/5"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-blue-600/15 p-2 text-blue-500">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Our Location</h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    JB Automation, B2, Mitul Indl. Estate, Sativali Road, Vasai (East), Dist. Thane - 401 208. India.
                  </p>
                </div>
              </div>

              {/* Google Maps Embed (kept intact) */}
              <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800">
                <iframe
                  title="Office location map"
                  className="h-40 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1582.2179570131977!2d72.85491715866304!3d19.405072251392816!3m2!1i1024!2i768!4f13.1!2m1!1sJB%20automation%20sativali%20road!5e0!3m2!1sen!2sin!4v1756889595553!5m2!1sen!2sin=${encodeURIComponent(
                    "JB Automation, B2, Mitul Indl. Estate, Sativali Road, Vasai (East), Dist. Thane - 401 208. India."
                  )}`}
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-blue-600/15 p-2 text-blue-500">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Email</h3>
                  <a href="mailto:info@jbautomation.com" className="mt-1 text-sm text-neutral-600 hover:underline">
                    info@jbautomation.com
                  </a>
                  <br />
                  <a href="mailto:jbautomation@hotmail.com" className="mt-1 text-sm text-neutral-600 hover:underline">
                    jbautomation@hotmail.com
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="rounded-lg border border-blue-600/15 p-2 text-blue-500">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Phone</h3>
                  <a href="tel:+9102502450068" className="mt-1 text-sm text-neutral-600 ">+91 0250 2450068</a><br/>
                  <a href="tel:+917276261116" className="mt-1 text-sm text-neutral-600 ">+91 7276261116</a><br/>
                  <a href="tel:+919561295310" className="mt-1 text-sm text-neutral-600 ">+91 9561295310</a>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="rounded-lg border border-blue-600/15 p-2 text-blue-500">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Hours</h3>
                  <p className="mt-1 text-sm text-neutral-600 ">Mon–Fri: 9:00–18:00</p>
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* Form column */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="basis-full md:basis-3/5"
          >
            <form
              onSubmit={async (e) => {
                await handleSubmit(e);
                // Clearing and toast are triggered in useEffect above on state changes
              }}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl backdrop-blur sm:p-6"
              aria-describedby={sent ? "contact-success" : undefined}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm outline-none ring-blue-500/10 transition focus:ring-4"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm outline-none ring-blue-500/10 transition focus:ring-4"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm outline-none ring-blue-500/10 transition focus:ring-4"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full min-h-40 max-h-96 rounded-lg border border-neutral-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500/10 transition focus:ring-4"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-60 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>

                <a
                  href="mailto:info@jbautomation.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Or email us directly
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </form>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
