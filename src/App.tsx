import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";

const App = () => {

  const { theme } = useWikiStore()

  useEffect(() => {
    document.documentElement.classList.remove("dark", "pure-night");

    if (theme !== "light") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div
      className={clsx(
        "min-h-screen w-full bg-background text-text",
        "transition-colors duration-200"
      )}
    >
      <div className="font-bold">TEST</div>
    </div>
  );
}

export default App;