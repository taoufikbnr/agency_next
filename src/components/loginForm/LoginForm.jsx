"use client"
import {useFormState} from "react-dom";
import styles from "../registerForm/registerForm.module.css";
import Link from "next/link";


const LoginForm = ({login}) => {
    const [state,formAction] = useFormState(login,null);
    console.log(state);
  return (
    <form className={styles.form} action={formAction}>
    <input type="text" placeholder="username" name="username" />
    <input type="password" placeholder="password" name="password" />
    <button>Login</button>
    {state?.error}
    <Link href="/register">
      You dont have an account? <b>Register</b>
    </Link>
  </form>
  )
}

export default LoginForm