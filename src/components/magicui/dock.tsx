import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const BASE_SIZE = 40;
const BASE_ICON_SIZE = 20;

const Dock = ({ className, children }: DockProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-full w-max items-end justify-center overflow-visible rounded-full border",
        className
      )}
    >
      {children}
    </div>
  );
};

const DockIcon = ({ className, children }: DockIconProps) => {
  return (
    <div
      style={{ width: BASE_SIZE, height: BASE_SIZE }}
      className={cn(
        "relative flex aspect-square shrink-0 items-center justify-center rounded-full",
        className
      )}
    >
      <div
        style={{ width: BASE_ICON_SIZE, height: BASE_ICON_SIZE }}
        className="flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
