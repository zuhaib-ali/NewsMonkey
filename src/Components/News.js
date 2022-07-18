import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            article:[],
            loading:true,
            page:1,
            pageSize:9,
            totalResult:0,
            totalPages:0
        };        
        
    }
    
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    updateNews = async () => {
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e2ce6e6733a24cd989b53a091c968217&page=${this.state.page+1}&pageSize=${this.state.pageSize}&category=${this.props.category}`);
      let articles = await data.json();
      this.setState({  
        loading:false,
        article:this.state.article.concat(articles.articles),
        totalResult:articles.totalResults,
        totalPages:Math.ceil(this.state.totalResult/this.state.pageSize),
        page:this.state.page+1
      });  
    }

    moveToTop = () => {
      window.scrollTo(0,0);
    }

    async componentDidMount(){
      document.title = `${this.capitalize(this.props.category)}`;
      this.updateNews();
    }

  render() {
    return (
      <div id="main">
        {/* Loading */}
        {
          this.state.loading ? 
          <div className="spinner-border" role="status" style={{zIndex:"100", position:"absolute", left:"50%", top:"50%"}}><span className="sr-only"></span></div> : 
          ""
        }

        <h2 className='text-center m-5'>Welcome - {this.props.category} Top Headlines  </h2>

        {/* NEWS ITEMS */} 
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
          {this.state.article.map((element, index) => {
            return <NewsItem key={index} source={element.source.name} title={element.title.slice(0, 80)} description={element.description !== null? element.description.slice(0,100): element.description} image={element.urlToImage} url={element.url} author={element.author ? element.author : "unknown"} publishedAt={new Date(element.publishedAt).toLocaleString()}></NewsItem>
          })}  
        </div>

        <div style={{display:"flex", justifyContent:"center", margin:"50px 0px"}} hidden={this.state.article.length === 0}>
          <button className="btn btn-outline-dark" onClick={this.updateNews} hidden={this.state.page === this.state.totalPages}>Load More &darr;</button>
        </div>

        <div style={{display:"flex", justifyContent:"flex-end", textShadow:"0px 0px 5px lightgrey"}}>
          <button className="btn btn-light" onClick={this.moveToTop}>&Lambda;</button>
        </div>
      </div>
    )
  }
}
