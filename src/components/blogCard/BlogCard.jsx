import Link from 'next/link'
import styles from './blogCard.module.css'
import Image from 'next/image'

const BlogCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/slide-1.jpg" alt="" fill />
          </div>
          <span className={styles.date}>10.01.24</span>
        </div>
        <div className={styles.bottom}>
          <h1>Tile</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse magni modi consequuntur eos iure nesciunt impedit cum, voluptatibus ipsum delectus vel veritatis. Placeat numquam, ipsa unde reiciendis officia modi impedit.</p>
          <Link className={styles.link} href="/blog/post">Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard