import React from 'react'
import { getProfile } from '../utils/image'

const CastCard = ({ actor }) => {
    return (
        <div className='min-w-38 bg-zinc-900 rounded-xl overflow-hidden shadow-lg'>

            <img src={getProfile(actor.profile_path)} alt={actor.name} loading='lazy'
                className='w-full h-52 object-cover'
            />

            <div className="p-3">
                <h3 className='font-semibold text-white truncate'>
                    {actor.name}
                </h3>
                <p className='text-sm text-gray-400 truncate'>
                    {actor.character}
                </p>
            </div>

        </div>
    )
}

export default CastCard
