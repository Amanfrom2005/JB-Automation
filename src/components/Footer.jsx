import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Send, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, MapPin, Phone, Mail, YoutubeIcon } from "lucide-react"
import { Link } from "react-router-dom"

// Color system (max 5): primary blue-600; neutrals white, slate-900/700/300.
// Typography: system sans via Tailwind's font-sans (already configured).

const social = [
  { name: "Facebook", Icon: Facebook, href: "#Facebook" },
  { name: "Twitter", Icon: Twitter, href: "#Twitter" },
  { name: "Instagram", Icon: Instagram, href: "#Instagram" },
  { name: "Youtube", Icon: YoutubeIcon, href: "#Youtube" },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
]

const policies = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
]

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.06 },
  },
}
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function Footer() {

  return (
    <footer className="font-sans border-t border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Top: stacks on mobile, flex on md+ */}
        <div className="py-6 md:py-4">
          <div className="flex flex-col gap-10 md:flex-row md:gap-8">
            {/* Newsletter */}
            <motion.section variants={item} className="md:basis-2/5">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Stay Connected</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                Join our newsletter for the latest updates and exclusive offers.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4" aria-label="Newsletter subscription">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-3 py-2 shadow-sm ring-1 ring-transparent focus-within:ring-2 focus-within:ring-blue-600 dark:border-slate-700 dark:bg-slate-900">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    aria-label="Subscribe"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-blue-600 text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
                  >
                    <Send size={16} aria-hidden="true" />
                  </motion.button>
                </div>
              </form>
            </motion.section>

            {/* Quick Links */}
            <motion.nav variants={item} aria-label="Quick links" className="md:basis-1/5">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Quick Links</h4>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Contact */}
            <motion.section variants={item} className="md:basis-1/5">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Contact Us</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <a href="tel:1234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <a href="mailto:hello@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    hello@example.com
                  </a>
                </li>
              </ul>
            </motion.section>

            {/* Social + Theme */}
            <motion.section variants={item} className="md:basis-1/5">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Follow Us</h4>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {social.map(({ name, Icon, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    aria-label={name}
                    whileHover={{ y: -2 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>

              
            </motion.section>
          </div>

          {/* Divider */}
          <motion.hr variants={item} className="mt-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Bottom bar */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-col items-start justify-between gap-4 py-2 text-sm text-slate-600 dark:text-slate-400 md:flex-row"
          >
            <p>© {new Date().getFullYear()} JB Automation. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {policies.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
