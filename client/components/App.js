import React, { Component } from 'react'
import Title from './Title'
import PhotoPool from './PhotoPool'
import AddAdventure from './addAdventure'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
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

    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  removePhoto(postRemoved) {
    console.log('this adventure was removed:', postRemoved.description)
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

  addPhoto(postSubmitted){
    console.log('this adventure was added:', postSubmitted.description)
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted])
    }))
  }

  // while components fetches the data from DB it will render initial state
  // that was initialized to an empty array
  // as soon as componentDidMount gets the data fro invokation of fetch function
  // it triggers the render method and runs it with updated props
  // componentDidMount() {
  //   const data = simulationOfFetchData();
  //   this.setState({
  //     posts: data
  //   })

  // }

  render() {
    return (
      <div>
        < Route exact path="/" render={() => (
          <div>
            <Title />
            <PhotoPool posts={this.state.posts} removePhoto={this.removePhoto} />
          </div>
        )} />,

        < Route exact path="/AddAdventure" render={({history}) => (
          <div>
            <AddAdventure addPhoto={(addedPost) => {
              this.addPhoto(addedPost) 
              history.push('/')
              }}/>
          </div>
        )} />
      </div>
    )
  }
}

// function that will fetch data from DB and passed in to componentDidMount lifecycle
// function simulationOfFetchData() {
//   // if we had DB created, we could fetch and return below data from DB by using url
//   // currently I will hard code my DB
//   return [{
//     id: '0',
//     description: "Baku, Azerbaijan",
//     imageLink: "https://arabiangazette.com/wp-content/uploads/2016/08/1059.jpg"
//   }, {
//     id: '1',
//     description: "Berlin, Germany",
//     imageLink: "https://i.natgeofe.com/n/9e138c12-712d-41d4-9be9-5822a3251b5a/brandenburggate-berlin-germany.jpg"
//   }, {
//     id: '2',
//     description: "Los Angeles, California",
//     imageLink: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/1d/b8.jpg"
//   }]
// }


export default App