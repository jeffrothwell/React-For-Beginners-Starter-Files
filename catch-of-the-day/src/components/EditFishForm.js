import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
  }

  handleChange = (e) => {
    // console.log(e.currentTarget.value);
    // update that fish
    // copy currentfish
    const updatedFish = {
      ...this.props.fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(this.props.index, updatedFish)
  }

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name} />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price} />
        <select
          name="status"
          ref={this.statusRef}
          onChange={this.handleChange}
          value={this.props.fish.status}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          onChange={this.handleChange}
          value={this.props.fish.desc} />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm;
