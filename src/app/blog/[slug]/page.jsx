import Image from 'next/image'
import styles from './pageSingle.module.css'
import { getPost } from '@/app/lib/data';
import dayjs from 'dayjs';

const fetchPost = async (slug) => {
  try {
    const response = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
  }

    return response.json();
  } catch (error) {
    
  }
}

const SinglePostPage = async ({params}) => {
  const {slug} = params;
  //fetch with API
  const post = await fetchPost(slug);

  //fetch Without API
  // const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/slide-1.jpg"} alt="single" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
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
            <span className={styles.detailValue}>{dayjs(post.createdAt).format("YY.MM.DD")}</span>
          </div>
        </div>
        <div className={styles.desc}>
            {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage