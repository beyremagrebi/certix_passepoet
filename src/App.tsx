import { useState } from "react";

import { Body } from "./components/ui/typography/Body";
import { Label } from "./components/ui/typography/Label";
import { Title } from "./components/ui/typography/Title";

import { Button } from "./components/ui/global/Button";
import { Input } from "./components/ui/global/Input";
import { Card } from "./components/ui/global/Card";

import { useTheme } from "./components/providers/ThemeProvider";
import { ColorPaletteSelector } from "./components/ui/global/ColorPaletteSelecotr";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mode, setMode, resolvedTheme } = useTheme();

  return (
    <main
      style={{
        background: "var(--color-background)",
        color: "var(--color-text)",
        padding: "2rem",
        minHeight: "100vh",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gap: "2rem",
        }}
      >
        {/* Header */}
        <header>
          <Title as="h1" size="huge">
            UI Component Showcase
          </Title>
          <Body size="medium">
            A reusable design system with Inter typography, theme support,
            buttons, inputs, and cards.
          </Body>
        </header>

        {/* Color palette configuration */}
<Card>
  <Title size="large">Color Palette</Title>
  <Body size="medium">
    Choose a primary color for the application.
  </Body>

  <div style={{ marginTop: "1rem" }}>
    <ColorPaletteSelector />
  </div>
</Card>

        {/* Theme configuration */}
        <Card>
          <Title size="large">Appearance</Title>
          <Body size="medium">Choose your preferred theme.</Body>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            <Button
              variant={mode === "light" ? "primary" : "outline"}
              onClick={() => setMode("light")}
              aria-pressed={mode === "light"}
            >
              Light
            </Button>

            <Button
              variant={mode === "dark" ? "primary" : "outline"}
              onClick={() => setMode("dark")}
              aria-pressed={mode === "dark"}
            >
              Dark
            </Button>

            <Button
              variant={mode === "system" ? "primary" : "outline"}
              onClick={() => setMode("system")}
              aria-pressed={mode === "system"}
            >
              System
            </Button>
          </div>

          <Body size="small">
            Selected mode: {mode} (currently {resolvedTheme})
          </Body>
        </Card>

        {/* Typography */}
        <Card>
          <Title size="large">Typography</Title>
          <Body size="medium">
            Inter font family with reusable sizes and weights.
          </Body>

          <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
            <Body size="small">Body Small — 12px</Body>
            <Body size="medium">Body Medium — 14px</Body>
            <Body size="large">Body Large — 16px</Body>
            <Body size="huge">Body Huge — 18px</Body>

            <div
              style={{
                display: "grid",
                gap: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <Title size="small">Title Small — 20px</Title>
              <Title size="medium">Title Medium — 24px</Title>
              <Title size="large">Title Large — 30px</Title>
              <Title size="huge">Title Huge — 36px</Title>
            </div>

            <div
              style={{
                display: "grid",
                gap: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <Label size="small">Label Small — 12px</Label>
              <Label size="medium">Label Medium — 14px</Label>
              <Label size="large">Label Large — 16px</Label>
              <Label size="huge">Label Huge — 18px</Label>
            </div>
          </div>
        </Card>

        {/* Buttons */}
        <Card>
          <Title size="large">Buttons</Title>
          <Body size="medium">
            Available variants, sizes, and states.
          </Body>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              margin: "1rem 0",
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
        </Card>

        {/* Cards */}
        <section>
          <Title size="large">Cards</Title>
          <Body size="medium">
            Reusable card variants and spacing options.
          </Body>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Card variant="default">
              <Title size="medium">Default Card</Title>
              <Body size="medium">
                A clean surface for grouping related content.
              </Body>
            </Card>

            <Card variant="outlined">
              <Title size="medium">Outlined Card</Title>
              <Body size="medium">
                A stronger border to distinguish the content.
              </Body>
            </Card>

            <Card variant="elevated">
              <Title size="medium">Elevated Card</Title>
              <Body size="medium">
                A subtle shadow adds depth to the surface.
              </Body>
            </Card>

            <Card padding="large">
              <Title size="medium">Card with Action</Title>
              <Body size="medium">
                Cards can contain buttons and other components.
              </Body>
              <div style={{ marginTop: "1rem" }}>
                <Button>View Details</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Inputs */}
        <Card>
          <Title size="large">Inputs</Title>
          <Body size="medium">
            Reusable inputs with labels and validation states.
          </Body>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log({ email, password });
            }}
            style={{
              display: "grid",
              gap: "1rem",
              marginTop: "1rem",
              maxWidth: "480px",
            }}
          >
            <div>
              <Label htmlFor="email" size="medium" required>
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

            <div>
              <Label htmlFor="password" size="medium" required>
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

            <Button type="submit" fullWidth>
              Submit Form
            </Button>
          </form>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginTop: "2rem",
              maxWidth: "480px",
            }}
          >
            <Title size="medium">Input Sizes</Title>
            <Input size="small" placeholder="Small input" />
            <Input size="medium" placeholder="Medium input" />
            <Input size="large" placeholder="Large input" />
            <Input
              placeholder="Input with error"
              error="This field is required"
            />
            <Input placeholder="Disabled input" disabled />
          </div>
        </Card>
      </div>
    </main>
  );
}

export default App;