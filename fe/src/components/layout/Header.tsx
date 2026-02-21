"use client";

import { Avatar } from "antd";
import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckOutlined,
  MessageOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useUIStore } from "@/stores/uiStore";

function useClickOutside(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}

const notifications = [
  {
    id: "1",
    icon: <PlusCircleOutlined style={{ fontSize: 18, color: "#6366f1" }} />,
    iconBg: "bg-primary-light",
    title: "New task assigned",
    desc: "You have been assigned to \"Fix login bug\"",
    time: "2m ago",
    unread: true,
  },
  {
    id: "2",
    icon: <MessageOutlined style={{ fontSize: 18, color: "#3b82f6" }} />,
    iconBg: "bg-blue-500/10",
    title: "Comment on task",
    desc: "John commented on \"Dashboard redesign\"",
    time: "15m ago",
    unread: true,
  },
  {
    id: "3",
    icon: <CheckOutlined style={{ fontSize: 18, color: "#22c55e" }} />,
    iconBg: "bg-green-500/10",
    title: "Task completed",
    desc: "\"Setup CI/CD pipeline\" was marked as done",
    time: "1h ago",
    unread: false,
  },
];

export default function Header() {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useClickOutside(notificationRef, () => setShowNotifications(false));
  useClickOutside(userRef, () => setShowUserMenu(false));

  return (
    <header className="flex items-center justify-between h-16 bg-bg-sidebar border-b border-border">
      {/* Left: Menu toggle + Logo */}
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[60px] shrink-0">
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-bg-hover transition-colors text-text-secondary cursor-pointer"
          >
            {sidebarCollapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: 20 }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: 20 }} />
            )}
          </button>
        </div>
        <div className="flex items-center mr-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/80 rounded-full blur-md dark:block hidden" />
            <Image
              src="/images/logo.png"
              alt="TaskFlow"
              width={40}
              height={40}
              className="relative rounded-full"
            />
          </div>
          <span className="font-bold text-lg">
            <span className="text-text-primary">Task</span>
            <span className="text-primary">Flow</span>
          </span>
        </div>
      </div>

      <div className="relative max-w-md w-full">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-bg-page border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 pr-6">
        <ThemeToggle />

        {/* Notifications */}
        <div ref={notificationRef} className="relative">
          <button
            aria-label="Notifications"
            onClick={() => { setShowNotifications(!showNotifications); setShowUserMenu(false); }}
            className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-bg-hover transition-colors cursor-pointer"
          >
            <BellOutlined style={{ fontSize: 20, color: "var(--text-secondary)" }} />
            <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-bold text-white bg-red-500 rounded-full leading-none ring-2 ring-bg-sidebar">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-[360px] bg-bg-card border border-border rounded-2xl shadow-md overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-primary">Notifications</span>
                  <span className="flex items-center justify-center h-5 min-w-5 px-1.5 text-[11px] font-semibold text-primary bg-primary-light rounded-full">
                    3
                  </span>
                </div>
                <button className="text-xs font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
                  Mark all read
                </button>
              </div>

              <div className="h-px bg-border" />

              {/* List */}
              <div className="max-h-[320px] overflow-y-auto py-1">
                {notifications.map((n) => (
                  <button
                    key={n.id}
                    className={`w-full flex items-start gap-3 px-5 py-3.5 hover:bg-bg-hover transition-colors cursor-pointer text-left ${n.unread ? "bg-primary/[0.03]" : ""}`}
                  >
                    <div className={`flex items-center justify-center w-9 h-9 rounded-full ${n.iconBg} shrink-0 mt-0.5`}>
                      {n.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-[13px] font-medium text-text-primary">{n.title}</p>
                        {n.unread && <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                      </div>
                      <p className="text-xs text-text-muted mt-0.5 line-clamp-1">{n.desc}</p>
                      <p className="text-[11px] text-text-muted mt-1">{n.time}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="h-px bg-border" />

              {/* Footer */}
              <div className="p-2">
                <button className="w-full py-2 text-[13px] font-medium text-primary hover:bg-bg-hover rounded-lg transition-colors cursor-pointer">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div ref={userRef} className="relative">
          <button
            onClick={() => { setShowUserMenu(!showUserMenu); setShowNotifications(false); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Avatar
              size={34}
              style={{ backgroundColor: "#6366f1", fontSize: 14, fontWeight: 600 }}
            >
              K
            </Avatar>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 top-full mt-2 w-[220px] bg-bg-card border border-border rounded-2xl shadow-md overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* User info */}
              <div className="px-4 py-3.5">
                <p className="text-sm font-semibold text-text-primary">Khoa Nguyen</p>
                <p className="text-xs text-text-muted mt-0.5">khoa@example.com</p>
              </div>

              <div className="h-px bg-border" />

              <div className="py-1.5">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-bg-hover transition-colors cursor-pointer text-left">
                  <UserOutlined style={{ fontSize: 15, color: "var(--text-secondary)" }} />
                  <span className="text-[13px] text-text-primary">Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-bg-hover transition-colors cursor-pointer text-left">
                  <SettingOutlined style={{ fontSize: 15, color: "var(--text-secondary)" }} />
                  <span className="text-[13px] text-text-primary">Settings</span>
                </button>
              </div>

              <div className="h-px bg-border" />

              <div className="py-1.5">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-bg-hover transition-colors cursor-pointer text-left">
                  <LogoutOutlined style={{ fontSize: 15, color: "#ef4444" }} />
                  <span className="text-[13px] text-red-500">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
