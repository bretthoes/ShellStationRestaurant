import drinksData from '../public/drinks.json'
import menuSectionsData from '../public/menusections.json'
import styles from '../styles/drinks.module.css'
import SectionTitle from '../components/sectiontitle'
import DrinkItem from '../components/drinkitem'

interface Option {
  name: string
  quantity: number
}

interface Drink {
  name: string
  description: string
  price: number
  category: string
  subcategory: string
  options: Option[]
}

interface MenuSection {
  name: string
  order: number
  description: string
  category: string
}

interface PageProps {
  drinks: Drink[]
  MenuSections: MenuSection[]
}

export default function Drinks({ drinks, MenuSections }: PageProps) {
  const drinkItems: Drink[] = drinks || drinksData
  const sections: MenuSection[] = MenuSections || menuSectionsData
  const MENU_CATEGORY_TYPE = 'drinks'

  // Sort menu sections by order
  sections.sort((a, b) => a.order - b.order);

  return (
    <>
      <div className={styles.container}>
        {sections
          .filter((menuSection) => menuSection.category === MENU_CATEGORY_TYPE)
          .map((section) => (
            <div key={section.name}>
              <SectionTitle title={section.name} description={section.description} />
              <div className={styles.drinks}>
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