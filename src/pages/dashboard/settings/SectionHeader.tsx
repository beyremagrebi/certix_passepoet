import { Body, type BodySize } from "../../../components/ui/typography/Body";
import { Title,  type TitleSize } from "../../../components/ui/typography/Title";


interface SectionHeaderProps {
   size?:BodySize
   titleSize?: TitleSize,
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  titleSize="small",
  size = "small",
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      <div className="section-header__content">
        <Title size={`${titleSize}`}>{title}</Title>

        {description && (
          <Body size={`${size}`}>{description}</Body>
        )}
      </div>
    </div>
  );
}
