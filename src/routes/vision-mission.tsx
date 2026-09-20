import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Goal, ShieldCheck, Target, TrendingUp } from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision and Mission — Excelling People Practice | Paymax" },
      {
        name: "description",
        content:
          "Paymax's vision and mission: precise payroll, watertight statutory compliance and a people practice that lets employers focus on their business.",
      },
      { property: "og:title", content: "Vision and Mission | Paymax" },
      {
        property: "og:description",
        content:
          "Our vision, mission and guiding commitments as a payroll, HR and compliance partner.",
      },
    ],
  }),
  component: VisionMissionPage,
});

const commitments = [
  {
    Icon: ShieldCheck,
    title: "Compliance first",
    text: "Every payroll cycle is delivered with statutory computations, registers and returns reconciled — never as an afterthought.",
  },
  {
    Icon: Target,
    title: "Precision by design",
    text: "Multi-level checks on inputs, salary registers and statutory challans so accuracy is engineered, not hoped for.",
  },
  {
    Icon: TrendingUp,
    title: "Scale without friction",
    text: "Processes built to absorb headcount growth, new states and new establishments without disruption.",
  },
  {
    Icon: Compass,
    title: "Advisory mindset",
    text: "We decode notifications and amendments into plain actions your HR and finance teams can execute.",
  },
];

function VisionMissionPage() {
  return (
    <>
      <Breadcrumb
        title="Vision and Mission"
        crumbs={[{ label: "About Us", to: "/about" }, { label: "Vision and Mission" }]}
      />

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-6">
            <img src={img.about_vector} alt="" className="w-full" />
          </div>
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-6">
            <div className="border border-strokeColor bg-white p-6 shadow2 xl:p-8">
              <span className="flex size-14 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1">
                <Eye className="size-6" />
              </span>
              <h2 className="heading-2 pt-5 pb-3">Our Vision</h2>
              <p className="text-bodyText">
                To be India's most dependable people-practice partner — the firm employers trust to
                keep payroll accurate, statutory obligations discharged and employee experience
                intact, whatever the scale or geography.
              </p>
            </div>
            <div className="border border-strokeColor bg-white p-6 shadow2 xl:p-8">
              <span className="flex size-14 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1">
                <Goal className="size-6" />
              </span>
              <h2 className="heading-2 pt-5 pb-3">Our Mission</h2>
              <p className="text-bodyText">
                To empower businesses by providing reliable, efficient and innovative payroll, HR and
                compliance services — freeing our clients from manual administration so they can
                focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <SectionHeading
            pill="Our Commitments"
            title="What our vision looks like in practice"
            description="Excelling people practice is not a slogan. These are the standards our delivery teams are measured against."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {commitments.map(({ Icon, title, text }) => (
              <div key={title} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="group h-full border border-strokeColor bg-white p-6 duration-700 hover:border-mainText hover:bg-s2 xl:p-8">
                  <span className="flex size-14 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1 duration-500 group-hover:border-mainText group-hover:bg-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="heading-4 pt-5 pb-3">{title}</h3>
                  <p className="text-bodyText">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection subject="New enquiry from the Paymax Vision and Mission page" />
    </>
  );
}
