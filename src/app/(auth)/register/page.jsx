import { register } from '@/app/lib/actions'
import styles from "./register.module.css"
const RegisterPage = () => {

  return (
    <div className={styles.container}>
      <form action={register}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="password" placeholder="re-type password" name="retypePassword" />
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage