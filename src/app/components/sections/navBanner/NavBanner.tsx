import styles from './navBanner.module.css'
import { Banner } from "../../banner/Banner"
import { Navbar } from "../../navbar/Navbar"

export const NavBanner = () => {
    return (
        <div className={`container-fluid position-relative p-0 ${styles.navBanner}`}>
            <Navbar />
            <Banner />
        </div>
    )
}