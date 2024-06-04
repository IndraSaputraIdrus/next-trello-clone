import { Cookie } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-1 rounded text-sm font-semibold uppercase tracking-wider text-primary transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Cookie className="size-4" />
      Taskify
    </Link>
  );
};

export default Logo;
