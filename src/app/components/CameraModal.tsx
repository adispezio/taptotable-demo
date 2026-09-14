import { X, Camera, Zap, Barcode, ScanLine, FileText, Check, Trash2, Plus, Minus, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { PantryItem } from "../data/pantry";
import { Button } from "./ui/button";

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddItems: (items: Omit<PantryItem, "id" | "status">[]) => void;
}

type ScanMode = "barcode" | "label" | "receipt";

interface ScannedItem extends Omit<PantryItem, "id" | "status"> {
  tempId: string;
  confidence: number;
}

const MOCK_SCANNED_RESULTS: Record<ScanMode, ScannedItem[]> = {
  barcode: [
    { tempId: "b1", name: "Oat Milk", category: "Dairy", quantity: 1, unit: "carton", expiryDate: "2025-12-15", confidence: 0.98 }
  ],
  label: [
    { tempId: "l1", name: "Honeycrisp Apples", category: "Produce", quantity: 4, unit: "pcs", expiryDate: "2025-12-10", confidence: 0.85 }
  ],
  receipt: [
    { tempId: "r1", name: "Large Eggs", category: "Dairy", quantity: 12, unit: "pcs", expiryDate: "2025-12-20", confidence: 0.95 },
    { tempId: "r2", name: "Baby Spinach", category: "Produce", quantity: 1, unit: "bag", expiryDate: "2025-11-30", confidence: 0.92 },
    { tempId: "r3", name: "Ground Beef", category: "Protein", quantity: 1, unit: "lb", expiryDate: "2025-11-28", confidence: 0.88 },
    { tempId: "r4", name: "Pasta Sauce", category: "Grains", quantity: 1, unit: "jar", expiryDate: "2026-05-15", confidence: 0.75 }, // Low confidence category
  ]
};

export function CameraModal({ isOpen, onClose, onAddItems }: CameraModalProps) {
  const [mode, setMode] = useState<ScanMode>("barcode");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState<"camera" | "processing" | "review">("camera");
  const [items, setItems] = useState<ScannedItem[]>([]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setScanStep("camera");
      setItems([]);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleCapture = () => {
    setIsScanning(true);
    setScanStep("processing");
    
    // Simulate AI Processing
    setTimeout(() => {
      setItems(MOCK_SCANNED_RESULTS[mode]);
      setIsScanning(false);
      setScanStep("review");
    }, 2000);
  };

  const handleSave = () => {
    // Remove tempId and confidence before saving
    const itemsToSave = items.map(({ tempId, confidence, ...rest }) => rest);
    onAddItems(itemsToSave);
    onClose();
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(i => i.tempId !== id));
  };

  const updateItem = (id: string, updates: Partial<ScannedItem>) => {
    setItems(items.map(i => i.tempId === id ? { ...i, ...updates } : i));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex flex-col bg-black"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 text-white z-10">
              <button onClick={onClose} className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                <X size={24} />
              </button>
              {scanStep === "review" ? (
                <span className="font-bold text-lg">Review Items</span>
              ) : (
                 <div className="bg-black/50 px-4 py-1 rounded-full text-sm font-medium border border-white/20 flex items-center gap-2">
                   {scanStep === "processing" && <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />}
                   {scanStep === "processing" ? "AI Processing..." : "Scanner Ready"}
                 </div>
              )}
              <button className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                <Zap size={24} className={scanStep === "review" ? "opacity-0" : ""} />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative overflow-hidden bg-stone-900 border-y border-stone-800">
              
              {/* CAMERA VIEW */}
              {scanStep !== "review" && (
                <div className="absolute inset-0">
                   {/* Fake camera feed */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-center justify-center">
                       <p className="text-stone-500 text-sm">Simulated Camera Feed</p>
                   </div>
                   
                   {/* Scanning Overlay */}
                   <AnimatePresence>
                     {scanStep === "processing" && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white"
                        >
                             <div className="w-16 h-16 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4"/>
                             <p className="font-medium">Analyzing...</p>
                             <p className="text-sm text-white/60 mt-2">Identifying items & expiry</p>
                        </motion.div>
                     )}
                   </AnimatePresence>
                   
                   {/* Reticle */}
                   {!isScanning && (
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-64 h-64 border-2 border-white/50 rounded-md relative">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-brand-500 -mt-1 -ml-1"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-brand-500 -mt-1 -mr-1"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-brand-500 -mb-1 -ml-1"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-brand-500 -mb-1 -mr-1"></div>
                            
                            {/* Mode Hint */}
                            <div className="absolute -bottom-8 left-0 right-0 text-center text-white/80 text-sm font-medium">
                                {mode === "barcode" && "Align barcode within frame"}
                                {mode === "label" && "Capture product label text"}
                                {mode === "receipt" && "Capture entire receipt"}
                            </div>
                          </div>
                       </div>
                   )}
                </div>
              )}

              {/* REVIEW VIEW */}
              {scanStep === "review" && (
                  <div className="absolute inset-0 overflow-y-auto bg-stone-50 p-4 space-y-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {items.map(item => (
                          <div key={item.tempId} className="bg-white p-4 rounded-lg shadow-sm border border-stone-100 flex gap-3 items-start animate-in slide-in-from-bottom-4 fade-in duration-500">
                              {/* Edit Inputs */}
                              <div className="flex-1 space-y-2">
                                  <div className="flex justify-between">
                                      <input 
                                        value={item.name}
                                        onChange={(e) => updateItem(item.tempId, { name: e.target.value })}
                                        className="font-bold text-stone-900 bg-transparent border-b border-transparent focus:border-brand-500 outline-none w-full"
                                      />
                                      {item.confidence < 0.8 && (
                                          <span className="text-[10px] bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded font-medium h-fit whitespace-nowrap ml-2">
                                              Check details
                                          </span>
                                      )}
                                  </div>
                                  
                                  <div className="flex gap-2">
                                      <div className="flex items-center bg-stone-100 rounded h-8 px-1">
                                          <button 
                                            onClick={() => updateItem(item.tempId, { quantity: Math.max(0.1, item.quantity - 0.5) })}
                                            className="w-6 h-full flex items-center justify-center text-stone-500 active:scale-90"
                                          >
                                              <Minus size={12} />
                                          </button>
                                          <span className="text-xs font-semibold w-8 text-center">{item.quantity}</span>
                                          <button 
                                            onClick={() => updateItem(item.tempId, { quantity: item.quantity + 0.5 })}
                                            className="w-6 h-full flex items-center justify-center text-stone-500 active:scale-90"
                                          >
                                              <Plus size={12} />
                                          </button>
                                      </div>
                                      <select 
                                        value={item.unit}
                                        onChange={(e) => updateItem(item.tempId, { unit: e.target.value })}
                                        className="bg-stone-100 text-xs font-medium rounded px-2 h-8 outline-none"
                                      >
                                          {["pcs", "lbs", "oz", "bag", "carton", "jar", "can", "gal", "box"].map(u => (
                                              <option key={u} value={u}>{u}</option>
                                          ))}
                                      </select>
                                      <input 
                                        type="date"
                                        value={item.expiryDate}
                                        onChange={(e) => updateItem(item.tempId, { expiryDate: e.target.value })}
                                        className="bg-stone-100 text-xs font-medium rounded px-2 h-8 outline-none text-stone-600"
                                      />
                                  </div>
                              </div>
                              
                              <button 
                                onClick={() => handleDeleteItem(item.tempId)}
                                className="text-stone-300 hover:text-red-500 p-1"
                              >
                                  <Trash2 size={18} />
                              </button>
                          </div>
                      ))}
                      <div className="h-20" />
                  </div>
              )}
            </div>

            {/* Footer Controls */}
            <div className="h-44 bg-black flex flex-col items-center justify-center px-6 pb-6">
               {scanStep === "camera" ? (
                   <>
                       {/* Mode Selector */}
                       <div className="flex gap-6 mb-6 text-sm font-medium text-stone-400">
                           {(["barcode", "label", "receipt"] as ScanMode[]).map((m) => (
                               <button
                                key={m}
                                onClick={() => setMode(m)}
                                className={cn(
                                    "uppercase tracking-wider transition-colors",
                                    mode === m ? "text-brand-400" : "hover:text-white"
                                )}
                               >
                                   {m}
                               </button>
                           ))}
                       </div>
                       
                       {/* Shutter Button */}
                       <div className="flex items-center justify-center gap-8 w-full">
                           <div className="w-12" /> {/* Spacer */}
                           <button 
                             onClick={handleCapture}
                             className="w-20 h-20 rounded-full border-4 border-white p-1 relative group active:scale-95 transition-all"
                           >
                              <div className="w-full h-full bg-white rounded-full group-active:scale-90 transition-transform duration-100" />
                           </button>
                           <div className="w-12 flex justify-center">
                               <button className="text-white/80 hover:text-white">
                                   {/* Gallery/Import placeholder */}
                               </button>
                           </div>
                       </div>
                   </>
               ) : scanStep === "review" ? (
                   <div className="w-full flex gap-3">
                       <Button 
                         variant="outline" 
                         className="flex-1 h-14 rounded-md border-stone-700 text-white hover:bg-stone-800 hover:text-white bg-transparent"
                         onClick={() => setScanStep("camera")}
                       >
                           Rescan
                       </Button>
                       <Button 
                         className="flex-1 h-14 rounded-md bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg"
                         onClick={handleSave}
                       >
                           Add {items.length} Items
                       </Button>
                   </div>
               ) : null}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}