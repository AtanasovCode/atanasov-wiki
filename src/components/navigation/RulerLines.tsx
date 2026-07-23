import type { ArticleContentTypes } from "../../types/articleTypes"

interface RulerLinesProps {
    article: ArticleContentTypes[]
}




const RulerLines = ({
    article,
}: RulerLinesProps) => {
    const lines = []

    for (let i = 0; i < article.length * 10; i++) {
        if (i % 10 === 0) {
            const sectionIndex = i / 10

            if (sectionIndex < article.length) {
                lines.push(
                    <div
                        key={i}
                        className="w-full h-0.5 flex items-center justify-end gap-2"
                    >
                        <div className="whitespace-nowrap">
                            {article[sectionIndex].sectionTitle}
                        </div>
                        <div className="w-6 h-0.5 bg-secondary"></div>
                    </div>
                )
            }
        }
        else {
            lines.push(
                <div key={i} className="w-full h-0.5 flex justify-end">
                    <div className="w-2 h-0.5 bg-secondary"></div>
                </div>
            )
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-end justify-between pl-4">
            {lines}
        </div>
    );
}

export default RulerLines;