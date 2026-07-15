import { create } from "zustand"


// Define types for state & actions
interface WikiState {
  bears: number
  food: string
  feed: (food: string) => void
  theme: string
}

// Create store using the curried form of `create`
export const useWikiStore = create<WikiState>()((set) => ({
  bears: 2,
  food: 'honey',
  feed: (food) => set(() => ({ food })),
  theme: "pure-night",
}))