import { Link } from "react-router"
import { FaHeart } from "react-icons/fa"

const Footer = () => {

    return (

        <footer className='bg-white dark:bg-black shadow-[0_-8px_20px_rgba(0,0,0,0.15)] shadow-gray-300 dark:shadow-gray-700 mt-4'>

            <div className='max-w-7xl mx-auto px-6 py-10'>

                <div className='flex flex-col md:flex-row justify-between gap-10'>

                    <div>

                        <Link to="/" className='flex items-center gap-2 text-2xl font-bold text-red-500 hover:text-red-600 transition'>

                            <img src="/logo.svg" alt="logo" className='w-8' />

                            <span>MovieBrowser</span>

                        </Link>

                        <p className='text-gray-400 mt-4 max-w-sm'>

                            Discover trending movies, search your favourites and explore detailed information powered by TMDB.

                        </p>

                    </div>

                    <div>

                        <h3 className='font-semibold mb-4'>

                            Data Source

                        </h3>

                        <p className='text-gray-400'>

                            This product uses the TMDB API but is not endorsed or certified by TMDB.

                        </p>

                    </div>

                </div>

                <div className='border-t border-zinc-800 dark:border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm'>

                    <p>

                        © 2026 MovieBrowser. All rights reserved.

                    </p>

                    <p className='flex items-center gap-2'>

                        Made with

                        <FaHeart className='text-red-500' />

                        using React

                    </p>

                </div>

            </div>

        </footer>

    )

}

export default Footer