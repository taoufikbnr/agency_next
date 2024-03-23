import styles from "./blog.module.css"

const BlogLayout = ({children}) => {
  return (
    <div className={styles.layout}>
        <h2>This the Blog Layout</h2>
        {children}
    </div>
  )
}

export default BlogLayout