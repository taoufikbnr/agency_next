"use client"
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from './navlink/NavLink';
import { RxHamburgerMenu  } from "react-icons/rx";

const Links = () => {
    const [isOpen, setIsOpen] = useState(false)
    const session = true;
    const isAdmin = false;
    const links = [
        {
            title:"Homepage",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        }
    ]
  return (
    <div className={styles.container}>
        <div className={styles.links} >
            {links.map((link,i)=> <NavLink link={link} key={i} />
            )}
            {session?
            <>
            {isAdmin && <NavLink  link={{title:"Admin",path:"/admin"}} />}
            <button className={styles.logout} >Logout</button>
            </>
            :
            <NavLink link={{title:"Login",path:"/login"}} />    
        }
        </div>
        <span className={styles.burgerButton} onClick={()=>setIsOpen(prev=>!prev)}><RxHamburgerMenu /> </span>
        <div className={styles.mobileLinks}>
            {isOpen && links.map((link,i)=> <NavLink link={link} key={i} />)}
        </div>
    </div>
  )
}

export default Links