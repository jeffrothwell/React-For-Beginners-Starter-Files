import React from 'react';

class EditFishForm extends React.Component {
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
      </div>
    )
  }
}

export default EditFishForm;
