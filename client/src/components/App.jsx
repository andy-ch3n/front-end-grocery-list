import React from "react"
import GroceryList from "./GroceryList.jsx"
import groceriesData from "../data/groceriesData.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        groceries: groceriesData,
        name: '',
        quantity: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };

  // componentDidMount() {
  //   this.setState({
  //     name: '',
  //     quantity: ''
  //   })
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearInput() {
    this.setState({
      name: '',
      quantity: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.clearInput()
    var newEntry = {
      name: this.state.name,
      quantity: this.state.quantity
    }
    this.setState({
      groceries: [...this.state.groceries, newEntry]
    })
    this.clearInput()
  }



  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form>
          <label> Name
            <input name="name" onChange={this.handleChange} value={this.state.name} />
          </label>
          <label> Quantity
            <input name="quantity" onChange={this.handleChange} value={this.state.quantity} />
          </label>
          <button onClick={this.handleSubmit}>Add Grocery</button >
          <ul className="groceries">
            <li>
              <GroceryList names={this.state.groceries}/>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default App;



/*
const App = () => (
  <div>
    <img src="grocery-bags.png" />
    <h1>Grocery List</h1>
    <form>
      <label> Item
        <input name="item" value="" />
      </label>
      <label> Quantity
        <input name="quantity" value="" />
      </label>
      <button>Add Grocery</button>
      <ul className="groceries">
        <li>
          <span>apples - </span>
          <span>4</span>
        </li>
        <li>
          <span>bread - </span>
          <span>2</span>
        </li>
        <li>
          <span>etc...</span>
        </li>
      </ul>
    </form>
  </div>
);

export default App;  */