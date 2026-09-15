import { useState } from "react";
import { motion } from "motion/react";
import { 
  User, Mail, Settings as SettingsIcon, 
  Bell, Globe, Trash2, Download, Shield,
  Wheat, Milk, Nut, Egg, Fish, Leaf, Apple,
  ChevronRight
} from "./icons";
import { cn } from "../lib/utils";
import { toast } from "sonner";

interface SettingsViewProps {
}

const DIETARY_RESTRICTIONS = [
  { id: "gluten-free", label: "Gluten-Free", icon: Wheat },
  { id: "dairy-free", label: "Dairy-Free", icon: Milk },
  { id: "nut-free", label: "Nut-Free", icon: Nut },
  { id: "soy-free", label: "Soy-Free", icon: Leaf },
  { id: "egg-free", label: "Egg-Free", icon: Egg },
  { id: "shellfish-free", label: "Shellfish-Free", icon: Fish },
  { id: "vegetarian", label: "Vegetarian", icon: Leaf },
  { id: "vegan", label: "Vegan", icon: Leaf },
  { id: "keto", label: "Keto", icon: Apple },
  { id: "paleo", label: "Paleo", icon: Apple },
  { id: "low-fodmap", label: "Low-FODMAP", icon: Apple },
  { id: "sibo-friendly", label: "SIBO-Friendly", icon: Apple },
  { id: "celiac", label: "Celiac (Strict)", icon: Wheat },
  { id: "whole30", label: "Whole30", icon: Apple },
];

const CUISINES = [
  { id: "italian", label: "Italian" },
  { id: "thai", label: "Thai" },
  { id: "mediterranean", label: "Mediterranean" },
  { id: "japanese", label: "Japanese" },
  { id: "mexican", label: "Mexican" },
  { id: "indian", label: "Indian" },
  { id: "middle-eastern", label: "Middle Eastern" },
  { id: "chinese", label: "Chinese" },
  { id: "american", label: "American" },
  { id: "french", label: "French" },
];

const UNITS = [
  { id: "us", label: "US" },
  { id: "metric", label: "Metric" },
];

export function SettingsView({}: SettingsViewProps) {
  const [dietaryRestrictions, setDietaryRestrictions] = useState<Set<string>>(new Set(["gluten-free", "dairy-free"]));
  const [allergies, setAllergies] = useState<string[]>(["Walnuts", "Shellfish"]);
  const [newAllergy, setNewAllergy] = useState("");
  const [cuisinePreferences, setCuisinePreferences] = useState<Set<string>>(new Set(["italian", "thai", "mediterranean"]));
  const [notifications, setNotifications] = useState({
    pantryExpiry: true,
    recipeSuggestions: false,
    mealPlanAlerts: true,
  });
  const [units, setUnits] = useState("us");

  const toggleDietaryRestriction = (id: string) => {
    setDietaryRestrictions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        toast.success(`${DIETARY_RESTRICTIONS.find(d => d.id === id)?.label} removed`);
      } else {
        newSet.add(id);
        toast.success(`${DIETARY_RESTRICTIONS.find(d => d.id === id)?.label} added`);
      }
      return newSet;
    });
  };

  const addAllergy = () => {
    if (newAllergy.trim()) {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy("");
      toast.success("Allergy added");
    }
  };

  const removeAllergy = (allergy: string) => {
    setAllergies(allergies.filter(a => a !== allergy));
    toast.success("Allergy removed");
  };

  const toggleCuisine = (id: string) => {
    setCuisinePreferences(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-stone-950"
    >
      {/* Header */}
      <div className="lg:sticky lg:top-0 lg:z-30 bg-stone-950 border-b border-stone-800">
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-xl font-bold text-stone-100">Settings & Profile</h1>
        </div>
      </div>

      <div className="px-6 pt-4 space-y-8 max-w-2xl mx-auto">
        {/* Profile Section */}
        <section>
          <div className="bg-stone-900 rounded-lg p-6 border border-stone-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-brand-500/15 flex items-center justify-center border-2 border-stone-800 shadow-lg">
                <User className="text-brand-400" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-stone-100">Alex Chen</h2>
                <div className="flex items-center gap-1 text-sm text-stone-400">
                  <Mail size={14} />
                  <span>alex.chen@email.com</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-stone-800 text-stone-300 font-medium py-3 rounded-md hover:bg-stone-700 transition-colors flex items-center justify-center gap-2">
              <SettingsIcon size={16} />
              Manage Account
            </button>
          </div>
        </section>

        {/* Dietary Restrictions */}
        <section>
          <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">Dietary Restrictions</h3>
          <div className="bg-stone-900 rounded-lg p-4 border border-stone-800">
            <div className="flex flex-wrap gap-2">
              {DIETARY_RESTRICTIONS.map((restriction) => {
                const Icon = restriction.icon;
                const isActive = dietaryRestrictions.has(restriction.id);
                return (
                  <button
                    key={restriction.id}
                    onClick={() => toggleDietaryRestriction(restriction.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border",
                      isActive
                        ? "bg-brand-600 text-white border-brand-600"
                        : "bg-stone-800 text-stone-400 border-stone-700 hover:border-brand-700"
                    )}
                  >
                    <Icon size={14} />
                    {restriction.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Allergies */}
        <section>
          <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">Allergies</h3>
          <div className="bg-stone-900 rounded-lg p-4 border border-stone-800 space-y-3">
            <div className="flex flex-wrap gap-2">
              {allergies.map((allergy) => (
                <div
                  key={allergy}
                  className="bg-rose-900/40 text-rose-400 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border border-rose-800"
                >
                  <span>{allergy}</span>
                  <button
                    onClick={() => removeAllergy(allergy)}
                    className="hover:bg-rose-800 rounded-full p-0.5 transition-colors"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newAllergy}
                onChange={(e) => setNewAllergy(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addAllergy()}
                placeholder="Add an allergy..."
                className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 rounded-md text-sm text-stone-200 placeholder:text-stone-500 outline-none focus:border-brand-500 transition-colors"
              />
              <button
                onClick={addAllergy}
                className="px-4 py-2 bg-brand-600 text-white rounded-md text-sm font-medium hover:bg-brand-500 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </section>

        {/* Cuisine Preferences */}
        <section>
          <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">Cuisine Preferences</h3>
          <div className="bg-stone-900 rounded-lg p-4 border border-stone-800">
            <div className="grid grid-cols-2 gap-2">
              {CUISINES.map((cuisine) => {
                const isActive = cuisinePreferences.has(cuisine.id);
                return (
                  <button
                    key={cuisine.id}
                    onClick={() => toggleCuisine(cuisine.id)}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium transition-all border",
                      isActive
                        ? "bg-brand-500/15 text-brand-400 border-brand-500"
                        : "bg-stone-800 text-stone-400 border-stone-700 hover:border-stone-600"
                    )}
                  >
                    {cuisine.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">Notifications</h3>
          <div className="bg-stone-900 rounded-lg border border-stone-800 divide-y divide-stone-800">
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-500/12 rounded-full flex items-center justify-center">
                  <Bell size={16} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-200">Pantry Expiry Alerts</p>
                  <p className="text-xs text-stone-500">Get notified when items expire</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification("pantryExpiry")}
                className={cn(
                  "w-12 h-7 rounded-full transition-colors relative",
                  notifications.pantryExpiry ? "bg-brand-500" : "bg-stone-700"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                    notifications.pantryExpiry ? "translate-x-6" : "translate-x-1"
                  )}
                />
              </button>
            </div>

            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-500/12 rounded-full flex items-center justify-center">
                  <Apple size={16} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-200">Recipe Suggestions</p>
                  <p className="text-xs text-stone-500">Get daily recipe recommendations</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification("recipeSuggestions")}
                className={cn(
                  "w-12 h-7 rounded-full transition-colors relative",
                  notifications.recipeSuggestions ? "bg-brand-500" : "bg-stone-700"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                    notifications.recipeSuggestions ? "translate-x-6" : "translate-x-1"
                  )}
                />
              </button>
            </div>

            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900/40 rounded-full flex items-center justify-center">
                  <Bell size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-200">Meal Plan Reminders</p>
                  <p className="text-xs text-stone-500">Get reminded to prepare meals</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification("mealPlanAlerts")}
                className={cn(
                  "w-12 h-7 rounded-full transition-colors relative",
                  notifications.mealPlanAlerts ? "bg-brand-500" : "bg-stone-700"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                    notifications.mealPlanAlerts ? "translate-x-6" : "translate-x-1"
                  )}
                />
              </button>
            </div>
          </div>
        </section>

        {/* App Preferences */}
        <section>
          <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">App Preferences</h3>
          <div className="bg-stone-900 rounded-lg border border-stone-800">
            {/* Units */}
            <div className="px-4 py-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-900/40 rounded-full flex items-center justify-center">
                  <Globe size={16} className="text-blue-400" />
                </div>
                <p className="text-sm font-medium text-stone-200">Measurement Units</p>
              </div>
              <div className="flex gap-2">
                {UNITS.map((unitOption) => (
                  <button
                    key={unitOption.id}
                    onClick={() => setUnits(unitOption.id)}
                    className={cn(
                      "flex-1 px-4 py-2 rounded text-xs font-medium transition-all border",
                      units === unitOption.id
                        ? "bg-brand-500/15 text-brand-400 border-brand-500"
                        : "bg-stone-800 text-stone-400 border-stone-700 hover:border-stone-600"
                    )}
                  >
                    {unitOption.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data & Privacy */}
        <section>
          <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">Data & Privacy</h3>
          <div className="bg-stone-900 rounded-lg border border-stone-800 divide-y divide-stone-800">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-stone-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900/40 rounded-full flex items-center justify-center">
                  <Download size={16} className="text-blue-400" />
                </div>
                <p className="text-sm font-medium text-stone-200">Export My Data</p>
              </div>
              <ChevronRight size={20} className="text-stone-600" />
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-stone-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
                  <Shield size={16} className="text-stone-400" />
                </div>
                <p className="text-sm font-medium text-stone-200">Privacy Policy</p>
              </div>
              <ChevronRight size={20} className="text-stone-600" />
            </button>

            <button 
              onClick={() => {
                if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                  toast.error("Account deletion is not available in demo mode");
                }
              }}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-rose-950/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-rose-900/40 rounded-full flex items-center justify-center">
                  <Trash2 size={16} className="text-rose-400" />
                </div>
                <p className="text-sm font-medium text-rose-400">Delete Account</p>
              </div>
              <ChevronRight size={20} className="text-stone-600" />
            </button>
          </div>
        </section>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-xs text-stone-600">TapToTable v1.0.0</p>
          <p className="text-xs text-stone-600 mt-1">Made with love for home cooks</p>
        </div>
      </div>
    </motion.div>
  );
}