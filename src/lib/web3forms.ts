import { WEB3FORMS_ACCESS_KEY } from "@/config/site";

export type SubmitState = "idle" | "sending" | "success" | "error";

export const isFormsConfigured = WEB3FORMS_ACCESS_KEY !== "YOUR_KEY_HERE";

/** POSTs a plain object to Web3Forms. Returns true when the submission is accepted. */
export async function submitToWeb3Forms(
  fields: Record<string, string>,
): Promise<{ ok: boolean; message: string }> {
  if (!isFormsConfigured) {
    return {
      ok: false,
      message:
        "This form is not connected yet. Add your Web3Forms access key in src/config/site.ts.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = (await response.json()) as { success?: boolean; message?: string };
    if (response.ok && data.success) {
      return { ok: true, message: "Thank you! Your message has been sent." };
    }
    return { ok: false, message: data.message ?? "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}
