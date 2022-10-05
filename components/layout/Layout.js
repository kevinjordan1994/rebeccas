import SideBar from "./SideBar";
import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.layout__main}>
      <SideBar />
      <main className={styles.layout__content}>{props.children}</main>
    </div>
  );
}
