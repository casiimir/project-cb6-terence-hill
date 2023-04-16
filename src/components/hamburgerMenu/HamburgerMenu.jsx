import styles from "./hamburgerMenu.module.scss";
import { AiOutlineArrowRight } from 'react-icons/ai';


const HamburgerMenu = () => {

    return(
        <div className={styles.HamburgerMenu}>
            <ul className = {styles.menuList}>
                <li className={styles.menuItem}>Musica <AiOutlineArrowRight /></li>
                <li className={styles.menuItem}>Arte & Teatro <AiOutlineArrowRight /></li>
                <li className={styles.menuItem}>Sport <AiOutlineArrowRight /></li>
                <li className={styles.menuItem}>Altra Categoria <AiOutlineArrowRight /></li>
            </ul>
        </div>
    )
}

export default HamburgerMenu; 