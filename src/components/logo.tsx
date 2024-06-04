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
        "flex items-center gap-1 rounded bg-blue-400 p-1.5 px-3 text-sm font-semibold uppercase tracking-wider text-blue-100 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Cookie className="size-4" />
      Taskify
    </Link>
  );
};

export default Logo;
