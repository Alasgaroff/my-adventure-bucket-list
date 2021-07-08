import React, { Component } from 'react'

class AddAdventure extends Component {
    
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event){
        event.preventDefault();
        const description = event.target.elements.inputCaption.value;
        const imageLink = event.target.elements.inputLink.value;
        const post = {
            id: 4,
            description: description,
            imageLink: imageLink
        };
        if (description && imageLink){
            this.props.addPhoto(post);
        }


    }
    
    render() {
        return (
            <div>
                <h1>Add more Adventures to your Bucket List</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="inputLink"placeholder="please insert your photo url here" />
                        <input type="text" name="inputCaption"placeholder="please add a caption here" />
                        <button className="postButton">POST</button>
                    </form>
                </div>
            </div>)
    }
}

export default AddAdventure