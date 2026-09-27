import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";

import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { getTeamMembers } from "@/data/teamData";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Payroll & Compliance Specialists | Paymax" },
      {
        name: "description",
        content:
          "Meet the Paymax team: payroll, labour compliance, HR operations and attendance specialists supporting employers across India.",
      },
      { property: "og:title", content: "Our Team | Paymax" },
      {
        property: "og:description",
        content: "The specialists behind Paymax payroll, compliance and HR operations delivery.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const members = getTeamMembers();

  return (
    <>
      <Breadcrumb
        title="Our Team"
        crumbs={[{ label: "About Us", to: "/about" }, { label: "Our Team" }]}
      />

      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="Our Team"
            title="The people behind your payroll"
            description="A successful team requires members with complementary skill sets. Ours brings together payroll, statutory compliance, HR operations and systems expertise."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {members.map((member) => (
              <div key={member.slug} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="group h-full overflow-hidden border border-strokeColor bg-white duration-500 hover:border-mainText hover:shadow2">
                  <div className="overflow-hidden bg-softBg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 xl:p-8">
                    <h3 className="heading-4">{member.name}</h3>
                    <p className="pt-1 text-s1">{member.role}</p>
                    <p className="pt-3 text-bodyText">{member.bio}</p>
                    <div className="flex items-center gap-3 pt-5">
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="flex size-10 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1 duration-500 hover:border-mainText hover:bg-s2 hover:text-mainText"
                      >
                        <Mail className="size-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex size-10 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1 duration-500 hover:border-mainText hover:bg-s2 hover:text-mainText"
                      >
                        <Linkedin className="size-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="pt-8 text-sm text-bodyText">
            Team photos are placeholders. Names, roles and biographies can be edited in{" "}
            <code className="font-mono">src/data/teamData.js</code>.
          </p>
        </div>
      </section>

      <ContactSection subject="New enquiry from the Paymax Our Team page" />
    </>
  );
}
