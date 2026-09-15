import { useRef, useState } from "react";
import { Heart, Clock, Sparkles } from "./icons";
import { motion, AnimatePresence } from "motion/react";
import { DetailedRecipe } from "./RecipeDetail";
import { RECIPES } from "../data/recipes";

// Trending recipe metadata layered on top of existing recipe data
export interface TrendingRecipe {
  recipe: DetailedRecipe;
  chef: string;
  category: string;
  image: string; // override image for trending cards
  pantryItems: string[]; // which pantry items this recipe uses
}

// Build trending recipes from RECIPES data + Figma images
const TRENDING_RECIPES: TrendingRecipe[] = [
  {
    recipe: RECIPES.find(r => r.id === "40")!,
    chef: "Chef Mika",
    category: "CRISPY",
    image: RECIPES.find(r => r.id === "40")!.image,
    pantryItems: ["Lime", "Tortillas"],
  },
  {
    recipe: RECIPES.find(r => r.id === "41")!,
    chef: "Sophia L.",
    category: "INDULGENT",
    image: RECIPES.find(r => r.id === "41")!.image,
    pantryItems: ["Eggs", "Whole Milk"],
  },
  {
    recipe: RECIPES.find(r => r.id === "42")!,
    chef: "Yuki T.",
    category: "WARMING",
    image: RECIPES.find(r => r.id === "42")!.image,
    pantryItems: ["Eggs", "Spinach"],
  },
  {
    recipe: RECIPES.find(r => r.id === "43")!,
    chef: "Marcus D.",
    category: "SEARED",
    image: RECIPES.find(r => r.id === "43")!.image,
    pantryItems: ["Chicken Breast"],
  },
  {
    recipe: RECIPES.find(r => r.id === "8")!,
    chef: "Elena R.",
    category: "SAVORY",
    image: RECIPES.find(r => r.id === "8")!.image,
    pantryItems: ["Pasta", "Eggs"],
  },
  {
    recipe: RECIPES.find(r => r.id === "16")!,
    chef: "Nikos A.",
    category: "FRESH",
    image: RECIPES.find(r => r.id === "16")!.image,
    pantryItems: ["Chicken Breast", "Rice"],
  },
  {
    recipe: RECIPES.find(r => r.id === "10")!,
    chef: "Hana K.",
    category: "GLAZED",
    image: RECIPES.find(r => r.id === "10")!.image,
    pantryItems: ["Rice"],
  },
  {
    recipe: RECIPES.find(r => r.id === "25")!,
    chef: "Min-ji P.",
    category: "CRISPY",
    image: RECIPES.find(r => r.id === "25")!.image,
    pantryItems: ["Eggs", "Rice"],
  },
  {
    recipe: RECIPES.find(r => r.id === "44")!,
    chef: "Somchai W.",
    category: "SPICY",
    image: RECIPES.find(r => r.id === "44")!.image,
    pantryItems: ["Garlic", "Eggs", "Rice"],
  },
  {
    recipe: RECIPES.find(r => r.id === "45")!,
    chef: "Giovanni M.",
    category: "CLASSIC",
    image: RECIPES.find(r => r.id === "45")!.image,
    pantryItems: ["Garlic"],
  },
];

interface TrendingFeedProps {
  savedRecipeIds: Set<string>;
  onSaveToggle: (recipeId: string) => void;
  onRecipeClick: (recipe: DetailedRecipe) => void;
}

function TrendingCard({
  trending,
  isSaved,
  onSaveToggle,
  onClick,
}: {
  trending: TrendingRecipe;
  isSaved: boolean;
  onSaveToggle: () => void;
  onClick: () => void;
}) {
  const hasToggledSave = useRef(false);

  return (
    <div
      className="relative w-full aspect-[4/5] rounded-lg overflow-hidden cursor-pointer group active:scale-[0.98]"
      onClick={onClick}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <img
          src={trending.image}
          alt={trending.recipe.title}
          className="w-full h-full object-cover [transform:scale(1)] group-hover:[transform:scale(1.05)] transition-transform duration-700 pointer-events-none"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 via-50% to-transparent pointer-events-none rounded-lg" />

      {/* Pantry match badge */}
      {trending.pantryItems.length > 0 && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-brand-600/85 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full pointer-events-none">
          <Sparkles size={10} />
          <span>{trending.pantryItems.length} pantry {trending.pantryItems.length === 1 ? "item" : "items"}</span>
        </div>
      )}

      {/* Save button */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={(e) => {
          e.stopPropagation();
          hasToggledSave.current = true;
          onSaveToggle();
        }}
        className="absolute top-4 right-4 w-[38px] h-[38px] rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isSaved ? "saved" : "unsaved"}
            initial={hasToggledSave.current ? { scale: 0.5, opacity: 0 } : false}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Heart
              size={18}
              className={isSaved ? "text-red-500 fill-red-500" : "text-white"}
              strokeWidth={1.65}
            />
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12 pointer-events-none">
        {/* Category tag */}
        <p className="text-brand-400 text-[11px] tracking-[1.65px] mb-1.5">
          {trending.category}
        </p>

        {/* Title */}
        <h3 className="text-white text-[22px] leading-[1.2] mb-2">
          {trending.recipe.title}
        </h3>

        {/* Chef + Time */}
        <div className="flex items-center gap-2 text-[12px] text-white/60">
          <span>{trending.chef}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {trending.recipe.time}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TrendingFeed({
  savedRecipeIds,
  onSaveToggle,
  onRecipeClick,
}: TrendingFeedProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleRecipes = showAll ? TRENDING_RECIPES : TRENDING_RECIPES.slice(0, 4);

  return (
    <div className="w-full">
      {/* Section header */}
      <div className="flex items-center justify-between px-6 mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg text-stone-100">Trending for you</h2>
        </div>
        {TRENDING_RECIPES.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[13px] text-brand-400"
          >
            {showAll ? "Show less" : "See all"}
          </button>
        )}
      </div>

      {/* Feed */}
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleRecipes.map((trending) => (
          <TrendingCard
            key={trending.recipe.id}
            trending={trending}
            isSaved={savedRecipeIds.has(trending.recipe.id)}
            onSaveToggle={() => onSaveToggle(trending.recipe.id)}
            onClick={() => onRecipeClick({ ...trending.recipe, image: trending.image })}
          />
        ))}
      </div>
    </div>
  );
}