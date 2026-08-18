import {
  ArrowUpRight,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

import { DATA } from "@/data/resume";

export default function EducationSection() {
  return (
    <div className="relative ml-1 sm:ml-2">

      {/* ============================================================
         TIMELINE
      ============================================================ */}

      <div
        aria-hidden
        className="
          absolute
          bottom-6
          left-[23px]
          top-6
          w-px
          bg-border
        "
      />

      <div className="flex flex-col gap-10">

        {/* ==========================================================
           EDUCATION
        ========================================================== */}

        {DATA.education.map((item) => (
          <div
            key={`education-${item.school}`}
            className="group relative flex gap-5"
          >

            {/* Icon */}

            <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-background">
              <div
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-background
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover:border-foreground/30
                  group-hover:shadow-md
                "
              >
                {item.logoUrl ? (
                  <img
                    src={item.logoUrl}
                    alt={`${item.school} logo`}
                    className="size-7 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <GraduationCap className="size-5 text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Content */}

            <div className="min-w-0 flex-1 pb-1">

              {/* Date */}

              <div
                className="
                  mb-1.5
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-muted-foreground
                "
              >
                {item.start} – {item.end}
              </div>

              {/* Degree */}

              <h3
                className="
                  text-base
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-[17px]
                "
              >
                {item.degree}
              </h3>

              {/* Institution */}

              <p className="mt-1 text-sm text-muted-foreground">
                {item.school}
              </p>

              {/* Link */}

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-medium
                    text-foreground
                    underline-offset-4
                    transition-colors
                    hover:text-muted-foreground
                    hover:underline
                  "
                >
                  <GraduationCap className="size-3.5" />

                  <span>View institution</span>

                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}

        {/* ==========================================================
           CERTIFICATIONS
        ========================================================== */}

        {DATA.certifications.map((item) => (
          <div
            key={`certification-${item.credentialId}`}
            className="group relative flex gap-5"
          >

            {/* Certification Icon */}

            <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-background">
              <div
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-background
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover:border-blue-500/30
                  group-hover:shadow-md
                "
              >
                {item.logoUrl ? (
                  <img
                    src={item.logoUrl}
                    alt={`${item.issuer} logo`}
                    className="size-7 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <BadgeCheck className="size-5 text-blue-500" />
                )}
              </div>
            </div>

            {/* Certification Content */}

            <div className="min-w-0 flex-1 pb-1">

              {/* Issued date */}

              <div
                className="
                  mb-1.5
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-muted-foreground
                "
              >
                {item.issued}
              </div>

              {/* Certification name */}

              <h3
                className="
                  max-w-2xl
                  text-base
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-[17px]
                "
              >
                {item.name}
              </h3>

              {/* Issuer */}

              <p className="mt-1 text-sm text-muted-foreground">
                {item.issuer}
              </p>

              {/* Certification metadata */}

              <div
                className="
                  mt-2.5
                  flex
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-1.5
                  text-xs
                  text-muted-foreground
                "
              >

                {/* Short name */}

                {item.shortName && (
                  <span
                    className="
                      font-medium
                      text-foreground/80
                    "
                  >
                    {item.shortName}
                  </span>
                )}

                {/* Separator */}

                {item.shortName && item.credentialId && (
                  <span className="text-border">
                    •
                  </span>
                )}

                {/* Credential ID */}

                {item.credentialId && (
                  <span className="flex flex-wrap items-center gap-1">
                    <span>
                      Credential ID
                    </span>

                    <span
                      className="
                        break-all
                        font-mono
                        text-[10px]
                        text-muted-foreground
                        sm:text-[11px]
                      "
                    >
                      {item.credentialId}
                    </span>
                  </span>
                )}
              </div>

              {/* Verify */}

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-medium
                    text-foreground
                    underline-offset-4
                    transition-colors
                    hover:text-blue-500
                    hover:underline
                  "
                >
                  <BadgeCheck className="size-3.5" />

                  <span>
                    Verify credential
                  </span>

                  <ArrowUpRight
                    className="
                      size-3.5
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}