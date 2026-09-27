import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Youtube,
  Twitter,
} from "lucide-react";

import { img } from "@/assets/images";
import { site } from "@/config/site";
import { serviceLinks } from "./nav-data";
import { NewsletterCta } from "./NewsletterCta";

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "X", Icon: Twitter },
  { label: "YouTube", Icon: Youtube },
  { label: "LinkedIn", Icon: Linkedin },
];

const resources = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Regulatory Updates", to: "/regulatory-updates" },
  { label: "Our Team", to: "/team" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Footer() {
  return (
    <>
      <NewsletterCta />
      <footer className="bg-mainText text-white/60">
        <div className="container stp-30 sbp-30 grid grid-cols-12 gap-8">
          <div className="col-span-12 flex flex-col gap-6 min-[450px]:col-span-6 lg:col-span-3 lg:gap-8">
            <Link to="/" className="flex flex-col items-start">
              <img src={img.paymax_white} alt="Paymax" className="h-10 w-auto object-contain" />
              <span className="-mt-1 text-[8.5px] font-semibold tracking-wider text-white/90 uppercase">
                Excellence People Practice
              </span>
            </Link>
            <p>
              Your trusted partner in HR, payroll and statutory compliance. At Paymax our focus is on
              delivering precision, efficiency and tailored services to our clients and their
              businesses.
            </p>
            <ul className="flex items-center justify-start gap-2">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full bg-s1/50 text-white duration-500 hover:-translate-y-1 hover:bg-s1"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 min-[400px]:col-span-6 lg:col-span-3 xl:pl-20">
            <h4 className="heading-4 relative mb-6 pb-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[20%] after:bg-p1 after:duration-500 hover:after:w-[40%]">
              Resources
            </h4>
            <ul className="flex flex-col gap-4 md:gap-5">
              {resources.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="flex items-center justify-start gap-2 duration-500 hover:translate-x-2 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 min-[400px]:col-span-6 lg:col-span-3 xl:pl-20">
            <h4 className="heading-4 relative mb-6 pb-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[20%] after:bg-p1 after:duration-500 hover:after:w-[40%]">
              Services
            </h4>
            <ul className="flex flex-col gap-4 md:gap-5">
              {serviceLinks.slice(1).map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="flex items-center justify-start gap-2 duration-500 hover:translate-x-2 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 xl:pl-20">
            <h4 className="heading-4 relative mb-4 pb-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[20%] after:bg-p1 after:duration-500 hover:after:w-[40%] md:mb-6">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4 md:gap-3">
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start justify-start gap-2 duration-500 hover:translate-x-2 hover:text-white"
                >
                  <Mail className="mt-1 size-5 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start justify-start gap-2 duration-500 hover:translate-x-2 hover:text-white"
                >
                  <PhoneCall className="mt-1 size-5 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="flex items-start justify-start gap-2">
                  <MapPin className="mt-1 size-5 shrink-0" />
                  Registered Office: D-100 Bhajanpura, Shahdara, North East Delhi-110053
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container flex items-center justify-between gap-6 py-6 max-md:flex-col">
            <p className="max-sm:text-center">Paymax © Copyright 2025. All Rights Reserved.</p>
            <div className="flex items-center justify-end">
              <Link
                to="/privacy-policy"
                className="border-r-2 border-white/60 pr-3 leading-none duration-500 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="pl-3 leading-none duration-500 hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}