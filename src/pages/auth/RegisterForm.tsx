import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/global/Button";
import { Center } from "../../components/ui/global/Center";
import { Input } from "../../components/ui/global/Input";

import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Title } from "../../components/ui/typography/Title";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        setError("");

        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Connect your registration API here.
        console.log({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            password,
        });
    }

    return (
        <div className="register-form-wrapper">
            <Center fullHeight>
                <div className="register-form-container">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="register-heading">
                            <Title size="large">
                                Create an account
                            </Title>

                            <Body size="medium">
                                Start building your digital identity
                                with Certix.
                            </Body>
                        </div>

                        <div className="stack register-fields register-form">
                            <div className="register-name-row ">
                                <div className="stack flex-1 ">
                                 
                                    <Label htmlFor="firstName" required>
                                        First name
                                    </Label>

                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        size="medium"
                                        placeholder="First name"
                                        autoComplete="given-name"
                                        value={firstName}
                                        onChange={(event) =>
                                            setFirstName(event.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="stack flex-1">
                                    <Label htmlFor="lastName" required>
                                        Last name
                                    </Label>

                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        size="medium"
                                        placeholder="Last name"
                                        autoComplete="family-name"
                                        value={lastName}
                                        onChange={(event) =>
                                            setLastName(event.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="stack">
                                <Label htmlFor="registerEmail" required>
                                    Email address
                                </Label>

                                <Input
                                    id="registerEmail"
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

                            <div className="stack">
                                <Label htmlFor="registerPassword" required>
                                    Password
                                </Label>

                                <Input
                                    id="registerPassword"
                                    type="password"
                                    name="password"
                                    size="medium"
                                    placeholder="Create a password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                />

                                <Body size="small">
                                    Use at least 8 characters.
                                </Body>
                            </div>

                            <div className="stack">
                                <Label
                                    htmlFor="confirmPassword"
                                    required
                                >
                                    Confirm password
                                </Label>

                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    name="confirmPassword"
                                    size="medium"
                                    placeholder="Confirm your password"
                                    autoComplete="new-password"
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            {error && (
                                <Body size="small">
                                    <span
                                        className="register-error"
                                        role="alert"
                                    >
                                        {error}
                                    </span>
                                </Body>
                            )}


    <Button
        type="submit"
        variant="primary"
        size="medium"
    >
        Create account
    </Button>

                        </div>

                        <div className="login-register">
                            <Body size="small">
                                Already have an account?{" "}
                                <Link to="/login">
                                    Sign in
                                </Link>
                            </Body>
                        </div>
                    </form>
                </div>
            </Center>
        </div>
    );
}