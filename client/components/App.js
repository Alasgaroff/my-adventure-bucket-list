import React, { Component } from 'react'
import Title from './Title'
import PhotoPool from './PhotoPool'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [{
        id: '0', 
        description: "Baku, Azerbaijan", 
        imageLink: "https://arabiangazette.com/wp-content/uploads/2016/08/1059.jpg"
      }, {
        id: '1', 
        description: "Berlin, Germany", 
        imageLink: "https://i.natgeofe.com/n/9e138c12-712d-41d4-9be9-5822a3251b5a/brandenburggate-berlin-germany.jpg"
      }, {
        id: '2', 
        description: "Los Angeles, California", 
        imageLink: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/1d/b8.jpg"
      }]
    }
  }

  removePhoto(postRemoved){
    console.log(postRemoved.description)

  }
  
  render() {
    return <div>
      <Title/> 
      <PhotoPool posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
      </div>
    }
  }

      export default App