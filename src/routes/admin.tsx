import { createFileRoute } from "@tanstack/react-router";

import { SANITY_PROJECT_ID } from "@/config/site";

// Hidden route, intentionally not linked from any public navigation.
// Reserved for the future embedded Sanity Studio.
export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Paymax" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Paymax content administration." },
      { property: "og:title", content: "Admin — Paymax" },
      { property: "og:description", content: "Paymax content administration." },
    ],
  }),
  component: AdminPlaceholder,
});

function AdminPlaceholder() {
  const configured = SANITY_PROJECT_ID !== "YOUR_ID_HERE";

  return (
    <section className="stp-30 sbp-30">
      <div className="container max-w-[800px]">
        <h1 className="display-4">Content Studio</h1>
        <p className="pt-4 text-bodyText">
          This hidden page is reserved for the Sanity Studio that will manage Regulatory Updates. It
          is not linked from the site navigation.
        </p>
        <div className="mt-8 border border-strokeColor bg-softBg p-6 lg:p-8">
          <p className="font-medium">
            Studio status:{" "}
            <span className={configured ? "text-p1deep" : "text-s3"}>
              {configured ? "Project ID configured" : "Awaiting Sanity project ID"}
            </span>
          </p>
          <p className="pt-3 text-bodyText">
            Add your Sanity project ID to <code className="font-mono">SANITY_PROJECT_ID</code> in{" "}
            <code className="font-mono">src/config/site.ts</code>, then the Studio can be mounted
            here and <code className="font-mono">getRegulatoryUpdates()</code> in{" "}
            <code className="font-mono">src/data/regulatoryUpdates.ts</code> switched from the static
            entries to live CMS content.
          </p>
        </div>
      </div>
    </section>
  );
}
