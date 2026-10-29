
import { useState } from "react";

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

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
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

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Connect your registration API here.
        console.log({
            firstName,
            lastName,
            email,
            password,
        });
    }

    return (
        <div className="m-3">
            <Center fullHeight>
                <div className="w-xs">
                    <form onSubmit={handleSubmit}>
                        <Title size="large">Create an account</Title>

                        <Body size="medium">
                            Sign up to get started.
                        </Body>

                        <div className="stack">
<div className="flex gap-3">
  <div className="stack flex-1">
    <Label htmlFor="firstName" required>First name</Label>
    <Input
      id="firstName"
      name="firstName"
      placeholder="First name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
    />
  </div>

  <div className="stack flex-1">
    <Label htmlFor="lastName" required>Last name</Label>
    <Input
      id="lastName"
      name="lastName"
      value={lastName}
      placeholder="Last name"
      onChange={(e) => setLastName(e.target.value)}
      required
    />
  </div>
</div>

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
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
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
                                    placeholder="Create a password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="stack">
                                <Label size="medium" required>
                                    Confirm password
                                </Label>

                                <Input
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
                                    {error}
                                </Body>
                            )}
                    
                            <Button
                                type="submit"
                                variant="primary"
                                size="medium"
                                className="my-3"
                            >
                                Create account
                            </Button>
                        </div>
                      

                        <Body size="small">
                            Already have an account?{" "}
                            <a href="/login">Sign in</a>
                        </Body>
                    </form>
                </div>
            </Center>
        </div>
    );
}
