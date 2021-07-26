import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import ToyCard from './components/ToyCard';


class App extends React.Component{
  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleSubmit = (event) =>{
    // event.preventDefault()
    let newToy = {
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    }
    const toyURL = 'http://localhost:3000/toys'
    fetch(toyURL, {
      method: 'POST',
      body: JSON.stringify(newToy),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      this.setState([...this.state.toys, data])
    })
  }

  fetchToys = () => {
    const toyURL = 'http://localhost:3000/toys'
    fetch(toyURL)
    .then(resp=>resp.json())
    .then(toyData=>{
      this.setState({toys: toyData})
      console.log(this.state.toys)
  })

  }
  componentDidMount(){
    this.fetchToys()
  }


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onSubmit={this.handleSubmit}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
