import { register } from '@/app/lib/actions'
import styles from "./register.module.css"
import RegisterForm from '@/components/registerForm/RegisterForm'
const RegisterPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm register={register} />
      </div>
    </div>
  )
}

export default RegisterPage