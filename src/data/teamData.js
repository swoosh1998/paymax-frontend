// ---------------------------------------------------------------------------
// Team directory — edit this file to update the Our Team page.
// Photos: replace the `image` value with any key from src/assets/images.ts,
// or a full image URL. Keep `slug` unique; it is used for team detail links.
// ---------------------------------------------------------------------------
import { img } from "@/assets/images";

export const teamMembers = [
  {
    slug: "rajeev-sharma",
    name: "Rajeev Sharma",
    role: "Founder & Managing Director",
    image: img.team_image1,
    bio: "Rajeev has over two decades of experience in payroll outsourcing and statutory compliance, advising Indian and multinational employers on workforce governance.",
    email: "alert@paymaxonline.in",
    phone: "+91 9810442861",
    linkedin: "#",
    featured: true,
  },
  {
    slug: "anita-verma",
    name: "Anita Verma",
    role: "Head of Payroll Operations",
    image: img.team_image2,
    bio: "Anita leads the payroll delivery desk, owning accuracy, salary register sign-off and month-end statutory computations across client establishments.",
    email: "alert@paymaxonline.in",
    phone: "+91 9810442861",
    linkedin: "#",
  },
  {
    slug: "suresh-nair",
    name: "Suresh Nair",
    role: "Head of Labour Compliance",
    image: img.team_image3,
    bio: "Suresh handles registrations, inspections and liaison under the EPF, ESI, Shops & Establishments and Contract Labour regulations Pan India.",
    email: "alert@paymaxonline.in",
    phone: "+91 9810442861",
    linkedin: "#",
  },
  {
    slug: "priya-menon",
    name: "Priya Menon",
    role: "Manager — HR Operations",
    image: img.team_image4,
    bio: "Priya manages the employee lifecycle desk: onboarding, documentation, policy drafting and full and final settlements.",
    email: "alert@paymaxonline.in",
    phone: "+91 9810442861",
    linkedin: "#",
  },
  {
    slug: "vikram-singh",
    name: "Vikram Singh",
    role: "Manager — Attendance & Systems",
    image: img.team_image5,
    bio: "Vikram configures attendance and leave systems and integrates them with payroll so every input is clean and audit-ready.",
    email: "alert@paymaxonline.in",
    phone: "+91 9810442861",
    linkedin: "#",
  },
  {
    slug: "neha-gupta",
    name: "Neha Gupta",
    role: "Client Relationship Lead",
    image: img.team_image6,
    bio: "Neha is the first point of contact for clients, coordinating service delivery, reporting cadence and escalations.",
    email: "alert@paymaxonline.in",
    phone: "+91 9810442861",
    linkedin: "#",
  },
];

export function getTeamMembers() {
  return teamMembers;
}

export function getFeaturedTeamMember() {
  return teamMembers.find((member) => member.featured) ?? teamMembers[0];
}
