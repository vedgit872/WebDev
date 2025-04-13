import { useState } from 'react'
import Greter from './Greter'
import './App.css'
import  Slots from "./Slots";
import ShoppingList from "./ShoppingList"
import RentalProperties from './RentalProperties';
import Clicker from "./Clicker";
import Button from './Button';
import Toogle from './Toogler';
import ColorBox from './ColorBox';
import BoxContainer from './BoxContainer';
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

const namedColors = [
  { name: "Crimson", hex: "#DC143C" },
  { name: "Scarlet", hex: "#FF2400" },
  { name: "Rose", hex: "#FF007F" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Maroon", hex: "#800000" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Fuchsia", hex: "#FF00FF" },
  
  { name: "Navy", hex: "#000080" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Azure", hex: "#007FFF" },
  { name: "Cobalt", hex: "#0047AB" },
  { name: "Teal", hex: "#008080" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Indigo", hex: "#4B0082" },
  
  { name: "Forest Green", hex: "#228B22" },
  { name: "Olive", hex: "#808000" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Mint", hex: "#98FF98" },
  { name: "Emerald", hex: "#50C878" },
  { name: "Sea Green", hex: "#2E8B57" },
  { name: "Chartreuse", hex: "#7FFF00" },
  { name: "Jade", hex: "#00A86B" },
  
  { name: "Amber", hex: "#FFBF00" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Mustard", hex: "#FFDB58" },
  { name: "Peach", hex: "#FFE5B4" },
  { name: "Apricot", hex: "#FBCEB1" },
  { name: "Tangerine", hex: "#F28500" },
  { name: "Lemon", hex: "#FFF700" },
  { name: "Canary Yellow", hex: "#FFEF00" },
  
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray", hex: "#808080" },
  { name: "Charcoal", hex: "#36454F" },
  { name: "Taupe", hex: "#483C32" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Tan", hex: "#D2B48C" },
  { name: "Ivory", hex: "#FFFFF0" },
  
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Violet", hex: "#8F00FF" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "Lilac", hex: "#C8A2C8" },
  { name: "Mauve", hex: "#E0B0FF" },
  { name: "Periwinkle", hex: "#CCCCFF" },
  { name: "Amethyst", hex: "#9966CC" },
  
  { name: "Chocolate", hex: "#7B3F00" },
  { name: "Coffee", hex: "#6F4E37" },
  { name: "Walnut", hex: "#5C4033" },
  { name: "Chestnut", hex: "#954535" },
  { name: "Mahogany", hex: "#C04000" },
  { name: "Sand", hex: "#C2B280" },
  { name: "Copper", hex: "#B87333" },
  { name: "Bronze", hex: "#CD7F32" },
];


function App() {
  return (
    <>
        {/* <ColorBox namedColors={namedColors}/> */}
        <BoxContainer namedColors={namedColors}/>
        {/* <Toogle/> */}
        {/* <Button message="hi v" onClick="clicked"/>
        <Clicker />
        <Clicker />
        <RentalProperties properties={properties}/>
        <ShoppingList items={items}/>  */}
        {/*
        <Greter person="Vedant" age={20}/>
        <Greter person="Harshit" age={16}/>
        <Slots val1="😁" val2="5" val3="5"/>
        <Slots val1="😁" val2="😁" val3="😁"/> */}
    </>
  );
}

export default App
