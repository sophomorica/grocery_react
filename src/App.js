import React from 'react';
import List from "./List"
//mport './App.css';
import ThingForm from "./ThingForm"

class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      things: [
        {id: 1, name: "Milk", bought: true,},
        {id: 2, name: "bread", bought: false,},
        {id: 3, name: "cheese", bought: false,},
      ]
    };
    this.addItem = this.addItem.bind(this)
  }
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (name) =>{
    const thing = {name, id: this.getUniqId(), bought: false}
    
    this.setState({things: [
      thing, ...this.state.things
    ]})
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
        <ThingForm addItem = {this.addItem}/>
        <List 
        name = "Grocery List"
        items = {this.state.things}
        />
        </div>
    )
  }
}

export default App;
