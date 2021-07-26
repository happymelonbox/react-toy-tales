import React, { Component } from 'react';

class ToyCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      likes: props.likes,
      id: props.id
    }
  }

  handleLike = () => {
    const addOneLike = this.state.likes + 1
    this.setState({
      likes: addOneLike
    })
  }

  handleUnlike = () => {
    const minusOneLike = this.state.likes - 1
    this.setState({
      likes: minusOneLike
    })
  }

  handleDonate = () => {
    let toyURL = 'http://localhost:3000/toys/'
    let id = this.state.id
    fetch(toyURL + id,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }})
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      window.location.reload()
    })

  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="like-btn" onClick={this.handleUnlike}>Unlike</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
