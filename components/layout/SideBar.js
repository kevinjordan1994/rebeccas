import Link from "next/link";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <nav className={styles.sidebar__main}>
      <h1 className={styles.sidebar__title}>Rebecca's</h1>
      <div className={styles.sidebar__separator}>
        <address className={styles.sidebar__address}>
          5700 Ocean Street, <br />
          Fritton, Fl
        </address>
      </div>
      <div className={styles.sidebar__links_container}>
        <ul className={styles.sidebar__links}>
          <li className={styles.sidebar__link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.sidebar__link}>
            <Link href="/menu">Menu</Link>
          </li>
          <li className={styles.sidebar__link}>
            <Link href="/">Reserve</Link>
          </li>
          <li className={styles.sidebar__link}>
            <Link href="/">Hours & Locations</Link>
          </li>
          <li className={styles.sidebar__link}>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
