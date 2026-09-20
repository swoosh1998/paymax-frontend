import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { img } from "@/assets/images";

type Crumb = { label: string; to?: LinkProps["to"] };

export function Breadcrumb({
  title,
  crumbs = [],
  image = img.breadcrumb_img_1,
}: {
  title: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-softBg">
      <img
        src={image}
        alt=""
        className="absolute top-0 right-0 h-full object-cover opacity-30 max-lg:hidden"
      />
      <div className="container relative z-10 stp-15 sbp-15 py-10">
        <h1 className="display-4 text-s1">{title}</h1>
        <div className="flex flex-wrap items-center gap-2 pt-4 text-bodyText">
          <Link to="/" className="duration-300 hover:text-p1deep">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="size-4" />
              {c.to ? (
                <Link to={c.to} className="duration-300 hover:text-p1deep">
                  {c.label}
                </Link>
              ) : (
                <span className="text-s1">{c.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
