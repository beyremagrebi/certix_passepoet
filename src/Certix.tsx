import { Routes, Route, Navigate } from "react-router-dom";
import { ToastProvider } from "./components/ui/global/Toast";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import LoginForm from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function Certix() {
    return (
        <ToastProvider>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />

                    <Route
                        path="passport"
                        element={<Page title="My digital passport" />}
                    />
                    <Route
                        path="achievements"
                        element={<Page title="Achievements" />}
                    />
                    <Route
                        path="certifications"
                        element={<Page title="Certifications" />}
                    />
                    <Route
                        path="experiences"
                        element={<Page title="Experiences" />}
                    />
                    <Route
                        path="activities"
                        element={<Page title="Activities" />}
                    />
                    <Route
                        path="projects"
                        element={<Page title="Personal projects" />}
                    />
                    <Route
                        path="badges"
                        element={<Page title="Badges & milestones" />}
                    />
                    <Route
                        path="settings"
                        element={<Page title="Settings" />}
                    />
                    <Route
                        path="help"
                        element={<Page title="Help & support" />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                />
            </Routes>
        </ToastProvider>
    );
}

function Page({ title }: { title: string }) {
    return (
        <section>
            <h1>{title}</h1>
            <p>Manage your {title.toLowerCase()} here.</p>
        </section>
    );
}

export default Certix;