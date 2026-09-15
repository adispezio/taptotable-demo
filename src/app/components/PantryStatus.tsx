import { Leaf, AlertCircle, CheckCircle2 } from "./icons";

interface PantryStatusProps {
  onClick?: () => void;
}

export function PantryStatus({ onClick }: PantryStatusProps) {
  return (
    <div className="px-6 cursor-pointer" onClick={onClick}>
      <div className="bg-brand-500/10 rounded-lg p-5 text-white relative overflow-hidden group active:scale-[0.98] transition-transform border border-brand-500/20 h-full">
        <div className="relative ">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Leaf size={18} className="text-brand-300" />
                Pantry Status
              </h2>
              <p className="text-brand-200 text-xs mt-1">Last scanned: 2 hours ago</p>
            </div>
            <div className="bg-brand-500/25 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-100 border border-brand-500/30">
              Good
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 bg-brand-400/10 rounded-md p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-brand-100">Fresh</span>
              </div>
              <p className="text-xl font-bold">24</p>
              <p className="text-[10px] text-brand-200">Items</p>
            </div>
            <div className="flex-1 bg-brand-400/10 rounded-md p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-yellow-200">Expiring</span>
              </div>
              <p className="text-xl font-bold text-yellow-100">3</p>
              <p className="text-[10px] text-brand-200">Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}