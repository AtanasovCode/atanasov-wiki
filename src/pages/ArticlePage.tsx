import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { ArticleContentTypes } from "../types/articleTypes";

import MainBody from "../components/main/MainBody";
import NavigationPanel from "../components/navigation/NavigationPanel";


import allArticles from "../articles/articles";

const ArticlePage = () => {

    const { id, name } = useParams()

    const [currentArticle, setCurrentArticle] = useState<ArticleContentTypes[]>([]);

    useEffect(() => {

        const parsedID: number = parseInt(id ?? "")

        allArticles.map((a) => {
            if (a.id === parsedID && a.articleName === name) {
                setCurrentArticle(a.content)
            }
        })
    }, [id, name])

    return (
        <div className="w-full flex items-start justify-between">
            <MainBody currentArticle={currentArticle} />
            <NavigationPanel article={currentArticle} />
        </div>
    );
}


export default ArticlePage;