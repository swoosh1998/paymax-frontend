import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Paymax" },
      {
        name: "description",
        content:
          "Read Paymax's Privacy Policy to learn how we collect, use, secure and retain your data while providing HR & payroll processing services.",
      },
      { property: "og:title", content: "Privacy Policy | Paymax" },
      {
        property: "og:description",
        content:
          "How Paymax collects, uses, secures and retains your data while delivering HR & payroll processing services.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  { id: "information-we-collect", title: "Information we collect" },
  { id: "use-of-information", title: "Use of information" },
  { id: "data-security", title: "Data security" },
  { id: "data-sharing-and-third-parties", title: "Data sharing and third parties" },
  { id: "data-retention", title: "Data retention" },
  { id: "cookies-and-tracking-technologies", title: "Cookies and tracking technologies" },
  { id: "childrens-privacy", title: "Children's privacy" },
  { id: "changes-to-the-privacy-policy", title: "Changes to the privacy policy" },
  { id: "contact-information", title: "Contact information" },
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

function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />

      <section className="stp-30 sbp-30 container">
        <div className="flex flex-col items-start justify-start pb-10">
          <p className="rounded-full bg-p1 px-5 py-3 text-white">Privacy Policy</p>
          <h2 className="display-4 py-6">Privacy Policy</h2>
          <p className="max-w-3xl text-bodyText">
            We collect necessary information to provide our Accounting & Payroll Processing
            Services, including personal details (e.g., names, addresses), contact information,
            and financial data required for payroll and accounting purpose
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionNav />
          </div>

          <div className="col-span-12 flex flex-col gap-12 lg:col-span-9">
            <div id="information-we-collect">
              <h3 className="heading-1 pb-6">Information we collect</h3>
              <p className="text-bodyText">
                In the course of providing HR & Payroll Processing Services, we collect essential
                information to ensure accurate and efficient service delivery. This may include
                personal details such as names, addresses, and contact information, as well as
                financial data necessary for payroll and accounting purposes. We prioritize the
                security and confidentiality of this information, employing industry-standard
                measures to safeguard it. Rest assured, our data collection is guided by a
                commitment to transparency,
              </p>
              <BulletList
                items={[
                  "HR & Payroll Processing Services, we collect essential information",
                  "commitment to transparency, compliance with relevant regulations",
                  "We prioritize the security and confidentiality of this information,",
                ]}
              />
            </div>

            <div id="use-of-information">
              <h3 className="heading-2 pb-6">Use of information</h3>
              <p className="text-bodyText">
                The information collected during the provision of Accounting & Payroll Processing
                Services is used solely for the purpose of delivering accurate and efficient
                financial services. We employ this data to facilitate payroll processing,
                accounting tasks, and related functions essential to your business operations.
                Your information is handled with the utmost care, ensuring confidentiality and
                compliance with relevant data protection regulations. We do not use your data for
                purposes beyond the scope of our services, and it is not shared with unauthorized
                third parties. Our commitment is to utilize your information responsibly,
                enhancing the quality and precision of the financial services we provide. For
                further details, please consult our comprehensive Privacy Policy.
              </p>
            </div>

            <div id="data-security">
              <h3 className="heading-3 pb-6">Data security</h3>
              <p className="text-bodyText">
                At Paymax, we prioritize the security of your data. Rigorous measures are in
                place to safeguard the confidentiality and integrity of the information entrusted
                to us. This includes robust encryption protocols, access controls, and regular
                security audits. We are committed to protecting your data from unauthorized
                access, disclosure, alteration, or destruction. Our dedicated security team
                ensures compliance with industry best practices and relevant data protection
                regulations.
              </p>
            </div>

            <div id="data-sharing-and-third-parties">
              <h3 className="heading-3 pb-6">Data sharing and third parties</h3>
              <p className="text-bodyText">
                We understand the importance of your privacy. Your data, collected for HR &
                Payroll Processing Services, is treated with utmost confidentiality. We do not
                share your information with third parties unless essential for service delivery.
                In such cases, strict contractual agreements ensure that third parties adhere to
                our privacy standards. Rest assured, your data is never sold, traded, or used for
                unrelated purposes. Our commitment is to transparency and responsible data
                handling. For more details on data sharing practices and the involvement of third
                parties, please review our comprehensive Privacy Policy. Your trust is paramount,
                and we take every measure to protect the security and confidentiality of your
                information
              </p>
            </div>

            <div id="data-retention">
              <h3 className="heading-3 pb-6">Data retention</h3>
              <p className="text-bodyText">
                At Paymax, we value your privacy and adhere to responsible data practices. Your
                data, collected for Accounting & Payroll Processing Services, is retained only
                for as long as necessary to fulfill the purposes outlined in our services. We
                follow clear retention policies, considering legal requirements and operational
                needs. Once the retention period expires, your data is securely and permanently
                deleted.
              </p>
              <BulletList
                items={[
                  "We believe in minimizing data storage while ensuring compliance with regulations",
                  "For specific details on our data retention practices",
                  "please refer to our comprehensive Privacy Policy. Your trust is paramount",
                ]}
              />
            </div>

            <div id="cookies-and-tracking-technologies">
              <h3 className="heading-3 pb-6">Cookies and tracking technologies</h3>
              <p className="text-bodyText">
                At Paymax, we utilize cookies and tracking technologies to enhance your experience
                with our Accounting & Payroll Processing Services. These technologies help us
                improve service functionality, personalize content, and analyze usage patterns.
                Cookies may be used for session management, and tracking technologies enable us to
                understand user preferences. Rest assured, we prioritize your privacy, and you
                have the option to manage cookie preferences. Our use of these technologies
                aligns with industry standards and regulations
              </p>
            </div>

            <div id="childrens-privacy">
              <h3 className="heading-3 pb-6">Children's privacy</h3>
              <p className="text-bodyText">
                At Paymax, we are committed to protecting the privacy of all users, including
                children. Our HR & Payroll Processing Services are not intended for individuals
                under the age of 18. We do not knowingly collect or process personal information
                from children. If you believe that we have inadvertently collected information
                from a child, please contact us immediately, and we will take prompt steps to
                delete such data.
              </p>
            </div>

            <div id="changes-to-the-privacy-policy">
              <h3 className="heading-3 pb-6">Changes to the privacy policy</h3>
              <p className="text-bodyText">
                At Paymax, we are committed to maintaining transparency in our data practices. As
                we continually strive to enhance our Accounting & Payroll Processing Services,
                updates to our Privacy Policy may occur. Any changes made will be communicated to
                you through prominent notifications on our website or other appropriate channels.
                We encourage you to periodically review our Privacy Policy for the latest
                information on how we handle your data. Rest assured, our commitment to your
                privacy remains steadfast, and changes are made to ensure compliance with
                evolving regulations and to enhance your overall experience. If you have any
                questions about changes to the policy, please contact us for clarification
              </p>
            </div>

            <div id="contact-information">
              <h3 className="heading-3 pb-6">Contact information</h3>
              <p className="text-bodyText">
                If you have any questions or concerns regarding our Privacy Policy or the
                handling of your personal information, please contact us at{" "}
                <span className="text-p1">alert@paymaxonline.in</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
