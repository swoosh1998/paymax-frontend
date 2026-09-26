export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  featured?: boolean;
};

export const teamMembers: TeamMember[];
export function getTeamMembers(): TeamMember[];
export function getFeaturedTeamMember(): TeamMember;
