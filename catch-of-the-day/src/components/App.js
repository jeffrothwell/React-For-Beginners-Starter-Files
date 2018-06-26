import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate local storage
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate(){
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    // copy current state
    const fishes = {...this.state.fishes};
    // update that state
    fishes[key] = updatedFish;
    // save the updated fishes to state
    this.setState({ fishes });
  }

  deleteFish = (key) => {
    //copy current state
    const fishes = {...this.state.fishes};
    // firebase needs deleted item it to be set to null
    fishes[key] = null;
    // update our state
    this.setState({fishes});
  }

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
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App;
