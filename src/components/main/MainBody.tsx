import { useRef, useEffect } from "react";
import { useWikiStore } from "../../useWikiStore";
import Heading from "../text-elements/Heading";
import type { ArticleContentTypes } from "../../types/articleTypes";


interface MainBodyProps {
    currentArticle: ArticleContentTypes[]
}


const MainBody = ({
    currentArticle,
}: MainBodyProps) => {

    const { setSectionHeights } = useWikiStore()
    const sectionRefs = useRef<any>({})

    useEffect(() => {
        if(!currentArticle || currentArticle.length === 0) return

        const updateHeights = () => {
            const newHeights: Record<string, number> = {}

            currentArticle.forEach((section) => {
                const element = sectionRefs.current[section.sectionId]

                if(element) {
                    newHeights[section.sectionId] = element.getBoundingClientRect().height
                }
            })
            setSectionHeights(newHeights)
        }

        const resizeObserver = new ResizeObserver(() => updateHeights())
        currentArticle.forEach((section) => {
            const element = sectionRefs.current[section.sectionId]
            if(element) resizeObserver.observe(element)
        })

        updateHeights()
        return () => resizeObserver.disconnect()
    }, [currentArticle, setSectionHeights])

    return (
        <div
            className="
                w-3xl py-6 text-body animate-slide-into-view"
        >
            {
                currentArticle?.map((data) => {
                    return (
                        <div
                            key={data.sectionId}
                            id={data.sectionId}
                            ref={(el) => {
                                sectionRefs.current[data.sectionId] = el
                            }}
                        >
                            <Heading id={data.sectionId}>
                                {data.sectionTitle}
                            </Heading>
                            {data.paragraphs}
                        </div>
                    );
                })
            }
        </div>
    );
}


export default MainBody;