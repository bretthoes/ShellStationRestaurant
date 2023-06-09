import styles from '../styles/menuitem.module.css'
import 'material-icons/iconfont/material-icons.css'

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
  extras: string
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
    spicyLevel,
    extras,
  }: MenuItemProps) {
  const renderSpicyIcons = () => {
    const icons = [];
    for (let i = 0; i < spicyLevel; i++) {
      icons.push(<i key={i} className={`material-icons ${styles.spicy}`}>local_fire_department</i>);
    }
    return icons;
  };

  return (
    <div className={styles.item}>
      <div className={styles.inline}>
        {price > 0 && (
          <p className={styles.price}>{price.toFixed(2)}</p>
        )}
        <h2 className={styles.name}>{name}</h2>
        {isVegetarian && (
          <span className={styles.vegetarian}>
            <i className={'material-icons ${styles.spicy}'}>eco</i>
          </span>
        )}
        {spicyLevel > 0 && (
          <div className={styles.spicyIcons}>
            {renderSpicyIcons()}
          </div>
        )}
      </div>
      <p className={styles.description}>{description}</p>
      {extras.length > 0 && (
        <p className={styles.extras}>{extras}</p>
      )}
    </div>
  )
}