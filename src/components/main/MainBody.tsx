import Heading from "../text-elements/Heading";
import type { ArticleContentTypes } from "../../types/articleTypes";


interface MainBodyProps {
    currentArticle: ArticleContentTypes[]
}


const MainBody = ({
    currentArticle,
}: MainBodyProps) => {
    return (
        <div
            className="
                w-3xl py-6 text-body animate-slide-into-view"
        >
            {
                currentArticle?.map((data) => {
                    return (
                        <div>
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