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
  name: "Soe Thiha - Cloud Engineer",
  initials: "ST",
  url: "https://soethiha.dev",

  description:
    "Cloud engineer focused on AWS infrastructure, automation, Linux systems, and reliable network architecture.",

  summary:
    "I am a NOC Engineer with experience supporting FTTH ISP infrastructure and troubleshooting network operations. I am transitioning into cloud engineering by building hands-on projects with AWS, Terraform, Linux, Docker, and automation tools. I enjoy designing secure, scalable infrastructure and applying my networking background to modern cloud environments.",

  avatarUrl: "/pic1.jpeg",
  ogImage: "/og_image.png",

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
        "Hands-on projects focused on AWS architecture, infrastructure automation, networking, and Linux systems.",
    },

    hackathons: {
      order: 6,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text:
        "I have built and contributed to multiple cloud, networking, and infrastructure projects during my learning journey.",
    },

    photos: {
      order: 7,
      enabled: false,
      heading: "Photos",
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

  photos: [] as { src: string; alt: string }[],
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

  contact: {
    email: "your-email@example.com",

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

      X: {
        name: "X",
        url: "https://x.com/YOUR_USERNAME",
        icon: Icons.x,
        navbar: false,
      },

      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@YOUR_USERNAME",
        icon: Icons.youtube,
        navbar: false,
      },

      email: {
        name: "Send Email",
        url: "mailto:your-email@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
    work: [
    {
      company: "FTTH Internet Service Provider",
      href: "",
      badges: ["NOC Engineer"],
      location: "Myanmar",

      title: "Network Operations Center Engineer",

      logoUrl: "/isp-logo.png",

      start: "2025",
      end: undefined,

      description:
        "Monitor and support ISP network operations including FTTH customer connectivity, network incidents, and infrastructure troubleshooting. Work with routing, switching, MikroTik devices, PPPoE authentication, and monitoring systems to maintain reliable internet services. Troubleshoot customer and core network issues while improving automation and cloud infrastructure skills.",
    },

    {
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
    },
  ],
    education: [
    {
      school: "AWS Cloud Engineering",
      href: "https://aws.amazon.com",

      degree:
        "Cloud Infrastructure, AWS Services, Networking, Security, and Architecture",

      logoUrl:
        "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",

      start: "2025",
      end: "Present",
    },

    {
      school: "Terraform Infrastructure as Code",
      href: "https://developer.hashicorp.com/terraform",

      degree:
        "Infrastructure automation using Terraform, modules, providers, and AWS resources",

      logoUrl:
        "https://www.google.com/s2/favicons?domain=terraform.io&sz=128",

      start: "2026",
      end: "Present",
    },

    {
      school: "Linux Administration",
      href: "",

      degree:
        "Linux system administration, Bash scripting, networking, and server management",

      logoUrl:
        "https://www.google.com/s2/favicons?domain=linux.org&sz=128",

      start: "2025",
      end: "Present",
    },

    {
      school: "Computer Networking",
      href: "",

      degree:
        "CCNA-level networking knowledge including routing, switching, TCP/IP, and ISP infrastructure",

      logoUrl:
        "https://www.google.com/s2/favicons?domain=cisco.com&sz=128",

      start: "2024",
      end: "Present",
    },
  ],
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

      image: "/aws-three-tier.png",

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

      image: "/terraform-project.png",

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

      image: "/isp-lab.png",

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

      image: "/bash-linux.png",

      video: "",
    },
  ],
} as const;
