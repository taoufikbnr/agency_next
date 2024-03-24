import Link from 'next/link'
import styles from './blogCard.module.css'
import Image from 'next/image'
import { getPost } from '@/app/lib/data'
import dayjs from 'dayjs'

const BlogCard = ({post}) => {
  const convertedDate  = dayjs(post.createdAt).format("YYYY.MM.DD")
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/slide-1.jpg" alt="" fill />
          </div>
          <span className={styles.date}>{convertedDate}</span>
        </div>
        <div className={styles.bottom}>
          <h1>{post.title}</h1>
          <p> {post.desc} </p>
          <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard