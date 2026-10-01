import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex min-h-0 flex-col gap-y-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

          <div className="home-reveal flex flex-col gap-y-4" style={{ "--reveal-delay": `${BLUR_FADE_DELAY}s` } as React.CSSProperties}>
            {/* Section label */}

            <div className="flex w-full items-center">
              <div
                aria-hidden
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  via-border
                  to-transparent
                "
              />

              <div
                className="
                  z-10
                  mx-4
                  rounded-xl
                  border
                  bg-primary
                  px-4
                  py-1
                  shadow-sm
                "
              >
                <span className="text-sm font-medium text-primary-foreground">
                  {DATA.sections.projects.label}
                </span>
              </div>

              <div
                aria-hidden
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-border
                  via-border
                  to-transparent
                "
              />
            </div>

            {/* Heading */}

            <div className="flex flex-col items-center gap-y-2 text-center">
              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  sm:text-3xl
                  md:text-4xl
                "
              >
                {DATA.sections.projects.heading}
              </h2>

              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-6
                  text-muted-foreground
                  sm:text-base
                  sm:leading-7
                "
              >
                {DATA.sections.projects.text}
              </p>
            </div>
          </div>

        {/* ============================================================
            PROJECT GRID
        ============================================================ */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {DATA.projects.map((project, index) => (
            <div
              key={project.title}
              className="home-reveal h-full"
              style={{ "--reveal-delay": `${BLUR_FADE_DELAY * 2 + index * 0.06}s` } as React.CSSProperties}
            >
              <ProjectCard
                index={index}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                href={project.href}
                links={project.links}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}