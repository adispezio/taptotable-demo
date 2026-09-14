export interface PantryItem {
  id: string;
  name: string;
  category: "Produce" | "Dairy" | "Grains" | "Protein" | "Other";
  quantity: number;
  unit: string;
  expiryDate: string; // ISO date
  status: "good" | "expiring" | "expired";
}

export const MOCK_PANTRY_ITEMS: PantryItem[] = [
  { id: "1", name: "Avocados", category: "Produce", quantity: 3, unit: "pcs", expiryDate: "2025-11-28", status: "expiring" },
  { id: "2", name: "Whole Milk", category: "Dairy", quantity: 1, unit: "gal", expiryDate: "2025-11-30", status: "expiring" },
  { id: "3", name: "Sourdough Bread", category: "Grains", quantity: 1, unit: "loaf", expiryDate: "2025-12-01", status: "good" },
  { id: "4", name: "Eggs", category: "Dairy", quantity: 12, unit: "pcs", expiryDate: "2025-12-10", status: "good" },
  { id: "5", name: "Chicken Breast", category: "Protein", quantity: 2, unit: "lbs", expiryDate: "2025-11-26", status: "expiring" },
  { id: "6", name: "Spinach", category: "Produce", quantity: 1, unit: "bag", expiryDate: "2025-11-27", status: "expiring" },
  { id: "7", name: "Rice", category: "Grains", quantity: 5, unit: "lbs", expiryDate: "2026-01-01", status: "good" },
  { id: "8", name: "Pasta", category: "Grains", quantity: 2, unit: "boxes", expiryDate: "2026-03-15", status: "good" },
  { id: "9", name: "Apples", category: "Produce", quantity: 6, unit: "pcs", expiryDate: "2025-12-05", status: "good" },
  { id: "10", name: "Cheddar Cheese", category: "Dairy", quantity: 1, unit: "block", expiryDate: "2025-12-20", status: "good" },
];
