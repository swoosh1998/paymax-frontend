import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/attendance-and-leave")({
  head: () => ({
    meta: [
      { title: "Attendance & Leave Management System | Paymax" },
      {
        name: "description",
        content:
          "A cloud-based attendance and leave management system — apply and approve leaves, track attendance, configure policies, shifts and manager approval matrices in real time.",
      },
      { property: "og:title", content: "Attendance & Leave Management System | Paymax" },
      {
        property: "og:description",
        content:
          "At paymax we provide a cloud-based attendance and leave management system to track their attendance, apply leaves, and check leave balance on real time basis.",
      },
    ],
  }),
  component: AttendanceAndLeave,
});

const offerings = [
  "Allows employees to apply leave and their managers to approve",
  "Allows HR to generate detailed reports with required information",
  "Allows companies to configure system as per their leave policy",
  "Track and record daily in time and out time of employees",
  "Allow companies to configure their attendance policy",
  "Define shifts as per business requirement for employees",
  "Track of late coming, overtime, permission, holiday working and on duty",
  "Download reports of attendance, time in time out, holiday, weekly off etc.",
  "Assign manger matrix for approval",
  "Mobile App based attendance capturing and management",
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

function AttendanceAndLeave() {
  return (
    <>
      <Breadcrumb
        title="Attendance & Leave Management System"
        crumbs={[{ label: "Services", to: "/services" }, { label: "Attendance and Leave" }]}
        image={img.breadcrumb_img_2}
      />

      {/* We Help */}
      <section className="stp-30 sbp-30 container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <h1 className="display-4">We help you with Attendance and Leave Management</h1>
          <p className="pt-4 pb-6 text-bodyText lg:pb-8">
            Tracking of the attendance, leave of employee can take long manhours to manage, at paymax
            We provide cloud-based attendance & leave management system.
          </p>
          <h3 className="heading-3 pb-6">Our management Offerings:</h3>
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
          <img
            src={img.we_help}
            alt="Attendance and leave management"
            className="object-fit duration-500 hover:scale-110"
          />
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

      {/* Got Questions */}
      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="Contact"
            title="Questions? Meet Answer"
            description="Startups thrive with Paymax. Their flexible payroll solutions have been instrumental in our journey, providing the support"
          />
        </div>
      </section>

      <ContactSection subject="Attendance & Leave Management Enquiry" />
    </>
  );
}
