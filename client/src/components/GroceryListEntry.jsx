import React from "react"
import ReactDOM from "react-dom"

var GroceryListEntry = (props) => {
  return (
    <li>
    <span>{props.entry.name} </span>
    <span>{props.entry.quantity}</span>
  </li>
  )
}
export default GroceryListEntry