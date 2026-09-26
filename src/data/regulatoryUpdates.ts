import { createClient } from '@sanity/client';

// Sanity connection setup
export const client = createClient({
  projectId: 'wm5i6qis', // Aapka Sanity Project ID
  dataset: 'production',
  useCdn: false, // Faster fetching
  apiVersion: '2024-03-01', 
});

export type RegulatoryUpdate = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  state: string;
  act: string;
  authority: string;
  effectiveDate?: string;
  body: string[];
  keyPoints: string[];
  actionRequired?: string;
  pdfUrl?: string; // Automatically PDF ka link fetch hoga
};

// 1. Fetch All Updates
export async function getRegulatoryUpdates(): Promise<RegulatoryUpdate[]> {
  return client.fetch(`
    *[_type == "regulatoryUpdate"] | order(date desc) {
      "slug": slug.current,
      title,
      excerpt,
      date,
      state,
      act,
      authority,
      effectiveDate,
      body,
      keyPoints,
      actionRequired,
      "pdfUrl": pdfDocument.asset->url
    }
  `);
}

// 2. Fetch Single Update by Slug
export async function getRegulatoryUpdate(slug: string): Promise<RegulatoryUpdate | undefined> {
  return client.fetch(`
    *[_type == "regulatoryUpdate" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      excerpt,
      date,
      state,
      act,
      authority,
      effectiveDate,
      body,
      keyPoints,
      actionRequired,
      "pdfUrl": pdfDocument.asset->url
    }
  `, { slug });
}

// 3. Fetch Unique States for Filters
export async function getUpdateStates(): Promise<string[]> {
  const states = await client.fetch<string[]>(`array::unique(*[_type == "regulatoryUpdate"].state)`);
  return states.filter(Boolean).sort();
}

// 4. Fetch Unique Acts for Filters
export async function getUpdateActs(): Promise<string[]> {
  const acts = await client.fetch<string[]>(`array::unique(*[_type == "regulatoryUpdate"].act)`);
  return acts.filter(Boolean).sort();
}

const MONTH_LABELS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// 5. Fetch Unique Months for Filters
export async function getUpdateMonths(): Promise<{ value: string; label: string }[]> {
  const dates = await client.fetch<string[]>(`array::unique(*[_type == "regulatoryUpdate"].date)`);
  const values = Array.from(new Set(dates.filter(Boolean).map((d) => d.slice(0, 7)))).sort((a, b) => (a < b ? 1 : -1));
  
  return values.map((value) => {
    const [year, month] = value.split("-");
    const label = `${MONTH_LABELS[Number(month) - 1]} ${year}`;
    return { value, label };
  });
}

export function formatUpdateDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00`);
  const day = date.getDate();
  const month = MONTH_LABELS[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// Is function ko file ke sabse bottom par add kar dein
export async function getRegulatoryPreview(limit = 3) {
  const all = await getRegulatoryUpdates();
  return all.slice(0, limit);
}