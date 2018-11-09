import React from 'react'

const meal = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <ul>
        { props.ingredients.map((ing, index) => <li key={index}>{ing.name}</li>) }
      </ul>
    </div>
  )
}

export default meal