export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department?: string;
  image: string;
  summary?: string;
  bio?: string; // Extended bio for modal
  email?: string;
  phone?: string;
  linkedin?: string;
  stats?: { label: string; value: string }[];
  expertises?: string[];
  certifications?: string[];
  languages?: string[];
}
