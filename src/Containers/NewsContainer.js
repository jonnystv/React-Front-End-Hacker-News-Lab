import React, { useState, useEffect } from "react"
import ArticleDetails from "../Components/ArticleDetails";


const NewsContainer = () => {

    const [articleIds, setArticleIds] = useState([]);

    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        getArticleIds();
    }, [])

    const getArticleIds = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
            .then(data => setArticleIds(data))
            .catch(err => console.error)
            //TODO
            .then(getAllArticles())
            
                
    }

    const getAllArticles = () => {
        for(let id in articleIds){
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(data => setAllArticles(...allArticles, data))
            .catch(err => console.error);
        }
    }

    const newsNodes = articleIds.slice([0], [10]).map((id) => {
        return(
            <li>
            <ArticleDetails
            articleId={id}
            key={id}
            />
            </li>
            
        )
    })

    return ( 
        <>
        <p>News</p>
        <ul>
        {newsNodes}
        </ul>
        </>
    )
}


export default NewsContainer