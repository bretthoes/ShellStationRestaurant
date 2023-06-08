import menuItemsData from '../public/menuitems.json'
import styles from '../styles/menu.module.css'
import SectionTitle from "../components/sectiontitle";

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
  spicyLevel: number
}


interface PageProps {
  menu: MenuItem[]
}

export default function Menu({ menu }: PageProps) {
  const menuItems: MenuItem[] = menu || menuItemsData
  const decimalPlaces = 2
  return (
    <>
      <SectionTitle title="Appetizers" />
      <div className={styles.menu}>
        {menuItems.map((menuItem, index) => (
          <div key={index} className={styles.item}>
            <h2 className={styles.name}>{menuItem.name}</h2>
            <p className={styles.description}>{menuItem.description}</p>
            <p className={styles.price}>Price: ${menuItem.price.toFixed(decimalPlaces)}</p>
          </div>
        ))}
      </div>
    </>
  )
}