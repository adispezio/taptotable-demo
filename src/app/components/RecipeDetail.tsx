import { useState, useRef, useEffect, forwardRef } from "react";
import { ArrowLeft, Heart, Share2, Clock, Flame, ChefHat, CheckCircle2, Circle, ArrowRight, RotateCcw } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, animate } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { cn } from "../lib/utils";
import { Recipe } from "./RecipeCard";

// Extended interface for detailed recipe view
export interface DetailedRecipe extends Recipe {
  description: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface RecipeDetailProps {
  recipe: DetailedRecipe;
  onBack: () => void;
  isSaved?: boolean;
  onSaveToggle?: () => void;
}

export const RecipeDetail = forwardRef<HTMLDivElement, RecipeDetailProps>(function RecipeDetail({ recipe, onBack, isSaved = false, onSaveToggle }, ref) {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [cookingMode, setCookingMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const instructionsRef = useRef<HTMLDivElement>(null);

  // Drag & Parallax logic
  const dragY = useMotionValue(0);
  const imageHeight = useTransform(dragY, (y) => y + 384);
  
  // Header animation logic
  const headerY = useTransform(scrollY, [216, 316], [0, -100]);

  // Auto-scroll effect for cooking mode
  useEffect(() => {
    if (cookingMode && scrollRef.current) {
      const el = document.getElementById(`step-${currentStep}`);
      if (el) {
        const container = scrollRef.current;
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        
        // Calculate the current distance from the top of the container's viewport
        const relativeTop = elRect.top - containerRect.top;
        
        // We want the step to be positioned near the top, but below the header (80px padding)
        const targetScroll = container.scrollTop + relativeTop - 80;
        
        container.scrollTo({
          top: targetScroll,
          behavior: "smooth"
        });
      }
    }
  }, [currentStep, cookingMode]);

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedIngredients(newChecked);
  };

  const startCooking = () => {
    setCookingMode(true);
    setCurrentStep(0);
  };

  const advanceStep = (idx: number) => {
      if (cookingMode) {
          // If clicking the current step or an earlier one, complete it and move to next
          if (idx <= currentStep) {
              // Auto-check ingredients for this step
              const ingredientsForStep = stepIngredients[idx] || [];
              const newChecked = new Set(checkedIngredients);
              ingredientsForStep.forEach(ingredientIdx => {
                newChecked.add(ingredientIdx);
              });
              setCheckedIngredients(newChecked);
              
              setCurrentStep(Math.min(idx + 1, recipe.instructions.length));
          } else {
              // Jumping forward to a future step
              setCurrentStep(idx);
          }
      }
  };

  const resetCooking = () => {
      setCookingMode(false);
      setCurrentStep(0);
  };

  // Calculate step times once
  const stepTimes = (() => {
    const totalMinutes = parseInt(recipe.time) || 0;
    const explicitTimes = recipe.instructions.map(text => {
        const match = text.match(/(\d+)(?:-\d+)?\s*(?:min|minute)/i);
        return match ? parseInt(match[1]) : 0;
    });
    
    const explicitSum = explicitTimes.reduce((a, b) => a + b, 0);
    const unknownCount = explicitTimes.filter(t => t === 0).length;
    const remainingTime = Math.max(0, totalMinutes - explicitSum);
    const averageTime = unknownCount > 0 
        ? Math.max(2, Math.floor(remainingTime / unknownCount)) 
        : 0;
        
    return explicitTimes.map(t => t || averageTime);
  })();

  // Map ingredients to steps by parsing instruction text
  const stepIngredients = (() => {
    return recipe.instructions.map((instruction) => {
      const ingredientIndices: number[] = [];
      const lowerInstruction = instruction.toLowerCase();
      
      recipe.ingredients.forEach((ing, idx) => {
        const itemName = ing.item.toLowerCase();
        // Check for exact match or partial match for multi-word ingredients
        const words = itemName.split(' ');
        const hasMatch = words.some(word => 
          word.length > 3 && lowerInstruction.includes(word)
        ) || lowerInstruction.includes(itemName);
        
        if (hasMatch) {
          ingredientIndices.push(idx);
        }
      });
      
      return ingredientIndices;
    });
  })();

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-stone-950"
    >
      {/* Fixed Image Layer with Dynamic Height */}
      <motion.div 
        style={{ height: imageHeight }}
        className="fixed top-0 left-0 right-0 z-0"
      >
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
      </motion.div>

      {/* Fixed Header Actions with Slide-up Animation */}
      <motion.div 
        style={{ y: headerY }}
        className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center z-50 pointer-events-none"
      >
        <button 
          onClick={onBack}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors pointer-events-auto"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
        <div className="flex gap-3 pointer-events-auto">
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Share2 size={20} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => onSaveToggle && onSaveToggle()}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Heart size={20} strokeWidth={2.5} fill={isSaved ? "white" : "none"} />
          </button>
        </div>
      </motion.div>

      {/* Scrollable Content Layer */}
      <motion.div 
        ref={scrollRef} 
        style={{ y: dragY }}
        className="absolute inset-0 z-10 overflow-y-auto no-scrollbar"
      >
        {/* Spacer to reveal image */}
        <div className="h-[340px]" />
        
        {/* Content Card */}
        <div className="bg-stone-950 rounded-t-[12px] min-h-screen shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative">
          {/* Draggable Handle */}
          <motion.div 
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0}
            dragMomentum={false}
            className="w-full flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing touch-none"
            onDrag={(e, { delta }) => {
              const el = scrollRef.current;
              if (!el) return;

              const currentY = dragY.get();

              // If we're already pulled down OR (at top and pulling down)
              if (currentY > 0 || (el.scrollTop <= 0 && delta.y > 0)) {
                dragY.set(Math.max(0, currentY + delta.y));
              } else {
                // Otherwise, normal scroll
                el.scrollTop -= delta.y;
              }
            }}
            onDragEnd={() => {
              const currentY = dragY.get();
              if (currentY > 0) {
                // Snap back to top
                animate(dragY, 0, { type: "spring", stiffness: 400, damping: 30 });
              }
            }}
          >
            <div className="w-12 h-1.5 bg-stone-700 rounded-full" />
          </motion.div>

          <div className="px-6 pb-12 max-w-2xl mx-auto">
            {/* Header Section: Title, Match, Tags, Desc */}
            <div className="mb-8">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h1 className="text-2xl font-bold text-stone-100 leading-tight tracking-tight">
                  {recipe.title}
                </h1>
                <div className="bg-[#fef0ed] px-3 py-1.5 rounded-full border border-[#fbb8ac] flex-shrink-0">
                  <span className="text-[#8F3224] text-xs font-bold whitespace-nowrap">
                    {recipe.matchScore}% Match
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                {recipe.tags.map((tag, idx) => (
                  <div key={`${tag}-${idx}`} className="bg-stone-800 px-3 py-1.5 rounded">
                    <span className="text-stone-400 text-xs font-medium">{tag}</span>
                  </div>
                ))}
              </div>

              <p className="text-stone-400 text-sm leading-relaxed tracking-tight">
                {recipe.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {/* Time */}
              <div className="bg-stone-900 border border-stone-800 rounded-[7px] py-3 px-1 flex flex-col items-center gap-1">
                <Clock className="text-[#DB5440]" size={20} />
                <span className="text-stone-500 text-xs font-medium">Time</span>
                <span className="text-stone-100 text-sm font-bold">{recipe.time}</span>
              </div>
              
              {/* Calories */}
              <div className="bg-stone-900 border border-stone-800 rounded-[7px] py-3 px-1 flex flex-col items-center gap-1">
                <Flame className="text-[#F06B58]" size={20} />
                <span className="text-stone-500 text-xs font-medium">Calories</span>
                <span className="text-stone-100 text-sm font-bold">{recipe.calories}</span>
              </div>

              {/* Difficulty */}
              <div className="bg-stone-900 border border-stone-800 rounded-[7px] py-3 px-1 flex flex-col items-center gap-1">
                <ChefHat className="text-[#2B7FFF]" size={20} />
                <span className="text-stone-500 text-xs font-medium">Difficulty</span>
                <span className="text-stone-100 text-sm font-bold">{recipe.difficulty}</span>
              </div>
            </div>

            {/* Start Cooking / Cooking Status — inline, sticky to top on scroll */}
            <div className="sticky top-0 z-20 -mx-6 px-6 py-3 bg-stone-950 mb-5">
              <div className="max-w-2xl mx-auto">
                {!cookingMode ? (
                  <button 
                    onClick={startCooking}
                    className="w-full bg-brand-600 text-white font-bold text-lg py-4 rounded-lg shadow-xl shadow-brand-600/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                  >
                    <ChefHat size={22} />
                    Start Cooking
                  </button>
                ) : (() => {
                  const totalTime = stepTimes.reduce((sum, time) => sum + time, 0);
                  const completedTime = stepTimes.slice(0, currentStep).reduce((sum, time) => sum + time, 0);
                  const progressPercent = totalTime > 0 ? (completedTime / totalTime) * 100 : 0;

                  return (
                    <motion.div 
                      onClick={() => currentStep < recipe.instructions.length && advanceStep(currentStep)}
                      className={cn(
                        "relative text-white p-4 rounded-lg shadow-xl flex items-center justify-between transition-all overflow-hidden",
                        currentStep < recipe.instructions.length ? "cursor-pointer active:scale-95" : ""
                      )}
                      style={{
                        background: `linear-gradient(90deg, rgb(22, 24, 32) 0%, rgb(22, 24, 32) 100%)`
                      }}
                    >
                      {/* Animated Progress Fill */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        initial={{ background: `linear-gradient(90deg, rgba(238, 124, 108, 0.14) 0%, rgba(0, 0, 0, 0) 0%)` }}
                        animate={{ 
                          background: `linear-gradient(90deg, rgba(238, 124, 108, 0.14) ${progressPercent}%, rgba(0, 0, 0, 0) ${progressPercent}%)`
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: [0.4, 0.0, 0.2, 1]
                        }}
                      />
                      
                      {/* Content layer on top of progress */}
                      <div className="relative flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F06B58] flex items-center justify-center text-[#3D120C] font-bold">
                          {Math.min(currentStep + 1, recipe.instructions.length)}
                        </div>
                        <div>
                          <p className="text-sm font-bold">Step {Math.min(currentStep + 1, recipe.instructions.length)} of {recipe.instructions.length}</p>
                          <p className="text-xs text-stone-400">Tap to complete step</p>
                        </div>
                      </div>
                      {currentStep >= recipe.instructions.length ? (
                        <div className="relative flex items-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              resetCooking();
                            }} 
                            className="relative text-stone-400 hover:text-stone-200 p-2 transition-colors"
                          >
                            <RotateCcw size={16} />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onBack();
                            }} 
                            className="relative bg-brand-500 text-brand-950 px-4 py-2 rounded font-bold text-sm hover:bg-brand-400 transition-colors"
                          >
                            Done
                          </button>
                        </div>
                      ) : (
                        <div className="relative flex items-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              resetCooking();
                            }} 
                            className="relative text-stone-400 hover:text-stone-200 p-2 transition-colors"
                          >
                            <RotateCcw size={16} />
                          </button>
                          <div className="w-10 h-10 flex items-center justify-center">
                            <ArrowRight size={20} className="text-[#F06B58]" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })()}
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-bold text-stone-100 tracking-tight">Ingredients</h2>
                <span className="text-xs text-stone-500">{recipe.ingredients.length} items</span>
              </div>
              
              <div className="space-y-3">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = checkedIngredients.has(idx);
                  return (
                    <motion.button
                      key={idx}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleIngredient(idx)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-[7px] border transition-all duration-200",
                        isChecked 
                          ? "bg-brand-500/10 border-brand-500/25" 
                          : "bg-stone-900 border-stone-800"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center border transition-colors",
                          isChecked 
                            ? "bg-brand-500 border-brand-500 text-white" 
                            : "border-stone-600 bg-stone-800"
                        )}>
                           {isChecked && <CheckCircle2 size={12} strokeWidth={3} />}
                        </div>
                        <span className={cn(
                          "text-sm font-medium transition-colors",
                          isChecked ? "text-brand-400 line-through opacity-70" : "text-stone-200"
                        )}>
                          {ing.item}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-stone-500">{ing.amount}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Instructions */}
            <div className="pb-8" ref={instructionsRef}>
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-lg font-bold text-stone-100 tracking-tight">Instructions</h2>
              </div>
              
              <div className="space-y-0 relative">
                {/* Connecting Line */}
                <div className="absolute top-4 bottom-8 left-[15px] w-[2px] bg-stone-800" />
                
                {recipe.instructions.map((step, idx) => {
                    const isCompleted = cookingMode && idx < currentStep;
                    const isCurrent = cookingMode && idx === currentStep;
                    const isFuture = cookingMode && idx > currentStep;

                    return (
                      <motion.div 
                        key={idx}
                        id={`step-${idx}`}
                        className={cn(
                            "relative pl-12 min-h-[60px] pb-6 last:pb-0 transition-opacity duration-300",
                            isFuture ? "opacity-40" : "opacity-100",
                            cookingMode ? "cursor-pointer" : ""
                        )}
                        onClick={() => advanceStep(idx)}
                      >
                        {/* Number Bubble */}
                        <div className={cn(
                            "absolute left-0 top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 shadow-sm transition-all duration-300",
                            isCompleted 
                                ? "bg-brand-500 border-brand-500 text-white" 
                                : isCurrent
                                    ? "bg-stone-950 border-brand-500 text-brand-400 scale-110"
                                    : "bg-stone-900 border-stone-700 text-stone-500"
                        )}>
                          {isCompleted ? <CheckCircle2 size={16} /> : <span className="text-xs font-bold">{idx + 1}</span>}
                        </div>
                        
                        {/* Text & Time Chip */}
                        <div className="flex flex-col items-start gap-2">
                          <p className={cn(
                              "text-sm leading-relaxed pt-1 transition-colors",
                              isCompleted ? "text-brand-400 line-through" : "text-stone-300"
                          )}>
                            {step}
                          </p>
                          
                          {/* Ingredient List */}
                          {stepIngredients[idx] && stepIngredients[idx].length > 0 && (
                            <div className="flex flex-wrap items-center gap-1">
                              <span className="text-xs text-stone-500">Ingredients:</span>
                              <span className="text-xs text-stone-400">
                                {stepIngredients[idx].map(ingIdx => recipe.ingredients[ingIdx].item).join(', ')}
                              </span>
                            </div>
                          )}
                          
                          <AnimatePresence>
                            {isCurrent && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0, y: -10 }}
                                  animate={{ opacity: 1, height: "auto", y: 0 }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="bg-[#fdddd7] px-3 py-0.5 rounded flex items-center justify-center mt-1"
                                >
                                  <span className="text-[#8F3224] text-xs font-bold">
                                    {stepTimes[idx]} mins
                                  </span>
                                </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});