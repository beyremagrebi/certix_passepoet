import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/global/Button";
import { Checkbox } from "../../components/ui/global/Checkbox";
import { Input } from "../../components/ui/global/Input";
import { PasswordField } from "../../components/ui/global/PasswordField";

import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Title } from "../../components/ui/typography/Title";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Please enter your email and password.");
            return;
        }

        // Connect your authentication API here.
        console.log({ email: email.trim(), rememberMe });
    }

    return (
        <section className="login-form-panel">
            <div className="login-form-container">
                <div className="login-mobile-brand">
                    <span className="login-brand-icon">C</span>
                    <span>Certix</span>
                </div>

                <div className="login-heading">
                    <Title size="large">Welcome back</Title>
                    <Body size="medium">
                        Sign in to continue to your account.
                    </Body>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-field">
                        <Label htmlFor="loginEmail" size="medium" required>
                            Email address
                        </Label>

                        <Input
                            id="loginEmail"
                            type="email"
                            name="email"
                            size="medium"
                            placeholder="you@example.com"
                            autoComplete="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />
                    </div>

                    <PasswordField
                        id="loginPassword"
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={setPassword}
                        autoComplete="current-password"
                    />

                    <div className="login-form-options">
                        <Checkbox
                            label="Remember me"
                            size="small"
                            checked={rememberMe}
                            onChange={(event) =>
                                setRememberMe(event.target.checked)
                            }
                        />

                        <Link to="/forgot-password">
                            Forgot password?
                        </Link>
                    </div>

                    {error && (
                        <p className="login-error" role="alert">
                            {error}
                        </p>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        size="medium"
                    >
                        Sign in
                    </Button>
                </form>

                <div className="login-register">
                    <Body size="small">
                        Don't have an account?{" "}
                        <Link to="/register">Create an account</Link>
                    </Body>
                </div>

                <p className="login-legal">
                    By continuing, you agree to our{" "}
                    <a href="/">Terms</a> and{" "}
                    <a href="/">Privacy Policy</a>.
                </p>
            </div>
        </section>
    );
}