import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>BlogCodeLab</h1>
        </div>
          <p className={styles.desc}>
            This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.
          </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" alt="">HomePage</Link>
          <Link href="/" alt="">Blog</Link>
          <Link href="/" alt="">About</Link>
          <Link href="/" alt="">Contact</Link>
        </div> 
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" alt="">Style</Link>
          <Link href="/" alt="">fashion</Link>
          <Link href="/" alt="">Coding</Link>
          <Link href="/" alt="">Travel</Link>
        </div> 
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/" alt="">Facebook</Link>
          <Link href="/" alt="">Instagram</Link>
          <Link href="/" alt="">Youtube</Link>
        </div> 
      </div>
    </div>
  )
}

export default Footer
