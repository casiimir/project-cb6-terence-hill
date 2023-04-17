import styles from "./hamburgerMenu.module.scss";
import Link from "next/link";
import { AiOutlineArrowRight } from 'react-icons/ai';



const HamburgerMenu = () => {

    return(
        <div className={styles.HamburgerMenu}>
            <ul className = {styles.menuList}>
                <Link href={"/events/concert"}>
                    <li className={styles.menuItem}> Musica<AiOutlineArrowRight /></li>
                    </Link>
                <Link href={"/events/opera"}>
                    <li className={styles.menuItem}>Opera <AiOutlineArrowRight /></li> 
                    </Link>
                <Link href={"/events/sport"}>
                    <li className={styles.menuItem}>Sport <AiOutlineArrowRight /></li>
                    </Link>
            </ul>
            <ul className={styles.homeMenuList}>
                <Link href={"/"}><li className={styles.homeMenuItem}>Home</li></Link>
                <Link href={"/events"}><li className={styles.homeMenuItem}>Eventi</li></Link>
                <Link href={"/about"}><li className={styles.homeMenuItem}>About</li></Link>
                <li className={styles.homeMenuItem}>Newsletter</li>
            </ul>      
        </div>
    )
}

export default HamburgerMenu; 