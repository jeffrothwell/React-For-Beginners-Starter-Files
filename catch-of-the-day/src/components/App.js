import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  addToOrder = (key) => {
    //copy current state
    const order = {...this.state.order}
    //either add to order or update number
    order[key] = order[key] + 1 || 1;
    //call setState to update state obj
    this.setState({ order })
  }

  addFish = (fish) => {
    // copy current state
    const fishes = {...this.state.fishes};
    // add our new fish with Date.now providing unique id
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes in our object to state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />))}
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
