import {
    LayoutDashboard,
    ContactRound,
    Trophy,
    Award,
    BriefcaseBusiness,
    Activity,
    FolderKanban,
    Medal,
    Settings,
    CircleHelp,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Title } from "../../components/ui/typography/Title";

const navigationGroups = [
    {
        label: "WORKSPACE",
        items: [
            {
                label: "Dashboard",
                href: "/dashboard",
                Icon: LayoutDashboard,
            },
            {
                label: "My digital passport",
                href: "/dashboard/passport",
                Icon: ContactRound,
            },
        ],
    },
    {
        label: "MY RECORDS",
        items: [
            {
                label: "Achievements",
                href: "/dashboard/achievements",
                Icon: Trophy,
            },
            {
                label: "Certifications",
                href: "/dashboard/certifications",
                Icon: Award,
            },
            {
                label: "Experiences",
                href: "/dashboard/experiences",
                Icon: BriefcaseBusiness,
            },
            {
                label: "Activities",
                href: "/dashboard/activities",
                Icon: Activity,
            },
            {
                label: "Personal projects",
                href: "/dashboard/projects",
                Icon: FolderKanban,
            },
            {
                label: "Badges & milestones",
                href: "/dashboard/badges",
                Icon: Medal,
            },
        ],
    },
];

export function Sidebar() {
    return (
        <aside className="dashboard-sidebar">
            <NavLink to="/dashboard" className="dashboard-brand">
                <span className="dashboard-brand-icon">C</span>
                <Title size="medium">Certix</Title>
            </NavLink>

            <nav className="dashboard-sidebar-navigation">
                {navigationGroups.map((group) => (
                    <div
                        key={group.label}
                        className="dashboard-nav-section"
                    >
                        <Label size="small">{group.label}</Label>

                        <div className="stack">
                            {group.items.map(({ label, href, Icon }) => (
                                <NavLink
                                    key={href}
                                    to={href}
                                    end={href === "/dashboard"}
                                    aria-label={label}
                                    className={({ isActive }) =>
                                        `dashboard-nav-link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                >
                                    <Icon
                                        className="dashboard-nav-icon"
                                        size={18}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />

                                    <Body size="small">{label}</Body>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            <div className="dashboard-sidebar-bottom">
                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) =>
                        `dashboard-nav-link ${isActive ? "active" : ""}`
                    }
                >
                    <Settings
                        className="dashboard-nav-icon"
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                    <Body size="small">Settings</Body>
                </NavLink>

                <NavLink
                    to="/dashboard/help"
                    className={({ isActive }) =>
                        `dashboard-nav-link ${isActive ? "active" : ""}`
                    }
                >
                    <CircleHelp
                        className="dashboard-nav-icon"
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                    <Body size="small">Help &amp; support</Body>
                </NavLink>

                <div className="dashboard-profile">
                    <div className="dashboard-avatar">AD</div>

                    <div className="dashboard-profile-info">
                        <Body size="small">Bayrem Agrebi</Body>
                        <Body size="small">Administrator</Body>
                    </div>
                </div>
            </div>
        </aside>
    );
}