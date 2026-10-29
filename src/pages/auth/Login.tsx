import { useState } from "react";

import { Button } from "../../components/ui/global/Button";
import { Center } from "../../components/ui/global/Center";
import { Checkbox } from "../../components/ui/global/Checkbox";
import { Input } from "../../components/ui/global/Input";
import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Title } from "../../components/ui/typography/Title";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Please enter your email and password.");
            return;
        }

        // Connect your authentication API here.
        console.log({ email, rememberMe });
    }

    return (
        <div className="m-3">
            <Center fullHeight>
        
                <div className="w-xs">


                    <form onSubmit={handleSubmit}>
                        <Title size="large">Welcome back</Title>

                        <Body size="medium">
                            Sign in to continue to your account.
                        </Body>

                        <div className="stack">
                            <div className="stack">
                                <Label size="medium" required>
                                    Email address
                                </Label>

                                <Input
                                    type="email"
                                    name="email"
                                    size="medium"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>

                            <div className="stack">
                                <Label size="medium" required>
                                    Password
                                </Label>

                                <Input
                                    type="password"
                                    name="password"
                                    size="medium"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <Checkbox
                                    label="Remember me"
                                    size="small"
                                    checked={rememberMe}
                                    onChange={(event) => setRememberMe(event.target.checked)}
                                />

                                <a href="/forgot-password">
                                    <Body size="small">Forgot password?</Body>
                                </a>
                            </div>

                            {error && (
                                <Body size="small">{error}</Body>
                            )}


                            <Button
                                type="submit"
                                variant="primary"
                                size="medium"
                            >
                                Sign in
                            </Button>
                        </div>

                        <Body size="small">
                            Don't have an account?{" "}
                            <a href="/register">Create an account</a>
                        </Body>
                    </form>
                </div>
            </Center>
        </div>

    );
}
