import { cn } from "@/lib/utils";

function Conainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("max-w-2xl mx-auto w-full px-4 h-full border-x-2 border-border", className)}>
      {children}
    </main>
  );
}

export default Conainer;
