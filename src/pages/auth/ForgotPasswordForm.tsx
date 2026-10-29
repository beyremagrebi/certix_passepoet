import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Center } from "../../components/ui/global/Center";
import { Title } from "../../components/ui/typography/Title";
import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Input } from "../../components/ui/global/Input";
import { Button } from "../../components/ui/global/Button";



export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Call your password-reset API here.
    console.log("Password reset requested for:", email);

    setSuccess(true);
  }

  return (
    <div className="forgot-password-form-wrapper">
      <Center fullHeight>
        <div className="forgot-password-form-container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="forgot-password-heading">
              <Title>Forgot password?</Title>
              <Body>
                No worries. Enter the email address associated with your
                account, and we'll send you instructions to reset your password.
              </Body>
            </div>

            <div className="stack forgot-password-fields">
              <div className="stack">
                <Label htmlFor="forgot-password-email" required>Email address</Label>
                <Input
                  id="forgot-password-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              {error && (
                <Body size="small">
                  <span className="forgot-password-error" role="alert">
                    {error}
                  </span>
                </Body>
              )}

              {success && (
                <Body size="small">
                  <span className="forgot-password-success" role="status">
                    If an account exists for this email, password-reset
                    instructions will be sent.
                  </span>
                </Body>
              )}

              <Button
                type="submit"
                variant="primary"
                size="medium"
                className="forgot-password-submit"
              >
                Send reset instructions
              </Button>
            </div>

            <div className="forgot-password-footer">
              <Body size="small">
                Remembered your password? <Link to="/login">Sign in</Link>
              </Body>
            </div>
          </form>
        </div>
      </Center>
    </div>
  );
}