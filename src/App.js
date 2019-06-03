import React from 'react';
import List from "./List"
//mport './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      things: [
        {id: 1, name: "Milk", bought: true,},
        {id: 1, name: "bread", bought: false,},
        {id: 1, name: "cheese", bought: false,},
      ]
    };
  }
  
  renderthing = () => {
    const { things, } = this.state;
    return things.map(thing =>
      <li key={thing.id}>{thing.name}</li>
      )
  };
  
  render() {
    return (
      <div>
        <List 
        name = "Grocery List"
        items = {this.state.things}
        />
        </div>
    )
  }
}

export default App;
