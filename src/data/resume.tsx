import { Icons } from "@/components/icons";

import { House, Library } from "lucide-react";

import { Linux } from "@/components/ui/svgs/linux";
import { Git } from "@/components/ui/svgs/git";
import { Bash } from "@/components/ui/svgs/bash";
import { GitHubActions } from "@/components/ui/svgs/git-action";

import { Python } from "@/components/ui/svgs/python";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { AWS } from "@/components/ui/svgs/aws";

export const DATA = {
  /* ============================================================
     PROFILE
  ============================================================ */

  name: "Soe Thiha",

  firstName: "Thiha",

  role: "Cloud Engineer",

  initials: "ST",

  url: "https://yul1ux.github.io",

  description:
    "Cloud engineer focused on AWS infrastructure, automation, Linux systems, and reliable network architecture.",

  summary:
    "I am a NOC Engineer with experience supporting FTTH ISP infrastructure and troubleshooting network operations. I am transitioning into cloud engineering by building hands-on projects with AWS, Terraform, Linux, Docker, and automation tools. I enjoy designing secure, scalable infrastructure and applying my networking background to modern cloud environments.",

  avatarUrl: "/gandalf.png",

  /* ============================================================
     SECTIONS
  ============================================================ */

  sections: {
    about: {
      order: 1,
      enabled: true,
      heading: "About",
    },

    work: {
      order: 2,
      enabled: true,
      heading: "Work Experience",
      presentLabel: "Present",
    },

    education: {
      order: 3,
      enabled: true,
      heading: "Education & Certifications",
    },

    skills: {
      order: 4,
      enabled: true,
      heading: "Skills",
    },

    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Cloud Infrastructure Projects",
      text:
        "Hands-on projects focused on AWS architecture, infrastructure automation, networking, Linux systems, and DevOps practices.",
    },

    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text:
        "Interested in cloud infrastructure, automation, or networking? Feel free to reach out.",
    },
  },

  /* ============================================================
     NAVBAR
  ============================================================ */

  navbar: [
    {
      href: "/",
      icon: House,
      label: "Home",
    },
    {
      href: "/blog",
      icon: Library,
      label: "Blog",
    },
  ],

  /* ============================================================
     CONTACT
  ============================================================ */

  contact: {
    email: "soethiha5125@gmail.com",

    tel: "",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yul1ux",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:soethiha5125@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  /* ============================================================
     SKILLS
  ============================================================ */

  skills: [
    {
      name: "AWS",
      icon: AWS,
    },
    {
      name: "Terraform",
      icon: Terraform,
    },
    {
      name: "Linux",
      icon: Linux,
    },
    {
      name: "Bash",
      icon: Bash,
    },
    {
      name: "Docker",
      icon: Docker,
    },
    {
      name: "Kubernetes",
      icon: Kubernetes,
    },
    {
      name: "GitHub Actions",
      icon: GitHubActions,
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "Python",
      icon: Python,
    },
  ],

  /* ============================================================
     WORK EXPERIENCE
  ============================================================ */

  work: [
    {
      company: "Maharnet - FTTH ISP",
      href: "",
      badges: ["NOC Engineer"],
      location: "Myanmar",
      title: "Network Operations Center Engineer",
      logoUrl: "/mhn.png",
      start: "2025",
      end: undefined,

      description:
        "Monitor and support ISP network operations including FTTH customer connectivity, network incidents, and infrastructure troubleshooting. Work with routing, switching, MikroTik devices, PPPoE authentication, and monitoring systems to maintain reliable internet services. Troubleshoot customer and core network issues while improving automation and cloud infrastructure skills.",
    },

   /* {
      company: "Personal Cloud Engineering Lab",
      href: "",
      badges: ["Self Learning"],
      location: "Remote",
      title: "Cloud Infrastructure Engineer",
      logoUrl: "/cloud-lab.png",
      start: "2025",
      end: undefined,

      description:
        "Build hands-on cloud infrastructure projects using AWS, Terraform, Linux, Docker, and CI/CD practices. Design production-style architectures with VPC networking, EC2, IAM, security groups, storage, monitoring, and infrastructure automation.",
    }, */
  ],

  /* ============================================================
     EDUCATION
  ============================================================ */

  education: [
    {
      school: "Government Technical Institute (GTI) - Pyin Oo Lwin",
      href: "",
      degree: "Diploma in Mechanical Engineering",
      logoUrl: "/institute.png",
      start: "2018",
      end: "2020",
    },
  ],

  /* ============================================================
     CERTIFICATIONS
  ============================================================ */

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      shortName: "AWS SAA-C03",
      issued: "Aug 2026",
      credentialId: "4ead7e47b6eb4753a52fe3bf1d662a6e",
      logoUrl: "/aws.svg",
      href:
        "https://www.credly.com/badges/6777f1bc-d772-4327-a63c-084869854c32",
    },

    {
      name: "Red Hat Certified System Administrator",
      issuer: "KodeKloud",
      shortName: "RHCSA",
      issued: "2025",
      credentialId: "97939308-c542-470f-90fe-dcfe10ecec35",
      logoUrl: "/kodekloud.svg",
      href:
        "https://learn.kodekloud.com/learn/certificate/97939308-c542-470f-90fe-dcfe10ecec35",
    },

    {
      name: "CS50's Introduction to Computer Science",
      issuer: "Harvard University",
      shortName: "CS50",
      issued: "2025",
      credentialId: "a3b3914e-8dae-4efb-aeac-3a51f3c71f87",
      logoUrl: "/cs50.svg",
      href:
        "https://certificates.cs50.io/a3b3914e-8dae-4efb-aeac-3a51f3c71f87.pdf?size=letter",
    },
  ],

  /* ============================================================
     PROJECTS
  ============================================================ */

  projects: [
    {
      title: "AWS Production-Style Three-Tier Architecture",

      href: "",

      dates: "2026",

      active: true,

      description:
        "Designed and deployed a production-style AWS architecture using VPC, public and private subnets, Application Load Balancer, EC2 instances, security groups, NAT Gateway, and AWS best practices. Focused on high availability, networking, and secure infrastructure design.",

      technologies: [
        "AWS",
        "VPC",
        "EC2",
        "ALB",
        "IAM",
        "Security Groups",
        "Linux",
      ],

      links: [],

      image: "/aws-architecture.png",

      video: "",
    },

    {
      title: "Terraform AWS Infrastructure Automation",

      href: "",

      dates: "2026",

      active: true,

      description:
        "Created reusable Terraform configurations to automate AWS infrastructure deployment. Implemented infrastructure as code practices using Terraform providers, variables, modules, and remote state management.",

      technologies: [
        "Terraform",
        "AWS",
        "Git",
        "GitHub Actions",
        "CI/CD",
      ],

      links: [],

      image: "/terraform.png",

      video: "",
    },

    {
      title: "FTTH ISP Network Laboratory",

      href: "",

      dates: "2026",

      active: true,

      description:
        "Built a virtual ISP lab environment to simulate real-world customer connectivity using MikroTik, PPPoE, FreeRADIUS, Docker, and Linux. Tested authentication, IP assignment, and network troubleshooting workflows.",

      technologies: [
        "MikroTik",
        "PPPoE",
        "FreeRADIUS",
        "Docker",
        "Linux",
        "Networking",
      ],

      links: [],

      image: "/ftth-isp.png",

      video: "",
    },

    {
      title: "Linux Automation with Bash",

      href: "",

      dates: "2026",

      active: true,

      description:
        "Developed Bash scripts for Linux administration tasks including system checks, log analysis, automation workflows, and cloud server management.",

      technologies: [
        "Linux",
        "Bash",
        "Shell Scripting",
        "AWS EC2",
      ],

      links: [],

      image: "/bash.png",

      video: "",
    },
  ],

  /* ============================================================
     PHOTOS
  ============================================================ */

  photos: [] as {
    src: string;
    alt: string;
  }[],

  /* ============================================================
     HACKATHONS
  ============================================================ */

  hackathons: [] as {
    title: string;
    dates?: string;
    location?: string;
    description?: string;
    image?: string;
    links?: readonly {
      title: string;
      href: string;
      icon: React.ReactNode;
    }[];
  }[],
} as const;