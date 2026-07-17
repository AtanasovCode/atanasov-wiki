import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";

import CustomizationPanel from "./components/customization/CustomizationPanel";
import MainBody from "./components/main/MainBody";


const App = () => {

  const { theme, font, fontSize } = useWikiStore()


  useEffect(() => {
    document.documentElement.classList.remove("dark", "night");

    if (theme !== "light") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.remove("large", "small");

    if (fontSize !== "normal") {
      document.documentElement.classList.add(fontSize);
    }
  }, [fontSize]);

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
      <div className="flex items-start justify-start gap-32">
        <CustomizationPanel />
        <MainBody />
      </div>
    </div>
  );
}

export default App;