import { Clock, ChevronRight, Heart } from "lucide-react";
import { DetailedRecipe } from "./RecipeDetail";
import { ImageWithFallback } from "./ImageWithFallback";

interface RecentlySavedProps {
  recipes: DetailedRecipe[];
  onRecipeClick: (recipe: DetailedRecipe) => void;
  onSeeAll: () => void;
}

export function RecentlySaved({ recipes, onRecipeClick, onSeeAll }: RecentlySavedProps) {
  return (
    <div className="px-6 mb-6">
      <div className="bg-stone-800/50 rounded-lg p-5 text-white relative overflow-hidden border border-stone-700/50 transition-colors h-full flex flex-col">
        <div className="relative flex flex-col flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Heart size={18} className="text-stone-400" />
                Recently Saved
              </h2>
              <p className="text-stone-400 text-xs mt-1">
                {recipes.length} recipe{recipes.length !== 1 ? "s" : ""} saved
              </p>
            </div>
            <button
              onClick={onSeeAll}
              className="bg-stone-700/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-300 border border-stone-600 hover:bg-stone-600/80 transition-colors cursor-pointer"
            >
              See all
            </button>
          </div>

          {recipes.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 py-4 text-stone-500">
              <Heart size={28} className="mb-2 opacity-50" />
              <p className="text-sm">No saved recipes yet</p>
              <p className="text-xs mt-0.5">Tap the heart on a recipe to save it</p>
            </div>
          ) : (
            <div className="space-y-2 flex-1 flex flex-col justify-end">
              {recipes.slice(0, 2).map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => onRecipeClick(recipe)}
                  className="w-full flex items-center gap-3 bg-stone-700/30 rounded-md p-2.5 hover:bg-stone-700/50 transition-colors group text-left"
                >
                  <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-200 truncate">
                      {recipe.title}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-stone-500">
                      <Clock size={10} />
                      <span>{recipe.time}</span>
                    </div>
                  </div>
                  <ChevronRight
                    size={14}
                    className="text-stone-600 group-hover:text-stone-400 transition-colors flex-shrink-0"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}