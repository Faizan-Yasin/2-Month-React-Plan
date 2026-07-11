import React from 'react'
import { useNotification } from '../../context/NotificationContext'
import { useLanguage } from '../../context/LanguageContext'
import dashboardData from "../../data/dashboardData";
import Card from '../common/Card';

const Dashboard = () => {

  const { addNotification } = useNotification()
  const { t } = useLanguage()

  function handleRefresh() {
    addNotification("Data Refreshed")
  }

  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold'>
        {t("dashboard")}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {dashboardData.map(item => (
          <Card key={item.id}>
            <h3 className='text-gray-500'>
              {t(item.title)}
            </h3>
            <h1 className='text-2xl md:text-4xl font-bold mt-3'>
              {item.value}
            </h1>
          </Card>
        ))}
      </div>
      <button className='px-5 py-3 active:scale-95 cursor-pointer rounded-lg bg-blue-600 text-white hover:bg-blue-700' onClick={handleRefresh}>
        {t("refresh")}
      </button>
    </div>
  )
}

export default Dashboard
