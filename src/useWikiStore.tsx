import { create } from "zustand"


// Define types for state & actions
interface WikiState {
  theme: string
  setTheme: (theme: string) => void

  font: string
  setFont: (font: string) => void

  fontSize: string
  setFontSize: (size: string) => void

  websiteHeight: number
  setWebsiteHeight: (height: number) => void

  sectionHeights: Record<string, number>
  setSectionHeights: (height: Record<string, number>) => void
}



// Create store using the curried form of `create`
export const useWikiStore = create<WikiState>()((set) => ({
  // ----------------------------------------------------- Website Customization
  theme: "dark",
  setTheme: (theme) => set(() => ({ theme })),
  font: "sans",
  setFont: (font) => set(() => ({ font })),
  fontSize: "normal",
  setFontSize: (fontSize) => set(() => ({ fontSize })),

  // ----------------------------------------------------- Website Element Heights
  websiteHeight: 0,
  setWebsiteHeight: (websiteHeight) => set(() => ({ websiteHeight })),
  sectionHeights: {},
  setSectionHeights: (sectionHeights) => set(() => ({ sectionHeights })),
}))