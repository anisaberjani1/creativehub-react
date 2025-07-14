import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const LanguageSwitcher = () => {
    const {language, switchLanguage, text} = useLanguage();
  return (
    <div className='mb-6'>
        <label className='mr-2 font-medium'>{text.language}</label>
        <select value={language} onChange={(e) => switchLanguage(e.target.value)} className='border p-1'>
            <option value="en">English</option>
            <option value="es">Espanol</option>
        </select>
    </div>
  )
}

export default LanguageSwitcher