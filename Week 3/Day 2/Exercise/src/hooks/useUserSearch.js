/**
 * Debounces the search term and fetches matching users.
 *
 * @param {string} searchTerm - User search input.
 * @returns {{
 *   data: any[],
 *   loading: boolean,
 *   error: Error | null,
 *   refetch: Function
 * }}
 */

import useDebounce from "./useDebounce"
import useFetch from "./useFetch"

function useUserSearch(searchTerm) {
    const debouncedTerm = useDebounce(searchTerm, 400)
    const { data, loading, error, refetch } = useFetch(debouncedTerm ? `https://jsonplaceholder.typicode.com/${debouncedTerm}` : "", debouncedTerm)

    return { data, loading, error, refetch, debouncedTerm }
}

export default useUserSearch