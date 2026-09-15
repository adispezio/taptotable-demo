import { Home, Package, Bookmark, Settings, ScanLine, PanelLeft } from "./icons";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import svgPaths from "../lib/logo-paths";

interface DesktopSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onScanClick: () => void;
  expanded: boolean;
  onToggleExpanded: () => void;
}

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Dashboard" },
  { id: "pantry", icon: Package, label: "Pantry" },
  { id: "saved", icon: Bookmark, label: "Saved" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function DesktopSidebar({ activeTab, onTabChange, onScanClick, expanded, onToggleExpanded }: DesktopSidebarProps) {

  return (
    <motion.aside
      initial={false}
      animate={{ width: expanded ? 220 : 72 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="hidden lg:flex fixed left-0 top-0 bottom-0 z-30 flex-col border-r border-stone-800 transition-colors"
    >
      {/* Logo area */}
      <button
        onClick={() => onTabChange("home")}
        className="flex items-center gap-2 px-5 pt-5 pb-2 h-16 overflow-hidden cursor-pointer"
        aria-label="TapToTable home"
      >
        <div className="w-[26px] h-[26px] shrink-0 relative rotate-[10deg] text-white">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6237 26.8833">
            <path d={svgPaths.p2589a900} fill="currentColor" />
            <path d={svgPaths.p33551e00} fill="currentColor" />
          </svg>
        </div>
        <motion.span
          initial={false}
          animate={{ opacity: expanded ? 1 : 0, width: expanded ? "auto" : 0 }}
          transition={{ duration: 0.2, delay: expanded ? 0.08 : 0 }}
          className="font-['Averia_Serif_Libre'] text-[24px] tracking-[-1.5px] leading-[24px] text-white whitespace-nowrap overflow-hidden"
        >
          TapToTable
        </motion.span>
      </button>

      {/* Toggle button */}
      <button
        onClick={onToggleExpanded}
        className={cn(
          "mt-2 mb-4 w-10 h-10 flex items-center justify-center rounded text-stone-500 hover:text-stone-300 hover:bg-stone-800 transition-colors",
          expanded ? "ml-auto mr-3" : "mx-auto"
        )}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <PanelLeft size={20} />
        </motion.div>
      </button>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex items-center gap-3 h-11 rounded-md px-3 transition-colors relative overflow-hidden group",
                isActive
                  ? "bg-brand-500/20 text-brand-400"
                  : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-r-full bg-brand-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={22} className="shrink-0" />
              <motion.span
                initial={false}
                animate={{
                  opacity: expanded ? 1 : 0,
                  x: expanded ? 0 : -8,
                }}
                transition={{ duration: 0.2, delay: expanded ? 0.05 : 0 }}
                className="whitespace-nowrap text-[14px]"
              >
                {item.label}
              </motion.span>
            </button>
          );
        })}

        {/* Scan button */}
        <div className="mt-3 pt-3 border-t border-stone-800">
          <button
            onClick={onScanClick}
            className={cn(
              "flex items-center gap-3 h-11 rounded-md px-3 transition-colors w-full",
              "bg-brand-500 hover:bg-brand-600 text-white shadow-sm"
            )}
          >
            <ScanLine size={22} className="shrink-0" />
            <motion.span
              initial={false}
              animate={{
                opacity: expanded ? 1 : 0,
                x: expanded ? 0 : -8,
              }}
              transition={{ duration: 0.2, delay: expanded ? 0.05 : 0 }}
              className="whitespace-nowrap text-[14px]"
            >
              Scan Items
            </motion.span>
          </button>
        </div>
      </nav>

      {/* Bottom spacer */}
      <div className="p-4" />
    </motion.aside>
  );
}