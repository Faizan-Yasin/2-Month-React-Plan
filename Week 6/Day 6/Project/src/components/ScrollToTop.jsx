import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTop = () => {
    const { pathname } = useLocation()
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    if (!show) return null

    return (
        <button
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600
            text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
            <FaArrowUp className="mx-auto" />
        </button>
    )
}

export default ScrollToTop