import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-30 bg-card/95 backdrop-blur-xl border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 py-3 sm:px-6">
        <div className="flex items-center mr-6">
          <a
            href="/"
            className="text-sm font-semibold text-foreground transition hover:text-primary"
          >
            {DATA.initials ?? DATA.name.split(" ")[0]}
          </a>
        </div>

        <div className="flex items-center md:gap-6">
          <div className="hidden md:flex items-center gap-6">
            {DATA.navbar.map((item) => {
              const isExternal = item.href.startsWith("http");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground rounded-md"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-3 md:flex md:items-center md:gap-3 ml-4">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social], index) => {
                const isExternal = social.url.startsWith("http");
                const IconComponent = social.icon;
                return (
                  <Tooltip key={`social-${name}-${index}`}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        aria-label={name}
                      >
                        <IconComponent className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      sideOffset={8}
                      className="rounded-xl bg-primary text-primary-foreground px-3 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                    >
                      <p>{name}</p>
                      <TooltipArrow className="fill-primary" />
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            <ModeToggle />
          </div>

          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            className="md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div
        id="primary-navigation"
        className={`md:hidden bg-card/95 transition-all duration-200 ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="space-y-2 px-4 py-4">
          {DATA.navbar.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                key={item.href}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 rounded-2xl"
              >
                {item.label}
              </a>
            );
          })}

          <div className="mt-2 flex flex-wrap items-center gap-2 pt-4">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social], index) => {
                const isExternal = social.url.startsWith("http");
                const IconComponent = social.icon;
                return (
                  <a
                    key={`mobile-social-${name}-${index}`}
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary/10 rounded-2xl"
                  >
                    <IconComponent className="size-4" />
                    <span>{name}</span>
                  </a>
                );
              })}
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
