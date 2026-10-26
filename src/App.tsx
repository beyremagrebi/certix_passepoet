
import { useState } from "react";

import { Body } from "./components/ui/typography/Body";
import { Label } from "./components/ui/typography/Label";
import { Title } from "./components/ui/typography/Title";

import { Button } from "./components/ui/global/Button";
import { Input } from "./components/ui/global/Input";
import { Card } from "./components/ui/global/Card";
import { ColorPaletteSelector } from "./components/ui/global/ColorPaletteSelecotr";

import { useTheme } from "./components/providers/ThemeProvider";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mode, setMode, resolvedTheme } = useTheme();

  return (
    <main className="page-layout">
      <div className="container page-content">
        {/* Header */}
        <header className="page-header">
          <div className="stack stack-sm">
            <Title as="h1" size="huge">
              UI Component Showcase
            </Title>

            <Body size="medium">
              A reusable design system with Inter typography, theme support,
              buttons, inputs, and cards.
            </Body>
          </div>
        </header>

        {/* Color palette and appearance */}
        <section className="grid-2">
          <Card>
            <div className="stack">
              <Title size="large">Color Palette</Title>
              <Body size="medium">
                Choose a primary color for the application.
              </Body>
              <ColorPaletteSelector />
            </div>
          </Card>

          <Card>
            <div className="stack">
              <Title size="large">Appearance</Title>
              <Body size="medium">Choose your preferred theme.</Body>

              <div className="cluster">
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
            </div>
          </Card>
        </section>

        {/* Typography */}
        <Card>
          <div className="stack">
            <Title size="large">Typography</Title>
            <Body size="medium">
              Inter font family with reusable sizes and weights.
            </Body>

            <div className="grid-auto">
              <div className="stack stack-sm">
                <Title size="medium">Body</Title>
                <Body size="small">Body Small — 12px</Body>
                <Body size="medium">Body Medium — 14px</Body>
                <Body size="large">Body Large — 16px</Body>
                <Body size="huge">Body Huge — 18px</Body>
              </div>

              <div className="stack stack-sm">
                <Title size="medium">Titles</Title>
                <Title size="small">Title Small — 20px</Title>
                <Title size="medium">Title Medium — 24px</Title>
                <Title size="large">Title Large — 30px</Title>
                <Title size="huge">Title Huge — 36px</Title>
              </div>

              <div className="stack stack-sm">
                <Title size="medium">Labels</Title>
                <Label size="small">Label Small — 12px</Label>
                <Label size="medium">Label Medium — 14px</Label>
                <Label size="large">Label Large — 16px</Label>
                <Label size="huge">Label Huge — 18px</Label>
              </div>
            </div>
          </div>
        </Card>

        {/* Buttons */}
        <Card>
          <div className="stack">
            <Title size="large">Buttons</Title>
            <Body size="medium">
              Available variants, sizes, and states.
            </Body>

            <div className="cluster">
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

            <div className="cluster">
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Danger</Button>
              <Button disabled>Disabled</Button>
            </div>

            <Button fullWidth>Full-width Button</Button>
          </div>
        </Card>

        {/* Cards */}
        <section className="stack">
          <div className="stack stack-sm">
            <Title size="large">Cards</Title>
            <Body size="medium">
              Reusable card variants and spacing options.
            </Body>
          </div>

          <div className="grid-auto">
            <Card variant="default">
              <div className="stack">
                <Title size="medium">Default Card</Title>
                <Body size="medium">
                  A clean surface for grouping related content.
                </Body>
              </div>
            </Card>

            <Card variant="outlined">
              <div className="stack">
                <Title size="medium">Outlined Card</Title>
                <Body size="medium">
                  A stronger border to distinguish the content.
                </Body>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="stack">
                <Title size="medium">Elevated Card</Title>
                <Body size="medium">
                  A subtle shadow adds depth to the surface.
                </Body>
              </div>
            </Card>

            <Card padding="large">
              <div className="stack">
                <Title size="medium">Card with Action</Title>
                <Body size="medium">
                  Cards can contain buttons and other components.
                </Body>
                <Button>View Details</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Inputs */}
        <Card>
          <div className="stack">
            <Title size="large">Inputs</Title>
            <Body size="medium">
              Reusable inputs with labels and validation states.
            </Body>

            <form
              className="stack input-form"
              onSubmit={(event) => {
                event.preventDefault();
                console.log({ email, password });
              }}
            >
              <div className="stack stack-sm">
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

              <div className="stack stack-sm">
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

            <div className="stack">
              <Title size="medium">Input Sizes</Title>
              <Input size="small" placeholder="Small input" />
              <Input size="medium" placeholder="Medium input" />
              <Input size="large" placeholder="Large input" />
              <Input
                id="example-error"
                placeholder="Input with error"
                error="This field is required"
              />
              <Input placeholder="Disabled input" disabled />
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default App;
