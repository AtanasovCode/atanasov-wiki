import { useWikiStore } from "../../useWikiStore"
import type { ArticleContentTypes } from "../../types/articleTypes"

import { HEIGHT_RATIO } from "./NavigationPanel"

interface RulerLinesProps {
    article: ArticleContentTypes[]
}




const RulerLines = ({
    article,
}: RulerLinesProps) => {

    const { sectionHeights } = useWikiStore()

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
                            <div className="h-0.5 flex items-center jusitfy-start gap-2">
                                <div className="whitespace-nowrap">
                                    {section.sectionTitle}
                                </div>
                                <div className="w-6 h-0.5 bg-secondary"></div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RulerLines;