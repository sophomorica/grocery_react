import React from 'react';
// import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: "Milk", complete: true, },
        { id: 2, name: "Bread", complete: false, },
        { id: 3, name: "Eggs", complete: false, },
      ]
    };
  }

  renderItems = () => {
    const { items, } = this.state;
    return items.map( item =>
      <li key={item.id}>{item.name}</li>
      )
  };

  render() {
    return (
      <div>
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}
export default App;