import { Bell } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../ui/global/Button";
import { Title } from "../ui/typography/Title";
import { UserMenu } from "../ui/global/UserMenu";


const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/passport": "My digital passport",
  "/dashboard/achievements": "Achievements",
  "/dashboard/certifications": "Certifications",
  "/dashboard/experiences": "Experiences",
  "/dashboard/activities": "Activities",
  "/dashboard/projects": "Personal projects",
  "/dashboard/badges": "Badges & milestones",
  "/dashboard/settings": "Settings",
  "/dashboard/help": "Help & support",
};

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const title = pageTitles[location.pathname] ?? "Dashboard";

  const handleLogout = () => {
    // Add your authentication logout logic here.
    navigate("/login");
  };

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-left">
        <Title size="medium">{title}</Title>
      </div>

      <div className="dashboard-header-right">
        <Button
          type="button"
          size="small"
          aria-label="Notifications"
          className="dashboard-notification-button"
        >
          <Bell size={19} strokeWidth={1.7} />
          <span className="notification-dot" />
        </Button>

        <UserMenu
          name="Bayrem Agrebi"
          role="Administrator"
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
}