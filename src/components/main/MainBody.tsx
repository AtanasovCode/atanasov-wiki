import { useRef } from "react";
import Heading from "../text-elements/Heading";
import type { ArticleContentTypes } from "../../types/articleTypes";


interface MainBodyProps {
    currentArticle: ArticleContentTypes[]
}


const MainBody = ({
    currentArticle,
}: MainBodyProps) => {

    const sectionRefs = useRef<any>({})

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