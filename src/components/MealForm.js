import React from 'react'
import Select from 'react-select'

class MealForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      ingredients: [],
      selectedOption: null
    }
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
  } 
  options = [
    {label: 'cheese', value: 'cheese'},
    {label: 'eggs', value: 'eggs'}
  ]

  handleMultiSelectChange(selectedOption) {
    this.setState({selectedOption})
  }

  handleInputChange(event) {
    if (event.target.name === 'ingredients') {
      const ingredientLocation = this.props.ingredients.filter(i => i.name === event.target.value)[0].location;
      const newIngredient = { name: event.target.value, location: ingredientLocation }

      this.setState({
        ingredients: [...this.state.ingredients, newIngredient]
      })
    }
    else {
      this.setState({
        [event.target.name]: event.target.value
      });
      console.log(this.state.name)
    }

  }

  render() {
    return (
      <div>
        <h3>New Meal</h3>
        <Select
          isMulti
          value={this.state.selectedOption}
          onChange={(event) => this.handleMultiSelectChange(event)}
          options={this.options}
        />
        <label>Name
          <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={(event) => this.handleInputChange(event)} />
        </label>
        <br />
        <label>Ingredients</label>
        <br />
        <select 
            multiple={true} 
            name="ingredients" 
            value={this.state.ingredients.map(i => i.name)} 
            onChange={(event) => this.handleInputChange(event)}>
          {this.props.ingredients.map(i => <option key={i.name} value={i.name}>{i.name}</option>)}
        </select>
        <p>{this.state.name}</p>
        <p>{this.state.ingredients.map(i => i.name).toString()}</p>
        <button onClick={() => this.props.addNewMeal(this.state)}>Add New Meal</button>
      </div>
    )
  }
}

export default MealForm