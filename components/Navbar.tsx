"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-crimson to-crimson-soft blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-xl bg-gradient-to-r from-crimson to-crimson-soft p-3">
                <span className="text-sm font-bold text-white">MK</span>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-gradient">Mauna Kea</h1>
              <p className="text-xs text-muted-soft">Consulting</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-crimson"
                          : "text-muted-soft hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 rounded-lg bg-crimson/10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium px-6 py-3 rounded-full text-sm font-semibold text-white"
              onClick={() => window.location.href = "/calendar"}
            >
              Book Expert Session
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-center">
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                className="h-0.5 w-full bg-white rounded-full"
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                className="h-0.5 w-full bg-white rounded-full my-1"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                className="h-0.5 w-full bg-white rounded-full"
              />
            </div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 glass-strong border-l border-white/10"
            >
              <div className="flex flex-col p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-r from-crimson to-crimson-soft p-2">
                    <span className="text-sm font-bold text-white">MK</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gradient">Mauna Kea</h2>
                    <p className="text-xs text-muted-soft">Consulting</p>
                  </div>
                </div>
                
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                              isActive
                                ? "bg-crimson/20 text-crimson"
                                : "text-muted-soft hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium w-full px-6 py-3 rounded-full text-sm font-semibold text-white"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = "/calendar";
                  }}
                >
                  Book Expert Session
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
