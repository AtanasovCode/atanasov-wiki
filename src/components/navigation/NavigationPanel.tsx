import { useState, useEffect } from "react"
import { useWikiStore } from "../../useWikiStore"
import type { ArticleContentTypes } from "../../types/articleTypes"

import RulerLines from "./RulerLines"

interface NavigationPanelProps {
    article: ArticleContentTypes[]
}

export const HEIGHT_RATIO: number = 4.5 // Ratio between website height & naivation panel height

const NavigationPanel = ({
    article
}: NavigationPanelProps) => {

    const {
        sectionHeights,
        navigationPanelHeight,
        setNavigationPanelHeight
    } = useWikiStore()
    const [rulerScrollPosition, setRulerScrollPosition] = useState<number>(0)

    useEffect(() => {
        let totalSectionHeight = 0

        for (let key in sectionHeights) {
            const height: number = sectionHeights[key]
            totalSectionHeight += height
        }

        const ratioTotalSectionHeight = totalSectionHeight / HEIGHT_RATIO
        setNavigationPanelHeight(ratioTotalSectionHeight)
    }, [sectionHeights, setNavigationPanelHeight])

    useEffect(() => {
        const handlePageScroll = () => {
            const currentY: number = window.scrollY
            setRulerScrollPosition(currentY / HEIGHT_RATIO)
        }

        window.addEventListener("scroll", handlePageScroll)
        handlePageScroll()

        return () => window.removeEventListener("scroll", handlePageScroll)
    }, [])

    return (
        <div
            className={`lg:mr-8 flex items-end justify-start absolute right-[200%] top-0 md:sticky md:top-8 md:right-0`}
            style={{ height: `${navigationPanelHeight}px` }}
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