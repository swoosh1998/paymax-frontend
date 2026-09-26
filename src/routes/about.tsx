import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartHandshake, ScaleIcon, Sparkles, Users } from "lucide-react";

import { img } from "@/assets/images";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Work With Paymax | Payroll & Compliance Partner" },
      {
        name: "description",
        content:
          "Since 2020 Paymax has delivered payroll processing, HR operations and labour compliance services to businesses across India. Meet the story, mission and values behind the firm.",
      },
      { property: "og:title", content: "About Paymax — Work With Paymax" },
      {
        property: "og:description",
        content:
          "Our story, mission and values: financial excellence met with personalised HR and payroll service.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    Icon: ScaleIcon,
    title: "Integrity",
    text: "We are transparent and do the right thing for the right reason.",
  },
  {
    Icon: HeartHandshake,
    title: "Accountability",
    text: "We take ownership of outcomes and deliver on our commitments.",
  },
  {
    Icon: Users,
    title: "Diversity",
    text: "We seek and leverage differences and unique perspectives.",
  },
  {
    Icon: Sparkles,
    title: "Customer Centricity",
    text: "We start with the customer in everything we do.",
  },
];

const pillars = [
  {
    title: "Who We Are",
    text: "Paymax has been at the forefront of delivering innovative financial solutions. Our journey began with a vision to simplify financial processes for businesses of all sizes. Today we stand proud as a trusted partner to employers across India.",
  },
  {
    title: "Our Mission",
    text: "Paymax is on a mission to empower businesses by providing reliable, efficient and innovative financial services. We strive to be your go-to partner for all your HR and payroll needs, enabling you to focus on what you do best.",
  },
  {
    title: "Expert Team",
    text: "Our team of experienced professionals brings a wealth of knowledge to every client interaction. From payroll processing to statutory advisory, we have the expertise to guide your business.",
  },
];

function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" crumbs={[{ label: "About Us" }]} />

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading
              align="left"
              pill="About"
              title="Work with Paymax"
              description="Welcome to Paymax, where financial excellence meets personalised service. At Paymax we understand the intricacies of HR operations, labour compliances and payroll processing."
            />
            <div className="mt-8 border-l-4 border-p1 bg-softBg px-6 py-5">
              <p className="font-medium">Paymax Story</p>
              <p className="pt-2 text-bodyText">
                In 2020, an exciting journey began with a daring vision — to make payroll and
                compliance painless for Indian employers.
              </p>
            </div>
            <div className="mt-6 border border-strokeColor bg-white p-6 shadow2">
              <p className="text-sm tracking-wide text-bodyText uppercase">
                Message from our CEO
              </p>
              <p className="heading-4 pt-3">
                “A successful team requires members with complementary skill sets.”
              </p>
              <p className="pt-4 font-medium">Vijay Negi</p>
              <p className="text-bodyText">CEO, Paymax</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src={img.what_we_do} alt="The Paymax team at work" className="w-full" />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container grid grid-cols-12 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="col-span-12 lg:col-span-4">
              <div className="h-full border border-strokeColor bg-white p-6 duration-500 hover:border-mainText xl:p-8">
                <h3 className="heading-3 pb-4">{p.title}</h3>
                <p className="text-bodyText">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container">
          <SectionHeading
            pill="Our Values"
            title="Our values"
            description="At Paymax, our values are the foundation of everything we do. They reflect our commitment to excellence, integrity and client success."
          />
          <div className="stp-15 grid grid-cols-12 gap-6">
            {values.map(({ Icon, title, text }) => (
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

      <section className="stp-30 sbp-30 bg-softBg">
        <div className="container grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading
              align="left"
              pill="Why Paymax"
              title="A platform for your business to grow"
              description="Your dependable guide to achieving freedom from manual HR work and payroll processing, while building the perfect workplace you have always aspired to build."
            />
            <ul className="flex flex-col gap-4 pt-6">
              {[
                "At Paymax we offer Pan India based services for you.",
                "Leading service provider of statutory compliance services and more.",
                "Services within the time frame and on well-defined parameters.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-p1" />
                  <span className="text-bodyText">{line}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-8">
              <Link
                to="/vision-mission"
                className="group flex items-center gap-3 rounded-full border border-mainText bg-s2 px-6 py-3 font-medium duration-300 hover:bg-s3"
              >
                Vision &amp; Mission
                <ArrowUpRight className="size-5 duration-500 group-hover:rotate-45" />
              </Link>
              <Link
                to="/team"
                className="rounded-full border border-strokeColor px-6 py-3 font-medium duration-300 hover:border-mainText hover:bg-white"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src={img.we_help} alt="Paymax service illustration" className="w-full" />
          </div>
        </div>
      </section>

      <ContactSection subject="New enquiry from the Paymax About page" />
    </>
  );
}
