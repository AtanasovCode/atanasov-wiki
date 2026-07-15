import { useWikiStore } from "./useWikiStore";


const App = () => {

  const { bears } = useWikiStore()

  return (
    <div className="min-h-screen w-full bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <div className="font-bold">TEST</div>
    </div>
  );
}

export default App;