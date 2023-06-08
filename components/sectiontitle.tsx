import styles from '../styles/sectiontitle.module.css'

interface SectionTitleProps {
  title: string
}

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
    </>
  )
}