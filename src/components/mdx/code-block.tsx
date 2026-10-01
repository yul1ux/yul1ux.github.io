import type { ComponentProps } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre"> & {
  "data-title"?: string;
};

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const title = props["data-title"];

  return (
    <div data-code-block className="group relative rounded-xl overflow-hidden border border-border my-6">
      {title && (
        <div className="px-4 py-2 text-xs font-medium border-b border-border bg-muted/50 text-foreground">
          {title}
        </div>
      )}
      <Button
        type="button"
        variant="outline"
        size="icon"
        data-copy-code
        className={cn(
          "absolute size-8 text-primary cursor-pointer right-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity rounded-md border border-border shadow-none",
          title ? "top-13" : "top-3"
        )}
        aria-label="Copy code"
        title="Copy code"
      >
        <Copy data-copy-icon className="size-4" />
        <Check data-copied-icon className="hidden size-4" />
      </Button>
      <span data-copy-status className="sr-only" aria-live="polite" />
      <pre {...props} className={cn("p-4 m-0! overflow-x-auto text-sm", props.className)}>
        {children}
      </pre>
    </div>
  );
}
