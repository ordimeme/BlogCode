"use client"

import { useLanguage } from '@/context/LanguageContext'
import styles from './languageSwitch.module.css'

const LanguageSwitch = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={styles.container}>
      <button 
        onClick={() => changeLanguage('en')}
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('zh')}
        className={`${styles.button} ${language === 'zh' ? styles.active : ''}`}
      >
        简
      </button>
      <button 
        onClick={() => changeLanguage('zh-TW')}
        className={`${styles.button} ${language === 'zh-TW' ? styles.active : ''}`}
      >
        繁
      </button>
    </div>
  )
}

export default LanguageSwitch 