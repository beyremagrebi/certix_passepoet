import { Outlet } from "react-router-dom";
import { Sidebar } from "./SideBar";

export function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-main">
                <Outlet />
            </main>
        </div>
    );
}