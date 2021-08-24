import GroceryListEntry from './GroceryListEntry.jsx'
import React from "react"
import ReactDOM from "react-dom"

var GroceryList = (props) => (
  <div>
  {props.names.map((entry, i) => (
   <GroceryListEntry entry={entry} key={i}/>
  ))}
  </div>
);







export default GroceryList;