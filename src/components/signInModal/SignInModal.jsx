"use client";

import React, { useState, useEffect } from 'react'
import styles from './signInModal.module.css'
import { FaGithub, FaTelegram, FaXTwitter } from 'react-icons/fa6'

// 正则表达式常量
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/;

// 添加 Google 图标组件
const GoogleIcon = () => (
  <svg className={styles.googleIcon} viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const RegisterForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    // 邮箱验证
    if (!formData.email.trim()) {
      newErrors.email = 'Email cannot be empty'
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // 密码验证
    if (!formData.password) {
      newErrors.password = 'Password cannot be empty'
    } else if (!PASSWORD_REGEX.test(formData.password)) {
      newErrors.password = 'Password must be 6-16 characters and contain at least one uppercase letter, one lowercase letter, and one number'
    }

    // 确认密码验证
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // 实时验证
    const newErrors = { ...errors }
    
    switch (name) {
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email cannot be empty'
        } else if (!EMAIL_REGEX.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break;
        
      case 'password':
        if (!value) {
          newErrors.password = 'Password cannot be empty'
        } else if (!PASSWORD_REGEX.test(value)) {
          newErrors.password = 'Password must be 6-16 characters and contain at least one uppercase letter, one lowercase letter, and one number'
        } else {
          delete newErrors.password
        }
        
        // 如果确认密码已经输入，检查是否匹配
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match'
        } else if (formData.confirmPassword) {
          delete newErrors.confirmPassword
        }
        break;
        
      case 'confirmPassword':
        if (!value) {
          newErrors.confirmPassword = 'Please confirm your password'
        } else if (value !== formData.password) {
          newErrors.confirmPassword = 'Passwords do not match'
        } else {
          delete newErrors.confirmPassword
        }
        break;
    }
    
    setErrors(newErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      console.log('Register form submitted:', formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <>
      <h2 className={styles.title}>SIGN UP</h2>
      <div className={styles.socialButtons}>
        <button className={`${styles.socialButton} ${styles.googleButton}`}>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
        <button className={`${styles.socialButton} ${styles.twitterButton}`}>
          <FaXTwitter className={styles.socialIcon} />
          <span>Continue with X</span>
        </button>
        <button className={`${styles.socialButton} ${styles.telegramButton}`}>
          <FaTelegram className={styles.socialIcon} />
          <span>Continue with Telegram</span>
        </button>
      </div>
      <div className={styles.divider}>
        <span>OR</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required 
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required 
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirm Password" 
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
          />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className={styles.button}>SIGN UP</button>
      </form>
      <div className={styles.footer}>
        Already have an account? {" "}
        <button onClick={onBack} className={styles.signupLink}>
          Sign In
        </button>
      </div>
    </>
  )
}

const SignInModal = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  // 优化滚动锁定逻辑
  useEffect(() => {
    // 保存当前滚动位置
    const scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollPosition}px`;

    return () => {
      // 清理函数中恢复滚动
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    };
  }, []);

  const handleModalClose = (e) => {
    if (e) {
      e.preventDefault();
    }
    // 确保在关闭前恢复滚动状态
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    onClose();
  };

  const validateForm = () => {
    const newErrors = {}
    
    // 邮箱验证
    if (!formData.email.trim()) {
      newErrors.email = 'Email cannot be empty'
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // 密码验证
    if (!formData.password) {
      newErrors.password = 'Password cannot be empty'
    } else if (!PASSWORD_REGEX.test(formData.password)) {
      newErrors.password = 'Password must be 6-16 characters and contain at least one uppercase letter, one lowercase letter, and one number'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // 实时验证
    const newErrors = { ...errors }
    
    if (name === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email cannot be empty'
      } else if (!EMAIL_REGEX.test(value)) {
        newErrors.email = 'Please enter a valid email address'
      } else {
        delete newErrors.email
      }
    }
    
    if (name === 'password') {
      if (!value) {
        newErrors.password = 'Password cannot be empty'
      } else if (!PASSWORD_REGEX.test(value)) {
        newErrors.password = 'Password must be 6-16 characters and contain at least one uppercase letter, one lowercase letter, and one number'
      } else {
        delete newErrors.password
      }
    }
    
    setErrors(newErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      console.log('Sign in form submitted:', formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleModalClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleModalClose}>×</button>
        {isRegistering ? (
          <RegisterForm onBack={() => setIsRegistering(false)} />
        ) : (
          <>
            <h2 className={styles.title}>SIGN IN</h2>
            <div className={styles.socialButtons}>
              <button className={`${styles.socialButton} ${styles.googleButton}`}>
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>
              <button className={`${styles.socialButton} ${styles.twitterButton}`}>
                <FaXTwitter className={styles.socialIcon} />
                <span>Continue with X</span>
              </button>
              <button className={`${styles.socialButton} ${styles.telegramButton}`}>
                <FaTelegram className={styles.socialIcon} />
                <span>Continue with Telegram</span>
              </button>
              <button className={`${styles.socialButton} ${styles.githubButton}`}>
                <FaGithub className={styles.socialIcon} />
                <span>Continue with Github</span>
              </button>
            </div>
            <div className={styles.divider}>
              <span>OR</span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  className={styles.input}
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
                {errors.password && <span className={styles.error}>{errors.password}</span>}
              </div>
              <button type="submit" className={styles.button}>SIGN IN</button>
            </form>
            <div className={styles.footer}>
              Don't have an account? {" "}
              <button onClick={() => setIsRegistering(true)} className={styles.signupLink}>
                Sign up
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SignInModal 