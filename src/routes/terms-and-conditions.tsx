import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Paymax" },
      {
        name: "description",
        content:
          "Review Paymax's Terms & Conditions covering our HR & payroll processing services, client responsibilities, payment terms, and dispute resolution.",
      },
      { property: "og:title", content: "Terms & Conditions | Paymax" },
      {
        property: "og:description",
        content:
          "The mutual agreement between Paymax and our clients for HR & payroll processing services.",
      },
    ],
  }),
  component: TermsAndConditions,
});

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "service-description", title: "Service Description" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "service-delivery-and-timelines", title: "Service Delivery and Timelines" },
  { id: "data-accuracy", title: "Data Accuracy" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "termination-of-services", title: "Termination of Services" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4 pt-6">
      {items.map((item) => (
        <li key={item} className="flex items-start justify-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-p1" />
          <span className="text-bodyText">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionNav() {
  return (
    <nav className="sticky top-24 hidden flex-col gap-1 border-l border-strokeColor pl-6 lg:flex">
      <p className="pb-3 text-sm font-semibold tracking-wide text-mainText uppercase">
        On this page
      </p>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="rounded-md py-1.5 text-sm text-bodyText duration-300 hover:text-p1deep"
        >
          {s.title}
        </a>
      ))}
    </nav>
  );
}

function TermsAndConditions() {
  return (
    <>
      <Breadcrumb title="Terms & Conditions" crumbs={[{ label: "Terms & Conditions" }]} />

      <section className="stp-30 sbp-30 container">
        <div className="flex flex-col items-start justify-start pb-10">
          <p className="rounded-full bg-p1 px-5 py-3 text-white">Terms & Conditions</p>
          <h2 className="display-4 py-6">Terms & Conditions</h2>
          <p className="max-w-3xl text-bodyText">
            Creating a robust and clear Terms & Conditions page for your HR & Payroll Processing
            Services is essential for setting expectations and outlining the contractual
            framework. Below are key elements you may want to include
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionNav />
          </div>

          <div className="col-span-12 flex flex-col gap-12 lg:col-span-9">
            <div id="introduction">
              <h3 className="heading-1 pb-6">Introduction</h3>
              <p className="text-bodyText">
                Welcome to Paymax, where we are dedicated to providing exceptional HR & Payroll
                Processing Services. These Terms & Conditions outline the mutual agreement between
                Paymax and our valued clients. By accessing and using our services, you
                acknowledge and agree to comply with the terms set forth herein.
              </p>
              <p className="pt-6 text-bodyText">
                By accessing and using our services, you acknowledge and agree to comply with the
                terms set forth herein. These terms govern the relationship between you and
                Paymax and outline the rights, responsibilities, and obligations of both parties.
                We encourage you to read these Terms & Conditions carefully before engaging with
                our services. If you have any questions or concerns, please contact us for
                clarification. Your use of our services indicates your acceptance of these terms.
                Thank you for choosing Paymax.
              </p>
            </div>

            <div id="service-description">
              <h3 className="heading-2 pb-6">Service Description</h3>
              <p className="text-bodyText">
                Paymax is pleased to offer comprehensive Accounting & Payroll Processing Services
                tailored to meet the financial needs of businesses. Our services encompass a
                range of professional accounting and payroll solutions designed to streamline and
                optimize your financial processes.
              </p>
              <BulletList
                items={[
                  "Payroll Processing",
                  "HR & Labour Compliances",
                  "HR Operations",
                  "Attendance and Leave Management System",
                  "Business Consulting Services",
                  "Expense Management",
                ]}
              />
            </div>

            <div id="client-responsibilities">
              <h3 className="heading-3 pb-6">Client Responsibilities</h3>
              <p className="text-bodyText">
                As a valued client of Paymax, your cooperation is essential for the success of our
                HR & Payroll Processing Services. Please ensure the timely and accurate provision
                of all necessary financial information. Collaborate with us in addressing queries
                promptly to facilitate efficient service delivery. Adherence to agreed-upon
                timelines and communication of any significant changes or updates is crucial.
                Your commitment to providing accurate data and promptly responding to our requests
                enables us to deliver the high-quality services you deserve. Thank you for
                entrusting Paymax with your financial needs.
              </p>
            </div>

            <div id="payment-terms">
              <h3 className="heading-3 pb-6">Payment Terms</h3>
              <p className="text-bodyText">
                At Paymax, we strive to provide transparent and fair payment terms for our HR &
                Payroll Processing Services. Invoices will be issued in accordance with the
                agreed-upon billing cycle. Payment is due [insert number of days] days from the
                invoice date. Late payments may incur [insert percentage]% interest per month. We
                accept payments through [list accepted payment methods]. Any concerns regarding
                invoices or payment terms can be addressed by contacting our billing department at
                [billing email/phone]. Your prompt and timely payments are appreciated, ensuring
                the continued smooth provision of our services
              </p>
            </div>

            <div id="service-delivery-and-timelines">
              <h3 className="heading-3 pb-6">Service Delivery and Timelines</h3>
              <p className="text-bodyText">
                At Paymax, we are committed to delivering timely and efficient HR & Payroll
                Processing Services. Our aim is to ensure that all tasks are completed within
                agreed-upon timelines. The specific delivery schedules for various services will
                be communicated upon engagement. We strive to meet deadlines with precision,
                providing you with reliable and prompt financial solutions. Any unforeseen delays
                will be promptly communicated, and our team is dedicated to maintaining
                transparency throughout the service delivery process. Your satisfaction is our
                priority, and we appreciate your understanding and collaboration in achieving
                seamless service delivery.
              </p>
            </div>

            <div id="data-accuracy">
              <h3 className="heading-3 pb-6">Data Accuracy</h3>
              <p className="text-bodyText">
                Data accuracy is paramount in our Accounting & Payroll Processing Services at
                Paymax. We rely on the precise and timely provision of your financial information
                to ensure the integrity of our services. It is essential that you verify the
                accuracy of the data submitted and promptly communicate any corrections or
                updates. Our commitment to delivering accurate and reliable results is reinforced
                by your collaboration in maintaining the precision of the information shared. Your
                diligence in upholding data accuracy facilitates the smooth functioning of our
                financial processes and contributes to the success of our services
              </p>
            </div>

            <div id="confidentiality">
              <h3 className="heading-3 pb-6">Confidentiality</h3>
              <p className="text-bodyText">
                At Paymax, we prioritize the confidentiality of your sensitive information. Our
                commitment to safeguarding your data is unwavering. During the provision of our
                Accounting & Payroll Processing Services, all client-related information is
                treated with the utmost confidentiality. We implement robust security measures,
                access controls, and encryption protocols to protect your data from unauthorized
                access or disclosure. Rest assured, your financial and personal information is
                handled with the highest level of discretion and in compliance with data
                protection regulations. For further details on our confidentiality practices,
                please refer to our comprehensive Privacy Policy.
              </p>
            </div>

            <div id="intellectual-property">
              <h3 className="heading-3 pb-6">Intellectual Property</h3>
              <p className="text-bodyText">
                At Paymax, we are committed to maintaining transparency in our data practices. As
                we continually strive to enhance our Accounting & Payroll Processing Services,
                updates to our Privacy Policy may occur. Any changes made will be communicated to
                you through prominent notifications on our website or other appropriate channels.
              </p>
            </div>

            <div id="termination-of-services">
              <h3 className="heading-3 pb-6">Termination of Services</h3>
              <p className="text-bodyText">
                Either party, Paymax or the client, reserves the right to terminate HR & Payroll
                Processing Services under certain conditions. Termination may occur for reasons
                such as breach of contract, non-payment, or mutual agreement. A notice period and
                specific termination procedures are outlined in our Terms & Conditions. Upon
                termination, any outstanding fees become due, and relevant data and documents are
                returned promptly. We value transparent and respectful communication throughout
                our engagement, and termination
              </p>

              <ul className="flex flex-col gap-6 pt-6">
                <li>
                  <p className="pb-3 font-medium text-mainText">1. Ownership</p>
                  <p className="relative border-l-2 border-strokeColor pl-4 text-bodyText">
                    Any intellectual property, including but not limited to software, tools, and
                    proprietary methodologies developed by Paymax during the provision of
                    services, shall remain the exclusive property of Paymax.
                  </p>
                </li>
                <li>
                  <p className="pb-3 font-medium text-mainText">2. License</p>
                  <p className="relative border-l-2 border-strokeColor pl-4 text-bodyText">
                    Clients are granted a non-exclusive, non-transferable license to use any
                    deliverables or intellectual property provided by Paymax solely for the
                    purpose of utilizing the Accounting & Payroll Processing Services.
                  </p>
                </li>
                <li>
                  <p className="pb-3 font-medium text-mainText">3. Confidentiality</p>
                  <p className="relative border-l-2 border-strokeColor pl-4 text-bodyText">
                    Clients agree to treat all intellectual property and proprietary information
                    as confidential, refraining from disclosing or reproducing such materials
                    without explicit written consent from Paymax.
                  </p>
                </li>
              </ul>
            </div>

            <div id="dispute-resolution">
              <h3 className="heading-3 pb-6">Dispute Resolution</h3>
              <p className="text-bodyText">
                Dispute Resolution for HR & Payroll Processing Services: In the event of any
                dispute arising from the use of Paymax's HR & Payroll Processing Services, both
                parties agree to engage in good-faith negotiations to reach a resolution. If a
                resolution cannot be achieved through negotiation, the parties agree to pursue
                mediation or arbitration in accordance with [Applicable Jurisdiction] laws. Any
                legal proceedings shall take place in the courts of [Applicable Jurisdiction].
                Both Paymax and the client commit to cooperating in the resolution process to
                ensure a fair and timely outcome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
