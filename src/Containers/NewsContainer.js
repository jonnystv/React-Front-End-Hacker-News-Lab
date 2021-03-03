import React, { useState, useEffect } from "react"
import ArticleList from "./ArticleList";


const NewsContainer = () => {

    const [articleIds, setArticleIds] = useState([]);

    // const [allArticles, setAllArticles] = useState([]);

    // let newsNodes = []

    useEffect(() => {
        getArticleIds();
    }, [])

    // useEffect(() => {
    //     getAllArticles()
    // }, [articleIds])

    // useEffect(() => {
    //     newsNodes = createNewsNodes()
    // }, [allArticles])

    const getArticleIds = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
            .then(data => setArticleIds(data))
            .catch(err => console.error)            
    }


    // const getAllArticles = () => {
        
    //     const articleList = []
    //     for(let id in articleIds.slice){
    //         fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    //         .then(res => res.json())
    //         .then(data => articleList.push(data))
    //         .catch(err => console.error);
    //     }
    //     setAllArticles(articleList)
    // }

    // const createNewsNodes = () => {

        // return(
        //  allArticles.map((article, index) => {
        //     return(
        //         <li>
        //         <ArticleDetails
        //         article={article}
        //         key={index}
        //         />
        //         </li> 
        //     )}
        //  ))}

    return ( 
        <>
        <p>News</p>
        <ArticleList articleIds = {articleIds}></ArticleList>
        </>
    )
}

export default NewsContainer