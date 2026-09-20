import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Breadcrumb } from "@/components/site/Breadcrumb";
import {
  formatUpdateDate,
  getRegulatoryUpdates,
  getUpdateActs,
  getUpdateMonths,
  getUpdateStates,
} from "@/data/regulatoryUpdates";

export const Route = createFileRoute("/regulatory-updates/")({
  head: () => ({
    meta: [
      { title: "Regulatory Updates — EPFO, ESIC & Labour Law | Paymax" },
      {
        name: "description",
        content:
          "Searchable archive of Indian HR and payroll compliance updates — EPFO and ESIC circulars, the Labour Codes, minimum wage revisions and state notifications.",
      },
      { property: "og:title", content: "Regulatory Updates | Paymax" },
      {
        property: "og:description",
        content:
          "Filter compliance updates by date, state and Act. Summarised by the Paymax compliance desk.",
      },
    ],
  }),
  component: RegulatoryUpdatesPage,
});

function RegulatoryUpdatesPage() {
  const all = useMemo(() => getRegulatoryUpdates(), []);
  const states = useMemo(() => getUpdateStates(), []);
  const acts = useMemo(() => getUpdateActs(), []);
  const months = useMemo(() => getUpdateMonths(), []);

  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("");
  const [state, setState] = useState("");
  const [act, setAct] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((u) => {
      if (month && !u.date.startsWith(month)) return false;
      if (state && u.state !== state) return false;
      if (act && u.act !== act) return false;
      if (
        q &&
        !(
          u.title.toLowerCase().includes(q) ||
          u.excerpt.toLowerCase().includes(q) ||
          u.act.toLowerCase().includes(q) ||
          u.authority.toLowerCase().includes(q) ||
          u.state.toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });
  }, [all, query, month, state, act]);

  const hasFilters = Boolean(query || month || state || act);
  const selectClass =
    "w-full appearance-none rounded-lg border border-strokeColor bg-white px-4 py-3 outline-none duration-300 focus:border-p1";

  return (
    <>
      <Breadcrumb title="Regulatory Updates" crumbs={[{ label: "Regulatory Updates" }]} />

      <section className="stp-30 sbp-30">
        <div className="container">
          <div className="border border-strokeColor bg-softBg p-6 lg:p-8">
            <div className="relative">
              <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-bodyText" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search updates by keyword, Act or authority"
                className="w-full rounded-lg border border-strokeColor bg-white py-3 pr-4 pl-12 outline-none duration-300 focus:border-p1"
                aria-label="Search regulatory updates"
              />
            </div>
            <div className="grid grid-cols-12 gap-4 pt-4">
              <div className="col-span-12 md:col-span-4">
                <label className="mb-2 block text-sm font-medium" htmlFor="filter-date">
                  Dates
                </label>
                <select
                  id="filter-date"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className={selectClass}
                >
                  <option value="">All dates</option>
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-12 md:col-span-4">
                <label className="mb-2 block text-sm font-medium" htmlFor="filter-state">
                  States
                </label>
                <select
                  id="filter-state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={selectClass}
                >
                  <option value="">All states</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-12 md:col-span-4">
                <label className="mb-2 block text-sm font-medium" htmlFor="filter-act">
                  Compliances / Acts
                </label>
                <select
                  id="filter-act"
                  value={act}
                  onChange={(e) => setAct(e.target.value)}
                  className={selectClass}
                >
                  <option value="">All compliances</option>
                  {acts.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5">
              <p className="text-bodyText">
                Showing <span className="font-semibold text-mainText">{filtered.length}</span> of{" "}
                {all.length} updates
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setMonth("");
                    setState("");
                    setAct("");
                  }}
                  className="flex items-center gap-2 rounded-full border border-strokeColor bg-white px-4 py-2 text-sm font-medium duration-300 hover:border-mainText"
                >
                  <X className="size-4" /> Clear filters
                </button>
              )}
            </div>
          </div>

          <div className="stp-15 grid grid-cols-12 gap-6">
            {filtered.map((u) => (
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
                <h2 className="heading-4 pt-4 pb-3">{u.title}</h2>
                <p className="pb-4 text-bodyText">{u.excerpt}</p>
                <p className="pb-5 text-sm text-bodyText">Issued by {u.authority}</p>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-strokeColor pt-5">
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

            {filtered.length === 0 && (
              <div className="col-span-12 border border-strokeColor bg-softBg p-10 text-center">
                <p className="heading-4">No updates match your filters</p>
                <p className="pt-2 text-bodyText">
                  Try a different keyword, or clear the filters to see every update.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
