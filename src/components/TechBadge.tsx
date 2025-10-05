// src/components/TechBadge.tsx
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  className?: string;
}

export default function TechBadge({ children, className }: TechBadgeProps) {
  const techColorMap: Record<string, string> = {
    Angular: "var(--color-Angular)",
    Next: "var(--color-nextjs)",
    "Next.js": "var(--color-nextjs)",
    TypeScript: "var(--color-typescript)",
    Node: "var(--color-node)",
    "Node.js": "var(--color-node)",
    AWS: "var(--color-aws)",
    MongoDB: "var(--color-mongodb)",
    Tailwind: "var(--color-tailwind)",
    Docker: "var(--color-docker)",
    Kubernetes: "var(--color-kubernetes)",
  };

  const colorVar = techColorMap[children] || "var(--foreground)";

  return (
    <Badge
      className={cn("px-2.5 py-0.5 text-xs font-medium border-0", className)}
      style={{
        backgroundColor: `hsl(${colorVar} / 0.12)`, // subtle dark-mode tint
        color: `hsl(${colorVar})`, // vibrant text
      }}
    >
      {children}
    </Badge>
  );
}
