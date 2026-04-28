export interface Product {
  id: number;
  title: string;
  description: string;

  category: string;
  segment: string;
  division: string;

  company: string;
  company_contact_person: string;

  main_advantages: string | null;
  key_facts: string | null;
  applications: string | null;

  status: "active" | "inactive";

  created_at: string;
  image_url: string | null;
}