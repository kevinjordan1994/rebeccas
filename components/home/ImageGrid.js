import Image from "next/image";
import styles from "./ImageGrid.module.css";
import tallBreakfastImage from "../../public/images/breakfast_tall.jpg";
import smallEggImage from "../../public/images/egg_toast.jpg";

export default function ImageGrid() {
  return (
    <section className={styles.image__grid}>
      <Image
        className={styles.tall__1}
        src={tallBreakfastImage}
        height={720}
        width={480}
      />
      <Image
        className={styles.small__1}
        src={smallEggImage}
        height={360}
        width={480}
      />
      <Image
        className={styles.small__2}
        src={smallEggImage}
        height={360}
        width={480}
      />
    </section>
  );
}
