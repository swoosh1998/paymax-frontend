import { createFileRoute } from "@tanstack/react-router";
import { Calculator, ChartLine, FileText, MessageCircle, NotebookPen } from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/hr-labour-compliances")({
  head: () => ({
    meta: [
      { title: "HR & Labour Compliances | Paymax" },
      {
        name: "description",
        content:
          "PF, ESIC, PT and LWF registration and return filing, Shops & Establishment, Factory Act, CLRA registration and full HR & labour compliance audit.",
      },
      { property: "og:title", content: "HR & Labour Compliances | Paymax" },
      {
        property: "og:description",
        content:
          "We at Paymax provide strategic support through our experienced professional team in understanding and decoding HR and labour law compliance applicable in your organisation.",
      },
    ],
  }),
  component: HRLabourCompliances,
});

const offerings = [
  {
    title: "HR & Labour Compliance Audit",
    text: "It is an important tool for all businesses to ensure the company's practices are in alignment with employment laws. it lets you accurately evaluate your business' leave structure, disability structure, health and safety, HR policies, payroll, etc.",
  },
  {
    title: "PF Registration & Return Filling",
    text: "PF filing involves submitting detailed reports to the Employees' Provident Fund Organization (EPFO). PF filing is compulsory for employers registered under the Provident Fund scheme.",
  },
  {
    title: "ESIC Registration & Return Filling",
    text: "It refers to enrolling under the Employees' State Insurance (ESI) scheme, a self-financing social security and health insurance scheme for Indian workers. This scheme is managed by the Employees' State Insurance Corporation (ESIC).",
  },
  {
    title: "PT Registration & Return Filling",
    text: "A professional Tax Return is a document that must be filed by individuals or businesses liable to pay Professional Tax. It contains details of the Income earned by the individual or business and the Tax paid during the financial year.",
  },
  {
    title: "Labour Welfare Fund (LWF) Compliances",
    text: "Labour Welfare Fund (LWF) compliance refers to the process of following the rules and regulations set out by the state government for the LWF. Employers and employees must contribute to the LWF and meet certain reporting requirements.",
  },
  {
    title: "Shops & Establishment Act Registration",
    text: "A mandatory process under the Shops and Establishment Act in India, where businesses like shops, offices, and commercial establishments need to register themselves with the relevant state government department to comply with labor laws.",
  },
  {
    title: "Factory Act Registration and compliances",
    text: "Process of registering a factory with the government under the Factories Act, that regulates working conditions, safety standards within factories requiring them to comply with specific guidelines like health, hours, and workplace environment.",
  },
  {
    title: "CLRA Registration and License",
    text: 'A "CLRA Registration and License" refers to the mandatory registration and license required under the Contract Labour (Regulation and Abolition) Act, 1970 (CLRA) in India, which applies to any establishment or contractor employing 20 or more contract workers.',
  },
];

const neverWorryPoints = [
  {
    Icon: MessageCircle,
    title: "Great Communication",
    text: "We resolve issues and offer advice quickly.",
  },
  {
    Icon: ChartLine,
    title: "Growth Potential",
    text: "We proactively offer growth and profitability advice",
  },
  {
    Icon: NotebookPen,
    title: "Stay in Compliance",
    text: "Your dedicated expert knows your business inside and out.",
  },
];

function HRLabourCompliances() {
  return (
    <>
      <Breadcrumb
        title="HR & Labour Compliances"
        crumbs={[{ label: "Services", to: "/services" }, { label: "HR & Labour Compliances" }]}
        image={img.breadcrumb_img_3}
      />

      <section className="stp-15 container">
        <p className="max-w-[700px] text-bodyText">
          We at Paymax provide strategic support through our experienced professional team in
          understanding and decoding HR and labour law compliance applicable in your organisation,
        </p>
      </section>

      {/* Offerings grid */}
      <section className="stp-30 sbp-30">
        <div className="flex items-center justify-center">
          <SectionHeading
            pill="Services"
            title="Explore Our HR & Labour Compliances"
            description="At Paymax, our HR & Labour Compliance Services are designed to provide you with a comprehensive and accurate financial picture."
          />
        </div>
        <div className="container">
          <div className="stp-15 grid grid-cols-12 gap-6">
            {offerings.map((item) => (
              <div key={item.title} className="col-span-12 sm:col-span-6 xl:col-span-3">
                <div className="group flex h-full flex-col items-start justify-start border border-strokeColor p-6 duration-500 hover:border-mainText hover:bg-s2 xl:p-10">
                  <div className="rounded-full bg-softBg p-4 text-s1 duration-500 group-hover:bg-mainText group-hover:text-white">
                    <FileText className="size-10" />
                  </div>
                  <h4 className="heading-4 pt-8 pb-5">{item.title}</h4>
                  <p className="text-bodyText lg:pr-4">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Never Worry */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center justify-center overflow-hidden max-lg:order-2 max-lg:stp-15 lg:col-span-6 xl:col-span-5">
            <img src={img.never_worry_img} alt="" className="h-full w-full duration-500 hover:scale-110" />
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7">
            <h1 className="display-4">Never Worry About Your HR & Labour Compliances Again</h1>
            <p className="pt-6 pb-6 text-bodyText xl:pb-8">
              Experience peace of mind with Paymax. Our comprehensive HR & Labour Compliance services
              ensure accuracy and compliance, so you can focus on growing your business
            </p>
            <div className="flex flex-col items-start justify-start gap-6 pb-6 xl:gap-10 xl:pb-12">
              {neverWorryPoints.map(({ Icon, title, text }) => (
                <div key={title} className="flex items-center justify-start gap-4">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white !leading-[0] text-s1">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h4 className="heading-4">{title}</h4>
                    <p className="pt-2 text-bodyText">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="How it works"
            title="A Step-by-Step Guide to Our Platform"
            description="Explore our platform with ease! Sign up, fill the contact form for any queries, and seamlessly integrate our tailored payment solutions."
          />
          <div className="stp-15 grid grid-cols-12 gap-8">
            {[
              { title: "Get in Touch", text: "Fill the contact form with all your queries and subject" },
              {
                title: "Wait for the response",
                text: "Our team will response ASAP with your solutions regarding the subject.",
              },
              {
                title: "Will get back with solutions",
                text: "Get your work done effortlessly! with paymax for a better experience",
              },
            ].map((s) => (
              <div key={s.title} className="col-span-12 flex flex-col items-center text-center md:col-span-4">
                <span className="flex size-20 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1">
                  <Calculator className="size-8" />
                </span>
                <h4 className="heading-4 pt-8 pb-6">{s.title}</h4>
                <p className="text-bodyText">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection subject="HR & Labour Compliances Enquiry" />
    </>
  );
}
