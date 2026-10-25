import { useState } from "react";

import { Body } from "./components/ui/typography/Body";
import { Label } from "./components/ui/typography/Label";
import { Title } from "./components/ui/typography/Title";
import { Button } from "./components/ui/global/Button";
import { Input } from "./components/ui/global/Input";



function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main
      style={{
        background: "var(--color-background)",
        color: "var(--color-text)",
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      {/* Typography */}
      <section style={{ marginBottom: "2rem" }}>
        <Title as="h1" size="huge">
          Typography
        </Title>

        <Body size="small">Body Small — 12px</Body>
        <Body size="medium">Body Medium — 14px</Body>
        <Body size="large">Body Large — 16px</Body>
        <Body size="huge">Body Huge — 18px</Body>

        <Title size="small">Title Small — 20px</Title>
        <Title size="medium">Title Medium — 24px</Title>
        <Title size="large">Title Large — 30px</Title>
        <Title size="huge">Title Huge — 36px</Title>

        <Label size="small">Label Small — 12px</Label>
        <br />
        <Label size="medium">Label Medium — 14px</Label>
        <br />
        <Label size="large">Label Large — 16px</Label>
        <br />
        <Label size="huge">Label Huge — 18px</Label>
      </section>

      {/* Buttons */}
      <section style={{ marginBottom: "2rem" }}>
        <Title size="large">Buttons</Title>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Button variant="primary" size="small">
            Primary Small
          </Button>

          <Button variant="primary" size="medium">
            Primary Medium
          </Button>

          <Button variant="primary" size="large">
            Primary Large
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>

        <Button fullWidth>Full-width Button</Button>
      </section>

      {/* Inputs */}
      <section style={{ maxWidth: "400px", marginBottom: "2rem" }}>
        <Title size="large">Inputs</Title>

        <div style={{ marginBottom: "1rem" }}>
          <Label htmlFor="email" size="medium">
            Email address
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Label htmlFor="password" size="medium">
            Password
          </Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <Title size="medium">Input Sizes</Title>

        <div style={{ display: "grid", gap: "1rem" }}>
          <Input size="small" placeholder="Small input" />
          <Input size="medium" placeholder="Medium input" />
          <Input size="large" placeholder="Large input" />
          <Input
            placeholder="Input with error"
            error="This field is required"
          />
          <Input placeholder="Disabled input" disabled />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Button
            type="button"
            fullWidth
            onClick={() => {
              console.log({ email, password });
            }}
          >
            Test Form Values
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
