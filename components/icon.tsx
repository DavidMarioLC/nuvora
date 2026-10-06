import {
  ArrowRight,
  ChartNoAxesCombined,
  Check,
  Mail,
  Smartphone,
  Sparkle,
} from "lucide-react";

const icons = {
  arrow: ArrowRight,
  chart: ChartNoAxesCombined,
  check: Check,
  mail: Mail,
  phone: Smartphone,
  spark: Sparkle,
};

export default function Icon({
  name,
  className = "",
}: {
  name: "spark" | "phone" | "chart" | "check" | "mail" | "arrow";
  className?: string;
}) {
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      aria-hidden="true"
      className={className}
      size={24}
      strokeWidth={1.7}
    />
  );
}
