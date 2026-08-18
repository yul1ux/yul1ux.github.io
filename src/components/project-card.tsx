import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

interface ProjectLink {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tags?: readonly string[];
  image?: string;
  video?: string;
  href?: string;
  links?: readonly ProjectLink[];
}

export function ProjectCard({
  index,
  title,
  description,
  tags,
  image,
  video,
  href,
  links,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        min-h-[540px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-background
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-foreground/20
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
      "
    >
      {/* ============================================================
          IMAGE / PROJECTION
      ============================================================ */}

      <div
        className="
          relative
          h-[300px]
          w-full
          shrink-0
          overflow-hidden
          border-b
          border-border/50
          bg-muted/[0.08]
        "
      >
        {/* Glow */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            size-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.06]
            blur-[100px]
            transition-all
            duration-700
            group-hover:size-[380px]
            group-hover:bg-blue-500/[0.09]
          "
        />

        {/* Projection ring */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            size-[270px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-dashed
            border-border/30
            transition-all
            duration-700
            group-hover:rotate-6
            group-hover:scale-105
          "
        />

        {/* Inner projection */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            size-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-border/30
            bg-gradient-to-br
            from-muted/50
            via-background/40
            to-muted/10
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* ============================================================
            IMAGE
        ============================================================ */}

        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-contain
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.025]
            "
          />
        )}

        {/* ============================================================
            VIDEO
        ============================================================ */}

        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-[1.025]
            "
          />
        )}

        {/* Project number */}

        <div
          className="
            absolute
            left-5
            top-5
            z-20
            rounded-full
            border
            border-border/50
            bg-background/75
            px-3
            py-1.5
            font-mono
            text-[11px]
            font-medium
            text-blue-500
            backdrop-blur-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Bottom shadow */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            bottom-3
            left-1/2
            z-20
            h-4
            w-40
            -translate-x-1/2
            rounded-full
            bg-foreground/10
            blur-xl
          "
        />
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          p-6
          sm:p-7
        "
      >
        <h3
          className="
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            sm:text-2xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-border/60
                  bg-muted/30
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-muted-foreground
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(href || (links && links.length > 0)) && (
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-4
              border-t
              border-border/50
              pt-4
            "
          >
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-sm
                  font-medium
                  transition-colors
                  hover:text-blue-500
                "
              >
                View project

                <ArrowUpRight className="size-4" />
              </a>
            )}

            {links?.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-sm
                  text-muted-foreground
                  hover:text-foreground
                "
              >
                {link.icon}
                <span>{link.title}</span>
                <ExternalLink className="size-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Hover border */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          rounded-2xl
          border
          border-transparent
          transition-colors
          duration-500
          group-hover:border-blue-500/15
        "
      />
    </article>
  );
}