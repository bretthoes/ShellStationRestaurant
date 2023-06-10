import React from 'react'
import styles from '../styles/drinkitem.module.css'
import 'material-icons/iconfont/material-icons.css'

interface Option {
  name: string
  quantity: number
}

interface DrinkItemProps {
  name: string
  description: string
  price: number
  category: string
  subcategory: string
  options: Option[]
}

export default function MenuItem({
  name,
  description,
  price,
  subcategory,
  options,
}: DrinkItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.inline}>
        {price > 0 && <p className={styles.price}>{price.toFixed(2)}</p>}
        <h2 className={styles.name}>{name}</h2>
      </div>
      <p className={styles.description}>{description}</p>
      {options && (
        <div className={styles.optionsContainer}>
          <div className={styles.grid}>
            {options.map((option, index) => (
              <div key={index} className={styles.option}>
                <p className={styles.optionName}>{option.name}</p>
                <p className={styles.optionQuantity}>{option.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
