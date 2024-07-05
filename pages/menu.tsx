import styles from '../styles/menu.module.css';

export default function Menu() {
  const menuPdf = '/RestaurantMenu.pdf';
  const breakfastMenuPdf = '/BreakfastMenu.pdf';

  return (
    <div className={styles.menu}>
      <a
        className={styles['menu-link']}
        href={menuPdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Main Menu
      </a>
      <a
        className={styles['menu-link']}
        href={breakfastMenuPdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Breakfast Menu
      </a>
    </div>
  );
}
