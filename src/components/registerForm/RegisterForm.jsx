"use client"
import {useFormState} from "react-dom";
import styles from "./registerForm.module.css";
import Link from "next/link";

const RegisterForm = ({register}) => {
  const [state,formAction] = useFormState(register,null);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="retypePassword"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm