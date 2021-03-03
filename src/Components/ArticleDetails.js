import React, { useState, useEffect } from 'react';

const ArticleDetails = ({title, url}) => {

    if (title != null){
    return(
        <>
        
        <h3>
        <a href={url}>{title}</a>
        </h3>
        <p>Article</p>


        </>
    )
    }
    return(
        <p>Article not found</p>
    )
    
}



export default ArticleDetails;