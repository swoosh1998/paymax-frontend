import { Mail, MapPin, PhoneCall } from "lucide-react";

import { img } from "@/assets/images";
import { site } from "@/config/site";
import { ContactForm } from "./ContactForm";
import { Pill } from "./SectionHeading";

export function ContactSection({
  subject,
  title = "Talk to our payroll & compliance desk",
  description = "Share your requirement and a Paymax specialist will get back to you within one working day.",
}: {
  subject?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="stp-30 sbp-30 relative overflow-hidden">
      <img
        src={img.circleIcon}
        alt=""
        className="absolute top-20 left-0 max-xxl:hidden xxl:-left-72"
      />
      <div className="container relative z-10 grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <Pill>Get In Touch</Pill>
          <h2 className="display-4 pt-4 pb-4">{title}</h2>
          <p className="text-bodyText">{description}</p>
          <ul className="flex flex-col gap-5 pt-8">
            <li>
              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 duration-300 hover:text-s1"
              >
                <span className="flex size-14 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1 duration-500 group-hover:border-mainText group-hover:bg-s2 group-hover:text-mainText">
                  <PhoneCall className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-bodyText">Call us</span>
                  <span className="font-medium">{site.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="group flex items-center gap-4 duration-300 hover:text-s1"
              >
                <span className="flex size-14 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1 duration-500 group-hover:border-mainText group-hover:bg-s2 group-hover:text-mainText">
                  <Mail className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-bodyText">Email us</span>
                  <span className="font-medium">{site.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-strokeColor bg-softBg text-s1">
                <MapPin className="size-6" />
              </span>
              <span>
                <span className="block text-sm text-bodyText">Registered office</span>
                <span className="font-medium">
                  D-100 Bhajanpura, Shahdara, North East Delhi-110053
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="border border-strokeColor bg-white p-6 shadow2 sm:p-8 lg:p-10">
            <ContactForm {...(subject ? { subject } : {})} />
          </div>
        </div>
      </div>
    </section>
  );
}
