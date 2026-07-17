import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";

import CustomizationPanel from "./components/customization/CustomizationPanel";
import MainBody from "./components/main/MainBody";
import Header from "./components/header/Header";


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
        "flex flex-col items-start justify-start",
        font === "sans" && "font-sans",
        font === "serif" && "font-serif",
        font === "mono" && "font-mono"
      )}
    >
      <Header />
      <div className="flex flex-1 w-full items-stretch justify-start gap-x-16">
        <CustomizationPanel />
        <MainBody />
      </div>
    </div>
  );
}

export default App;