import React, { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useNotification } from '../../context/NotificationContext'
import { useLanguage } from '../../context/LanguageContext'

const Profile = () => {

  const { user, updateUser } = useUser()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const { addNotification } = useNotification()
  const { t } = useLanguage()

  function handleSave() {
    updateUser({
      name,
      email
    })
    addNotification("Profile Updated")
  }

  return (
    <div className='max-w-lg'>
      <div className='rounded-2xl shadow-lg border p-8 space-y-6'>
        <div className='flex justify-center'>
          <div className='w-10 h-10 md:w-24 md:h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl md:text-4xl font-bold'>
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <label className='cursor-pointer block mb-2 font-semibold'>Name</label>
          <input className='cursor-pointer w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className='cursor-pointer block mb-2 font-semibold'>Email</label>
          <input className='cursor-pointer w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className='cursor-pointer block mb-2 font-semibold'>Role</label>
          <div className='bg-gray-400 font-bold rounded-lg px-4 py-3'>
            {user.role}
          </div>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded active:scale-95 cursor-pointer' onClick={handleSave}>{t("save")}</button>
      </div>
    </div>
  )
}

export default Profile
