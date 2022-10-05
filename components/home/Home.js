import Image from "next/image";
import homeBackgroundImage from "../../public/images/breakfast_lg.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home__section}>
      <p className={styles.home__headline}>Delicious Sunday Brunch</p>
      <div className={styles.home__image_container}>
        <Image
          className={styles.home__main_image}
          src={homeBackgroundImage}
          layout="responsive"
          priority
        />
      </div>
    </section>
  );
}
