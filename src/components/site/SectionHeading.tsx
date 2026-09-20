export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex rounded-full bg-p1 px-5 py-2 text-white sm:py-3">{children}</p>
  );
}

export function SectionHeading({
  pill,
  title,
  description,
  align = "center",
}: {
  pill: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex max-w-[700px] flex-col ${isCenter ? "mx-auto items-center text-center" : "items-start"}`}
    >
      <Pill>{pill}</Pill>
      <h2 className="display-4 pt-4 pb-4 lg:pb-6">{title}</h2>
      {description && <p className="text-bodyText">{description}</p>}
    </div>
  );
}
