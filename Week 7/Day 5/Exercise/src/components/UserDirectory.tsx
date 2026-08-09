import { useQuery } from "@tanstack/react-query"
import fetchUsers from "../api/fetchUsers"

const UserDirectory = () => {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    })

    if (isPending) {
        return (
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        User Directory
                    </h1>

                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map(
                            (_, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-white p-5 shadow-sm"
                                >
                                    <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />

                                    <div className="mt-3 h-4 w-56 animate-pulse rounded bg-gray-200" />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
                <div className="rounded-xl bg-white p-8 text-center shadow-md">
                    <h2 className="text-xl font-semibold text-red-600">
                        {error.message}
                    </h2>

                    <button
                        onClick={() => refetch()}
                        className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                    >
                        Refetch
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-2xl">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">
                    User Directory
                </h1>

                <div className="space-y-4">
                    {data.map((user) => (
                        <article
                            key={user.id}
                            className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <p className="text-sm text-gray-500">
                                User Email
                            </p>

                            <h2 className="mt-1 font-medium text-gray-800">
                                {user.email}
                            </h2>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserDirectory