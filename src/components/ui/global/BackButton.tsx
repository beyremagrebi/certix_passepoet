
import { useNavigate } from "react-router";
import { Button } from "./Button";

interface BackButtonProps {
  fallbackTo?: string;
  label?: string;
  className?: string;
}

export function BackButton({
  fallbackTo = "/dashboard",
  label = "Back",
  className,
}: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackTo, { replace: true });
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="medium"
      onClick={handleBack}
      className={className}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Button>
  );
}
