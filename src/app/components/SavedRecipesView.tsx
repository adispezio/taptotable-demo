import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, SlidersHorizontal } from "lucide-react";
import { RecipeCard } from "./RecipeCard";
import { DetailedRecipe } from "./RecipeDetail";
import { cn } from "../lib/utils";

interface SavedRecipesViewProps {
  savedRecipes: DetailedRecipe[];
  onRecipeClick: (recipe: DetailedRecipe) => void;
  onUnsave: (recipeId: string) => void;
}

type SortOption = "recent" | "name" | "time" | "calories";

const FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "vegan", label: "Vegan" },
  { id: "keto", label: "Keto" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "dairy-free", label: "Dairy-Free" },
  { id: "nut-free", label: "Nut-Free" }
];

const SORT_OPTIONS = [
  { id: "recent", label: "Recently Added" },
  { id: "name", label: "A–Z" },
  { id: "time", label: "Prep Time" },
  { id: "calories", label: "Calories" }
];

export function SavedRecipesView({ 
  savedRecipes, 
  onRecipeClick, 
  onUnsave,
}: SavedRecipesViewProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Filter recipes
  const filteredRecipes = activeFilter === "all"
    ? savedRecipes
    : savedRecipes.filter(r => 
        r.tags.some(t => 
          t.toLowerCase() === activeFilter.toLowerCase() || 
          (activeFilter === "gluten-free" && (t === "GF" || t === "Gluten-Free"))
        )
      );

  // Sort recipes
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title);
      case "time":
        return parseInt(a.time) - parseInt(b.time);
      case "calories":
        return a.calories - b.calories;
      case "recent":
      default:
        return 0; // Keep original order (most recent first)
    }
  });

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-stone-950"
    >
      {/* Header */}
      <div className="lg:sticky lg:top-0 lg:z-30 bg-stone-950 border-b border-stone-800 transition-colors">
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-stone-100">Saved Recipes</h1>
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className={cn(
                "w-10 h-10 border rounded-full flex items-center justify-center transition-colors",
                showSortMenu 
                  ? "bg-brand-500/15 border-brand-500" 
                  : "bg-stone-800 border-stone-700 hover:bg-stone-700"
              )}
            >
              <SlidersHorizontal size={20} strokeWidth={2.5} className={showSortMenu ? "text-brand-400" : "text-stone-400"} />
            </button>
          </div>

          {/* Sort Menu */}
          <AnimatePresence>
            {showSortMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 overflow-hidden"
              >
                <div className="bg-stone-900 rounded-md border border-stone-700 p-2">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id as SortOption);
                        setShowSortMenu(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded transition-colors text-sm",
                        sortBy === option.id
                          ? "bg-brand-500/15 text-brand-400 font-semibold"
                          : "text-stone-300 hover:bg-stone-800"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats */}
          <div className="flex items-center gap-2 text-sm text-stone-400 mb-4">
            <Heart size={16} className="fill-rose-500 text-rose-500" />
            <span>{savedRecipes.length} saved recipes</span>
          </div>

          {/* Filter Bar */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0",
                  activeFilter === filter.id
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                    : "bg-stone-800 text-stone-400 border border-stone-700 hover:border-brand-700"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="px-6 pt-4 pb-32">
        {sortedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <RecipeCard
                  recipe={recipe}
                  onClick={() => onRecipeClick(recipe)}
                  isSaved={true}
                  onSaveToggle={() => onUnsave(recipe.id)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 px-6 text-center"
          >
            <div className="w-24 h-24 bg-stone-800 rounded-full flex items-center justify-center mb-6">
              <Heart size={48} className="text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-stone-200 mb-2">
              {activeFilter === "all" 
                ? "No saved recipes yet"
                : `No ${FILTER_OPTIONS.find(f => f.id === activeFilter)?.label} recipes saved`
              }
            </h3>
            <p className="text-stone-500 mb-6 max-w-xs">
              {activeFilter === "all"
                ? "Start building your recipe collection by tapping the heart icon on recipes you love."
                : "Try a different filter or save more recipes to see them here."
              }
            </p>
            {activeFilter === "all" && (
              <button
                onClick={() => {}} 
                className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-md hover:bg-brand-500 transition-colors"
              >
                Browse Recipes
              </button>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}