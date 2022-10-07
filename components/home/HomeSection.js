import Image from "next/image";
import { useRouter } from "next/router";
import image from "../../public/images/breakfast_md.jpg";
import styles from "./HomeSection.module.css";

let isFlipped = false;

export default function HomeSection(props) {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/menu");
  };

  const regular = (
    <section className={styles.home_section}>
      <div className={styles.section__info_div}>
        <div className={styles.section__text}>
          <h2>Menu</h2>
          <p>
            Insert text about how great the food is and how it's the best
            restaurant ever.
          </p>
        </div>
        <button className={styles.section__button} onClick={clickHandler}>
          MENU
        </button>
      </div>
      <div className={styles.section__image_div}>
        <Image src={image} />
      </div>
    </section>
  );

  const flipped = (
    <section className={styles.home_section}>
      <div className={styles.section__image_div}>
        <Image src={image} />
      </div>
      <div className={styles.section__info_div}>
        <div className={styles.section__text}>
          <h2>Menu</h2>
          <p>
            Insert text about how great the food is and how it's the best
            restaurant ever.
          </p>
        </div>
        <button className={styles.section__button} onClick={clickHandler}>
          MENU
        </button>
      </div>
    </section>
  );

  return isFlipped ? flipped : regular;
}
