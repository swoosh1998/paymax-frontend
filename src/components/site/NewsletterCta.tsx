import { useState } from "react";

import { img } from "@/assets/images";
import { submitToWeb3Forms, type SubmitState } from "@/lib/web3forms";

export function NewsletterCta() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");
    setState("sending");
    const result = await submitToWeb3Forms({
      subject: "New newsletter subscription",
      from_name: "Paymax Website",
      email,
      message: `Newsletter subscription request from ${email}`,
    });
    setState(result.ok ? "success" : "error");
    setMessage(result.ok ? "You're subscribed. Thank you!" : result.message);
    if (result.ok) form.reset();
  }

  return (
    <section className="relative overflow-hidden after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1/2 after:bg-mainText">
      <div className="container relative z-10 bg-p1 px-4 py-12 sm:px-10 sm:py-20 md:px-20 lg:px-40">
        <img
          src={img.sliceIcon}
          alt=""
          className="absolute -top-4 right-0 h-[60px] -rotate-90 sm:-top-6 sm:h-[80px] lg:top-0 lg:h-[120px]"
        />
        <p className="display-3 text-center text-white">
          Make Paymax Part Of Your Work And Get Regulatory Updates Daily
        </p>
        <form onSubmit={onSubmit} className="relative pt-6 sm:pt-10">
          <div className="flex items-center justify-center gap-3 max-[500px]:flex-col">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="border border-mainText bg-white px-4 py-3 outline-none max-[500px]:w-full md:px-8 lg:w-2/4 lg:py-4"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="border border-mainText bg-s2 px-4 py-3 font-medium duration-300 hover:bg-s3 disabled:opacity-60 md:px-8 lg:py-4"
            >
              {state === "sending" ? "Subscribing…" : "Subscribe Now"}
            </button>
          </div>
          {message && (
            <p
              className={`pt-4 text-center ${state === "success" ? "text-white" : "text-mainText"}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
