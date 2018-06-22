import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (e) => {
    // Stop the form from submitting
    e.preventDefault();
    // save the store name to throw into the url
    const store = this.myInput.value.value;
    // use the history prop to push in url
    this.props.history.push(`/store/${store}`)
  }

  render() {
    return (
      <form  className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker
