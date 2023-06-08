import menuItemsData from '../public/menuitems.json'
import menuSectionsData from '../public/menusections.json'
import styles from '../styles/menu.module.css'
import SectionTitle from '../components/sectiontitle'
import MenuItem from '../components/menuitem'

interface MenuItem {
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

interface MenuSection {
  name: string
  order: number
}

interface PageProps {
  menu: MenuItem[],
  MenuSections: MenuSection[]
}

export default function Menu({ menu, MenuSections }: PageProps) {
  const menuItems: MenuItem[] = menu || menuItemsData
  const sections: MenuSection[] = MenuSections || menuSectionsData;

  // Sort menu sections by order
  sections.sort((a, b) => a.order - b.order);

  return (
    <>
      <div className={styles.menu}>
        {sections.map((section) => (
          <div key={section.name}>
            <SectionTitle title={section.name} />
            <div className={styles.menu}>
              {menuItems
                .filter((menuItem) => menuItem.category === section.name)
                .map((menuItem, index) => (
                  <MenuItem
                    key={index}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price}
                    category={menuItem.category}
                    ingredients={menuItem.ingredients}
                    isVegetarian={menuItem.isVegetarian}
                    isVegan={menuItem.isVegan}
                    isGlutenFree={menuItem.isGlutenFree}
                    spicyLevel={menuItem.spicyLevel}
                    addCheese={menuItem.addCheese}
                    addBacon={menuItem.addBacon}
                    addGuac={menuItem.addGuac}
                    addSteak={menuItem.addSteak}
                    addChicken={menuItem.addChicken}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}