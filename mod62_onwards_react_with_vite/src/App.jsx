import { useState } from 'react'
import Greter from './Greter'
import './App.css'
import  Slots from "./Slots";
import ShoppingList from "./ShoppingList"
import RentalProperties from './RentalProperties';
import Clicker from "./Clicker";
import Button from './Button';

const items = [
  {
    id: 1,
    item: "Milk",
    quantity: 2,
    completed: false,
  },
  {
    id: 2,
    item: "Bread",
    quantity: 1,
    completed: true,
  },
  {
    id: 3,
    item: "Eggs",
    quantity: 12,
    completed: false,
  },
  {
    id: 4,
    item: "Apples",
    quantity: 6,
    completed: true,
  },
  {
    id: 5,
    item: "Toothpaste",
    quantity: 1,
    completed: false,
  },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <>
        <Button message="hi v" onClick="clicked"/>
        <Clicker />
        <Clicker />
        <RentalProperties properties={properties}/>
        <ShoppingList items={items}/> 
        {/*
        <Greter person="Vedant" age={20}/>
        <Greter person="Harshit" age={16}/>
        <Slots val1="😁" val2="5" val3="5"/>
        <Slots val1="😁" val2="😁" val3="😁"/> */}
    </>
  );
}

export default App
