import React, { Component } from 'react'
import Photo from './Photo'

class PhotoPool extends Component {
    render() {
        return <div className="photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
        </div>
    }
}

// OR stateless function version
// function PhotoPool(props){
//     return <div className="photoGrid">
//     {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
// </div>
// }


export default PhotoPool