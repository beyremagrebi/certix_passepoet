
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "./SideBar";
import { Header } from "./Header";

export function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const toggleSidebar = () => {
    setIsSidebarCollapsed((previous) => !previous);
  };

  return (
    <div
      className={`dashboard-layout ${
        isSidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      <Sidebar
        collapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
      />

      <div className="dashboard-content">
        <Header />
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
