import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";

import CustomizationPanel from "./components/customization/CustomizationPanel";


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
      <div className="flex items-start justify-start gap-4">
        <CustomizationPanel />
        <div className="w-3xl mt-32 text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero voluptatum dolores soluta accusantium, explicabo error nulla illum. Sunt rerum porro ullam voluptas aperiam minus eos? Ipsam placeat quas dolor. Maxime aliquid repudiandae ad possimus, ipsum quibusdam quae dolores a. Quae, beatae? Aspernatur temporibus quas nesciunt quisquam nulla qui ea eaque autem in, culpa fuga fugit optio! Dolor dignissimos cupiditate eius in enim molestias, tempora nostrum voluptatibus laborum animi perferendis esse ab ipsam. Corrupti earum odio ullam adipisci error maxime officia molestiae voluptas expedita saepe?
        </div>
      </div>
    </div>
  );
}

export default App;