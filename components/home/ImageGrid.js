import Image from "next/image";
import styles from "./ImageGrid.module.css";
import tallBreakfastImage from "../../public/images/breakfast_tall.jpg";
import tallEggsImage from "../../public/images/eggs_tall.jpg";
import smallEggImage from "../../public/images/egg_toast.jpg";

export default function ImageGrid() {
  return (
    <section className={styles.image__grid}>
      <div>
        <Image src={tallBreakfastImage} />
        <Image src={smallEggImage} />
      </div>
      <div>
        <Image src={smallEggImage} />
        <Image src={tallEggsImage} />
      </div>
    </section>
  );
}
