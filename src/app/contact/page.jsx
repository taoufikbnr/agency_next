import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/about_bg.webp"} alt='about' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="fullname"/>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="phone number"/>
          <textarea name="" id="" cols="30" rows="10"placeholder="message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage