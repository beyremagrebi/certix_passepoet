# UI Components — Beginner Guide

Our UI components are reusable building blocks for our application. Instead of writing the same styles and code repeatedly, we use these components to keep the application consistent and easy to maintain.

## 1. Cards

**What is a Card?**

A Card is a container that groups related content together. It can contain text, buttons, inputs, or other components.

**When should we use it?**
- To group information into a clear section.
- To display a user profile, product, or statistic.
- To separate forms and content from the page background.

**How to use it:**

```tsx
<Card>
  <Title size="medium">User Profile</Title>
  <Body size="medium">View your profile information.</Body>
  <Button>View Profile</Button>
</Card>
```

**Available options:**
- `variant="default"` — a simple card.
- `variant="outlined"` — a card with a more visible border.
- `variant="elevated"` — a card with a shadow.
- `padding="small"`, `"medium"`, or `"large"` — controls the space inside the card.
- `fullWidth` — makes the card take up the available width.

**Remember:** Use a Card when you want to group related content together.

---

## 2. Typography: Title, Body, and Label

Typography controls how text looks throughout our application. We use three components for different purposes.

### Title

**What is it?**

A Title is used for headings, section names, and page titles.

```tsx
<Title size="huge" as="h1">Dashboard</Title>
<Title size="large">User Settings</Title>
<Title size="medium">Personal Information</Title>
<Title size="small">Account Details</Title>
```

**Available sizes:**
- `small` — 20px
- `medium` — 24px
- `large` — 30px
- `huge` — 36px

**Remember:** Use Title to show what a page or section is about. Use heading levels (`h1`, `h2`, etc.) in a logical order.

### Body

**What is it?**

Body is used for paragraphs, descriptions, instructions, and general text.

```tsx
<Body size="small">Last updated today.</Body>
<Body size="medium">Manage your account information here.</Body>
<Body size="large">Welcome back to your dashboard.</Body>
<Body size="huge">Your report is ready.</Body>
```

**Available sizes:**
- `small` — 12px
- `medium` — 14px
- `large` — 16px
- `huge` — 18px

**Remember:** Use Body for normal content, not for section headings.

### Label

**What is it?**

Label is used to describe a form field, such as an email input, password input, or phone number field.

```tsx
<Label htmlFor="email" required>
  Email Address
</Label>

<Input id="email" type="email" />
```

**Available options:**
- `size` — controls the text size.
- `required` — displays a required indicator.
- `optional` — displays an optional indicator.
- `htmlFor` — connects the label to its input using the input's `id`.

**Remember:** Every form input should have a clear label so users know what information to enter.

---

## 3. Inputs

**What is an Input?**

An Input allows users to enter information, such as an email address, password, name, or search term.

**How to use it:**

```tsx
import { useState } from "react";

function EmailField() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Label htmlFor="email" required>
        Email Address
      </Label>

      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
    </div>
  );
}
```

**Common properties:**
- `type` — defines the input type, such as `text`, `email`, or `password`.
- `placeholder` — displays a hint inside the empty input.
- `value` and `onChange` — keep the input connected to React state.
- `size` — `small`, `medium`, or `large`.
- `error` — displays an error message.
- `disabled` — prevents users from editing the input.
- `fullWidth` — makes the input fill its container, if supported by your Input component.

**Remember:** Use Input when you need the user to enter or edit information. For controlled inputs, connect `value` and `onChange` to state.

---

## 4. Buttons

**What is a Button?**

A Button lets users perform an action, such as saving a form, submitting information, cancelling an operation, or opening a page.

**How to use it:**

```tsx
<Button onClick={() => console.log("Saved!")}>
  Save Changes
</Button>
```

**Available variants:**
- `variant="primary"` — the main action.
- `variant="secondary"` — a secondary action.
- `variant="outline"` — an outlined button.
- `variant="danger"` — a destructive action, such as deleting an item.

**Available sizes:**
- `size="small"`
- `size="medium"`
- `size="large"`

**Other useful properties:**
- `disabled` — prevents interaction.
- `fullWidth` — makes the button fill its container.
- `onClick` — runs a function when the user clicks the button.
- `type="submit"` — submits a form.
- `type="button"` — a normal button that does not submit a form.

**Remember:** Use clear action names such as *Save*, *Delete*, *Cancel*, or *Create Account*. The button should tell users what will happen when they click it.

---

## 5. Quick reference

| Component | Main purpose | Example |
|---|---|---|
| `Card` | Group related content | User profile section |
| `Title` | Display headings | Dashboard |
| `Body` | Display descriptions and paragraphs | Welcome message |
| `Label` | Describe a form field | Email Address |
| `Input` | Collect user information | Email field |
| `Button` | Perform an action | Save Changes |

## Team rules to remember

1. **Reuse components.** Don't create a new button or input style every time.
2. **Use consistent sizes.** Follow the existing size options instead of inventing new ones.
3. **Use the correct component.** Titles for headings, Body for content, Labels for fields.
4. **Use theme variables.** Avoid hardcoding colors when theme tokens already exist.
5. **Keep forms accessible.** Connect every Label to its Input using `htmlFor` and `id`.
6. **Keep actions clear.** Buttons should have meaningful text and do what their label promises.

The goal is simple: **build new pages by combining existing components instead of rebuilding the same UI from scratch.**
