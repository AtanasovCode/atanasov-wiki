import { useWikiStore } from "./useWikiStore";


const App = () => {

  const { bears } = useWikiStore()

  return (
    <div className="min-h-screen w-full bg-graphene text-text-dark">
      <p>{bears}</p>
    </div>
  );
}

export default App;