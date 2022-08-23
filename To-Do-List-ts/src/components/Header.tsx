import styles from './Header.module.css'

import todolistLogo from '../assets/Logo.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={todolistLogo} alt="Logotipo do To-Do-List" />
        </header>
    )
}