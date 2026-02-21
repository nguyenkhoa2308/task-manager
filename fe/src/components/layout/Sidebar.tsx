"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AppstoreOutlined,
  ProjectOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { useUIStore } from "@/stores/uiStore";

const navItems = [
  { href: "/dashboard", icon: AppstoreOutlined, label: "Dashboard" },
  { href: "/boards", icon: ProjectOutlined, label: "Boards" },
  { href: "/members", icon: TeamOutlined, label: "Members" },
  { href: "/settings", icon: SettingOutlined, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed } = useUIStore();

  return (
    <aside
      className={`flex flex-col bg-bg-sidebar border-r border-border transition-all duration-300 ${
        sidebarCollapsed ? "w-[60px]" : "w-[240px]"
      }`}
    >
      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          const linkContent = (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 mx-2 my-1 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary-light text-primary"
                  : "text-text-secondary hover:bg-primary-light hover:text-primary"
              }`}
            >
              <Icon style={{ fontSize: 20 }} className="shrink-0" />
              {!sidebarCollapsed && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}
            </Link>
          );

          if (sidebarCollapsed) {
            return (
              <Tooltip key={item.label} title={item.label} placement="right">
                {linkContent}
              </Tooltip>
            );
          }

          return linkContent;
        })}
      </nav>
    </aside>
  );
}
