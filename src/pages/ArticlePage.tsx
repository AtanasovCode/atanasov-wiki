import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/text-elements/Heading";

// import MainBody from "../components/main/MainBody";
// import NavigationPanel from "../components/navigation/NavigationPanel";


import allArticles from "../articles/articles";

const ArticlePage = () => {

    const { id, name } = useParams()

    const [currentArticle, setCurrentArticle] = useState<any>();

    useEffect(() => {

        const parsedID: number = parseInt(id ?? "")

        allArticles.map((a) => {
            if(a.id === parsedID) {
                setCurrentArticle(a.content)
            }
        })
    }, [id, name])

    return (
        <div className="w-full flex items-start justify-between">
            {/* <MainBody />
            <NavigationPanel sections={myInfo} /> */}
            {
                currentArticle?.map((article: any) => {
                    return (
                        <div>
                            <Heading id={article.sectionId}>
                                {article.sectionTitle}
                            </Heading>
                            {article.paragraphs}
                        </div>
                    );
                })
            }
        </div>
    );
}


export default ArticlePage;