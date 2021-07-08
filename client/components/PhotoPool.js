import React, { Component } from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom'

class PhotoPool extends Component {
    
    render() {
        return <div> 
            <Link className="addAdventure" to = "/AddAdventure"> Add Adventure</Link>,
            <div className="photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post} removePhoto={this.props.removePhoto}/>)}
            </div>
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