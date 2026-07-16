import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";

import ThemeToggle from "./components/ThemeToggle";


const App = () => {

  const { theme } = useWikiStore()


  useEffect(() => {
    document.documentElement.classList.remove("dark", "blackout");

    if (theme !== "light") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div
      className={clsx(
        "min-h-screen w-full bg-background text-text",
        "transition-colors duration-300"
      )}
    >
      <div className="font-bold">TEST</div>
      <ThemeToggle />
    </div>
  );
}

export default App;