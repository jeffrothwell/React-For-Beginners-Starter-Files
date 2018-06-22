import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // copy current state
    const fishes = {...this.state.fishes};
    // add our new fish
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes in our object to state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
      <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
