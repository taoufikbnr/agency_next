import Image from 'next/image'
import styles from './pageSingle.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/slide-1.jpg"} alt="single" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div className={styles.avatar}>
            <Image src={"/slide-1.jpg"} alt="single" fill/>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jon Snow</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2023</span>
          </div>
        </div>
        <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus corrupti, sapiente aperiam cum mollitia sint cumque reprehenderit at iusto ipsa optio obcaecati dolore autem nesciunt fugiat maiores recusandae hic.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage