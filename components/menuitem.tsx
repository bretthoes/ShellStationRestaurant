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
      <div className={styles.inline}>
        <p className={styles.price}>{price.toFixed(2)}</p>
        <h2 className={styles.name}>{name}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}