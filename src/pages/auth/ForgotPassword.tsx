import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginLeftPanel from "./LoginLeftPanel";


export default function ForgotPassword() {
  return (
    <main className="login-page forgot-password-page">
      <LoginLeftPanel />

      <section className="login-form-panel">
        <ForgotPasswordForm />
      </section>
    </main>
  );
}