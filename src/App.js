import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      g_list: [
        {id: 1, name: "Milk", bought: false,},
        {id: 1, name: "bread", bought: true,},
        {id: 1, name: "cheese", bought: true,},
      ]
    }
  }
  render(){
    return(
      <div><h1>
        Grocery List
        </h1>
        
        </div>
    )
  }
}

export default App;
