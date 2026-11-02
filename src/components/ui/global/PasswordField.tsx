import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "./Input";
import { Label } from "../typography/Label";

type PasswordFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
};

export function PasswordField({
  id,
  label,
  placeholder,
  value,
  onChange,
  autoComplete,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="security-form-field">
      <Label required htmlFor={id}>{label}</Label>

      <div className="security-password-input-wrap">
        <Input
          id={id}
          className="security-password-input"
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          required
        />

        <button
          type="button"
          className="security-password-visibility"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
        >
          {visible ? <EyeOff size={15} /> : <Eye size={15} />}
          <span>{visible ? "Hide" : "Show"}</span>
        </button>
      </div>
    </div>
  );
}