import styles from '../styles/drinkitem.module.css'
import 'material-icons/iconfont/material-icons.css'

interface DrinkItemProps {
  name: string
  description: string
  price: number
  category: string
  subcategory: string
  options: string[]
}

export default function MenuItem(
  {
    name,
    description,
    price,
    subcategory,
    options
  }: DrinkItemProps) {
  const renderSpicyIcons = () => {
    const icons = [];
  };

  return (
    <div className={styles.item}>
      <div className={styles.inline}>
        {price > 0 && (
          <p className={styles.price}>{price.toFixed(2)}</p>
        )}
        <h2 className={styles.name}>{name}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}