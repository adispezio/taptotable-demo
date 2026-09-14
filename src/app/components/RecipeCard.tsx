import { Clock, Flame, ChevronRight, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  calories: number;
  matchScore: number;
  tags: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
  isSaved?: boolean;
  onSaveToggle?: (e: React.MouseEvent) => void;
}

export function RecipeCard({ recipe, onClick, isSaved, onSaveToggle }: RecipeCardProps) {
  return (
    <motion.div
      initial={false}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-stone-900 rounded-lg p-3 shadow-sm border border-stone-800 flex gap-4 cursor-pointer group transition-colors"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="w-28 h-28 flex-shrink-0 relative rounded-md overflow-hidden">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-sm">
          {recipe.matchScore}% Match
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <h3 className="font-bold text-stone-200 leading-tight mb-1 line-clamp-2">
            {recipe.title}
          </h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {recipe.tags.slice(0, 2).map((tag, idx) => (
              <span key={`${tag}-${idx}`} className="text-[10px] text-stone-400 bg-stone-800 px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              {recipe.time}
            </div>
            <div className="flex items-center gap-1">
              <Flame size={12} className="text-brand-500" />
              {recipe.calories} kcal
            </div>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-brand-500/15 group-hover:text-brand-400 transition-colors">
             <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}