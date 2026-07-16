import { create } from "zustand"


// Define types for state & actions
interface WikiState {
  theme: string
  setTheme: (theme: string) => void

  font: string
  setFont: (font: string) => void
}



// Create store using the curried form of `create`
export const useWikiStore = create<WikiState>()((set) => ({
  theme: "dark",
  setTheme: (theme) => set(() => ({ theme })),
  font: "sans",
  setFont: (font) => set(() => ({ font })),
}))