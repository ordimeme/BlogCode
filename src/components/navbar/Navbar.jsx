import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://github.com" target="_blank" className={styles.socialIcon}>
          <FaGithub />
        </Link>
        <Link href="https://twitter.com" target="_blank" className={styles.socialIcon}>
          <FaTwitter />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className={styles.socialIcon}>
          <FaLinkedin />
        </Link>
      </div>
      <div className={styles.logo}>BlogCode</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
