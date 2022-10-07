import Image from "next/image";
import styles from "./ImageGrid.module.css";
import tallBreakfastImage from "../../public/images/breakfast_tall.jpg";
import tallEggsImage from "../../public/images/eggs_tall.jpg";
import smallEggImage from "../../public/images/egg_toast.jpg";
import brunchSmall from "../../public/images/brunch_md.jpg";

export default function ImageGrid() {
  return (
    <section className={styles.image__grid}>
      <div>
        <Image src={tallBreakfastImage} placeholder="blur" />
        <Image src={smallEggImage} placeholder="blur" />
      </div>
      <div>
        <Image src={brunchSmall} placeholder="blur" />
        <Image src={tallEggsImage} placeholder="blur" />
      </div>
    </section>
  );
}
