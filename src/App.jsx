import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
const[pizzaName, setPizzaName] =useState([]);
useEffect(() => {
fetch('http://localhost:3000/pizzas')
.then((response)=> response.json())
.then((data)=> {
  setPizzaName(data)
});
}, []);
  return (
    <>
    <header className='header-element' >Welcome to Flatiron's Pizzeria</header>
    <table className="pizza-table">
  <thead>
    <tr>
      <th>Topping</th>
      <th>Size</th>
      <th>Vegetarian</th>
      <th>Edit Here</th>
    </tr>
  </thead>
  <tbody>
    {pizzaName.map((pizza, index) => (
      <tr key={index}>
        <td>{pizza.topping}</td>
        <td>{pizza.size}</td>
        <td>{pizza.vegetarian}</td>
        <td>
          <button className="edit-button">Edit</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default App

