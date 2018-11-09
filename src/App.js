import React, { Component } from 'react';
import Meal from './components/Meal';
import MealForm from './components/MealForm';
import GroceryList from './components/GroceryList';
import IngredientForm from './components/IngredientForm';
import './App.css';

// temp data stores
import meals from './data/mealsstore';
import ingredients from './data/ingredients';
import locations from './data/locations';

class App extends Component {

  state = {
    mealsStore: [...meals],
    ingredientsStore: [...ingredients]
  }
  addNewMeal = (meal) => {
    this.setState({ mealsStore: [...this.state.mealsStore, meal] })
  }

  addNewIngredient = (ing) => {
    this.setState({ ingredientsStore: [...this.state.ingredientsStore, ing] })
  }

  render() {
    return (
      <div>
        <div>
          <IngredientForm locations={locations} addNewIngredient={this.addNewIngredient} />
          <MealForm
            addNewMeal={this.addNewMeal}
            ingredients={this.state.ingredientsStore}
            change={this.handleChange} />
          -----------------------
          <h3>Meals</h3>
          {
            this.state.mealsStore.map(m => <Meal key={m.name} name={m.name} ingredients={m.ingredients} />)
          }
          <h3>List</h3>
          <GroceryList meals={this.state.mealsStore} />
        </div>
      </div>
    );
  }
}

export default App;
