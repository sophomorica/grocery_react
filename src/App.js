import React from 'react';
//mport './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      lists: [
        {id: 1, name: "Milk", bought: true,},
        {id: 1, name: "bread", bought: false,},
        {id: 1, name: "cheese", bought: false,},
      ]
    };
  }
  
  renderList = () => {
    const { lists, } = this.state;
    return lists.map(list =>
      <li key={list.id}>{list.name}</li>
      )
  };
  
  render() {
    return (
      <div>
        <ul>
          { this.renderList()}
        </ul>
        </div>
    )
  }
}

export default App;
