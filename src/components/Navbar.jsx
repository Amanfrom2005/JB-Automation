import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, LogIn, Menu, Search, UserPlus, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const mainItems = [
  { label: "OYSTAR GROUP", to: "/" },
  { label: "BRANDS", to: "/brands" },
  { label: "PRODUCTS", to: "/products" },
  { label: "MARKETS", to: "/markets" },
  { label: "SERVICE", to: "/service" },
  { label: "CAREER", to: "/career" },
  { label: "CONTACT", to: "/contact" },
];

const utilityLinks = [
  { label: "News", to: "/news" },
  { label: "Events", to: "/events" },
  { label: "Procurement", to: "/procurement" },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate({ pathname: '/products', search: `?search=${encodeURIComponent(q)}` });
    } else {
      navigate({ pathname: '/products' });
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // If on shop page, update search params immediately
    if (location.pathname === '/') {
      const params = new URLSearchParams(location.search);
      const q = value.trim();
      if (q) {
        params.set('search', q);
      } else {
        params.delete('search');
      }
      navigate({ pathname: '/products', search: params.toString() ? `?${params.toString()}` : '' });
    }
  };
  const [open, setOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 border-b bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="hidden md:block">
        <div className="mx-auto flex w-full items-center justify-end gap-4 px-6 py-2 text-xs text-gray-600">
          <button
            type="button"
            className="flex justify-center items-center gap-2 text-gray-700 hover:text-black transition-colors hover:underline"
            aria-label="Change region and language"
          >
            <Globe className="h-4 w-4" />
            <span
              id="google_translate_element"
              className="translate-widget h-8"
            ></span>
          </button>

          <nav aria-label="Top links" className="flex items-center gap-4">
            {utilityLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="hover:text-black transition-colors hover:underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hover:text-black transition-colors hover:underline flex items-center gap-1"
            >
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="hover:text-black transition-colors hover:underline flex items-center gap-1"
            >
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="flex w-full items-center justify-between px-6 py-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/Logo.png" alt="JB logo" className="h-12 min-w-40" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {mainItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search + CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center max-w-lg w-full bg-gray-100 rounded-full px-4 py-2 mx-4"
          >
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none w-full ml-2 text-sm text-gray-700 placeholder-gray-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border hover:bg-gray-100"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t bg-white"
          >
            <div className="p-4 overflow-y-auto max-h-[90vh]">
              {/* Search */}
              <div className="mb-4">
                <form onSubmit={handleSearch} className="md:hidden pb-2 px-2">
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                    <Search size={18} className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="bg-transparent border-none outline-none w-full ml-2 text-sm text-gray-700 placeholder-gray-500"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </form>
              </div>

              <Link
                to="/contact"
                className="col-span-2 flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                onClick={() => setOpen(false)}
              >
                CONTACT JB
              </Link>

              {/* Main Nav */}
              <nav className="flex flex-col gap-3 border-b pb-4">
                {mainItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm font-medium text-gray-700 hover:text-black py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Utility Links */}
              <nav className="flex flex-col gap-3 border-b py-4">
                {utilityLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-sm font-medium text-gray-700 hover:text-black py-2"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              {/* Extras/Login/Register/Region/Contact */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-md border px-3 py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center rounded-md border px-3 py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  <UserPlus className="mr-2 h-4 w-4" /> Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
