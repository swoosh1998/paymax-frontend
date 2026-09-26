import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import { formatUpdateDate, RegulatoryUpdate } from "@/data/regulatoryUpdates";
import { SectionHeading } from "./SectionHeading";

// Ab yeh async nahi hai, seedha props accept kar raha hai
export function RegulatoryPreview({ updates }: { updates: RegulatoryUpdate[] }) {
  return (
    <section className="stp-30 sbp-30 bg-softBg">
      <div className="container">
        <div className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
          <SectionHeading
            align="left"
            pill="Regulatory Updates"
            title="Stay ahead of every compliance deadline"
            description="Curated statutory updates on EPFO, ESIC, the Labour Codes, minimum wages and state notifications — summarised by our compliance desk."
          />
          <Link
            to="/regulatory-updates"
            className="group flex shrink-0 items-center gap-3 rounded-full border border-mainText bg-s2 px-6 py-3 font-medium duration-300 hover:bg-s3"
          >
            View All Updates
            <ArrowUpRight className="size-5 duration-500 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="stp-15 grid grid-cols-12 gap-6">
          {updates.map((u) => (
            <article
              key={u.slug}
              className="col-span-12 flex flex-col border border-strokeColor bg-white p-6 duration-500 hover:border-mainText hover:shadow2 md:col-span-6 lg:col-span-4 xl:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-bodyText">
                <span className="rounded-full bg-softBg px-3 py-1 font-medium text-s1">
                  {u.act}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="size-4" />
                  {formatUpdateDate(u.date)}
                </span>
              </div>
              <h3 className="heading-4 pt-4 pb-3">{u.title}</h3>
              <p className="pb-5 text-bodyText">{u.excerpt}</p>
              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="flex items-center gap-1 text-sm text-bodyText">
                  <MapPin className="size-4" />
                  {u.state}
                </span>
                <Link
                  to="/regulatory-updates/$slug"
                  params={{ slug: u.slug }}
                  className="flex items-center gap-2 font-medium text-s1 duration-300 hover:text-p1deep"
                >
                  Read More
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}