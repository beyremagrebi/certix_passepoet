import LoginLeftPanel from "./LoginLeftPanel";
import LoginForm from "./LoginForm";

export default function Login() {
    return (
        <main className="login-page">
            <LoginLeftPanel />
            <LoginForm />
        </main>
    );
}