import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  FilePlus2,
  FileText,
  HandHeart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

import { img } from "@/assets/images";
import { ContactSection } from "@/components/site/ContactSection";
import { RegulatoryPreview } from "@/components/site/RegulatoryPreview";
import { SectionHeading } from "@/components/site/SectionHeading";
import { serviceLinks } from "@/components/site/nav-data";
import { getRegulatoryUpdates } from "@/data/regulatoryUpdates"; // <-- 1. Import add karein

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paymax — We Make Payroll Painless | Payroll, HR & Compliance" },
      {
        name: "description",
        content:
          "Paymax handles payroll processing, HR operations, attendance and statutory labour compliance for 150+ businesses across India.",
      },
      { property: "og:title", content: "Paymax — We Make Payroll Painless" },
      {
        property: "og:description",
        content:
          "Payroll processing, HR operations, attendance and statutory labour compliance, delivered Pan India.",
      },
    ],
  }),
  // ---> 2. Yahan loader add karein taaki data pehle fetch ho <---
  loader: async () => {
    const allUpdates = await getRegulatoryUpdates();
    return { previewUpdates: allUpdates.slice(0, 3) };
  },
  pendingComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-lg font-medium text-bodyText animate-pulse">Loading Paymax...</p>
    </div>
  ),
  component: Index,
});

const solutionPoints = [
  { label: "Tax Preparation", Icon: FileText },
  { label: "Payroll Processing", Icon: HandHeart },
  { label: "Cost Effective", Icon: Lightbulb },
  { label: "Scale Rapidly", Icon: Rocket },
];

const features = [
  {
    Icon: FilePlus2,
    title: "Payroll Process Outsourcing",
    text: "Streamline your payroll with precision and compliance. Our expert services ensure accurate and timely disbursement, every cycle.",
    to: "/services/payroll-processing",
  },
  {
    Icon: ShieldCheck,
    title: "HR & Labour Compliances",
    text: "Strategic support in understanding and decoding the HR and labour law compliances applicable to your organisation.",
    to: "/services/hr-labour-compliances",
  },
  {
    Icon: Users,
    title: "HR Operations",
    text: "End-to-end employee lifecycle administration — onboarding, records, letters, exits and governance documentation.",
    to: "/services/hr-operations",
  },
  {
    Icon: CalendarCheck,
    title: "Attendance & Leave",
    text: "A configurable attendance and leave management system that feeds clean, audit-ready inputs straight into payroll.",
    to: "/services/attendance-and-leave",
  },
] as const;

const counters = [
  { value: "10+", unit: "hrs", text: "Average time saved per month running payroll and HR after switching to Paymax." },
  { value: "2L+", unit: "₹", text: "Average savings made per year running payroll and HR after switching to Paymax." },
  { value: "2", unit: "Weeks", text: "Average time it takes to switch to Paymax — and often less." },
];

const steps = [
  {
    Icon: ClipboardList,
    title: "Share your requirement",
    text: "Fill the contact form with your queries and the subject you need support on.",
  },
  {
    Icon: Users,
    title: "We respond with a plan",
    text: "Our team responds as soon as possible with solutions tailored to your subject.",
  },
  {
    Icon: FileCheck2,
    title: "Get your work done",
    text: "Get your work done effortlessly with Paymax for a better workplace experience.",
  },
];

const whyCards = [
  { image: img.whyAccoupayCard_1, text: "At Paymax we offer Pan India based services for you." },
  {
    image: img.whyAccoupayCard_2,
    text: "Leading service provider of statutory compliance services and more.",
  },
  {
    image: img.whyAccoupayCard_6,
    text: "Data security, accuracy and quality assurance built into every process.",
  },
];

const pricing = [
  {
    Icon: FilePlus2,
    name: "Payroll Process & Outsourcing",
    text: "Eliminate the complexity and risk of sourcing, managing and delivering payroll.",
    price: "₹2500",
    popular: true,
    items: [
      "Payroll processing and generation of salary register",
      "Accurate calculation of EPF, ESIC, LWF, Income Tax and Professional Tax",
      "Generation of employee salary slips with tax computation",
      "Issuance of Form-16",
      "Employee self-service module for slips, declarations and Form-16",
      "Experienced payroll professionals",
    ],
  },
  {
    Icon: ShieldCheck,
    name: "HR & Labour Compliances",
    text: "Decode and discharge every statutory obligation applicable to your establishment.",
    price: "₹3500",
    popular: false,
    items: [
      "Registrations and amendments under applicable labour laws",
      "Monthly EPF, ESIC and LWF return filing",
      "Minimum wages and VDA monitoring, state-wise",
      "Statutory registers, records and notice board compliance",
      "Inspection support and liaison with authorities",
      "Compliance audit of contractors and vendors",
    ],
  },
  {
    Icon: Users,
    name: "HR Operations",
    text: "Run a compliant, documented and responsive HR function without adding headcount.",
    price: "₹4500",
    popular: false,
    items: [
      "Onboarding, documentation and employee master data",
      "Letters, policies and employee handbook drafting",
      "Attendance and leave administration",
      "Full and final settlement processing",
      "HR helpdesk for employee queries",
      "MIS and management dashboards",
    ],
  },
];

function Index() {
  const { previewUpdates } = Route.useLoaderData(); // <-- 3. Loader se data nikal liya

  return (
    <>
      {/* Hero */}
      <section className="hero_bg_gradient stp-30 relative overflow-hidden bg-repeat">
        <img
          src={img.hero_bg_element1}
          alt=""
          className="absolute top-0 left-0 max-lg:w-[300px] max-md:hidden max-xxl:w-[500px] xxxl:left-36"
        />
        <img
          src={img.hero_bg_element2}
          alt=""
          className="absolute top-0 right-0 max-sm:hidden max-xxl:w-[300px]"
        />
        <div className="absolute -bottom-1/2 -left-[200px] h-[1176px] max-w-full overflow-hidden rounded-[1176px] bg-white blur-[200px] lg:w-[1176px]" />
        <div className="relative z-20 grid grid-cols-12 text-s1 max-lg:pt-15 max-xxl:container lg:max-xxl:py-10 xxl:ml-[calc((100%-1296px)/2)]">
          <img
            src={img.hero_bg_element3}
            alt=""
            className="absolute top-1/3 left-1/3 max-sm:hidden"
          />
          <div className="col-span-12 flex flex-col justify-center gap-2 lg:col-span-5">
            <p className="text-base font-semibold uppercase lg:text-xl">
              Efficiency payroll and workforce mastery
            </p>
            <div className="display-2">
              We Make <span className="inline-flex text-s3">Payroll</span>
              <br />
              Painless.
            </div>
            <p className="max-w-[550px] text-s1/80">
              We get your employees paid on time while keeping every statutory filing, register and
              record audit-ready — with online access to payslips, tax reports and payroll tax
              filings.
            </p>
            <div className="flex items-center justify-start gap-4 pt-6 pb-15 lg:pt-8">
              <Link
                to="/contact"
                className="rounded-full bg-s2 px-4 py-2 font-medium text-mainText duration-300 hover:bg-s3 lg:px-6 lg:py-3"
              >
                Get Started
              </Link>
              <Link to="/services" className="font-medium underline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <img src={img.hero_illus} alt="Paymax payroll dashboard illustration" />
          </div>
        </div>
      </section>

      {/* Company strip */}
      <section className="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor">
        <div className="col-span-12 sm:col-span-6 xl:col-span-4">
          <p className="text-xl text-bodyText lg:text-2xl">
            <span className="font-bold text-mainText">150+</span> businesses, from small startups to
            household names
          </p>
        </div>
        <div className="col-span-12 flex flex-wrap items-center justify-start gap-8 pt-4 sm:col-span-6 xl:col-span-8 xl:justify-end xl:gap-12">
          {[img.logo1, img.logo2, img.logo3, img.logo1].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-8 w-auto opacity-70 duration-500 hover:opacity-100"
            />
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="stp-30 sbp-30 relative">
        <img
          src={img.circleIcon}
          alt=""
          className="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"
        />
        <img
          src={img.sliceIcon}
          alt=""
          className="absolute top-10 right-0 max-md:h-[80px] sm:right-2 lg:right-10 xl:top-32"
        />
        <div className="relative z-10 container">
          <SectionHeading
            pill="Solutions"
            title="The complete payroll solution"
            description="When it comes to payroll solutions, we have a variety of options that benefit both your company and your people."
          />
          <div className="stp-15 grid grid-cols-12 max-lg:gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center justify-center self-stretch overflow-hidden">
                <img
                  src={img.solution_illustrations}
                  alt="Payroll solution illustration"
                  className="w-full duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="col-span-12 flex flex-col items-start justify-center lg:col-span-5 lg:col-start-8">
              <h3 className="heading-1 pb-5">Consolidate Payroll Processing</h3>
              <p className="text-bodyText">
                We have designed a fast and effective payroll system that streamlines your payment
                process end to end.
              </p>
              <div className="grid w-full grid-cols-2 gap-4 py-6 lg:gap-6 lg:py-10">
                {solutionPoints.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="group col-span-2 flex items-center justify-start gap-5 sm:col-span-1"
                  >
                    <span className="flex size-[60px] items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1 duration-500 group-hover:border-mainText group-hover:bg-s2 group-hover:text-mainText sm:size-[80px]">
                      <Icon className="size-8" />
                    </span>
                    <p className="text-lg font-medium duration-500 group-hover:text-s1">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 rounded-full border border-mainText bg-s2 px-3 py-2 font-medium text-mainText duration-300 hover:bg-s3 max-sm:text-sm md:px-6 md:py-3"
              >
                Contact Us
                <ArrowUpRight className="size-5 duration-500 group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <div className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <SectionHeading
              align="left"
              pill="Features"
              title="Perfect solutions for your business"
            />
            <p className="max-w-[500px] text-bodyText">
              We serve our clients with quality and compliance assurance processes that lead to
              better productivity — professionally handling core functions at a reduced cost. Paymax
              offers customised services and ensures high data security.
            </p>
          </div>
          <div className="stp-15 grid grid-cols-12 gap-6">
            {features.map(({ Icon, title, text, to }) => (
              <div key={title} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="group flex h-full flex-col border border-white bg-white p-6 duration-700 hover:border-mainText hover:bg-s2 xl:p-8">
                  <div className="pb-6 text-s1 duration-500 group-hover:text-mainText">
                    <Icon className="size-10" />
                  </div>
                  <h4 className="heading-4 pb-5">{title}</h4>
                  <p className="pb-6 text-bodyText">{text}</p>
                  <Link
                    to={to}
                    className="mt-auto flex items-center justify-start gap-2 font-medium"
                  >
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section
        className="stp-30 sbp-30 bg-mainText bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${img.counter_bg})` }}
      >
        <div className="container grid grid-cols-12 gap-8">
          {counters.map((c) => (
            <div key={c.text} className="col-span-12 md:col-span-4">
              <p className="display-3 text-s2">
                {c.value} <span className="text-xl font-medium text-white">{c.unit}</span>
              </p>
              <p className="pt-3 text-white/70">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="How it works"
            title="A step-by-step guide to working with us"
            description="Explore our process with ease — share your requirement, hear back from our specialists, and let us handle payroll and compliance from there."
          />
          <div className="stp-15 relative grid grid-cols-12 gap-8">
            <img
              src={img.stepArrow1}
              alt=""
              className="absolute top-10 left-[28%] max-lg:hidden"
            />
            <img
              src={img.stepArrow2}
              alt=""
              className="absolute top-10 left-[62%] max-lg:hidden"
            />
            {steps.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className="col-span-12 flex flex-col items-center text-center md:col-span-4"
              >
                <span className="relative flex size-20 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1">
                  <Icon className="size-8" />
                  <span className="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-s2 text-sm font-semibold text-mainText">
                    {i + 1}
                  </span>
                </span>
                <h4 className="heading-4 pt-6 pb-3">{title}</h4>
                <p className="text-bodyText">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Paymax */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <div className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <SectionHeading align="left" pill="Why Paymax" title="Why businesses choose Paymax" />
            <p className="max-w-[500px] text-bodyText">
              Your dependable guide to achieving freedom from manual HR work and payroll processing —
              while building the workplace you have always aspired to build.
            </p>
          </div>
          <div className="stp-15 grid grid-cols-12 gap-6">
            {whyCards.map((card) => (
              <div key={card.text} className="col-span-12 md:col-span-4">
                <div className="group flex h-full flex-col overflow-hidden border border-strokeColor bg-white duration-700 hover:border-mainText">
                  <img
                    src={card.image}
                    alt=""
                    className="w-full duration-500 group-hover:scale-105"
                  />
                  <p className="p-6 text-lg font-medium xl:p-8">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations / services */}
      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="Integrations"
            title="All in one place. All in sync."
            description="Experience seamless coordination across our services. From payroll to HR operations, we bring everything together in one place."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {serviceLinks.slice(1).map((s) => (
              <div key={s.to} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <Link
                  to={s.to}
                  className="group flex h-full flex-col justify-between gap-6 border border-strokeColor bg-white p-6 duration-500 hover:border-mainText hover:bg-s2 xl:p-8"
                >
                  <h4 className="heading-4">{s.label}</h4>
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

      {/* Experience */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading
              align="left"
              pill="Experience Paymax"
              title="We've got everything you need"
              description="We save you from all that boring paperwork. From payroll to instant payments, statutory filings and taxes — we've got your back."
            />
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-full border border-mainText bg-s2 px-6 py-3 font-medium duration-300 hover:bg-s3"
            >
              Contact Us
              <ArrowUpRight className="size-5 duration-500 group-hover:rotate-45" />
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src={img.contact_illus1234} alt="" className="w-full" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="Pricing"
            title="Our pricing"
            description="At Paymax we believe in clear and flexible pricing options tailored to your business needs."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className="group relative col-span-12 flex flex-col items-start justify-start border border-strokeColor bg-white p-6 duration-700 hover:border-mainText hover:bg-s2 md:col-span-6 lg:col-span-4 sm:p-10"
              >
                {plan.popular && (
                  <div className="absolute top-9 right-4 flex rotate-90 items-center justify-center bg-s1 px-4 py-1 text-[13px] text-white uppercase">
                    popular
                  </div>
                )}
                <div className="rounded-full border border-strokeColor bg-softBg p-4 text-s1 duration-500 group-hover:border-mainText group-hover:bg-mainText group-hover:text-white">
                  <plan.Icon className="size-8" />
                </div>
                <h4 className="heading-4 pt-6 pb-3">{plan.name}</h4>
                <p className="pb-5 text-bodyText">{plan.text}</p>
                <p className="display-4 pb-6">
                  {plan.price}
                  <span className="text-base font-normal text-bodyText"> / monthly onwards</span>
                </p>
                <ul className="flex flex-col gap-3 pb-8">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FileCheck2 className="mt-1 size-5 shrink-0 text-p1 duration-500 group-hover:text-mainText" />
                      <span className="text-bodyText">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-auto flex w-full items-center justify-center gap-3 rounded-full bg-s1 py-4 font-medium text-white group-hover:bg-mainText"
                >
                  Get Started
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Updates yahan pass kiye */}
      <RegulatoryPreview updates={previewUpdates} />

      <ContactSection subject="New enquiry from the Paymax home page" />
    </>
  );
}