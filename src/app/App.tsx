import { Dashboard } from "./components/Dashboard";
import { Toaster } from "./components/ui/sonner";

document.documentElement.classList.add("dark");

export default function App() {
  return (
    <div className="bg-stone-950 min-h-screen">
      <Dashboard />
      <Toaster />
    </div>
  );
}
