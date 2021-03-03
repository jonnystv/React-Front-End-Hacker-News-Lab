import React, { useState, useEffect } from 'react';

const ArticleDetails = ({articleId}) => {

    const [articleDetails, setArticleDetails] = useState([])


    const getArticleDetails = () => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
        .then(res => res.json())
        .then(data => setArticleDetails(data))
        .catch(err => console.error);
    }

    useEffect(() => {
        getArticleDetails();
    })

    return(
        <>
        <h3>
        <a href={articleDetails.url}>{articleDetails.title}</a>
        </h3>


        </>
    )
    
}



export default ArticleDetails;