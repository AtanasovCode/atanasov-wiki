import { useWikiStore } from "./useWikiStore";
import clsx from "clsx";


const App = () => {

  const { theme } = useWikiStore()

  return (
    <div
      className={clsx(
        "min-h-screen w-full bg-background-light text-text-light",
        "dark:bg-background-dark dark:text-text-dark",
        theme == "dark" && "dark"
      )}
    >
      <div className="font-bold">TEST</div>
    </div>
  );
}

export default App;