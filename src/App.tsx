
import { useState } from "react";
import { ToastProvider, useToast } from "./components/ui/global/Toast";
import { Spinner } from "./components/ui/global/Spinner";
import { Skeleton } from "./components/ui/global/Skeleton";

import { Body } from "./components/ui/typography/Body";
import { Label } from "./components/ui/typography/Label";
import { Title } from "./components/ui/typography/Title";

import { Button } from "./components/ui/global/Button";
import { Input } from "./components/ui/global/Input";
import { Card } from "./components/ui/global/Card";
import { ColorPaletteSelector } from "./components/ui/global/ColorPaletteSelecotr";

import { useTheme } from "./components/providers/ThemeProvider";
import { Avatar } from "./components/ui/global/Avatar";
import { Alert } from "./components/ui/global/Alert";
import { Badge } from "./components/ui/global/Badge";
import { Checkbox } from "./components/ui/global/Checkbox";
import { Switch } from "./components/ui/global/Switch";
import { Select } from "./components/ui/global/Select";
import { Modal } from "./components/ui/global/Modal";
import { Tabs, type TabItem, type TabSize } from "./components/ui/global/Tab";

function AppContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mode, setMode, resolvedTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [size, setSize] = useState<TabSize>("medium");

  const tabs: TabItem[] = [
  {
    value: "overview",
    label: "Overview",
    content: <div>Overview content goes here.</div>,
  },
  {
    value: "settings",
    label: "Settings",
    content: <div>Settings content goes here.</div>,
  },
  {
    value: "activity",
    label: "Activity",
    content: <div>Activity content goes here.</div>,
  },
];


  const handleSave = () => {
    setIsSaving(true);
    window.setTimeout(() => {
      setIsSaving(false);
      showToast({
        title: "Success!",
        description: "Your changes have been saved.",
        variant: "success",
      });
    }, 2000);
  };

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


        {/* Badges */}
        <Card>
          <div className="stack">
            <Title size="large">Badges</Title>

            <Body size="medium">
              Modern status indicators, labels, and metadata badges.
            </Body>

            {/* Variants */}
            <div className="stack stack-sm">
              <Title size="small">Variants</Title>

              <div className="cluster">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Featured</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="danger">Failed</Badge>
                <Badge variant="info">Information</Badge>
              </div>
            </div>

            {/* Status badges */}
            <div className="stack stack-sm">
              <Title size="small">Status</Title>

              <div className="cluster">
                <Badge variant="success" dot>Online</Badge>
                <Badge variant="warning" dot>Away</Badge>
                <Badge variant="danger" dot>Offline</Badge>
                <Badge variant="info" dot>Processing</Badge>
              </div>
            </div>

            {/* Sizes */}
            <div className="stack stack-sm">
              <Title size="small">Sizes</Title>

              <div className="cluster">
                <Badge size="small" variant="primary">
                  Small
                </Badge>

                <Badge size="medium" variant="primary">
                  Medium
                </Badge>

                <Badge size="large" variant="primary">
                  Large
                </Badge>
              </div>
            </div>

            {/* Real-world examples */}
            <div className="stack stack-sm">
              <Title size="small">Use cases</Title>

              <div className="cluster">
                <Badge variant="success" dot>Published</Badge>
                <Badge variant="warning">Awaiting review</Badge>
                <Badge variant="primary">PRO</Badge>
                <Badge variant="info">New</Badge>
                <Badge variant="default">v1.0.0</Badge>
              </div>
            </div>

          </div>
        </Card>


        {/* Alerts */}
        <Card>
          <div className="stack">
            <Title size="large">Alerts</Title>

            <Alert variant="success" title="Success">
              Your changes have been saved.
            </Alert>

            <Alert variant="warning" title="Warning">
              Please review the information before continuing.
            </Alert>

            <Alert variant="error" title="Error" dismissible>
              Something went wrong. Please try again.
            </Alert>

            <Alert variant="info" title="Information" dismissible>
              A new update is available.
            </Alert>
          </div>
        </Card>

        {/* Toast notifications */}
        <Card>
          <div className="stack">
            <Title size="large">Toast Notifications</Title>
            <Body size="medium">
              Temporary feedback messages for successful actions, errors, and updates.
            </Body>

            <div className="cluster">
              <Button
                onClick={() =>
                  showToast({
                    title: "Success!",
                    description: "Your changes have been saved.",
                    variant: "success",
                  })
                }
              >
                Success Toast
              </Button>

              <Button
                variant="danger"
                onClick={() =>
                  showToast({
                    title: "Something went wrong",
                    description: "Please try again.",
                    variant: "error",
                  })
                }
              >
                Error Toast
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    title: "Please note",
                    description: "Review your information before continuing.",
                    variant: "warning",
                  })
                }
              >
                Warning Toast
              </Button>

              <Button
                variant="secondary"
                onClick={() =>
                  showToast({
                    title: "Information",
                    description: "A new update is available.",
                    variant: "info",
                  })
                }
              >
                Info Toast
              </Button>
            </div>
          </div>
        </Card>

        {/* Spinners */}
        <Card>
          <div className="stack">
            <Title size="large">Spinners</Title>
            <Body size="medium">
              Loading indicators for async actions and content.
            </Body>

            <div className="cluster">
              <Spinner size="small" />
              <Spinner size="medium" />
              <Spinner size="large" />
            </div>

            <div className="cluster">
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? <Spinner size="small" label="Saving..." /> : "Simulate Save"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Skeleton loading */}
        <Card>
          <div className="stack">
            <Title size="large">Skeleton Loading</Title>
            <Body size="medium">
              Placeholder shapes displayed while content is loading.
            </Body>

            <Button
              variant="outline"
              onClick={() => setShowSkeleton((current) => !current)}
            >
              {showSkeleton ? "Show Loaded Content" : "Show Skeletons"}
            </Button>

            {showSkeleton ? (
              <div className="stack">
                <Skeleton variant="circular" width={48} height={48} />
                <Skeleton width="60%" height="1.25rem" />
                <Skeleton width="100%" height="1rem" />
                <Skeleton width="85%" height="1rem" />
                <Skeleton variant="rectangular" width="100%" height={120} />
              </div>
            ) : (
              <div className="stack">
                <Title size="medium">Loaded content</Title>
                <Body size="medium">
                  Your content has loaded successfully. This is where real data would appear.
                </Body>
              </div>
            )}
          </div>
        </Card>

        {/* Avatars */}
        <Card>
          <div className="stack">
            <Title size="large">Avatars</Title>

            <div className="cluster">
              <Avatar name="Sarah Connor" size="small" />
              <Avatar name="John Doe" size="medium" />
              <Avatar name="Alex Morgan" size="large" />
              <Avatar name="Taylor Smith" size="extra-large" />
            </div>

            <div className="cluster">
              <Avatar
                name="Jane Cooper"
                src="https://i.pravatar.cc/100?img=47"
              />
              <Avatar name="John Smith" shape="square" />
            </div>
          </div>
        </Card>

        {/* Checkboxes */}
        <Card>
          <div className="stack">
            <Title size="large">Checkboxes</Title>
            <Body size="medium">
              Selection controls with descriptions, validation, and sizes.
            </Body>

            <div className="stack">
              <Checkbox
                label="Email notifications"
                description="Receive updates about your account."
                checked={emailNotifications}
                onChange={(event) =>
                  setEmailNotifications(event.target.checked)
                }
              />

              <Checkbox
                label="Marketing emails"
                description="Receive product news and announcements."
                checked={marketingEmails}
                onChange={(event) =>
                  setMarketingEmails(event.target.checked)
                }
              />

              <Checkbox
                label="Disabled option"
                description="This option is currently unavailable."
                disabled
              />

              <Checkbox
                label="Accept terms and conditions"
                checked={acceptedTerms}
                onChange={(event) =>
                  setAcceptedTerms(event.target.checked)
                }
                error={
                  !acceptedTerms
                    ? "You must accept the terms to continue."
                    : undefined
                }
              />
            </div>

            <div className="cluster">
              <Checkbox size="small" label="Small" />
              <Checkbox size="medium" label="Medium" />
              <Checkbox size="large" label="Large" />
            </div>
          </div>
        </Card>

        {/* Switches */}
        <Card>
          <div className="stack">
            <Title size="large">Switches</Title>
            <Body size="medium">
              Modern toggles for preferences and settings.
            </Body>

            <div className="stack">
              <Switch
                label="Email notifications"
                description="Get notified when something important happens."
                checked={emailNotifications}
                onChange={(event) =>
                  setEmailNotifications(event.target.checked)
                }
              />

              <Switch
                label="Marketing emails"
                description="Receive occasional product updates."
                checked={marketingEmails}
                onChange={(event) =>
                  setMarketingEmails(event.target.checked)
                }
              />

              <Switch label="Disabled switch" disabled />

              <Switch size="small" label="Small switch" />
              <Switch size="medium" label="Medium switch" />
              <Switch size="large" label="Large switch" />
            </div>
          </div>
        </Card>

        {/* Selects */}
        <Card>
          <div className="stack">
            <Title size="large">Selects</Title>
            <Body size="medium">
              Dropdown fields with labels, hints, and validation states.
            </Body>

            <Select
              label="Account role"
              placeholder="Choose a role"
              value={selectedRole}
              onChange={(event) =>
                setSelectedRole(event.target.value)
              }
              hint="Select the role assigned to this account."
              fullWidth
              required
            >
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </Select>

            <Select
              label="Small select"
              size="small"
              defaultValue="indigo"
            >
              <option value="indigo">Indigo</option>
              <option value="blue">Blue</option>
              <option value="emerald">Emerald</option>
            </Select>

            <Select
              label="Large select"
              size="large"
              placeholder="Choose a category"
              defaultValue=""
            >
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </Select>

            <Select
              label="Select with error"
              error="Please choose a valid option."
              defaultValue=""
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="one">Option one</option>
              <option value="two">Option two</option>
            </Select>

            <Select label="Disabled select" disabled defaultValue="viewer">
              <option value="viewer">Viewer</option>
            </Select>
          </div>
        </Card>

{/* Right-side Modal / Drawer */}
<Card>
  <div className="stack">
    <Title size="large">Modal / Drawer</Title>

    <Body size="medium">
      A reusable dialog that slides in from the right side.
    </Body>

    <div className="cluster">
      <Button onClick={() => setIsModalOpen(true)}>
        Open Right Drawer
      </Button>
    </div>
  </div>
</Card>

<Card>
      <div className="stack">

      <Select
        label="Tab size"
        id="tabs-size"
        value={size}
        onChange={(event) => setSize(event.target.value as TabSize)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </Select>

      <Tabs
        tabs={tabs}
        size={size}
        selectedValue={activeTab}
        onChange={setActiveTab}
        ariaLabel="Example navigation"
      />
    </div>
</Card>

<Modal
  open={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Account Settings"
  width="420px"
>
  <div className="stack stack-sm">
    <Body size="medium">
      Manage your account preferences here.
    </Body>
    <Label htmlFor="full-name" size="medium" required>
      name
    </Label>
    <Input
      id="full-name"
      placeholder="Enter your name"
    />
      <Label htmlFor="email" size="medium" required>
      Email
    </Label>
    <Input
      id="email"
      type="email"
      placeholder="you@example.com"
    />

    <div className="cluster">
      <Button onClick={() => setIsModalOpen(false)}>
        Save Changes
      </Button>

      <Button
        variant="outline"
        onClick={() => setIsModalOpen(false)}
      >
        Cancel
      </Button>
    </div>
  </div>
</Modal>


      </div>
    </main>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
