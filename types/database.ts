/** Supabase database schema types — mirrors PRD.md §10. */

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  short_description: string;
  specs: Record<string, string>;
  images: string[];
  is_active: boolean;
  created_at: string;
}

export interface Enquiry {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  product_id: string | null;
  message: string;
  status: "new" | "contacted" | "closed";
  created_at: string;
}

/** Row-insert types (omit server-generated fields). */
export type CategoryInsert = Omit<Category, "id" | "created_at">;
export type ProductInsert = Omit<Product, "id" | "created_at">;
export type EnquiryInsert = Omit<Enquiry, "id" | "status" | "created_at">;
