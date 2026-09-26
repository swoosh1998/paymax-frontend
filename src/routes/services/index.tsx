import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarCheck, FilePlus2, ShieldCheck, Users } from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "All Services | Paymax Payroll, HR & Compliance" },
      {
        name: "description",
        content:
          "Explore Paymax's core services — payroll processing, HR & labour compliances, HR operations and attendance & leave management.",
      },
      { property: "og:title", content: "Our All Services | Paymax" },
      {
        property: "og:description",
        content:
          "Welcome to Paymax, your trusted partner for comprehensive financial solutions. Explore our range of services tailored to meet your business needs.",
      },
    ],
  }),
  component: AllServices,
});

const coreServices = [
  {
    Icon: FilePlus2,
    title: "Payroll Processing",
    to: "/services/payroll-processing",
    text: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing, and eliminate the complexity and risk of sourcing, managing and delivering payroll.",
  },
  {
    Icon: ShieldCheck,
    title: "HR & Labour Compliances",
    to: "/services/hr-labour-compliances",
    text: "We provide strategic support through our experienced professional team in understanding and decoding HR and labour law compliance applicable in your organisation,",
  },
  {
    Icon: Users,
    title: "HR Operations",
    to: "/services/hr-operations",
    text: "We provide effective HR Operations services to enable good HR practices in an organisation which provide feed good to new comers in organisation,",
  },
  {
    Icon: CalendarCheck,
    title: "Attendance and Leave Management System",
    to: "/services/attendance-and-leave",
    text: "We provide cloud-based attendance and leave management system where they can track their attendance, apply leaves, and check leave balance on real time,",
  },
] as const;

const whyCards = [
  { image: img.whyAccoupayCard_1, text: "At paymax we offer Pan India based services for you" },
  {
    image: img.whyAccoupayCard_2,
    text: "Leading Service Provider of Statutory Compliance Services & more",
  },
  {
    image: img.whyAccoupayCard_6,
    text: "Services within the time frame and on well-defined parameters",
  },
];

function AllServices() {
  return (
    <>
      <Breadcrumb title="Our All Services" crumbs={[{ label: "Services" }]} image={img.breadcrumb_img_1} />

      {/* Intro copy from breadcrumb */}
      <section className="stp-15 container">
        <p className="max-w-[700px] text-bodyText">
          Welcome to Paymax, your trusted partner for comprehensive financial solutions. Explore our
          range of services tailored to meet your business needs.
        </p>
      </section>

      {/* Core Services */}
      <section className="stp-30 sbp-30 overflow-hidden">
        <div className="container">
          <SectionHeading
            pill="Services"
            title="Our Core Services"
            description="At Paymax we go so much further and do so much more for clients, these core services help provide a framework to provide you with relevant, reliable & real-time reporting."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {coreServices.map(({ Icon, title, to, text }) => (
              <div key={title} className="col-span-12 sm:col-span-6 md:col-span-4">
                <div className="group flex h-full flex-col items-start justify-start border border-strokeColor p-6 duration-500 hover:border-mainText hover:bg-s2 lg:p-10">
                  <div className="rounded-full bg-softBg p-4 text-5xl text-s1 duration-500 group-hover:bg-mainText group-hover:text-white">
                    <Icon className="size-10" />
                  </div>
                  <Link to={to} className="pt-8 pb-5 hover:underline">
                    <h4 className="heading-4 duration-300">{title}</h4>
                  </Link>
                  <p className="text-bodyText lg:pr-4">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Paymax */}
      <section className="stp-30 sbp-30 overflow-hidden bg-softBg">
        <div className="container">
          <div className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <SectionHeading
              align="left"
              pill="Why Paymax"
              title="A platform for your business to grow"
            />
            <p className="max-w-[500px] text-bodyText">
              Your dependable guide to achieving freedom from manual HR work and payroll processing
              while building that perfect workplace you have always aspired to build. Your dependable
              guide to achieving freedom.
            </p>
          </div>
          <div className="stp-15 grid grid-cols-12 gap-6">
            {whyCards.map((card) => (
              <div key={card.text} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="group flex h-full flex-col items-center border border-white bg-white p-6 duration-700 hover:border-mainText hover:bg-s2 xl:px-15 xl:py-10">
                  <img src={card.image} alt="" />
                  <h4 className="heading-4 pt-8 text-center">{card.text}</h4>
                </div>
              </div>
            ))}
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
              {
                icon: "✉️",
                title: "Get in Touch",
                text: "Fill the contact form with all your queries and subject",
              },
              {
                icon: "🧑",
                title: "Wait for the response",
                text: "Our team will response ASAP with your solutions regarding the subject.",
              },
              {
                icon: "⭐",
                title: "Will get back with solutions",
                text: "Get your work done effortlessly! with paymax for a better experience",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="col-span-12 flex flex-col items-center text-center md:col-span-4"
              >
                <span className="flex size-20 items-center justify-center rounded-full border border-strokeColor bg-softBg text-3xl text-s1">
                  {s.icon}
                </span>
                <h4 className="heading-4 pt-8 pb-6">{s.title}</h4>
                <p className="text-bodyText">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore other services */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <SectionHeading
            pill="Integrations"
            title="All in one place. All in sync."
            description="Experience seamless coordination across our services."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {coreServices.map((s) => (
              <div key={s.to} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <Link
                  to={s.to}
                  className="group flex h-full flex-col justify-between gap-6 border border-strokeColor bg-white p-6 duration-500 hover:border-mainText hover:bg-s2 xl:p-8"
                >
                  <h4 className="heading-4">{s.title}</h4>
                  <span className="flex items-center gap-2 font-medium">
                    Explore
                    <ArrowUpRight className="size-4 duration-500 group-hover:rotate-45" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection subject="All Services Enquiry" />
    </>
  );
}
