import { login } from '@/app/lib/actions'
import LoginForm from '@/components/loginForm/loginForm'
import styles from './login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm login={login} />
      </div>
    </div>
  )
}

export default LoginPage