import { useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { PantryStatus } from "./PantryStatus";
import { RecentlySaved } from "./RecentlySaved";
import { CameraModal } from "./CameraModal";
import { RecipeDetail, DetailedRecipe } from "./RecipeDetail";
import { PantryDetail } from "./PantryDetail";
import { SavedRecipesView } from "./SavedRecipesView";
import { SettingsView } from "./SettingsView";
import { TrendingFeed } from "./TrendingFeed";
import { DesktopSidebar } from "./DesktopSidebar";
import { RECIPES } from "../data/recipes";
import { MOCK_PANTRY_ITEMS, PantryItem } from "../data/pantry";
import { useIsDesktop } from "./ui/use-mobile";
import { toast } from "sonner";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<DetailedRecipe | null>(null);
  const [pantryItems, setPantryItems] = useState<PantryItem[]>(MOCK_PANTRY_ITEMS);
  const isDesktop = useIsDesktop();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [savedRecipeIds, setSavedRecipeIds] = useState<Set<string>>(
    new Set(["1", "2", "5", "41"]) // Pre-save a few recipes for demo
  );
  const hasNavigatedRef = useRef(false);
  const [previousTab, setPreviousTab] = useState("home");

  // Get saved recipes
  const savedRecipes = RECIPES.filter(r => savedRecipeIds.has(r.id));

  // Get recently saved recipes (most recently added first)
  const recentlySavedRecipes = [...savedRecipeIds]
    .reverse()
    .map(id => RECIPES.find(r => r.id === id))
    .filter((r): r is DetailedRecipe => r !== undefined);

  const handleRecipeClick = useCallback((recipe: DetailedRecipe) => {
    setPreviousTab(activeTab);
    setSelectedRecipe(recipe);
  }, [activeTab]);

  const toggleSaveRecipe = (recipeId: string) => {
    setSavedRecipeIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(recipeId)) {
        newSet.delete(recipeId);
        toast.success("Recipe removed from saved");
      } else {
        newSet.add(recipeId);
        toast.success("Recipe saved");
      }
      return newSet;
    });
  };

  const handleAddPantryItems = (newItems: Omit<PantryItem, "id" | "status">[]) => {
      const itemsToAdd = newItems.map(item => {
          const id = Math.random().toString(36).substr(2, 9);
          const today = new Date();
          const expiry = new Date(item.expiryDate);
          const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          
          let status: "good" | "expiring" | "expired" = "good";
          if (diffDays < 0) status = "expired";
          else if (diffDays <= 3) status = "expiring";

          return { ...item, id, status };
      });

      setPantryItems(prev => [...itemsToAdd, ...prev]);
      toast.success(`Added ${itemsToAdd.length} items to pantry`);
  };

  return (
    <div className="min-h-screen w-full bg-stone-950 text-stone-100 relative">
      <AnimatePresence mode="wait">
        {selectedRecipe ? (
          <motion.div
            key="recipe-detail"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40"
          >
            <RecipeDetail
              recipe={selectedRecipe}
              onBack={() => setSelectedRecipe(null)}
              isSaved={savedRecipeIds.has(selectedRecipe.id)}
              onSaveToggle={() => toggleSaveRecipe(selectedRecipe.id)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-dashboard"
            initial={false}
            animate={{ opacity: 1 }}
            className="min-h-screen"
          >
            {/* Desktop sidebar — hidden on mobile */}
            <DesktopSidebar
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onScanClick={() => setIsCameraOpen(true)}
              expanded={sidebarExpanded}
              onToggleExpanded={() => setSidebarExpanded(prev => !prev)}
            />

            {/* Main content area — shifts right on desktop for sidebar */}
            <motion.div
              initial={false}
              animate={{ paddingLeft: isDesktop ? (sidebarExpanded ? 220 : 72) : 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="min-h-screen"
            >
              {/* Top menu — always on mobile; desktop home keeps the existing dashboard bar */}
              <div className={activeTab === "home" ? undefined : "lg:hidden"}>
                <Header activeTab={activeTab} onTabChange={setActiveTab} onScanClick={() => setIsCameraOpen(true)} />
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait" initial={false}>
                {activeTab === "home" && (
                  <div key="home" className="lg:pb-8">
                    <div className="space-y-1 lg:pt-6">
                      <div className="mb-6 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0">
                        <PantryStatus onClick={() => setActiveTab("pantry")} />
                        <div className="hidden lg:block">
                          <RecentlySaved
                            recipes={recentlySavedRecipes}
                            onRecipeClick={handleRecipeClick}
                            onSeeAll={() => setActiveTab("saved")}
                          />
                        </div>
                      </div>
                      <TrendingFeed
                        savedRecipeIds={savedRecipeIds}
                        onSaveToggle={toggleSaveRecipe}
                        onRecipeClick={(recipe) => handleRecipeClick(recipe)}
                      />
                    </div>
                  </div>
                )}

                {activeTab === "pantry" && (
                  <motion.div
                    key="pantry"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="lg:pb-8"
                  >
                    <PantryDetail
                      items={pantryItems}
                      setItems={setPantryItems}
                    />
                  </motion.div>
                )}

                {activeTab === "saved" && (
                  <motion.div
                    key="saved"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="lg:pb-8"
                    onAnimationStart={() => { hasNavigatedRef.current = true; }}
                  >
                    <SavedRecipesView
                      savedRecipes={savedRecipes}
                      onRecipeClick={(recipe) => handleRecipeClick(recipe)}
                      onUnsave={(recipeId) => toggleSaveRecipe(recipeId)}
                    />
                  </motion.div>
                )}

                {activeTab === "settings" && (
                  <motion.div
                    key="settings"
                    initial={hasNavigatedRef.current ? { opacity: 0 } : false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SettingsView />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Camera modal — stays as overlay */}
            <CameraModal 
              isOpen={isCameraOpen} 
              onClose={() => setIsCameraOpen(false)} 
              onAddItems={handleAddPantryItems}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}