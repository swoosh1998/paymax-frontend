import { createFileRoute } from "@tanstack/react-router";
import {
  AlignRight,
  BookOpen,
  Handshake,
  Lightbulb,
  Mail,
  ProjectorIcon,
  TreePine,
  User,
} from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/hr-operations")({
  head: () => ({
    meta: [
      { title: "HR Operations Services | Paymax" },
      {
        name: "description",
        content:
          "Compensation structure design, onboarding, offer/appointment/experience letters, employee master management, appraisals and HR policy manuals.",
      },
      { property: "og:title", content: "HR Operations | Paymax" },
      {
        property: "og:description",
        content:
          "At paymax we provide effective HR Operations services to enable good HR practices in an organisation which provide feed good to new comers in organisation.",
      },
    ],
  }),
  component: HROperations,
});

const expertise = [
  {
    Icon: TreePine,
    title: "Help in designing of Compensation Structure",
    text: "At paymax we ensure a Compensation Structure with defined objectives & market data, job evaluation and grading, pay components and salary ranges & levels etc",
  },
  {
    Icon: User,
    title: "Onboarding of new joiners through online portal",
    text: "Integrating new employees into a company by providing them access to a dedicated digital platform where they can complete necessary paperwork, access company information, undergo training modules, and familiarize themselves with their roles and company culture.",
  },
  {
    Icon: Mail,
    title: "Issue of Offer letter, Appointment letter, Experience and Relieving letter",
    text: "At paymax we handle issuing of offer letter, appointment letter, experience and relieving letter so you can focus on exponential growth of your business.",
  },
  {
    Icon: AlignRight,
    title: "Employees Master management",
    text: "At paymax we offer centralising and organizing your employee data in one system which helps organizations improve efficiency and decision-making.",
  },
  {
    Icon: ProjectorIcon,
    title: "Help in yearly appraisal of employees",
    text: "At paymax we offer help in performance review, evaluating work, goals and expectations providing feedback on their strengths, areas for improvement, and potential development opportunities.",
  },
  {
    Icon: BookOpen,
    title: "HR Policy and Manuals",
    text: "We provide a comprehensive document that outlines a company's guidelines, procedures, and expectations related to all aspects of human resource management, including recruitment, employee onboarding, performance reviews, training, benefits, and termination.",
  },
];

const whyChoose = [
  {
    Icon: User,
    title: "Expert Payroll Professionals",
    text: "Our team of professionals brings extensive knowledge and expertise to handle various Payroll processing.",
  },
  {
    Icon: Handshake,
    title: "Personalized Consultations",
    text: "We understand that every business is unique. Our personalized consultations ensure that our services are top notch.",
  },
  {
    Icon: Lightbulb,
    title: "Strategic Advice",
    text: "Beyond compliance, we offer strategic advice to help you make informed financial decisions that benefit you and your business.",
  },
];

function HROperations() {
  return (
    <>
      <Breadcrumb
        title="HR Operations"
        crumbs={[{ label: "Services", to: "/services" }, { label: "HR Operations" }]}
        image={img.breadcrumb_img_4}
      />

      <section className="stp-15 container">
        <p className="max-w-[700px] text-bodyText">
          At paymax we We provide effective HR Operations services to enable good HR practices in an
          organisation which provide feed good to new comers in organisation.
        </p>
      </section>

      {/* Expertise */}
      <section className="stp-30 sbp-30 container grid grid-cols-12 gap-6 overflow-hidden">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5">
          <div className="flex flex-col items-start justify-start">
            <p className="inline-flex rounded-full bg-p1 px-5 py-3 text-white">HR Operations</p>
            <h2 className="display-4 pt-4 pb-6">Paymax's Expertise in HR Operations</h2>
            <p className="pb-10 text-bodyText">
              With a customised, flexible delivery model that is proactive, personalized, relevant and
              result focused, paymax makes it easy for your people to get in organisation.
            </p>
            <div className="flex w-full items-center justify-center overflow-hidden">
              <img
                src={img.taxation_services_img}
                alt="HR Operations"
                className="h-full w-full duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 flex flex-col items-center justify-center gap-6 lg:col-span-6 xl:gap-10 xxl:col-start-7">
          {expertise.map(({ Icon, title, text }) => (
            <div key={title} className="flex items-start justify-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-softBg !leading-[0] text-s1">
                <Icon className="size-6" />
              </span>
              <div>
                <h4 className="heading-4">{title}</h4>
                <p className="pt-3 text-bodyText">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do / Why choose */}
      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container">
          <div className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <SectionHeading align="left" pill="What We Do" title="Why Choose Paymax for Services?" />
            <p className="max-w-[500px] text-bodyText">
              Payroll Process Outsourcing, HR & Labour Compliance Services refer to a range of
              professional services provided by accounting firms or specialized firms that assist
              businesses
            </p>
          </div>
          <div className="stp-15 grid grid-cols-12 gap-6">
            {whyChoose.map(({ Icon, title, text }) => (
              <div key={title} className="col-span-12 sm:col-span-6 md:col-span-4">
                <div className="group flex h-full flex-col items-start justify-start border border-white bg-white p-6 duration-700 hover:border-mainText hover:bg-s2 xl:p-8">
                  <div className="rounded-full bg-softBg p-3 !leading-[0] text-s1 duration-500 group-hover:bg-white">
                    <Icon className="size-8" />
                  </div>
                  <h4 className="heading-4 pt-8 pb-5">{title}</h4>
                  <p className="text-bodyText">{text}</p>
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

      <ContactSection subject="HR Operations Enquiry" />
    </>
  );
}
