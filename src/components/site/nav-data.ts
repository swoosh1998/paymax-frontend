import type { LinkProps } from "@tanstack/react-router";

export type NavLink = { label: string; to: Exclude<LinkProps["to"], undefined> };

export const aboutLinks: NavLink[] = [
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/vision-mission" },
  { label: "Our Team", to: "/team" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms and Condition", to: "/terms-and-conditions" },
];

export const serviceLinks: NavLink[] = [
  { label: "All Services", to: "/services" },
  { label: "Payroll Processing", to: "/services/payroll-processing" },
  { label: "HR & Labour Compliances", to: "/services/hr-labour-compliances" },
  { label: "HR Operations", to: "/services/hr-operations" },
  { label: "Attendance and Leave", to: "/services/attendance-and-leave" },
];