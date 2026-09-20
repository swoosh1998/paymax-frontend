import { createFileRoute } from "@tanstack/react-router";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Paymax — Payroll, HR & Compliance Enquiries" },
      {
        name: "description",
        content:
          "Talk to the Paymax payroll and compliance desk. Call +91 9810442861, email alert@paymaxonline.in or send us your requirement online.",
      },
      { property: "og:title", content: "Contact Paymax" },
      {
        property: "og:description",
        content: "Reach the Paymax payroll, HR and statutory compliance team.",
      },
    ],
  }),
  component: ContactPage,
});

const reasons = [
  {
    title: "Payroll outsourcing",
    text: "Monthly processing, salary registers, payslips, Form-16 and employee self-service.",
  },
  {
    title: "Statutory compliance",
    text: "EPF, ESI, LWF, Professional Tax, Shops & Establishments and Labour Codes readiness.",
  },
  {
    title: "HR operations",
    text: "Onboarding, documentation, policies, appraisals and full and final settlements.",
  },
];

function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact Us" crumbs={[{ label: "Contact" }]} />

      <section className="stp-30 pb-0">
        <div className="container grid grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading
              align="left"
              pill="Contact"
              title="Questions? We're ready to help"
              description="Tell us about your establishment, headcount and states of operation, and we will come back with a service plan and indicative pricing."
            />
            <div className="grid grid-cols-12 gap-4 pt-8">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="col-span-12 border border-strokeColor bg-white p-5 sm:col-span-6 lg:col-span-12 xl:col-span-6"
                >
                  <p className="font-medium">{r.title}</p>
                  <p className="pt-2 text-bodyText">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src={img.contact_page_img} alt="Contact Paymax" className="w-full" />
          </div>
        </div>
      </section>

      <ContactSection
        subject="New enquiry from the Paymax Contact page"
        title="Send us your requirement"
        description="Complete the form and a Paymax specialist will respond within one working day."
      />
    </>
  );
}
