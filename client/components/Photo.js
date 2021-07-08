import React, { Component } from 'react'


class Photo extends Component {
    render() {
            const post = this.props.post
            return <div className="figure">
                <img src={post.imageLink} alt={post.description} className="photo"/>
                <p> {post.description} </p> 
                <button onClick={() => {this.props.removePhoto(post)}}> Remove </button>
            </div>
    }
}

export default Photo