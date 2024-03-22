import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <h1>about</h1>
      <div className={styles.imgContainer}>
        <Image src={"https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg"} alt='about' fill />
      </div>
      <blockquote>hello</blockquote>
    </div>
  )
}

export default AboutPage