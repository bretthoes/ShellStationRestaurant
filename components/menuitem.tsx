import styles from '../styles/menuitem.module.css'

interface MenuItemProps {
  name: string
  description: string
  price: number
  category: string
  ingredients: string[]
  isVegetarian: boolean
  isVegan: boolean
  isGlutenFree: boolean
  spicyLevel: number
  addCheese: boolean
  addBacon: boolean
  addGuac: boolean
  addSteak: boolean
  addChicken: boolean
}

export default function MenuItem(
  {
    name,
    description,
    price,
    ingredients,
    isVegetarian,
    isVegan,
    isGlutenFree,
    addCheese,
    addBacon,
    addGuac,
    addSteak,
    addChicken,
  }: MenuItemProps) {
  return (
    <div className={styles.item}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>Price: ${price.toFixed(2)}</p>
    </div>
  )
}