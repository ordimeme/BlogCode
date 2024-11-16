export const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    login: "Login",
    logout: "Logout",
    write: "Write",
    // ... 添加更多翻译
  },
  zh: {
    home: "首页",
    about: "关于",
    contact: "联系",
    login: "登录",
    logout: "退出",
    write: "写作",
    // ... 添加更多翻译
  },
  "zh-TW": {
    home: "首頁",
    about: "關於",
    contact: "聯絡",
    login: "登入",
    logout: "登出",
    write: "寫作",
    // ... 添加更多翻译
  }
}

export const getTranslation = (key, language) => {
  return translations[language]?.[key] || translations.en[key]
} 