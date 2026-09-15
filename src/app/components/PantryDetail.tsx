import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { 
  Plus, 
  Search, 
  Filter, 
  Leaf, 
  Milk, 
  Wheat, 
  Beef, 
  AlertCircle, 
  CheckCircle2, 
  Minus,
  Plus as PlusIcon,
  Trash2
} from "./icons";
import { cn } from "../lib/utils";
import { AddPantryItem } from "./AddPantryItem";
import { PantryItem } from "../data/pantry";

interface PantryDetailProps {
  items: PantryItem[];
  setItems: (items: PantryItem[]) => void;
}

export function PantryDetail({ items, setItems }: PantryDetailProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories = ["All", "Produce", "Dairy", "Grains", "Protein"];

  const filteredItems = items.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const expiringCount = items.filter(i => i.status === "expiring").length;

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const deleteItem = (id: string) => {
      setItems(items.filter(i => i.id !== id));
      toast.success("Item removed from pantry");
  };

  const handleAddItem = (newItem: Omit<PantryItem, "id" | "status">) => {
      const id = Math.random().toString(36).substr(2, 9);
      // Simple status logic based on expiry date
      const today = new Date();
      const expiry = new Date(newItem.expiryDate);
      const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      let status: "good" | "expiring" | "expired" = "good";
      if (diffDays < 0) status = "expired";
      else if (diffDays <= 3) status = "expiring";

      const item: PantryItem = {
          ...newItem,
          id,
          status
      };

      setItems([item, ...items]);
      toast.success(`Added ${newItem.quantity} ${newItem.unit} of ${newItem.name}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Produce": return <Leaf size={16} className="text-brand-500" />;
      case "Dairy": return <Milk size={16} className="text-blue-400" />;
      case "Grains": return <Wheat size={16} className="text-brand-400" />;
      case "Protein": return <Beef size={16} className="text-red-400" />;
      case "Other": return <CheckCircle2 size={16} className="text-stone-400" />;
      default: return <CheckCircle2 size={16} className="text-stone-400" />;
    }
  };

  const getStatusColor = (status: string) => {
      switch (status) {
          case "expiring": return "bg-amber-900/40 text-amber-400 border-amber-800";
          case "expired": return "bg-red-900/40 text-red-400 border-red-800";
          default: return "bg-brand-500/12 text-brand-400 border-brand-500/25";
      }
  };

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-stone-950"
    >
      {/* Header */}
      <div className="bg-stone-900 px-6 pt-6 pb-4 border-b border-stone-800 shadow-sm z-10 transition-colors">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-stone-100">My Pantry</h1>
          <div className="w-10" />
        </div>

        {/* Summary Card */}
        <div className="bg-stone-800 rounded-lg p-4 text-white mb-6 flex justify-between items-center transition-colors">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold">{items.length}</span>
                    <span className="text-stone-400 text-sm">Total Items</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-300 text-sm">
                    <AlertCircle size={14} />
                    <span>{expiringCount} expiring soon</span>
                </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-brand-600 flex items-center justify-center text-white">
                <Leaf size={20} />
            </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-3 mb-2">
             <div className="relative flex-1">
                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                 <input 
                    type="text" 
                    placeholder="Search pantry..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-stone-800 border-none rounded-md pl-9 pr-4 py-2.5 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                 />
             </div>
             <button className="w-10 h-10 flex items-center justify-center bg-stone-800 rounded-md text-stone-400 transition-colors">
                 <Filter size={18} />
             </button>
        </div>
        
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                        "px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                        activeCategory === cat 
                            ? "bg-brand-500/15 text-brand-400" 
                            : "bg-stone-800 border border-stone-700 text-stone-400"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredItems.map(item => (
              <motion.div 
                layoutId={item.id}
                key={item.id}
                className="bg-stone-900 rounded-lg p-4 border border-stone-800 shadow-sm flex items-center gap-4 transition-colors"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 transition-colors">
                    {getCategoryIcon(item.category)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-stone-200 truncate">{item.name}</h3>
                        <span className={cn("text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase tracking-wider", getStatusColor(item.status))}>
                            {item.status === 'expiring' ? 'Expiring' : 'Fresh'}
                        </span>
                    </div>
                    <p className="text-xs text-stone-500 mb-2">Expires {new Date(item.expiryDate).toLocaleDateString()}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:bg-stone-800 active:scale-95 transition-all"
                          disabled={item.quantity <= 0}
                        >
                            <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold text-stone-300 min-w-[3rem] text-center">
                            {item.quantity} {item.unit}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:bg-stone-800 active:scale-95 transition-all"
                        >
                            <PlusIcon size={12} />
                        </button>

                        <div className="flex-1" />
                        
                        <button 
                          onClick={() => deleteItem(item.id)}
                          className="text-stone-600 hover:text-red-400 transition-colors"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>
              </motion.div>
          ))}
          </div>
          
          {filteredItems.length === 0 && (
              <div className="text-center py-12">
                  <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-600">
                      <Search size={32} />
                  </div>
                  <h3 className="text-stone-200 font-bold mb-1">No items found</h3>
                  <p className="text-stone-500 text-sm">Try adjusting your search or filters</p>
              </div>
          )}
          
          {/* Bottom padding for FAB */}
          <div className="h-20" />
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-6 z-10">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="w-14 h-14 bg-brand-600 rounded-full shadow-lg shadow-brand-600/30 flex items-center justify-center text-white hover:bg-brand-700 hover:scale-105 transition-all active:scale-95"
          >
              <Plus size={28} />
          </button>
      </div>

      <AddPantryItem 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={handleAddItem} 
      />
    </motion.div>
  );
}