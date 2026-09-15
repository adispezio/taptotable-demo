import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Package, Bookmark, Settings, ScanLine, Menu, X } from "./icons";
import svgPaths from "../lib/logo-paths";
import { cn } from "../lib/utils";

interface HeaderProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onScanClick?: () => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "pantry", icon: Package, label: "Pantry" },
  { id: "saved", icon: Bookmark, label: "Saved" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function Header({ activeTab = "home", onTabChange, onScanClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Close menu on tab change
  const handleTabChange = (tab: string) => {
    onTabChange?.(tab);
    setMenuOpen(false);
  };

  const handleScanClick = () => {
    onScanClick?.();
    setMenuOpen(false);
  };

  return (
    <div ref={menuRef} className="sticky top-0 z-30">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md lg:pt-6 lg:pb-4 lg:border-b lg:border-stone-800">
        {/* Logo — mobile only */}
        <button
          onClick={() => handleTabChange("home")}
          className="flex items-center gap-2 text-white lg:hidden cursor-pointer"
          aria-label="TapToTable home"
        >
          <div className="w-[26px] h-[26px] relative rotate-[10deg]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6237 26.8833">
              <path d={svgPaths.p2589a900} fill="currentColor" />
              <path d={svgPaths.p33551e00} fill="currentColor" />
            </svg>
          </div>
          <p className="font-['Averia_Serif_Libre'] text-[32px] tracking-[-2px] leading-[28px]">TapToTable</p>
        </button>
        {/* Title — desktop only */}
        <h1 className="hidden lg:block text-xl font-bold text-stone-100">Dashboard</h1>

        {/* Right side actions */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <div className="w-10 h-10 flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 19.9951 19.9951">
              <path d={svgPaths.p2e6cf7c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66626" />
              <path d={svgPaths.pa4d9200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66626" />
            </svg>
          </div>
          {/* Menu toggle — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-md hover:bg-stone-800 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Dropdown menu — mobile only */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden absolute left-0 right-0 top-full z-50"
          >
            <div className="bg-stone-900/95 backdrop-blur-xl border-b border-stone-800 shadow-lg shadow-black/20 px-4 py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                      isActive
                        ? "bg-brand-500/15 text-brand-400"
                        : "text-stone-400 hover:bg-stone-800"
                    )}
                  >
                    <Icon size={20} />
                    <span className={cn("text-[15px]", isActive ? "font-semibold" : "")}>{item.label}</span>
                  </button>
                );
              })}
              {/* Scan button */}
              <button
                onClick={handleScanClick}
                className="w-full flex items-center gap-3 px-4 py-3 mt-1 mb-1 rounded-md bg-brand-500 text-white hover:bg-brand-600 transition-colors"
              >
                <ScanLine size={20} />
                <span className="text-[15px] font-semibold">Scan Ingredients</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}