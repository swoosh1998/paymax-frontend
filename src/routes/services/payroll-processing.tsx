import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/payroll-processing")({
  head: () => ({
    meta: [
      { title: "Payroll Processing Services | Paymax" },
      {
        name: "description",
        content:
          "Accurate, timely payroll processing — EPF, ESIC, LWF, Income Tax and Professional Tax calculations, salary slips, Form-16 and employee self-service.",
      },
      { property: "og:title", content: "Payroll Processing | Paymax" },
      {
        property: "og:description",
        content:
          "At Paymax, we understand the critical importance of accurate and timely payroll processing. Our comprehensive payroll solutions cover the full cycle.",
      },
    ],
  }),
  component: PayrollProcessing,
});

const offerings = [
  "Payroll processing and generation of salary register",
  "Accurate calculation of EPF, ESIC, LWF, Income Tax and Professional Tax",
  "Generation employee Salary slip with Tax computation",
  "Issuance of Form-16",
  "Employee Self-service (ESS) module for Salary slip, Tax Declaration and Form-16",
  "Experienced payroll professionals",
];

const whatWeDo = [
  {
    n: 1,
    title: "Payroll Processing Services",
    text: "Efficiently manage your payroll with our state-of-the-art processing services, and eliminate the complexity and risk of sourcing, managing and delivering payroll.",
  },
  {
    n: 2,
    title: "HR & Labour Compliances",
    text: "We provide strategic support through our experienced professional team in understanding and decoding HR and labour law compliance.",
  },
  {
    n: 3,
    title: "HR Operations",
    text: "We provide effective HR Operations services to enable good HR practices in an organisation which provide feed good to new comers in organisation.",
  },
  {
    n: 4,
    title: "Attendance and Leave Management System",
    text: "We provide cloud-based attendance and leave management system where they can track their attendance, apply leaves, and check leave balance on real time.",
  },
];

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

function PayrollProcessing() {
  return (
    <>
      <Breadcrumb
        title="Payroll Processing"
        crumbs={[{ label: "Services", to: "/services" }, { label: "Payroll Processing" }]}
        image={img.breadcrumb_img_10}
      />

      {/* We Help */}
      <section className="stp-30 sbp-30 container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <h1 className="display-4">We help you with payroll processing services</h1>
          <p className="pt-4 pb-6 text-bodyText lg:pb-8">
            At Paymax, we understand the critical importance of accurate and timely payroll
            processing. Our comprehensive payroll solutions
          </p>
          <h3 className="heading-3 pb-6">Our Payroll Processing Offerings:</h3>
          <ul className="flex flex-col items-start justify-start gap-5">
            {offerings.map((item) => (
              <li key={item} className="flex items-center justify-start gap-2">
                <CheckCircle2 className="size-6 shrink-0 text-s1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 flex items-center justify-center overflow-hidden md:col-span-6 xxl:col-span-5 xxl:col-start-8">
          <img src={img.we_help} alt="Payroll processing" className="object-fit duration-500 hover:scale-110" />
        </div>
      </section>

      {/* What We Do */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <SectionHeading
            pill="What We Do"
            title="Services we provide for the client"
            description="At Paymax, we specialize in delivering comprehensive HR and Payroll Processing services"
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            <div className="col-span-12 flex items-center justify-center self-stretch overflow-hidden lg:col-span-6 xl:col-span-5">
              <img src={img.what_we_do} alt="" className="h-full w-full duration-500 hover:scale-110" />
            </div>
            <div className="col-span-12 flex flex-col items-start justify-start gap-6 lg:col-span-6 lg:col-start-7 xl:gap-10">
              {whatWeDo.map((step) => (
                <div key={step.n} className="flex items-start justify-start gap-4 sm:gap-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-s1 !leading-none text-white">
                    {step.n}
                  </span>
                  <div className="border-b border-strokeColor pb-6">
                    <h4 className="heading-4">{step.title}</h4>
                    <p className="pt-4 text-bodyText">{step.text}</p>
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
                <span className="flex size-20 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1" />
                <h4 className="heading-4 pt-8 pb-6">{s.title}</h4>
                <p className="text-bodyText">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section
        className="stp-30 sbp-30 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${img.counter_bg})` }}
      >
        <div className="container grid grid-cols-12 gap-8 text-center">
          <div className="col-span-12 md:col-span-4">
            <p className="display-4">63 hrs</p>
            <p>Average time saved per month running payroll and HR after switching to Paymax.</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="display-4">₹264589</p>
            <p>Average savings made per year running payroll and HR after switching to Paymax.</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="display-4">4 Weeks</p>
            <p>average time it takes to switch to Paymax - and often less</p>
          </div>
        </div>
      </section>

      {/* Why Paymax */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <div className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <SectionHeading align="left" pill="Why Paymax" title="A platform for your business to grow" />
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

      <ContactSection subject="Payroll Processing Enquiry" />
    </>
  );
}
