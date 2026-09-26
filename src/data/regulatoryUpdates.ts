/**
 * Regulatory Updates — data layer
 * ---------------------------------------------------------------------------
 * This file is the SINGLE SWAP POINT for a future Sanity CMS integration.
 * When Sanity is wired up, replace the static `regulatoryUpdates` array and
 * the bodies of the exported functions below with fetches against the
 * Sanity dataset (see SANITY_PROJECT_ID in src/config/site.ts), while
 * keeping the exported function signatures identical so consuming
 * components require no changes.
 * ---------------------------------------------------------------------------
 */

export type RegulatoryUpdate = {
  slug: string; // kebab-case, unique
  title: string;
  excerpt: string; // 1-2 sentences
  date: string; // ISO "YYYY-MM-DD"
  state: string; // e.g. "All India", "Maharashtra", "Karnataka", "Delhi", "Tamil Nadu", "Haryana", "Gujarat", "West Bengal"
  act: string; // e.g. "EPF & MP Act", "ESI Act", "Labour Codes", "Minimum Wages Act", "Shops & Establishments Act", "Payment of Bonus Act", "Professional Tax", "Maternity Benefit Act"
  authority: string; // e.g. "EPFO", "ESIC", "Ministry of Labour & Employment", state labour dept
  effectiveDate?: string; // ISO
  body: string[]; // 5-8 substantial paragraphs
  keyPoints: string[]; // 3-5 bullet takeaways
  actionRequired?: string; // what employers must do
  pdfUrl?: string;
};

export const regulatoryUpdates: RegulatoryUpdate[] = [
  {
    slug: "labour-codes-national-rollout-2026",
    title: "Centre Notifies Phased National Rollout of the Four Labour Codes",
    excerpt:
      "The Ministry of Labour & Employment has notified an implementation timeline for the Code on Wages, Industrial Relations Code, Social Security Code, and OSH Code across all states from 1 January 2026.",
    date: "2026-01-08",
    state: "All India",
    act: "Labour Codes",
    authority: "Ministry of Labour & Employment",
    effectiveDate: "2026-01-01",
    body: [
      "The Ministry of Labour & Employment has issued an implementation notification (illustrative reference: S.O. 112(E)) confirming that the four consolidated Labour Codes — the Code on Wages 2019, the Industrial Relations Code 2020, the Code on Social Security 2020, and the Occupational Safety, Health and Working Conditions (OSH) Code 2020 — will be brought into force in a phased manner beginning 1 January 2026, subject to states finalising their respective draft rules.",
      "For payroll teams, the most consequential change is the codified definition of 'wages' under Section 2(y) of the Code on Wages, which caps allowances, retirals and other exclusions at 50% of total remuneration. Any component structured to reduce basic pay below this threshold will need to be reworked, as the balance will be deemed 'wages' for the purposes of PF, gratuity, and statutory bonus computation.",
      "Employers with cost-to-company structures that rely heavily on special allowances, LTA, or flexible benefit plans to optimise statutory contributions should expect a material increase in PF and gratuity liability once the wage definition takes effect, since basic-equivalent pay will rise as a proportion of CTC.",
      "The Industrial Relations Code raises the threshold for mandatory standing orders to establishments employing 300 or more workers (up from 100 under the erstwhile Industrial Employment (Standing Orders) Act), and introduces a fixed-term employment category with parity of benefits for fixed-term employees vis-à-vis permanent workers on a pro-rata basis.",
      "Under the Code on Social Security, the definition of 'employee' has been widened to explicitly capture gig and platform workers, with a proposed social security fund financed through a cess of 1-2% of annual turnover for aggregators, though the operative contribution mechanism is still pending final rules from several states.",
      "The OSH Code consolidates 13 erstwhile labour statutes and introduces a single licence-cum-registration regime for establishments, along with an enhanced appointment letter mandate — every employer must now issue a formal appointment letter to every employee, including those engaged through contractors, within a prescribed format.",
      "Given that implementation depends on concurrent notification of state-specific rules, employers should treat 1 January 2026 as an outer compliance horizon and begin remediation now: reviewing CTC structures, appointment letter templates, standing orders applicability, and contractor engagement models well ahead of the effective date in each state where they operate.",
    ],
    keyPoints: [
      "Wage definition under the Code on Wages caps non-wage allowances at 50% of CTC, raising PF/gratuity exposure.",
      "Standing orders threshold moves to 300+ employees under the Industrial Relations Code.",
      "Gig and platform workers formally brought within the social security net.",
      "Mandatory appointment letters extended to contract labour under the OSH Code.",
      "Actual go-live depends on each state notifying its own rules; track state gazettes closely.",
    ],
    actionRequired:
      "Audit CTC structures against the new 50% wage-definition threshold and re-model PF, gratuity and bonus impact before the codes take effect in your operating states.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", 
  },
  {
    slug: "epfo-higher-pension-processing-update",
    title: "EPFO Issues Fresh Guidance on Processing of Higher Pension Applications",
    excerpt:
      "EPFO has released a further clarificatory circular streamlining validation of joint options for higher pension under EPS, including a revised timeline for employer verification.",
    date: "2025-12-19",
    state: "All India",
    act: "EPF & MP Act",
    authority: "EPFO",
    effectiveDate: "2026-01-15",
    body: [
      "The Employees' Provident Fund Organisation has issued a further round of clarificatory guidance (illustrative reference: Circular No. WSU/2025/Higher-Pension/09) on the processing of joint applications for higher pension under the Employees' Pension Scheme, following the Supreme Court's earlier ruling permitting eligible employees and pensioners to opt for pension on actual (higher) salary rather than the wage ceiling.",
      "Employers are required to complete verification of employee applications on the unified portal within 30 days of receipt of a system-generated request, failing which the application may be escalated to the Regional PF Commissioner for manual adjudication — a process that has historically resulted in significant delays and employer notices for arrears.",
      "A key operational point in this circular is the requirement for employers to reconcile historical PF contribution records, particularly for employees who exercised the erstwhile Para 26(6) option, since discrepancies between contribution history and the higher-pension application will trigger a deficiency memo requiring point-by-point employer response.",
      "Where higher pension is approved, employers must also account for the additional employer share redirected from the PF account to the pension fund for past periods, along with applicable interest, which can represent a material one-time payroll cost for organisations with a large base of long-tenured employees.",
      "EPFO has also standardised the format for the 'nil deviation certificate' that employers must upload confirming that wages reported to EPFO match wages reflected in payroll records for the relevant period — inconsistencies here are the single largest cause of application rejection reported by field offices.",
      "Given the volume of pending applications nationally, EPFO has indicated that employer response timelines will be strictly enforced going forward, with non-response being treated as deemed consent to the employee's stated wage figures, which can create downstream contribution disputes.",
      "HR and payroll teams should proactively identify employees likely to apply for higher pension, pre-reconcile wage records for at least the preceding 15 years where feasible, and designate a single point of contact for portal-based verification to avoid missed statutory timelines.",
    ],
    keyPoints: [
      "Employers must verify higher-pension applications within 30 days of the portal notification.",
      "Historical wage-PF reconciliation is central to avoiding deficiency memos.",
      "Approved applications may trigger material one-time arrears with interest for the employer.",
      "Non-response is treated as deemed consent to the employee's declared wages.",
      "Pre-emptive reconciliation of long-tenure employee records is strongly advised.",
    ],
    actionRequired:
      "Assign a dedicated PF compliance owner to track and respond to higher-pension verification requests within the 30-day window and reconcile historical wage records proactively.",
  },
  {
    slug: "esic-wage-ceiling-revision-2025",
    title: "ESIC Wage Ceiling for Coverage Proposed to Rise to ₹25,000 per Month",
    excerpt:
      "The ESI Corporation has forwarded a proposal to increase the wage ceiling for mandatory coverage from ₹21,000 to ₹25,000 per month, expanding the pool of covered employees significantly.",
    date: "2025-11-27",
    state: "All India",
    act: "ESI Act",
    authority: "ESIC",
    effectiveDate: "2026-04-01",
    body: [
      "The Employees' State Insurance Corporation has forwarded to the Ministry of Labour & Employment a proposal to revise the monthly wage ceiling for mandatory ESI coverage from the current ₹21,000 to ₹25,000 (₹25,000 raised further to ₹40,000 for persons with disability), the first such revision in over a decade.",
      "If notified as expected ahead of the new financial year, the revised ceiling would bring a substantial additional segment of the workforce — particularly junior and mid-level staff in manufacturing, retail, and services establishments — within the mandatory ambit of ESI, requiring employers to commence fresh registrations and contributions for employees crossing the current threshold but falling within the new one.",
      "Employers should note that the contribution rate itself remains unchanged at 4% of wages (3.25% employer, 0.75% employee), but the expanded coverage base will increase absolute employer contribution outlay, particularly for organisations with a large proportion of employees earning between ₹21,000 and ₹25,000 per month.",
      "Establishments that have historically excluded certain employee categories on the basis of the wage ceiling — such as trainees, apprentices engaged outside the Apprentices Act, and probationers — will need to reassess coverage obligations once the revised ceiling takes effect, as misclassification exposure increases with a wider covered band.",
      "The proposal also carries implications for dual-coverage employees who currently sit just above the ESI ceiling and are covered under private group health/GPA policies; employers will need to decide whether to continue such private cover in addition to statutory ESI once these employees fall within the mandatory band, to avoid a reduction in effective benefits.",
      "Payroll systems will require configuration changes to auto-flag employees crossing into the new wage band mid-contribution-period, since ESI applicability, once triggered, continues for the remainder of the contribution period (April-September or October-March) even if wages are later revised upward beyond the ceiling.",
      "Employers are advised to run a preliminary headcount and cost-impact assessment now, well ahead of the anticipated 1 April 2026 effective date, factoring in the additional 3.25% employer contribution on the newly covered wage band across all locations with ESI-notified areas.",
    ],
    keyPoints: [
      "Wage ceiling for ESI coverage proposed to rise from ₹21,000 to ₹25,000 per month.",
      "Contribution rate stays at 4% (3.25% employer / 0.75% employee).",
      "Trainees, apprentices and probationers need re-assessment under the wider band.",
      "Interplay with existing private health cover for near-threshold employees needs review.",
      "Anticipated effective date is 1 April 2026, pending formal notification.",
    ],
    actionRequired:
      "Run a headcount and cost-impact assessment for employees in the ₹21,000–₹25,000 band and prepare payroll systems to auto-detect newly covered employees ahead of the expected 1 April 2026 effective date.",
  },
  {
    slug: "maharashtra-minimum-wages-vda-revision-oct-2025",
    title: "Maharashtra Revises Variable Dearness Allowance for October 2025–March 2026 Period",
    excerpt:
      "The Maharashtra Labour Department has notified revised VDA rates linked to the Consumer Price Index, effective for the half-year period commencing 1 October 2025.",
    date: "2025-10-03",
    state: "Maharashtra",
    act: "Minimum Wages Act",
    authority: "Maharashtra Labour Department",
    effectiveDate: "2025-10-01",
    body: [
      "The Maharashtra Labour Department has notified the revised Variable Dearness Allowance (VDA) applicable for the half-yearly period from 1 October 2025 to 31 March 2026, computed with reference to movement in the Consumer Price Index for Industrial Workers (CPI-IW) for the state.",
      "Under the revised notification, minimum wages across scheduled employments in Zone I (Mumbai, Pune, Nagpur, Thane and other major municipal corporation areas) have moved upward by approximately ₹340–₹410 per month depending on the skill category, with corresponding but comparatively smaller increases in Zone II and Zone III areas.",
      "Employers should note that Maharashtra continues to apply a skill-based classification — unskilled, semi-skilled, skilled, and highly skilled — and that the revised VDA is added to the basic minimum rate to arrive at the total minimum wage payable; failure to update payroll masters for both basic and VDA components separately, rather than only the consolidated figure, is a common audit finding during labour department inspections.",
      "The notification also reiterates the requirement to display the revised minimum wage rates prominently at the workplace in the local language, and to maintain Form-I wage registers reflecting the revised rates from the effective date, with retrospective correction required for any wages already disbursed for October 2025 at the pre-revision rate.",
      "For establishments with a large contract labour workforce, the principal employer remains jointly responsible for ensuring that the contractor pays wages at not less than the revised minimum rate; principal employers should obtain updated wage compliance certificates from contractors for the October 2025 cycle onward.",
      "Non-compliance attracts penal consequences under Section 22 of the Minimum Wages Act (soon to be subsumed under the Code on Wages once notified in the state), including the potential for claims of up to ten times the amount of wages due, in addition to reputational and audit risk during statutory due-diligence exercises.",
      "Payroll teams should update wage masters immediately, process any shortfall for wages already paid at the earlier rate as an off-cycle correction, and communicate the revised structure to contract labour vendors operating in Maharashtra.",
    ],
    keyPoints: [
      "VDA revised upward for the October 2025–March 2026 half-year across all zones.",
      "Zone I areas see the largest increase, roughly ₹340–₹410 per month by skill category.",
      "Basic and VDA must be tracked as separate wage-master components.",
      "Principal employers must obtain updated compliance certificates from contractors.",
      "Retrospective correction is required for wages already paid at the pre-revision rate.",
    ],
    actionRequired:
      "Update Maharashtra wage masters with the revised VDA, process retrospective corrections for October payroll already disbursed, and obtain updated contractor wage certificates.",
  },
  {
    slug: "karnataka-shops-establishments-working-hours-2025",
    title: "Karnataka Amends Shops & Establishments Rules on Daily Working Hours and Night Shifts",
    excerpt:
      "Karnataka has notified amendments permitting extended daily working hours up to 10 hours with enhanced overtime safeguards, alongside expanded night-shift permissions for women employees.",
    date: "2025-09-15",
    state: "Karnataka",
    act: "Shops & Establishments Act",
    authority: "Karnataka Labour Department",
    effectiveDate: "2025-10-01",
    body: [
      "The Karnataka Labour Department has notified amendments to the Karnataka Shops and Commercial Establishments Rules permitting a maximum of 10 working hours per day (up from 9 hours), subject to a weekly cap of 48 hours and a spread-over not exceeding 12 hours, applicable primarily to IT/ITeS, BPM, and other notified commercial establishments.",
      "The amendment is conditional on payment of overtime at twice the ordinary rate of wages for hours worked beyond the standard daily/weekly limits, and establishments availing the extended-hours option must obtain and maintain records of employee consent, which should be retained as part of the statutory registers for inspection purposes.",
      "A significant related change permits women employees to be engaged in night shifts (7:00 pm to 6:00 am) across all classes of establishments, subject to conditions including provision of transportation, adequate lighting and security at the workplace and en route, a written consent from the employee, and constitution of an Internal Committee for safety oversight as mandated under the POSH framework.",
      "Employers seeking to operate extended shifts or night shifts for women must file an intimation with the jurisdictional Labour Inspector, and in several jurisdictions, obtain establishment-specific approval before implementation — self-certification alone does not suffice in the interim period pending full State Labour Code rules.",
      "The amendment also revises rules on weekly holidays and compensatory off — where an employee works on the notified weekly holiday, the establishment must grant a substituted holiday within the same month and pay wages for the worked day at the applicable overtime rate if the total hours for the week exceed 48.",
      "For establishments with hybrid or extended-hours retail and hospitality operations, this amendment offers welcome flexibility, but exposes employers to increased overtime cost if roster planning does not actively manage the weekly 48-hour ceiling — payroll and workforce management systems should be configured to flag approaching thresholds before they are breached.",
      "HR teams operating in Karnataka should update shift policies, employee consent documentation, and transportation/safety SOPs for women on night shift, and file the requisite intimations with the local labour office ahead of rostering any extended or night shift arrangement.",
    ],
    keyPoints: [
      "Daily working hours extended to 10 hours, subject to a 48-hour weekly cap and double-rate overtime.",
      "Night shifts for women permitted across establishment classes with safety and consent conditions.",
      "Written employee consent and Internal Committee oversight are mandatory safeguards.",
      "Intimation/approval must be filed with the jurisdictional Labour Inspector before implementation.",
      "Weekly 48-hour ceiling should be actively tracked to control overtime cost exposure.",
    ],
    actionRequired:
      "Update shift and consent policies, file the required labour department intimation, and configure rostering systems to track the 48-hour weekly ceiling before extending shift hours.",
  },
  {
    slug: "professional-tax-slab-revision-multiple-states-2025",
    title: "Multiple States Revise Professional Tax Slabs for FY 2025-26",
    excerpt:
      "West Bengal, Gujarat and Karnataka have each notified revised professional tax slabs effective this financial year, requiring payroll masters to be updated state-by-state.",
    date: "2025-08-11",
    state: "West Bengal",
    act: "Professional Tax",
    authority: "State Commercial Tax / Profession Tax Departments",
    effectiveDate: "2025-04-01",
    body: [
      "Professional Tax continues to be levied under state-specific legislation, and payroll teams operating across multiple states have had to contend with a cluster of slab revisions taking effect for FY 2025-26, notified with varying timelines by West Bengal, Gujarat, and Karnataka.",
      "West Bengal has revised its monthly salary slabs such that employees earning up to ₹10,000 remain exempt, those earning between ₹10,001 and ₹15,000 attract ₹110 per month, ₹15,001 to ₹25,000 attract ₹130 per month, ₹25,001 to ₹40,000 attract ₹150 per month, and above ₹40,000 attract the maximum ₹200 per month (with ₹300 recovered in February as per the statutory annual cap of ₹2,500).",
      "Gujarat has similarly revised its slabs, removing the erstwhile lower exemption threshold for salaries up to ₹12,000 and introducing a flat ₹200 per month levy for salaries above ₹12,000, aligning more closely with the national ceiling of ₹2,500 per annum under Article 276 of the Constitution.",
      "Karnataka's revision retains its structure of nil tax up to ₹24,999 per month and ₹200 per month thereafter, but has clarified applicability to employees on fixed-term and contract engagements drawing salary directly from the principal employer, closing a previously ambiguous area for gig and contract-heavy organisations.",
      "Employers with establishments across these states must register separately for Professional Tax Registration Certificate (PTRC) and, where applicable, Enrolment Certificate (PTEC) obligations for the employer entity itself, and file monthly or annual returns as prescribed by each state — return periodicity is not uniform and is a frequent source of penalty notices for multi-state employers.",
      "Since Professional Tax is deducted at source from employee salary and remitted by the employer, incorrect slab mapping in payroll software directly exposes the employer to both under-deduction recovery notices and employee-relations issues arising from retrospective correction of net pay.",
      "Payroll teams should update state-wise PT slab tables in the payroll system before the next processing cycle, cross-check with the applicable annual ₹2,500 cap under the relevant state Act, and issue a communication to employees in the affected states explaining any change in net take-home pay.",
    ],
    keyPoints: [
      "West Bengal, Gujarat and Karnataka have each revised PT slabs for FY 2025-26.",
      "The constitutional annual PT cap of ₹2,500 remains the benchmark across states.",
      "Gujarat removed its erstwhile lower exemption threshold below ₹12,000.",
      "Karnataka clarified PT applicability to fixed-term/contract employees.",
      "Multi-state employers must track differing return filing periodicities to avoid penalties.",
    ],
    actionRequired:
      "Update state-wise professional tax slab tables in payroll systems immediately and notify affected employees ahead of the next pay cycle.",
  },
  {
    slug: "gratuity-fixed-term-employees-clarification-2025",
    title: "Clarification Issued on Gratuity Eligibility for Fixed-Term Employees",
    excerpt:
      "The Ministry of Labour & Employment has clarified that fixed-term employees are entitled to gratuity on a pro-rata basis irrespective of completing five years of continuous service.",
    date: "2025-07-22",
    state: "All India",
    act: "Payment of Gratuity Act",
    authority: "Ministry of Labour & Employment",
    body: [
      "The Ministry of Labour & Employment has issued a clarificatory office memorandum addressing the treatment of gratuity for fixed-term employees, confirming that such employees are entitled to gratuity on a proportionate (pro-rata) basis, even where their tenure with the employer is less than the five-year continuous service threshold otherwise required under Section 4 of the Payment of Gratuity Act, 1972.",
      "This position flows from the definition of 'fixed-term employment' introduced through amendments to the Industrial Employment (Standing Orders) rules, which mandates parity of statutory benefits, including gratuity, between fixed-term employees and permanent employees performing the same or similar work, computed on a proportionate basis for the actual period of engagement.",
      "For employers, this represents a meaningful departure from the conventional five-year vesting rule that has historically governed gratuity accounting, and requires immediate re-assessment of actuarial gratuity valuations for organisations with a material fixed-term or project-based employee base, particularly in IT services, EPC/infrastructure, and manufacturing sectors that rely on fixed-term contracts for cyclical demand.",
      "Employers should distinguish fixed-term employees (engaged under a written contract for a specified period, with statutory benefit parity) from casual, seasonal, or piece-rate workers, who continue to be governed by the ordinary five-year continuous service rule under the principal Act unless otherwise specified by contract or state amendment.",
      "Finance and HR teams should coordinate with their actuarial valuers to include fixed-term employees within the gratuity valuation base going forward, and consider whether existing fixed-term contract templates need to be amended to explicitly record the proportionate gratuity entitlement and computation methodology, to avoid disputes at the time of contract completion or non-renewal.",
      "Employers should also review payroll and HRMS employee-category tagging, since many systems currently exclude all contract/fixed-term categories from gratuity accrual by default — a configuration that will need correction to avoid under-provisioning and potential claims before the Controlling Authority under the Act.",
      "Given the potential balance-sheet impact of including a previously excluded employee category within gratuity provisioning, organisations with a large fixed-term workforce should commission an updated actuarial valuation at the earliest reporting date following this clarification.",
    ],
    keyPoints: [
      "Fixed-term employees are entitled to pro-rata gratuity regardless of five-year tenure.",
      "The clarification stems from standing-order parity provisions for fixed-term employment.",
      "Casual and seasonal workers remain governed by the standard five-year rule.",
      "HRMS employee-category tagging needs correction to include fixed-term staff in gratuity accrual.",
      "An updated actuarial valuation is recommended for employers with a sizeable fixed-term workforce.",
    ],
    actionRequired:
      "Update HRMS gratuity accrual settings to include fixed-term employees and commission a revised actuarial valuation reflecting the pro-rata entitlement.",
  },
  {
    slug: "epfo-auto-transfer-uan-linking-circular-2025",
    title: "EPFO Mandates Auto-Transfer of PF Accounts on Change of Employment via Linked UAN",
    excerpt:
      "EPFO has notified automatic transfer of PF balances upon a new employer's first ECR filing against an employee's Aadhaar-linked UAN, removing the need for a manual Form 13 request in most cases.",
    date: "2025-06-30",
    state: "All India",
    act: "EPF & MP Act",
    authority: "EPFO",
    effectiveDate: "2025-08-01",
    body: [
      "EPFO has notified a system-driven auto-transfer mechanism for provident fund accumulations, under which a member's previous PF account balance will be automatically transferred to the new account opened by a subsequent employer, triggered upon the new employer's first Electronic Challan-cum-Return (ECR) filing against the employee's Aadhaar-seeded Universal Account Number.",
      "This removes the requirement for employees to separately file Form 13 for transfer in the vast majority of cases, addressing a long-standing pain point where unclaimed or un-transferred PF balances accumulated across multiple UANs, particularly for employees who changed jobs without completing the transfer formality.",
      "For the auto-transfer to trigger correctly, both the previous and current employer must have completed KYC seeding (Aadhaar, PAN, and bank account) against the UAN, and any mismatch in employee demographic details between the two employments will route the case to manual processing at the Regional Office instead of auto-transfer.",
      "Employers are required to ensure that UAN allotment and KYC completion happen at the time of onboarding, ideally within the first wage month, since delayed KYC seeding is the most common reason for auto-transfer failure and resultant employee grievances routed through the EPFiGMS portal.",
      "The circular also places an obligation on the exiting employer to correctly mark the 'date of exit' in the member's PF record at the time of separation — a field that is frequently left blank or delayed, and which blocks the auto-transfer trigger even where KYC is otherwise complete.",
      "HR teams should build a standard offboarding checklist item to update the date of exit within the statutory window (currently expected within two months of the employee leaving service, though enforcement of this timeline has been inconsistent), and a corresponding onboarding checklist item to complete UAN KYC seeding within the first payroll cycle.",
      "Given that auto-transfer reduces employee grievances and manual EPFO correspondence, employers should treat this as an opportunity to clean up legacy KYC data gaps across their active employee base, not only new joiners, to benefit from smoother future transfers.",
    ],
    keyPoints: [
      "PF balances now auto-transfer on the new employer's first ECR filing against a KYC-seeded UAN.",
      "Both exiting and new employer KYC completeness is essential for the trigger to work.",
      "Exit-employer must correctly record 'date of exit' or the auto-transfer will fail.",
      "Form 13 remains necessary only for cases routed to manual processing.",
      "Legacy KYC data cleanup improves the success rate of future auto-transfers.",
    ],
    actionRequired:
      "Add UAN KYC seeding to the onboarding checklist and 'date of exit' recording to the offboarding checklist to ensure auto-transfer functions correctly.",
  },
  {
    slug: "delhi-minimum-wages-revision-april-2025",
    title: "Delhi Notifies Revised Minimum Wages Effective April 2025",
    excerpt:
      "The Delhi Labour Department has notified revised minimum wage rates across unskilled, semi-skilled, skilled and clerical categories, with the unskilled rate crossing ₹18,500 per month.",
    date: "2025-04-05",
    state: "Delhi",
    act: "Minimum Wages Act",
    authority: "Delhi Labour Department",
    effectiveDate: "2025-04-01",
    body: [
      "The Government of NCT of Delhi has notified revised minimum wages effective 1 April 2025, applicable to all scheduled employments within the National Capital Territory, with the unskilled worker category now set at ₹18,545 per month, semi-skilled at ₹20,448, skilled at ₹22,494, and non-matriculate clerical staff at ₹20,448, matriculate but not graduate clerical staff at ₹22,494, and graduate and above clerical staff at ₹24,504.",
      "The revision reflects the twice-yearly VDA adjustment linked to the CPI-IW as applicable in Delhi, and continues Delhi's practice of maintaining amongst the highest state-level minimum wage floors in the country, a factor employers should specifically account for when benchmarking compensation structures for entry-level and support-function roles based in Delhi.",
      "Employers must ensure that the revised rates are reflected not only in gross wage computation but also flow through correctly to statutory contribution bases — PF wages, ESI wages (subject to the applicable ceiling), and bonus computation under the Payment of Bonus Act all reference actual wages paid, and understating these due to a lag in minimum wage updation can create downstream statutory shortfalls across multiple Acts simultaneously.",
      "The notification requires display of the revised rates in Hindi and English at a conspicuous place in the establishment, and mandates that any wage register maintained under the Minimum Wages (Central) Rules or the corresponding Delhi rules reflect the revised rates from the effective date without any transitional grace period.",
      "For staffing and facility management companies deploying manpower in Delhi under a principal employer's premises, this revision necessitates an immediate review of billing rates to the principal employer, since continuing to bill/pay at the superseded rate would expose both the contractor and, jointly, the principal employer to recovery proceedings under Section 20 of the Minimum Wages Act.",
      "Employers with payroll cut-off dates that do not align with the 1 April effective date should process a top-up adjustment for the part-month already paid at the old rate, since minimum wage notifications operate with effect from the stated date regardless of the employer's internal payroll cycle.",
      "Given the size of the revision this cycle, organisations with a large support-staff or facilities workforce in Delhi should reconcile actual wages paid against the revised minimum for April 2025 promptly and correct any shortfall through the next payroll cycle to limit interest and penalty exposure.",
    ],
    keyPoints: [
      "Unskilled minimum wage in Delhi now stands at ₹18,545 per month effective 1 April 2025.",
      "Revised rates must flow through to PF, ESI and bonus wage bases, not just gross pay.",
      "Display of revised rates in the workplace is mandatory with no transitional grace period.",
      "Principal employers using contract labour in Delhi must verify contractor billing/wage rates.",
      "Any shortfall for the part-month paid at the old rate should be corrected via top-up.",
    ],
    actionRequired:
      "Reconcile April 2025 wages paid in Delhi against the revised minimum wage notification and process any shortfall as a top-up in the next payroll cycle.",
  },
  {
    slug: "maternity-benefit-crèche-compliance-audit-2025",
    title: "Labour Ministry Steps Up Audits of Crèche Facility Compliance under Maternity Benefit Act",
    excerpt:
      "Field inspections have intensified around Section 11A crèche obligations for establishments employing 50 or more employees, with several show-cause notices issued for non-compliant facilities.",
    date: "2025-05-14",
    state: "All India",
    act: "Maternity Benefit Act",
    authority: "Ministry of Labour & Employment",
    body: [
      "Field offices under the Ministry of Labour & Employment, together with several state labour departments, have intensified inspection drives focused on compliance with Section 11A of the Maternity Benefit Act, 1961, which mandates a crèche facility for establishments employing 50 or more employees, within a prescribed distance from the workplace and with permitted visits for the mother, including during her working hours.",
      "Recent inspection reports indicate that a significant proportion of mid-sized establishments, particularly those that have crossed the 50-employee threshold gradually through growth, either lack a formal crèche arrangement altogether or rely on informal tie-ups that do not meet the notified minimum standards for space, staffing ratio, and safety infrastructure prescribed under the applicable state rules.",
      "Employers should note that the Section 11A obligation is not satisfied merely by paying a crèche allowance in lieu of the facility — several state rules explicitly require the physical facility (whether in-house or through an empanelled third-party crèche within the prescribed radius) and a cash allowance is not treated as a substitute in the event of an inspection.",
      "Establishments must also comply with the requirement to permit the mother four visits to the crèche during the day, which includes her rest intervals, and organisations should ensure that attendance and time-tracking systems accommodate this without penalising the employee's productivity metrics or attendance record.",
      "Where an establishment does not have its own premises suitable for a crèche, the Act and rules permit engagement of a third-party crèche service provider, subject to conditions on distance and standards notified by the state government; employers should retain empanelment agreements and facility audit records as primary evidence during inspection.",
      "Non-compliance can result in prosecution under Section 21 of the Act, with penalties including imprisonment and fine for the employer, in addition to reputational risk given increasing scrutiny of ESG and workplace-parity disclosures by clients and investors of larger organisations.",
      "Employers approaching or above the 50-employee threshold, including through recent headcount growth, should conduct an immediate self-audit of crèche compliance, document either an in-house facility or a compliant third-party arrangement, and update maternity benefit policies to reference the crèche facility and visit entitlements explicitly.",
    ],
    keyPoints: [
      "Section 11A crèche obligation applies once an establishment reaches 50 employees.",
      "A cash allowance in lieu of a physical crèche facility does not satisfy the statutory requirement.",
      "Mothers are entitled to four visits a day to the crèche, including during rest intervals.",
      "Third-party crèche tie-ups are permitted subject to distance and standard conditions.",
      "Non-compliance carries prosecution risk under Section 21 in addition to reputational exposure.",
    ],
    actionRequired:
      "Conduct a self-audit of crèche facility compliance for any establishment at or above 50 employees and formalise a compliant in-house or third-party arrangement with documentary evidence.",
  },
  {
    slug: "bonus-payment-deadline-reminder-fy2025",
    title: "Reminder: Statutory Bonus for FY 2024-25 Must Be Disbursed Within Eight Months of Close of Accounting Year",
    excerpt:
      "Employers are reminded that bonus under the Payment of Bonus Act for FY 2024-25 must be paid by 30 November 2025, with computation based on the ₹21,000 eligibility ceiling and ₹7,000 calculation ceiling.",
    date: "2025-10-20",
    state: "All India",
    act: "Payment of Bonus Act",
    authority: "Ministry of Labour & Employment",
    effectiveDate: "2025-11-30",
    body: [
      "Employers are reminded of the statutory obligation under Section 19 of the Payment of Bonus Act, 1965, to disburse bonus for the accounting year ending 31 March 2025 within eight months of the close of that accounting year — that is, on or before 30 November 2025, unless an extension has been separately granted by the appropriate government on application under Section 21.",
      "Eligibility for statutory bonus continues to apply to employees drawing wages (basic plus dearness allowance) of up to ₹21,000 per month who have worked at least 30 working days in the accounting year, while the bonus itself is calculated by capping the eligible wage at ₹7,000 per month or the applicable state minimum wage, whichever is higher, for employees drawing between ₹7,000/minimum wage and ₹21,000.",
      "The minimum bonus payable remains 8.33% of the calculated wage, and the maximum is capped at 20%, with the actual percentage within this range determined based on the 'available surplus' and 'allocable surplus' computed under the Second and Third Schedules to the Act with reference to the employer's audited accounts for the relevant year.",
      "Employers proposing to pay bonus at a rate other than the statutory minimum of 8.33% should ensure that the allocable surplus computation is documented and retained, since bonus disputes raised before the Labour Commissioner frequently turn on the adequacy of this computation rather than on eligibility itself.",
      "Where an establishment is unable to meet the 30 November deadline for genuine reasons such as pending finalisation of audited accounts, an application for extension must be filed with the appropriate government before the expiry of the eight-month period — simply delaying disbursal without an approved extension exposes the employer to a claim under Section 22 and potential prosecution under Section 28.",
      "Payroll and finance teams should reconcile the eligible employee list against the ₹21,000 wage ceiling as it stood through FY 2024-25 (noting that employees crossing the ceiling mid-year retain eligibility for the portion of the year they were within it, as per settled interpretation), and finalise the bonus register (Form C) well ahead of the payment date.",
      "Given the interplay between this deadline and the Diwali/festive season payroll cycle for many organisations, employers should lock the bonus computation methodology and approvals at least two to three weeks ahead of 30 November 2025 to avoid last-minute disbursal errors and to allow time for statutory register updation.",
    ],
    keyPoints: [
      "FY 2024-25 statutory bonus must be paid by 30 November 2025 under Section 19.",
      "Eligibility ceiling remains ₹21,000/month; calculation ceiling remains ₹7,000/month or minimum wage.",
      "Bonus rate ranges from the statutory minimum of 8.33% to a maximum of 20% based on allocable surplus.",
      "An extension application under Section 21 must be filed before the deadline lapses, not after.",
      "Form C bonus register should be finalised in advance of the payment date.",
    ],
    actionRequired:
      "Finalise the FY 2024-25 bonus computation and Form C register, and disburse statutory bonus to eligible employees on or before 30 November 2025.",
  },
  {
    slug: "haryana-labour-welfare-fund-contribution-revision-2025",
    title: "Haryana Revises Labour Welfare Fund Contribution Rates",
    excerpt:
      "The Haryana Labour Welfare Board has revised employee and employer contribution rates to the Labour Welfare Fund, effective for the contribution cycle ending December 2025.",
    date: "2025-03-12",
    state: "Haryana",
    act: "Labour Codes",
    authority: "Haryana Labour Welfare Board",
    effectiveDate: "2025-06-30",
    body: [
      "The Haryana Labour Welfare Board has notified revised contribution rates to the Labour Welfare Fund under the Punjab Labour Welfare Fund Act, 1965 as applicable to Haryana, increasing the employee contribution from ₹31 to ₹50 per half-year and the corresponding employer contribution from ₹62 to ₹100 per half-year, effective for the contribution period ending 30 June 2025.",
      "Labour Welfare Fund contributions, while modest in absolute value, are a frequently overlooked compliance item in multi-state payroll operations because rates, periodicity (half-yearly, annual, or monthly depending on the state), and applicability thresholds vary significantly from state to state, and Haryana's revision brings its rates broadly in line with neighbouring Punjab.",
      "Applicability continues to extend to all employees other than those in a managerial or supervisory capacity drawing wages above a specified threshold, and establishments employing the notified minimum number of persons (currently a low threshold under the Haryana scheme, capturing most commercial and industrial establishments) are covered regardless of size in most cases.",
      "Employers are required to deduct the revised employee contribution from wages for the June 2025 contribution cycle, match it with the revised employer contribution, and remit the combined amount to the Board within the prescribed timeline, along with the half-yearly return in the prescribed form.",
      "Since Labour Welfare Fund is one of the components frequently verified during statutory due diligence for M&A transactions and vendor empanelment audits, even small unremitted balances across multiple periods can surface as a compliance gap; employers should reconcile LWF ledgers annually against actual headcount to confirm no periods have been missed.",
      "HR and payroll teams operating in Haryana should update statutory deduction masters for the revised ₹50/₹100 split before running the June 2025 cycle, and cross-verify that the LWF deduction is reflected as a distinct line item separate from professional tax and other state-specific deductions in the payslip, to avoid employee queries around the change in net pay.",
      "Organisations with employees split across Haryana, Punjab, and Chandigarh should maintain a consolidated but state-tagged LWF tracker, since the three jurisdictions, though historically aligned, do not always revise rates simultaneously.",
    ],
    keyPoints: [
      "Haryana LWF contribution revised to ₹50 (employee) and ₹100 (employer) per half-year.",
      "Applicability covers most non-managerial employees regardless of small establishment size.",
      "LWF is a common gap identified during M&A and vendor statutory due diligence.",
      "Deduction should be updated before the June 2025 remittance cycle and shown as a distinct payslip line.",
      "Punjab, Haryana and Chandigarh rates should be tracked separately as they revise independently.",
    ],
    actionRequired:
      "Update the Haryana LWF deduction masters to the revised ₹50/₹100 rates ahead of the June 2025 remittance cycle and file the half-yearly return on time.",
  },
];

export function getRegulatoryUpdates(): RegulatoryUpdate[] {
  return [...regulatoryUpdates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getRegulatoryUpdate(slug: string): RegulatoryUpdate | undefined {
  return regulatoryUpdates.find((update) => update.slug === slug);
}

export function getUpdateStates(): string[] {
  return Array.from(new Set(regulatoryUpdates.map((u) => u.state))).sort();
}

export function getUpdateActs(): string[] {
  return Array.from(new Set(regulatoryUpdates.map((u) => u.act))).sort();
}

const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getUpdateMonths(): { value: string; label: string }[] {
  const values = Array.from(
    new Set(regulatoryUpdates.map((u) => u.date.slice(0, 7))),
  ).sort((a, b) => (a < b ? 1 : -1));

  return values.map((value) => {
    const [year, month] = value.split("-");
    const label = `${MONTH_LABELS[Number(month) - 1]} ${year}`;
    return { value, label };
  });
}

export function formatUpdateDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  const day = date.getDate();
  const month = MONTH_LABELS[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
