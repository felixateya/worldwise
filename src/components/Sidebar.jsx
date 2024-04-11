import {Outlet} from 'react-router-dom'
import Logo from './Logo'
import AppNav from './APpNav'

import styles from './Sidebar.module.css'

function Sidebar (){
    return <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>

        <Outlet/>

        <footer className={styles.footer}>
            <p className={styles.copywright}>
                &copy; Copywright {new Date().getFullYear()} by
                WorldWise Inc.
            </p>
        </footer>
    </div>
}

export default Sidebar