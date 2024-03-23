import BlogCard from '@/components/blogCard/BlogCard'
import styles from './blog.module.css'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}

export default BlogPage