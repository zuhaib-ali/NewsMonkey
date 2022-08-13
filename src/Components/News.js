import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem'

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalResult, setTotalResult] = useState(0);
  const [totalPages, setTotalPages] = useState(0);


  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updateNews = async()=>{
    let data = await fetch(`${props.apiKey}&page=${page+1}&pageSize=${pageSize}&category=${props.category}`);
    props.setProgress(30);
    let articles = await data.json();
    props.setProgress(60);

    setArticle(article.concat(articles.articles));
    setLoading(false);
    setTotalResult(articles.totalResults);
    setTotalPages(Math.ceil(totalResult/pageSize));
    setPage(page+1);
    props.setProgress(100);
  }

  const moveToTop=()=>{
    window.scrollTo(0,0);
  }

  useEffect(()=>{
    updateNews();
  }, []);

  return (
    <div id="main">
        {/* Loading */}
        {
          loading ? 
          <div className="spinner-border" role="status" style={{zIndex:"100", position:"absolute", left:"50%", top:"50%"}}><span className="sr-only"></span></div> : 
          ""
        }

        <h2 className='text-center m-5'>Welcome - {capitalize(props.category)} Top Headlines  </h2>

        {/* NEWS ITEMS */} 
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
          {article.map((element, index) => {
            return <NewsItem key={index} source={element.source.name} title={element.title.slice(0, 80)} description={element.description !== null? element.description.slice(0,100): element.description} image={element.urlToImage} url={element.url} author={element.author ? element.author : "unknown"} publishedAt={new Date(element.publishedAt).toLocaleString()}></NewsItem>
          })}  
        </div>

        <div style={{display:"flex", justifyContent:"center", margin:"50px 0px"}} hidden={article.length === 0}>
          <button className="btn btn-outline-dark" onClick={updateNews} hidden={page === totalPages}>Load More &darr;</button>
        </div>

        <div style={{display:"flex", justifyContent:"flex-end", textShadow:"0px 0px 5px lightgrey"}}>
          <button className="btn btn-light" onClick={moveToTop}>&Lambda;</button>
        </div>
      </div>
  )
}
