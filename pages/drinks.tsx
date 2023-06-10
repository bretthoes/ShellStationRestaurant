import drinksData from '../public/drinks.json'
import menuSectionsData from '../public/menusections.json'
import styles from '../styles/menu.module.css'
import SectionTitle from '../components/sectiontitle'
import DrinkItem from '../components/drinkitem'

interface DrinkItem {
  name: string
  description: string
  price: number
  category: string
  subcategory: string
  options: string[]
}

interface MenuSection {
  name: string
  order: number
  description: string
  category: string
}

interface PageProps {
  drinks: DrinkItem[],
  MenuSections: MenuSection[]
}

export default function Drinks({ drinks, MenuSections }: PageProps) {
  const drinkItems: DrinkItem[] = drinks || drinksData
  const sections: MenuSection[] = MenuSections || menuSectionsData;
  const MENU_CATEGORY_TYPE = "drinks";

  // Sort menu sections by order
  sections.sort((a, b) => a.order - b.order);

  // TODO add navbar links at top of menu for navigating to sections quickly
  return (
    <>
      <div className={styles.menu}>
        {sections
        .filter((menuSection) => menuSection.category === MENU_CATEGORY_TYPE)
        .map((section) => (
          <div key={section.name}>
            <SectionTitle title={section.name} description={section.description} />
            <div className={styles.menu}>
              {drinkItems
                .filter((drinkItem) => drinkItem.category === section.name)
                .map((drinkItem, index) => (
                  <DrinkItem
                    key={index}
                    name={drinkItem.name}
                    description={drinkItem.description}
                    price={drinkItem.price}
                    category={drinkItem.category}
                    subcategory={drinkItem.subcategory}
                    options={drinkItem.options}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}