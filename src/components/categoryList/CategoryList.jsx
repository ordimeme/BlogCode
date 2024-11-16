"use client";

import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaScrewdriverWrench,
  FaCircleNodes,
  FaRobot,
  FaCloud,
  FaShieldHalved
} from 'react-icons/fa6'

const categories = [
  {
    id: 1,
    title: "React",
    icon: <FaReact className={styles.categoryIcon} />,
    color: "#61DAFB"
  },
  {
    id: 2,
    title: "Node.js",
    icon: <FaNodeJs className={styles.categoryIcon} />,
    color: "#539E43"
  },
  {
    id: 3,
    title: "Database",
    icon: <FaDatabase className={styles.categoryIcon} />,
    color: "#336791"
  },
  {
    id: 4,
    title: "Frontend",
    icon: <FaCode className={styles.categoryIcon} />,
    color: "#E44D26"
  },
  {
    id: 5,
    title: "Web Dev",
    icon: <FaLaptopCode className={styles.categoryIcon} />,
    color: "#F7DF1E"
  },
  {
    id: 6,
    title: "Mobile",
    icon: <FaMobile className={styles.categoryIcon} />,
    color: "#3DDC84"
  },
  {
    id: 7,
    title: "Backend",
    icon: <FaServer className={styles.categoryIcon} />,
    color: "#6DB33F"
  },
  {
    id: 8,
    title: "DevOps",
    icon: <FaScrewdriverWrench className={styles.categoryIcon} />,
    color: "#2496ED"
  },
  {
    id: 9,
    title: "AI",
    icon: <FaCircleNodes className={styles.categoryIcon} />,
    color: "#7B61FF"
  },
  {
    id: 10,
    title: "Machine Learning",
    icon: <FaRobot className={styles.categoryIcon} />,
    color: "#4B8BF4"
  },
  {
    id: 11,
    title: "Cloud",
    icon: <FaCloud className={styles.categoryIcon} />,
    color: "#FF9900"
  },
  {
    id: 12,
    title: "Security",
    icon: <FaShieldHalved className={styles.categoryIcon} />,
    color: "#7B1FA2"
  }
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            href={`/blog?cat=${category.title.toLowerCase()}`}
            className={styles.category}
            key={category.id}
            style={{ 
              backgroundColor: `${category.color}15`,
              border: `1px solid ${category.color}30`
            }}
          >
            <div className={styles.iconContainer} style={{ color: category.color }}>
              {category.icon}
            </div>
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
