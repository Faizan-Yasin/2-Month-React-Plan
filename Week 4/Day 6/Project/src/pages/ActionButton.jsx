import { Link } from "react-router-dom"

const ActionButton = ({ to, onClick, color, icon, text, isButton = false }) => {
    const classes = `${color} text-white gap-2 px-4 py-2 rounded hover:opacity-90 active:scale-95 transition flex items-center justify-center`

    const content = (
        <>
            <span className="material-symbols-outlined md:hidden text-2xl">{icon}</span>

            <span className="hidden md:inline">{text}</span>
        </>
    )

    if (isButton) {
        return (
            <button onClick={onClick} className={classes}>
                {content}
            </button>
        )
    }

    return (
        <Link to={to} className={classes}>
            {content}
        </Link>
    )
}

export default ActionButton