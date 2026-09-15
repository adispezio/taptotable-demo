import { useState, useEffect } from "react";
import { 
  Leaf, 
  Milk, 
  Wheat, 
  Beef, 
  CheckCircle2, 
  Calendar, 
  Minus, 
  Plus 
} from "./icons";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerDescription,
} from "./ui/drawer";
import { PantryItem } from "./PantryDetail";

interface AddPantryItemProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: Omit<PantryItem, "id" | "status">) => void;
}

const CATEGORIES = [
    { id: "Produce", icon: Leaf, color: "text-brand-500", bg: "bg-brand-100" },
    { id: "Dairy", icon: Milk, color: "text-blue-400", bg: "bg-blue-100" },
    { id: "Grains", icon: Wheat, color: "text-brand-400", bg: "bg-brand-100" },
    { id: "Protein", icon: Beef, color: "text-red-400", bg: "bg-red-100" },
    { id: "Other", icon: CheckCircle2, color: "text-stone-400", bg: "bg-stone-100" },
];

const UNITS = ["pcs", "lbs", "kg", "oz", "g", "L", "ml", "gal", "bag", "box", "can", "jar"];

const EXPIRY_PRESETS = [
    { label: "3 Days", days: 3 },
    { label: "1 Week", days: 7 },
    { label: "2 Weeks", days: 14 },
    { label: "1 Month", days: 30 },
];

export function AddPantryItem({ isOpen, onClose, onAdd }: AddPantryItemProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Other");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("pcs");
  const [expiryDate, setExpiryDate] = useState<string>("");

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setName("");
      setCategory("Other");
      setQuantity(1);
      setUnit("pcs");
      setExpiryDate(getFutureDate(7)); // Default to 1 week
    }
  }, [isOpen]);

  // Smart Category Detection
  useEffect(() => {
    if (!name) return;
    const lowerName = name.toLowerCase();
    if (lowerName.match(/apple|banana|spinach|carrot|tomato|lettuce|fruit|veg/)) setCategory("Produce");
    else if (lowerName.match(/milk|cheese|yogurt|butter|cream|egg/)) setCategory("Dairy");
    else if (lowerName.match(/bread|pasta|rice|flour|oat|cereal|grain/)) setCategory("Grains");
    else if (lowerName.match(/chicken|beef|pork|fish|meat|tofu|steak/)) setCategory("Protein");
  }, [name]);

  const getFutureDate = (days: number) => {
      const date = new Date();
      date.setDate(date.getDate() + days);
      return date.toISOString().split('T')[0];
  };

  const handleSave = () => {
      if (!name.trim()) return;
      onAdd({
          name,
          category: category as any,
          quantity,
          unit,
          expiryDate: expiryDate || getFutureDate(7),
      });
      onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[96vh]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center">Add Item</DrawerTitle>
            <DrawerDescription className="sr-only">
                Fill in the details to add a new item to your pantry.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-stone-400">Item Name</label>
                <Input 
                    placeholder="e.g. Avocados" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-lg h-12 bg-stone-800 border-stone-700 text-stone-200 placeholder:text-stone-500 focus:ring-brand-500/20 focus:border-brand-500"
                    autoFocus
                />
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-stone-500">Category</label>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = category === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setCategory(cat.id)}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2 rounded-md border transition-all whitespace-nowrap",
                                    isSelected 
                                        ? `border-${cat.bg.split('-')[1]}-500 ${cat.bg} ring-1 ring-${cat.bg.split('-')[1]}-500`
                                        : "border-stone-700 bg-stone-800 text-stone-400 hover:bg-stone-700"
                                )}
                            >
                                <Icon size={16} className={isSelected ? cat.color : "text-stone-400"} />
                                <span className={cn("text-sm font-medium", isSelected ? "text-stone-900" : "")}>{cat.id}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Quantity & Unit */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-400">Quantity</label>
                    <div className="flex items-center gap-3 h-12 bg-stone-800 rounded-md border border-stone-700 px-2">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center rounded bg-stone-700 shadow-sm border border-stone-600 text-stone-400 active:scale-95"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="flex-1 text-center font-bold text-lg text-stone-200">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded bg-stone-700 shadow-sm border border-stone-600 text-stone-400 active:scale-95"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-400">Unit</label>
                    <select 
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="w-full h-12 rounded-md bg-stone-800 border border-stone-700 px-3 text-sm text-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    >
                        {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                </div>
            </div>

            {/* Expiry Date */}
            <div className="space-y-3">
                <label className="text-sm font-medium text-stone-400">Expiry Date</label>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {EXPIRY_PRESETS.map(preset => (
                        <button
                            key={preset.label}
                            onClick={() => setExpiryDate(getFutureDate(preset.days))}
                            className="px-3 py-1.5 bg-stone-800 border border-stone-700 rounded text-xs font-medium text-stone-400 hover:bg-stone-700 whitespace-nowrap"
                        >
                            +{preset.label}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                    <input 
                        type="date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-md bg-stone-800 border border-stone-700 text-sm text-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block"
                    />
                </div>
            </div>
          </div>

          <DrawerFooter className="pt-2 pb-6 px-4">
            <Button 
                onClick={handleSave}
                className="w-full h-12 bg-brand-600 hover:bg-brand-700 text-white rounded-md text-base font-semibold shadow-lg shadow-brand-600/20"
            >
              Save Item
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}