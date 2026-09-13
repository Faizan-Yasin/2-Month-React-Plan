import styles from './Card.module.css'

type CardProps = {
    title: string
    body: string
    footer: string
}

const Card = ({ title, body, footer }: CardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
            <footer className={styles.footer}>{footer}</footer>
        </div>
    )
}

export default Card
