import React from 'react';
import Image from 'next/image';
import styles from './card.module.css'
import Link from 'next/link';


const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2025 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <h1>Write components with code and markup</h1>
            <p className={styles.desc}>React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.</p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card
