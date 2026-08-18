import React from "react";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

import { DATA } from "@/data/resume";

import Markdown from "react-markdown";

import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import EducationSection from "@/components/section/education-section";

import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Mail,
} from "lucide-react";

import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

/* ============================================================
   SECTION COMPONENTS
============================================================ */

const sectionComponents: Record<string, React.ReactNode> = {
  /* ==========================================================
     ABOUT
  ========================================================== */

  about: (
    <section
      id="about"
      className="scroll-mt-24"
    >
      <div className="flex flex-col gap-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <SectionHeading
            eyebrow="01"
            title={DATA.sections.about.heading}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="max-w-3xl">
            <div className="prose max-w-full text-pretty font-sans text-[15px] leading-7 text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  ),

  /* ==========================================================
     WORK
  ========================================================== */

  work: (
    <section
      id="work"
      className="scroll-mt-24"
    >
      <div className="flex flex-col gap-y-7">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <SectionHeading
            eyebrow="02"
            title={DATA.sections.work.heading}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  ),

  /* ==========================================================
     EDUCATION + CERTIFICATIONS
  ========================================================== */

  education: (
    <section
      id="education"
      className="scroll-mt-24"
    >
      <div className="flex flex-col gap-y-7">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <SectionHeading
            eyebrow="03"
            title={DATA.sections.education.heading}
            description="Academic background and verified professional credentials."
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <EducationSection />
        </BlurFade>
      </div>
    </section>
  ),

  /* ==========================================================
     SKILLS
  ========================================================== */

  skills: (
    <section
      id="skills"
      className="scroll-mt-24"
    >
      <div className="flex flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <SectionHeading
            eyebrow="04"
            title={DATA.sections.skills.heading}
          />
        </BlurFade>

        <div className="flex max-w-3xl flex-wrap gap-2">
          {DATA.skills.map((skill, index) => (
            <BlurFade
              key={skill.name}
              delay={BLUR_FADE_DELAY * 10 + index * 0.04}
            >
              <div
                className="
                  group
                  inline-flex
                  h-9
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-border/60
                  bg-background/60
                  px-3.5
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-foreground/20
                  hover:bg-muted/50
                "
              >
                {skill.icon && (
                  <skill.icon className="size-4 object-contain" />
                )}

                <span className="text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),

  /* ==========================================================
     PROJECTS
  ========================================================== */

  projects: (
    <section
      id="projects"
      className="scroll-mt-24"
    >
      <ProjectsSection />
    </section>
  ),

  /* ==========================================================
     HACKATHONS
  ========================================================== */

  hackathons: (
    <section
      id="hackathons"
      className="scroll-mt-24"
    >
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <HackathonsSection />
      </BlurFade>
    </section>
  ),

  /* ==========================================================
     PHOTOS
  ========================================================== */

  photos: (
    <section
      id="photos"
      className="scroll-mt-24"
    >
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <PhotosSection />
      </BlurFade>
    </section>
  ),

  /* ==========================================================
     CONTACT
  ========================================================== */

  contact: (
    <section
      id="contact"
      className="scroll-mt-24"
    >
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <ContactSection />
      </BlurFade>
    </section>
  ),
};

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs text-blue-500">
          {eyebrow}
        </span>

        <div className="h-px w-8 bg-border" />
      </div>

      <h2
        className="
          text-2xl
          font-semibold
          tracking-tight
          sm:text-[1.65rem]
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-1.5
            max-w-2xl
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   HOME PAGE
============================================================ */

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, section]) => section.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main
      className="
        relative
        min-h-dvh
        overflow-hidden
      "
    >
      {/* ======================================================
          GLOBAL BACKGROUND
      ======================================================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          fixed
          inset-0
          -z-20
          bg-background
        "
      />

      {/* Atmospheric glow */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[450px]
          w-[750px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.045]
          blur-[120px]
        "
      />

      {/* Technical grid */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.02]
          [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_60%)]
        "
      />

      {/* ======================================================
          HERO
      ======================================================= */}

      <section
        id="hero"
        className="
          relative
          scroll-mt-24
          overflow-hidden
        "
      >
        {/* Right atmospheric glow */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-1/2
            -z-10
            size-[500px]
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.035]
            blur-[120px]
          "
        />

        {/* ====================================================
            HERO CONTAINER

            IMPORTANT:
            Same width system as the rest of the page.
        ==================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-5xl
            px-5
            pb-14
            pt-6
            sm:px-8
            sm:pb-16
            sm:pt-10
            lg:px-10
            lg:pb-20
            lg:pt-12
          "
        >
          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[1fr_300px]
              lg:gap-12
          "
          >
            {/* ==================================================
                HERO CONTENT
            =================================================== */}

            <div
              className="
                relative
                z-20
                max-w-2xl
              "
            >
              {/* Role */}

              <BlurFade delay={BLUR_FADE_DELAY}>
                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-500/15
                    bg-blue-500/[0.045]
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-blue-500
                    backdrop-blur-sm
                  "
                >
                  <Cloud className="size-3.5" />

                  <span>{DATA.role}</span>
                </div>
              </BlurFade>

              {/* =================================================
                  NAME
              ================================================== */}

              <BlurFadeText
                delay={BLUR_FADE_DELAY * 1.5}
                className="
                  max-w-2xl
                  text-[2.9rem]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-5xl
                  lg:text-[4.2rem]
                  xl:text-[4.5rem]
                "
                yOffset={8}
                text={`Hi, I'm ${DATA.firstName}`}
              />

              {/* =================================================
                  POSITIONING
              ================================================== */}

              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <h2
                  className="
                    mt-4
                    max-w-xl
                    text-xl
                    font-medium
                    leading-tight
                    tracking-tight
                    text-muted-foreground
                    sm:text-2xl
                  "
                >
                  Building reliable infrastructure
                  <span className="text-foreground">
                    {" "}with AWS.
                  </span>
                </h2>
              </BlurFade>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-[15px]
                    leading-7
                    text-muted-foreground
                    sm:text-base
                  "
                >
                  {DATA.description}
                </p>
              </BlurFade>

              

              {/* =================================================
                  CTA
              ================================================== */}

              <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >
                  <a
                    href="#projects"
                    className="
                      group
                      inline-flex
                      h-10
                      items-center
                      gap-2
                      rounded-lg
                      bg-foreground
                      px-4
                      text-sm
                      font-medium
                      text-background
                      shadow-lg
                      shadow-foreground/10
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:shadow-xl
                    "
                  >
                    View My Work

                    <ArrowUpRight
                      className="
                        size-4
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>

                  <a
                    href="#contact"
                    className="
                      inline-flex
                      h-10
                      items-center
                      rounded-lg
                      border
                      border-border
                      bg-background/50
                      px-4
                      text-sm
                      font-medium
                      backdrop-blur-sm
                      transition-colors
                      hover:bg-muted
                    "
                  >
                    Get in Touch
                  </a>
                </div>
              </BlurFade>
              
            </div>

            {/* ==================================================
                WIZARD / GANDALF
            =================================================== */}

            <BlurFade
              delay={BLUR_FADE_DELAY * 1.5}
              className="
                relative
                hidden
                lg:block
              "
            >
              <div
                className="
                  relative
                  mx-auto
                  h-[400px]
                  w-full
                  max-w-[320px]
                "
              >
                {/* Glow */}

                <div
                  aria-hidden
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    size-[230px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/[0.06]
                    blur-[80px]
                  "
                />

                {/* Outer ring */}

                <div
                  aria-hidden
                  className="
                    absolute
                    left-1/2
                    top-[47%]
                    size-[290px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-border/40
                    bg-muted/10
                  "
                />

                {/* Dashed ring */}

                <div
                  aria-hidden
                  className="
                    absolute
                    left-1/2
                    top-[47%]
                    size-[320px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-dashed
                    border-border/25
                  "
                />

                {/* Gandalf */}

                <img
                  src={DATA.avatarUrl}
                  alt={`${DATA.name} wizard illustration`}
                  className="
                    absolute
                    bottom-[-10px]
                    left-1/2
                    z-10
                    w-[115%]
                    max-w-none
                    -translate-x-1/2
                    object-contain
                    drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]
                  "
                />

                {/* Bottom shadow */}

                <div
                  aria-hidden
                  className="
                    absolute
                    bottom-2
                    left-1/2
                    h-6
                    w-48
                    -translate-x-1/2
                    rounded-full
                    bg-foreground/10
                    blur-2xl
                  "
                />
              </div>
            </BlurFade>
          </div>

          {/* ====================================================
              SCROLL INDICATOR
          ==================================================== */}

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <a
              href="#about"
              className="
                mx-auto
                mt-8
                flex
                w-fit
                flex-col
                items-center
                gap-1.5
                text-[11px]
                uppercase
                tracking-[0.15em]
                text-muted-foreground/40
                transition-colors
                hover:text-muted-foreground
              "
            >
              <span>Scroll</span>

              <ArrowDown className="size-3.5 animate-bounce" />
            </a>
          </BlurFade>
        </div>
      </section>

      {/* ======================================================
          CONTENT SECTIONS

          Same max-width as hero.
      ======================================================= */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          gap-24
          px-5
          pb-24
          sm:px-8
          lg:px-10
        "
      >
        {orderedSections.map((key) => (
          <React.Fragment key={key}>
            {sectionComponents[key]}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}