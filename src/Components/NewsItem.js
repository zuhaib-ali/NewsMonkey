import React from 'react'

export default function NewsItem(props) {
  return (
    <div className="card" style={{width:"320px", margin:"20px 0px"}}>
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning" style={{zIndex:"1"}}>{props.source}</span>
      
      {/* Image */}
      <img src={props.image} className="card-img-top" alt="..."/>
      
      <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
      </div>

      {/* Author and Published Date */}
      <p className="card-text d-flex justify-content-between mx-2">
        <small className="text-muted">{props.author}</small>
        <small className="text-muted">{props.publishedAt}</small>
      </p>
      <a href={props.url} className="btn btn-dark btn-sm m-2">View</a>
    </div>
  )
}
