import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg-page">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
