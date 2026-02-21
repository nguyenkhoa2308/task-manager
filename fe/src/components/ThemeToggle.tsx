"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Monitor, Sun, Moon } from "lucide-react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const themeOptions = [
  { value: "system" as const, label: "Tự động", icon: Monitor },
  { value: "light" as const, label: "Sáng", icon: Sun },
  { value: "dark" as const, label: "Tối", icon: Moon },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const handleSetTheme = (value: string) => {
    if (!document.startViewTransition) {
      setTheme(value);
      return;
    }

    const x = window.innerWidth;
    const y = 0;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      setTheme(value);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 300,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  if (!mounted) {
    return (
      <div className="h-9 w-[200px] rounded-full bg-bg-card border border-border" />
    );
  }

  return (
    <div className="relative flex items-center bg-bg-hover rounded-full p-1">
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSetTheme(option.value)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              isActive
                ? "bg-bg-card text-text-primary shadow-sm"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            <Icon size={14} />
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
