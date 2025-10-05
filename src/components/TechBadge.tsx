// src/components/TechBadge.tsx
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  className?: string;
}

export default function TechBadge({ children, className }: TechBadgeProps) {
  const techColorMap: Record<string, string> = {
    // First project
    Arduino: "var(--color-arduino)",
    ReactJs: "var(--color-reactjs)",
    Django: "var(--color-django)",
    DHT11: "var(--color-dht11)",
    MQTT: "var(--color-mqtt)",
    "Reverse Proxy": "var(--color-reverse-proxy)",
    Sqlite: "var(--color-sqlite)",

    // Second project
    Angular: "var(--color-angular)",
    ".NET": "var(--color-dotnet)",
    "SQL Server": "var(--color-sql-server)",
    "REST API": "var(--color-rest-api)",
    Tailwind: "var(--color-tailwind)",

    // Third project
    "Next.js": "var(--color-nextjs)",
    Golang: "var(--color-golang)",
    ScyllaDB: "var(--color-scylladb)",
    Docker: "var(--color-docker)",
    "2FA": "var(--color-2fa)",
    Kafka: "var(--color-kafka)",
    Elasticsearch: "var(--color-elasticsearch)",

    // Fourth project
    Spartacus: "var(--color-spartacus)",
    Git: "var(--color-git)",
    Scrum: "var(--color-scrum)",
    TypeScript: "var(--color-typescript)",
    Storybook: "var(--color-storybook)",
  };

  const colorVar = techColorMap[children] || "var(--foreground)";

  return (
    <Badge
      className={cn("px-2.5 py-0.5 text-xs font-medium border-0", className)}
      style={{
        backgroundColor: `hsl(${colorVar} / 0.12)`,
        color: `hsl(${colorVar})`,
      }}
    >
      {children}
    </Badge>
  );
}
