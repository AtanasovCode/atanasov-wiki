import { useState, useEffect } from "react"
import { useWikiStore } from "../../useWikiStore"
import type { ArticleContentTypes } from "../../types/articleTypes"

import RulerLines from "./RulerLines"

interface NavigationPanelProps {
    article: ArticleContentTypes[]
}

const HEIGHT_RATIO: number = 4.5

const NavigationPanel = ({
    article
}: NavigationPanelProps) => {

    const { websiteHeight } = useWikiStore()
    const [rulerScrollPosition, setRulerScrollPosition] = useState<number>(0)
    const panelHeight = websiteHeight / HEIGHT_RATIO

    useEffect(() => {
        const handlePageScroll = () => {
            const scrollPercentage: number = window.scrollY
                / (document.documentElement.scrollHeight - window.innerHeight);

            setRulerScrollPosition(scrollPercentage * panelHeight)
        }

        document.addEventListener("scroll", handlePageScroll)
        handlePageScroll()

        return () => window.removeEventListener("scroll", handlePageScroll)
    }, [panelHeight, websiteHeight])


    return (
        <div
            className={`mr-8 mt-8 sticky top-8 transition-all duration-500`}
            style={{ height: `${panelHeight}px` }}
        >
            <RulerLines article={article} />
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