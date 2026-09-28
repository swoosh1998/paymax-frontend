import { Link, useMatchRoute } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { img } from "@/assets/images";
import { site } from "@/config/site";
import { aboutLinks, serviceLinks, type NavLink } from "./nav-data";

function DesktopDropdown({ label, links }: { label: string; links: NavLink[] }) {
  const matchRoute = useMatchRoute();
  
  // Sirf tabhi active dikhaye jab hum specifically service routes par hon
  const isServicesDropdown = label === "Services";
  const isAnyChildActive = isServicesDropdown 
    ? links.some((l) => matchRoute({ to: l.to, fuzzy: false }) || window.location.pathname.startsWith(l.to))
    : links.some((l) => matchRoute({ to: l.to, fuzzy: true }));

  return (
    <li>
      <div className="group relative cursor-pointer">
        <div
          className={`menu-underline flex items-center justify-center gap-1 rounded-lg px-2 py-3 duration-500 ${
            isAnyChildActive ? "text-p1deep" : ""
          }`}
        >
          {label}
          <ChevronDown className="size-4 duration-500 group-hover:rotate-180" />
        </div>
        <ul className="pointer-events-none invisible absolute top-11 left-0 z-50 flex w-[240px] translate-y-6 scale-95 flex-col items-start justify-start gap-3 rounded-lg bg-s1 py-6 text-white/80 opacity-0 duration-500 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block px-6 duration-500 hover:ml-2 hover:text-s2"
                activeProps={{ className: "text-s2 font-semibold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileGroup({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: NavLink[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-lg font-medium"
      >
        {label}
        <ChevronDown className={`size-5 duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="flex flex-col gap-2 pb-3 pl-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={onNavigate} className="block py-1 text-white/80 hover:text-s2">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const [fixed, setFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-50">
      <div
        className={
          fixed
            ? "fixed top-0 right-0 left-0 z-50 bg-white/95 shadow2 backdrop-blur-md duration-500"
            : "relative z-50 bg-transparent duration-500"
        }
      >
        <div className="container flex items-center justify-between py-5 text-s1">
          <div className="flex items-center justify-start gap-3">
            <button
              type="button"
              aria-label="Open menu"
              className="text-3xl lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-7" />
            </button>
            <Link to="/" className="shrink-0 flex flex-col items-start">
              <img src={img.paymax_green} alt="Paymax logo" className="h-9 w-auto sm:h-10 object-contain" />
              <span className="-mt-1 ml-2 sm:ml-3 text-[7px] sm:text-[8.5px] font-semibold tracking-wider text-[#65c145] uppercase whitespace-nowrap">
                Excellence People Practice
              </span>
            </Link>
          </div>

          <nav className="max-lg:hidden">
            <ul className="flex items-center justify-center gap-2 font-medium">
              <li>
                <Link
                  to="/"
                  className="menu-underline rounded-lg px-2 py-3 duration-500"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-p1deep" }}
                >
                  Home
                </Link>
              </li>
              <DesktopDropdown label="About Us" links={aboutLinks} />
              <DesktopDropdown label="Services" links= {serviceLinks} />
              <li>
                <Link
                  to="/regulatory-updates"
                  className="menu-underline rounded-lg px-3 py-3 duration-500 font-semibold text-amber-600 animate-pulse [&.active]:animate-none [&.active]:text-p1deep [&.active]:bg-transparent [&.active]:font-medium"
                  activeProps={{ className: "!text-p1deep !animate-none !bg-transparent !font-medium" }}
                >
                  Regulatory Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="menu-underline rounded-lg px-2 py-3 duration-500"
                  activeProps={{ className: "text-p1deep" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-3 sm:gap-5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-medium text-s1 duration-300 hover:text-p1deep"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-softBg text-s1">
                <Phone className="size-5" />
              </span>
              <span className="max-xl:hidden">{site.phone}</span>
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-s2 px-4 py-2 font-medium text-mainText duration-300 hover:bg-s3 lg:px-6 lg:py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[998] bg-s1/70 duration-500 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 z-[999] h-full w-[300px] overflow-y-auto bg-s1 px-6 py-8 text-white duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex flex-col items-start">
            <img src={img.paymax_white} alt="Paymax logo" className="h-9 w-auto object-contain" />
            <span className="-mt-1 ml-2 text-[7px] font-semibold tracking-wider text-white/90 uppercase whitespace-nowrap">
              Excellence People Practice
            </span>
          </Link>
          <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <X className="size-6" />
          </button>
        </div>
        <ul className="mt-8 flex flex-col divide-y divide-white/10">
          <li>
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <MobileGroup label="About Us" links={aboutLinks} onNavigate={() => setMobileOpen(false)} />
          <MobileGroup label="Services" links={serviceLinks} onNavigate={() => setMobileOpen(false)} />
          <li>
            <Link
              to="/regulatory-updates"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg font-medium text-amber-400 animate-pulse [&.active]:animate-none [&.active]:text-white [&.active]:font-normal"
              activeProps={{ className: "!text-white !animate-none !font-normal" }}
            >
              Regulatory Updates
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          href={site.phoneHref}
          className="mt-8 flex items-center gap-2 font-medium text-s2"
        >
          <Phone className="size-5" /> {site.phone}
        </a>
      </div>
    </header>
  );
}