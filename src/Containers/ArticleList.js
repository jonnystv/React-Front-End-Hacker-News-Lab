import React, {useEffect, useState} from "react"
import ArticleDetails from "../Components/ArticleDetails";

const ArticleList = ({articleIds}) => {

    const [allArticles, setAllArticles] = useState([]);

    let newsNodes = []

    useEffect(() => {
        newsNodes = createNewsNodes()
    }, allArticles)

    const getAllArticles = () => {
        
        const articleList = []
        for(let id in articleIds){
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(data => articleList.push(data))
            .catch(err => console.error);
        }
        setAllArticles(articleList)
    }

    const createNewsNodes = () => {

        return(
        allArticles.map((article) => {
        return(
            <ArticleDetails title={article.title} url={article.url} key={article.id}></ArticleDetails>
        )
    }) )
    }

    

    return (
             {newsNodes}
    )
}

export default ArticleList