import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";

import CustomizationPanel from "./components/customization/CustomizationPanel";


const App = () => {

  const { theme, font } = useWikiStore()


  useEffect(() => {
    document.documentElement.classList.remove("dark", "night");

    if (theme !== "light") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div
      className={clsx(
        "min-h-screen w-full bg-background text-text",
        "transition-colors duration-300",
        font === "sans" && "font-sans",
        font === "serif" && "font-serif",
        font === "mono" && "font-mono"
      )}
    >
      <div className="font-bold">TEST</div>
      <CustomizationPanel />
    </div>
  );
}

export default App;