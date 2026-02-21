"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useTheme } from "next-themes";

const lightTokens = {
  token: {
    colorPrimary: "#6366f1",
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",
    colorBgLayout: "#f8fafc",
    colorText: "#0f172a",
    colorTextSecondary: "#64748b",
    colorBorder: "#e2e8f0",
    borderRadius: 8,
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
  algorithm: antdTheme.defaultAlgorithm,
};

const darkTokens = {
  token: {
    colorPrimary: "#818cf8",
    colorBgContainer: "#1f1f1f",
    colorBgElevated: "#1f1f1f",
    colorBgLayout: "#141414",
    colorText: "#f5f5f5",
    colorTextSecondary: "#a3a3a3",
    colorBorder: "#303030",
    borderRadius: 8,
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
  algorithm: antdTheme.darkAlgorithm,
};

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider theme={isDark ? darkTokens : lightTokens}>
          {children}
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
