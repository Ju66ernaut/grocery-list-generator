import React from 'react'

const listsection = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <ul>
          {props.allIngredients.filter(i => i.location === props.location).map((i, index) => <li key={index}>{i.name}</li>)}
        </ul>
      </div>
    )
  }

  export default listsection