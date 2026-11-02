import { ProfileSetting } from "./ProfileSetting";
import { ThemeSetting } from "./ThemeSetting";

import { SecuritySetting } from "./SecuritySetting";

export function SettingsPage() {
  return (
    <div className="settings-page">

    


      <ProfileSetting />

      <ThemeSetting />
      <SecuritySetting />
    </div>
  );
}