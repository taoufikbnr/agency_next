"use client"
import Link from 'next/link'
import styles from "./navlink.module.css";
import { usePathname } from 'next/navigation';

const NavLink = ({link}) => {
    const path = usePathname();
  return (
    <div>
      <Link href={link.path} className={`${styles.link} ${path === link.path && styles.active} `}>
            {link.title}
     </Link>
    </div>
  )
}

export default NavLink