import Image from "next/image";
import styles from "./home.module.css"

export default function Home() {
  return (
    <div>
      <div className={styles.slider}>
        <h1 className={styles.title}>Revenue Focused Business Growth Services</h1>
        <div className={styles.contact}>
          <h3 className={styles.para}>Looking for a First-Class Business Plan Consultant?</h3>
          <div>
            <button  className={styles.button}>GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}
