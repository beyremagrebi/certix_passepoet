
import { useState } from "react";
import { Card } from "../../../components/ui/global/Card";
import { Button } from "../../../components/ui/global/Button";

import { Body } from "../../../components/ui/typography/Body";
import { SectionHeader } from "./SectionHeader";
import { PasswordField } from "../../../components/ui/global/PasswordField";


export function SecuritySetting() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updatePassword = (
    field: keyof typeof passwords,
    value: string
  ) => {
    setPasswords((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handlePasswordSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      return;
    }

    // Connect your change-password API here.
  };

  const handleDeleteAccount = () => {
    // Connect your account-deletion confirmation flow here.
  };

  return (
    <Card>
      <SectionHeader
        size="small"
        title="Security"
        description="Manage your password and account security."
      />

      <div className="settings-divider" />

      {/* Change password */}
      <section className="security-setting-section">
        <SectionHeader
          size="small"
          title="Change password"
          description="Choose a strong password to keep your account secure."
        />

        <form
          className="security-password-form"
          onSubmit={handlePasswordSubmit}
        >
          <div className="security-password-grid my-4 mx-3">
            <PasswordField
              id="currentPassword"
              label="Current password"
              placeholder="Enter current password"
              value={passwords.currentPassword}
              onChange={(value) => updatePassword("currentPassword", value)}
              autoComplete="current-password"
            />

            <PasswordField
              id="newPassword"
              label="New password"
              placeholder="Enter new password"
              value={passwords.newPassword}
              onChange={(value) => updatePassword("newPassword", value)}
              autoComplete="new-password"
            />

            <PasswordField
              id="confirmPassword"
              label="Confirm new password"
              placeholder="Re-enter new password"
              value={passwords.confirmPassword}
              onChange={(value) => updatePassword("confirmPassword", value)}
              autoComplete="new-password"
            />
          </div>

          {passwords.confirmPassword &&
            passwords.newPassword !== passwords.confirmPassword && (
              <p className="security-password-error" role="alert">
                Passwords do not match.
              </p>
            )}

          <div className="security-password-actions">
            <Button
              type="submit"
              variant="primary"
              disabled={
                !passwords.currentPassword ||
                !passwords.newPassword ||
                !passwords.confirmPassword ||
                passwords.newPassword !== passwords.confirmPassword
              }
            >
              Update password
            </Button>
          </div>
        </form>
      </section>

      <div className="settings-divider" />

      {/* Delete account */}
      <section className="security-danger-zone">
        <SectionHeader
          size="small"
          title="Delete account"
          description="Permanently delete your account and all associated data."
        />

        <div className="security-danger-content">
          <div className="security-danger-info">
            <Body size="small">
              This action cannot be undone. Your profile, records,
              achievements, and other account data will be permanently deleted.
            </Body>
          </div>

          <Button
            type="button"
            variant="danger"
            onClick={handleDeleteAccount}
          >
            Delete account
          </Button>
        </div>
      </section>
    </Card>
  );
}
