import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Building2, CalendarDays, MapPin } from "lucide-react";

import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactSection } from "@/components/site/ContactSection";
import {
  formatUpdateDate,
  getRegulatoryUpdate,
  getRegulatoryUpdates,
} from "@/data/regulatoryUpdates";

export const Route = createFileRoute("/regulatory-updates/$slug")({
  loader: ({ params }) => {
    const update = getRegulatoryUpdate(params.slug);
    if (!update) throw notFound();
    return { update };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Update not found | Paymax" }, { name: "robots", content: "noindex" }],
      };
    }
    const { update } = loaderData;
    return {
      meta: [
        { title: `${update.title} | Paymax Regulatory Updates` },
        { name: "description", content: update.excerpt },
        { property: "og:title", content: update.title },
        { property: "og:description", content: update.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: UpdateDetail,
});

function UpdateDetail() {
  const { update } = Route.useLoaderData();
  const related = getRegulatoryUpdates()
    .filter((u) => u.slug !== update.slug && (u.act === update.act || u.state === update.state))
    .slice(0, 3);

  return (
    <>
      <Breadcrumb
        title={update.title}
        crumbs={[{ label: "Regulatory Updates", to: "/regulatory-updates" }, { label: update.act }]}
      />

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-8 lg:gap-12">
          <article className="col-span-12 lg:col-span-8">
            <Link
              to="/regulatory-updates"
              className="inline-flex items-center gap-2 rounded-full border border-strokeColor px-5 py-2 font-medium duration-300 hover:border-mainText hover:bg-softBg"
            >
              <ArrowLeft className="size-4" /> Back to Updates
            </Link>

            <div className="flex flex-wrap items-center gap-4 pt-8 text-sm text-bodyText">
              <span className="rounded-full bg-softBg px-3 py-1 font-medium text-s1">
                {update.act}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="size-4" /> {formatUpdateDate(update.date)}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="size-4" /> {update.state}
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="size-4" /> {update.authority}
              </span>
            </div>

            <h1 className="display-4 pt-5">{update.title}</h1>
            <p className="pt-4 text-lg text-bodyText">{update.excerpt}</p>

            {update.effectiveDate && (
              <p className="mt-6 border-l-4 border-p1 bg-softBg px-5 py-3 font-medium">
                Effective from {formatUpdateDate(update.effectiveDate)}
              </p>
            )}

            <div className="flex flex-col gap-5 pt-8 text-bodyText">
              {update.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border border-strokeColor bg-softBg p-6 lg:p-8">
              <h2 className="heading-4 pb-4">Key takeaways</h2>
              <ul className="flex flex-col gap-3">
                {update.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-p1" />
                    <span className="text-bodyText">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {update.actionRequired && (
              <div className="mt-6 border border-mainText bg-s2/40 p-6 lg:p-8">
                <h2 className="heading-4 pb-3">Action required</h2>
                <p className="text-bodyText">{update.actionRequired}</p>
              </div>
            )}

            <div className="pt-10">
              <Link
                to="/regulatory-updates"
                className="inline-flex items-center gap-2 rounded-full bg-s1 px-6 py-3 font-medium text-white duration-300 hover:bg-p1deep"
              >
                <ArrowLeft className="size-4" /> Back to Updates
              </Link>
            </div>
          </article>

          <aside className="col-span-12 lg:col-span-4">
            <div className="border border-strokeColor bg-white p-6 shadow2">
              <h2 className="heading-4 pb-5">Related updates</h2>
              <ul className="flex flex-col gap-5">
                {related.map((u) => (
                  <li key={u.slug} className="border-b border-strokeColor pb-5 last:border-0 last:pb-0">
                    <Link
                      to="/regulatory-updates/$slug"
                      params={{ slug: u.slug }}
                      className="group block"
                    >
                      <p className="text-sm text-bodyText">{formatUpdateDate(u.date)}</p>
                      <p className="pt-1 font-medium duration-300 group-hover:text-s1">{u.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/regulatory-updates"
                className="group mt-6 flex items-center gap-2 font-medium text-s1"
              >
                View all updates
                <ArrowUpRight className="size-4 duration-500 group-hover:rotate-45" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <ContactSection subject="Enquiry from a Paymax regulatory update" />
    </>
  );
}
