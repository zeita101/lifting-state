import { useState, useEffect } from "react";
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";
const FruitContainer = (props) => {
  // initialize the fruit list to the full list passed in props
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
  console.log(props, "container");
  // I'll need a method to update the state when the filter value
  // changes. This method will store the filter state
  // and filter the list of fruits to display.
  // I'll pass this change handler to the filter component
  // to react to the user input
  const handleFilterChange = (event) => {
    event.preventDefault();
    const filterValue = event.target.value;
    setFruitsToDisplay((_prevState) => {
      //remove fruits that don't contain the filter value
      const filteredFruitList = props.fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(filterValue.toLowerCase());
      });
      //return new state with the filter fruit list and the new value
      // of the filter
      return filteredFruitList;
    });
  };
  useEffect(() => {
    console.log("do something", fruitsToDisplay);
  }, [fruitsToDisplay]);
  return (
    <div>
      <FruitFilter onChange={(e) => handleFilterChange(e)} />
      <FruitList fruits={fruitsToDisplay} />
    </div>
  );
};
export default FruitContainer;
