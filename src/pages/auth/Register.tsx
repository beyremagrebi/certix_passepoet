import RegisterForm from "./RegisterForm";
import RegisterLeftPanel from "./RegisterLeftPanel";


export default function Register() {
    return (
        <main className="login-page register-page">
            <RegisterLeftPanel />

            <section className="login-form-panel">
                <RegisterForm />
            </section>
        </main>
    );
}