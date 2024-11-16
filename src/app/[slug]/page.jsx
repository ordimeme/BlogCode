import styles from './singlePage.module.css'
import Image from 'next/image'
// import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

const SinglePage = ({ params }) => {
  const { slug } = params;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reddit's React community</h1>
        <div className={styles.user}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}>01.01.2024</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.articleContent}>
            <div className={styles.imageContainer}>
              <Image 
                src="/p1.jpeg" 
                alt="文章封面图"
                fill
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.description}>
              <p>
                React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
                React components are JavaScript functions that return markup:
              </p>
              <h5>
                Notice that starts with a capital letter. That's how you know it's a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.
              </h5>
              <p>
                React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
                React components are JavaScript functions that return markup:
              </p>
            </div>
            <div className={styles.comment}>
              <Comments /> 
            </div>
          </div>
        </div>

        {/* <div className={styles.menuContainer}>
          <Menu />
        </div> */}
      </div>
    </div>
  )
}

export default SinglePage
