
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
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Title } from "../../components/ui/typography/Title";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

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

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`dashboard-sidebar ${collapsed ? "is-collapsed" : ""}`}
    >
      {/* Sidebar brand and toggle */}
      <div className="dashboard-sidebar-top">
        <NavLink
          to="/dashboard"
          className="dashboard-brand"
          title={collapsed ? "Certix" : undefined}
        >
          <span className="dashboard-brand-icon">C</span>
          {!collapsed && <Title size="medium">Certix</Title>}
        </NavLink>
<button
  type="button"
  className="dashboard-sidebar-toggle"
  onClick={onToggle}
  aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
  title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
  aria-expanded={!collapsed}
>
  {collapsed ? (
    <PanelLeftOpen size={17} strokeWidth={1.7} />
  ) : (
    <PanelLeftClose size={17} strokeWidth={1.7} />
  )}
</button>
      </div>

      {/* Main navigation */}
      <nav className="dashboard-sidebar-navigation">
        {navigationGroups.map((group) => (
          <div key={group.label} className="dashboard-nav-section">
            {!collapsed && <Label size="small">{group.label}</Label>}

            <div className="stack">
              {group.items.map(({ label, href, Icon }) => (
                <NavLink
                  key={href}
                  to={href}
                  end={href === "/dashboard"}
                  aria-label={label}
                  title={collapsed ? label : undefined}
                  className={({ isActive }) =>
                    `dashboard-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon
                    className="dashboard-nav-icon"
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  {!collapsed && <Body size="small">{label}</Body>}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Sidebar bottom */}
      <div className="dashboard-sidebar-bottom">
        <NavLink
          to="/dashboard/settings"
          aria-label="Settings"
          title={collapsed ? "Settings" : undefined}
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
          {!collapsed && <Body size="small">Settings</Body>}
        </NavLink>

        <NavLink
          to="/dashboard/help"
          aria-label="Help & support"
          title={collapsed ? "Help & support" : undefined}
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
          {!collapsed && <Body size="small">Help &amp; support</Body>}
        </NavLink>

        {/* User profile */}
        <div
          className="dashboard-profile"
          title={collapsed ? "Bayrem Agrebi — Administrator" : undefined}
        >
          <div className="dashboard-avatar">AD</div>

          {!collapsed && (
            <div className="dashboard-profile-info">
              <Body size="small">Bayrem Agrebi</Body>
              <Body size="small">Administrator</Body>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
