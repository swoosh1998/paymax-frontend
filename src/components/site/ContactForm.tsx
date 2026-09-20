import { useState } from "react";

import { submitToWeb3Forms, type SubmitState } from "@/lib/web3forms";

export function ContactForm({ subject = "New enquiry from paymaxonline.in" }: { subject?: string }) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("sending");
    const result = await submitToWeb3Forms({
      subject,
      from_name: "Paymax Website",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setState(result.ok ? "success" : "error");
    setMessage(result.message);
    if (result.ok) form.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-strokeColor bg-white px-4 py-3 text-mainText outline-none duration-300 placeholder:text-bodyText/60 focus:border-p1";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4 lg:gap-5">
      <div className="col-span-2 sm:col-span-1">
        <label className="mb-2 block text-sm font-medium" htmlFor="cf-name">
          Your Name*
        </label>
        <input id="cf-name" name="name" required placeholder="Full name" className={inputClass} />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="mb-2 block text-sm font-medium" htmlFor="cf-email">
          Email Address*
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="mb-2 block text-sm font-medium" htmlFor="cf-phone">
          Phone Number
        </label>
        <input id="cf-phone" name="phone" placeholder="+91" className={inputClass} />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="mb-2 block text-sm font-medium" htmlFor="cf-company">
          Company
        </label>
        <input id="cf-company" name="company" placeholder="Company name" className={inputClass} />
      </div>
      <div className="col-span-2">
        <label className="mb-2 block text-sm font-medium" htmlFor="cf-message">
          How can we help?*
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your payroll, HR or compliance requirement"
          className={inputClass}
        />
      </div>
      <div className="col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-s1 px-8 py-3 font-medium text-white duration-300 hover:bg-p1deep disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send Message"}
        </button>
        {message && (
          <p className={state === "success" ? "text-p1deep" : "text-destructive"}>{message}</p>
        )}
      </div>
    </form>
  );
}
