import BlogCard from '@/components/blogCard/BlogCard'
import styles from './blog.module.css'
import { getPosts } from '../lib/data';

export const metadata = {
  title: "Blog",
  description: "Agency contact phone email",
};
const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/blog/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
const BlogPage = async() => {
  //Fetch Data with API
  const posts = await fetchData();
  //Fetch Data without API
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {posts?.map((post,i)=><BlogCard key={i} post={post} />)}
      </div>
    </div>
  )
}

export default BlogPage