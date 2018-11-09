import React from 'react'
import ListSection from './ListSection'
import Util from '../utility/util'

const grocerylist = (props) => {

        const allIngredients = props.meals
            .map(m => m.ingredients)
            .reduce((acc, currentValue) => {
                return acc.concat(currentValue);
            }, []);

        const uniqueLocations = Array.from(new Set(allIngredients.map(i => i.location)))

        return ( 
            <div> 
                {
                    uniqueLocations.map((l, index) => <ListSection key={index} title={ Util.upper(l) } location={l} allIngredients={allIngredients}/>)
                } 
            </div>
            )
        }

export default grocerylist