import { useWikiStore } from "../../useWikiStore"
import type { ArticleContentTypes } from "../../types/articleTypes"

import { HEIGHT_RATIO } from "./NavigationPanel"

interface RulerLinesProps {
    article: ArticleContentTypes[]
}



const TICK_SPACING: number = 10
const TICK_HEIGHT: number = 2

const RulerLines = ({
    article,
}: RulerLinesProps) => {

    const { sectionHeights } = useWikiStore()

    const generateTicks = (height: number) => {
        const ticks = []
        const availableHeight: number = height - TICK_HEIGHT // Subtract major tick height
        const tickCount: number = Math.floor(availableHeight / TICK_SPACING)

        for (let i = 0; i < tickCount; i++) {
            ticks.push(
                <div
                    className="w-2 bg-secondary"
                    style={{ height: `${TICK_HEIGHT}px` }}
                ></div>
            );
        }

        return ticks;
    }

    return (
        <div className="h-full w-full flex flex-col items-end justify-end">
            {
                article.map((section) => {
                    const actualHeight = sectionHeights[section.sectionId]
                    const ratioHeight = actualHeight / HEIGHT_RATIO
                    return (
                        <div
                            key={section.sectionId}
                            className="flex items-start justify-start"
                            style={{ height: `${ratioHeight}px` }}
                        >
                            {/* Major Tick */}
                            <div className="h-0.5 flex items-center jusitfy-start gap-2">
                                <div className="whitespace-nowrap">
                                    {section.sectionTitle}
                                </div>
                                <div
                                    className="w-6 bg-secondary"
                                    style={{ height: `${TICK_HEIGHT}px` }}
                                ></div>
                            </div>

                            {/* Minor Tick */}
                            <div className="h-full flex flex-col items-end justify-between">
                                {
                                    generateTicks(ratioHeight)
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RulerLines;