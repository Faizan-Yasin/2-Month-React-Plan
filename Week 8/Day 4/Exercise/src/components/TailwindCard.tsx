
type TailwindCardProps = {
    title: string
    body: string
    footer: string
}

const TailwindCard = ({ title, body, footer }: TailwindCardProps) => {
    return (
        <div className="cursor-pointer">
            <div className="w-75 rounded-[10px] border border-gray-300 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{body}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{footer}</p>
            </div>
        </div>
    )
}

export default TailwindCard