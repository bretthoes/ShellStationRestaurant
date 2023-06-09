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
  extras: string
}

interface MenuSection {
  name: string
  order: number
  description: string
  category: string
}

interface PageProps {
  menu: MenuItem[],
  MenuSections: MenuSection[]
}

export default function Menu({ menu, MenuSections }: PageProps) {
  const menuItems: MenuItem[] = menu || menuItemsData
  const sections: MenuSection[] = MenuSections || menuSectionsData;
  const MENU_CATEGORY_TYPE = "food";

  // Sort menu sections by order
  sections.sort((a, b) => a.order - b.order);

  // TODO add navbar links at top of menu for navigating to sections quickly
  // TODO add background colors for each section for better visibility
  return (
    <>
      <div className={styles.menu}>
        {sections
        .filter((menuSection) => menuSection.category === MENU_CATEGORY_TYPE)
        .map((section) => (
          <div key={section.name}>
            <SectionTitle title={section.name} description={section.description} />
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
                    extras={menuItem.extras}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}