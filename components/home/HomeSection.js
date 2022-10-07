import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./HomeSection.module.css";

export default function HomeSection(props) {
  const router = useRouter();

  const clickHandler = () => {
    router.push(props.buttonLink);
  };

  const regular = (
    <section className={styles.home_section}>
      <div className={styles.section__info_div}>
        <div className={styles.section__text}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <button className={styles.section__button} onClick={clickHandler}>
          {props.title}
        </button>
      </div>
      <div className={styles.section__image_div}>
        <Image src={props.image} />
      </div>
    </section>
  );

  const flipped = (
    <section className={styles.home_section}>
      <div className={styles.section__image_div}>
        <Image src={props.image} />
      </div>
      <div className={styles.section__info_div}>
        <div className={styles.section__text}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <button className={styles.section__button} onClick={clickHandler}>
          {props.title}
        </button>
      </div>
    </section>
  );

  return props.flipped ? flipped : regular;
}
