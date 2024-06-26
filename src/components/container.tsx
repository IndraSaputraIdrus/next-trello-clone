import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("container mx-auto px-4 md:px-6", className)}>
      {children}
    </div>
  );
};

export default Container;
