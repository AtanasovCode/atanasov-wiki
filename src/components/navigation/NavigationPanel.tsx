import { useEffect, useState } from "react"
import { useWikiStore } from "../../useWikiStore"

import RulerLines from "./RulerLines"

interface SectionProps {
    id: string
    title: string
    content: React.ReactNode
}

interface NavigationPanelProps {
    sections: SectionProps[]
}


const HEIGHT_RATIO: number = 4.5

const NavigationPanel = ({
    sections
}: NavigationPanelProps) => {

    const { websiteHeight } = useWikiStore()

    const [rulerScrollPosition, setRulerScrollPosition] = useState<number>(0)

    const panelHeight = websiteHeight / HEIGHT_RATIO

    document.addEventListener("scroll", () => {
        const scrollPercentage: number = window.scrollY
            / (document.documentElement.scrollHeight - window.innerHeight);

        setRulerScrollPosition(scrollPercentage * panelHeight)

    })


    return (
        <div
            className={`mr-8 mt-8 sticky top-8 transition-all duration-500`}
            style={{ height: `${panelHeight}px` }}
        >
            <RulerLines sections={sections} />
            <div
                className="w-6 h-0.5 bg-text absolute right-0"
                style={{ top: `${rulerScrollPosition}px` }}
            >
                {/* Line that tracks current position of the page on the ruler  */}
            </div>
        </div >
    );
}

export default NavigationPanel;