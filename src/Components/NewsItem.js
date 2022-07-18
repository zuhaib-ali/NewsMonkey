import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
        <div class="card" style={{width: "20rem", margin:"10px"}}>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning" style={{zIndex:"50"}}>{this.props.source}</span>
            
            {/* Image */}
            <img src={this.props.image} class="card-img-top" alt="..."/>
            
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.description}</p>
            </div>

            {/* Author and Published Date */}
            <p class="card-text d-flex justify-content-between mx-2">
              <small class="text-muted">{this.props.author}</small>
              <small class="text-muted">{this.props.publishedAt}</small>
            </p>
            <a href={this.props.url} class="btn btn-dark btn-sm m-2">View</a>
        </div>
    )
  }
}
