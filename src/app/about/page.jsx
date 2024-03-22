import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>About Agency</h3>
        <h1 className={styles.title}>text</h1>
        <p className={styles.desc} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi porro cupiditate sed tenetur impedit, nemo vel iusto autem. Asperiores nulla animi sed velit. Cupiditate, dolorem modi. Quae tenetur veritatis id.</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h1>+10</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.stat}>
            <h1>+10</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.stat}>
            <h1>+10</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about_bg.webp"} alt='about' fill className={styles.img} />
      </div>
    </div>
  )
}

export default AboutPage