/**
 * Server-side Supabase query helpers — import only in server components / route handlers.
 * Wrapped with React cache() to deduplicate requests per render cycle.
 */

import "server-only";
import { cache } from "react";
import { supabaseAdmin } from "@/lib/supabase/server";
import type { Category, Product } from "@/types/database";

/** Fetch all categories, ordered by name (cached per request). */
export const getCategories = cache(async (): Promise<Category[]> => {
  const { data, error } = await supabaseAdmin
    .from("categories")
    .select("*")
    .order("name");

  if (error) {
    console.error("Failed to fetch categories:", error.message);
    return [];
  }
  return data as Category[];
});

/** Fetch all active products (cached per request). */
export const getProducts = cache(async (): Promise<Product[]> => {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("name");

  if (error) {
    console.error("Failed to fetch products:", error.message);
    return [];
  }
  return data as Product[];
});

/** Fetch a single product by slug, or null if not found (cached per request). */
export const getProductBySlug = cache(
  async (slug: string): Promise<Product | null> => {
    const { data, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .single();

    if (error) {
      if (error.code !== "PGRST116") {
        console.error("Failed to fetch product:", error.message);
      }
      return null;
    }

    return data as Product;
  }
);

/** Fetch all product slugs (cached per request). */
export const getAllProductSlugs = cache(async (): Promise<string[]> => {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("slug")
    .eq("is_active", true);

  if (error) {
    console.error("Failed to fetch product slugs:", error.message);
    return [];
  }
  return (data as { slug: string }[]).map((p) => p.slug);
});
