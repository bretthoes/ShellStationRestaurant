import Link from 'next/link'
import menuItemsData from '../public/menuitems.json'

interface MenuItem {
  name: string
  description: string
  price: number
  category: string
  subcategory: string
  ingredients: string[]
  isVegetarian: boolean
  isVegan: boolean
  isGlutenFree: boolean
}


interface PageProps {
  menu: MenuItem[]
}

export default function Menu({ menu }: PageProps) {
  const menuItems: MenuItem[] = menu || menuItemsData;
  return (
    <>
      <h1>Menu</h1>
      {menuItems.map((menuItem, index) => (
        <div key={index}>
          <h2>{menuItem.name}</h2>
          <p>{menuItem.description}</p>
          <p>Price: ${menuItem.price.toFixed(2)}</p>
          <p>Ingredients: {menuItem.ingredients.join(", ")}</p>
          <p>Vegetarian: {menuItem.isVegetarian ? "Yes" : "No"}</p>
          <p>Vegan: {menuItem.isVegan ? "Yes" : "No"}</p>
          <p>Gluten-Free: {menuItem.isGlutenFree ? "Yes" : "No"}</p>
        </div>
      ))}
    </>
  )
}