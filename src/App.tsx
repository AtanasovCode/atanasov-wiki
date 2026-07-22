import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";
import { useEffect } from "react";


// UI Elements
import CustomizationPanel from "./components/customization/CustomizationPanel";
import Header from "./components/header/Header";

// Routes
import Home from "./pages/Home";


const App = () => {

  const { theme, font, fontSize, setWebsiteHeight } = useWikiStore()


  useEffect(() => {
    const height = document.body.scrollHeight;
    setWebsiteHeight(height)
  }, [])

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
      <div className="flex flex-1 w-full items-stretch justify-start gap-32">
        <CustomizationPanel />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;