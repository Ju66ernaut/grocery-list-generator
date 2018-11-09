import React from 'react'

class IngredientForm extends React.Component {
  state = {
    name: '',
    location: this.props.locations[0]
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>New Ingredient</h3>
        <label>Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleInputChange(event)} />
        </label>
        <label>Location
          <select
            name="location"
            value={this.state.location}
            onChange={(event) => this.handleInputChange(event)}>
            {this.props.locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <p>{this.state.name}</p>
          <p>{this.state.location}</p>
        </label>
        <button onClick={() => this.props.addNewIngredient(this.state)}>Add New Ingredient</button>
      </div>
    )
  }
}

export default IngredientForm