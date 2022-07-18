import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
        <div className="card" style={{width:"320px", margin:"20px 0px"}}>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning" style={{zIndex:"50"}}>{this.props.source}</span>
            
            {/* Image */}
            <img src={this.props.image} className="card-img-top" alt="..."/>
            
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
            </div>

            {/* Author and Published Date */}
            <p className="card-text d-flex justify-content-between mx-2">
              <small className="text-muted">{this.props.author}</small>
              <small className="text-muted">{this.props.publishedAt}</small>
            </p>
            <a href={this.props.url} className="btn btn-dark btn-sm m-2">View</a>
        </div>
    )
  }
}
