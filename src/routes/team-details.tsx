import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Linkedin, Mail, PhoneCall } from "lucide-react";

import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { getFeaturedTeamMember, getTeamMembers } from "@/data/teamData";

export const Route = createFileRoute("/team-details")({
  head: () => ({
    meta: [
      { title: "Team Details — Leadership Profile | Paymax" },
      {
        name: "description",
        content:
          "Profile of the Paymax leadership: experience across payroll outsourcing, statutory compliance and workforce governance in India.",
      },
      { property: "og:title", content: "Team Details | Paymax" },
      {
        property: "og:description",
        content: "A closer look at the experience behind Paymax payroll and compliance delivery.",
      },
    ],
  }),
  component: TeamDetailsPage,
});

const expertise = [
  "Payroll outsourcing and salary register governance",
  "EPF, ESI, LWF and Professional Tax compliance",
  "Labour Codes readiness and establishment registrations",
  "Inspection handling and authority liaison",
  "Attendance and leave system implementation",
  "Full and final settlements and employee documentation",
];

function TeamDetailsPage() {
  const member = getFeaturedTeamMember();
  const others = getTeamMembers()
    .filter((m) => m.slug !== member.slug)
    .slice(0, 3);

  return (
    <>
      <Breadcrumb
        title="Team Details"
        crumbs={[{ label: "Our Team", to: "/team" }, { label: member.name }]}
      />

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="overflow-hidden border border-strokeColor bg-softBg">
              <img src={member.image} alt={member.name} className="w-full" />
            </div>
            <div className="mt-6 border border-strokeColor bg-white p-6 shadow2">
              <h2 className="heading-4 pb-4">Get in touch</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 duration-300 hover:text-s1"
                  >
                    <Mail className="size-5 text-s1" /> {member.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 duration-300 hover:text-s1"
                  >
                    <PhoneCall className="size-5 text-s1" /> {member.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={member.linkedin}
                    className="flex items-center gap-3 duration-300 hover:text-s1"
                  >
                    <Linkedin className="size-5 text-s1" /> LinkedIn profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full border border-strokeColor px-5 py-2 font-medium duration-300 hover:border-mainText hover:bg-softBg"
            >
              <ArrowLeft className="size-4" /> Back to Team
            </Link>
            <h1 className="display-4 pt-6">{member.name}</h1>
            <p className="pt-2 text-lg text-s1">{member.role}</p>
            <p className="pt-6 text-bodyText">{member.bio}</p>
            <p className="pt-4 text-bodyText">
              Working closely with client HR and finance teams, the focus is always the same:
              accurate payroll, watertight statutory compliance and documentation that stands up to
              inspection. Every engagement begins with a review of the establishment's registrations,
              wage structure and record-keeping before a delivery calendar is agreed.
            </p>

            <h2 className="heading-3 pt-10 pb-4">Areas of expertise</h2>
            <ul className="grid grid-cols-2 gap-4">
              {expertise.map((item) => (
                <li key={item} className="col-span-2 flex items-start gap-3 sm:col-span-1">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-p1" />
                  <span className="text-bodyText">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="heading-3 pt-10 pb-4">Also on the team</h2>
            <div className="grid grid-cols-12 gap-4">
              {others.map((m) => (
                <div
                  key={m.slug}
                  className="col-span-12 flex items-center gap-4 border border-strokeColor bg-white p-4 sm:col-span-6"
                >
                  <img src={m.image} alt={m.name} className="size-16 rounded-full object-cover" />
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-sm text-bodyText">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection subject="New enquiry from the Paymax Team Details page" />
    </>
  );
}
