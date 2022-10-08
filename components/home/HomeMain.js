import HomeSection from "./HomeSection";
import menuImage from "../../public/images/breakfast_md.jpg";
import reserveImage from "../../public/images/brunch2_md.jpg";
import styles from "./HomeMain.module.css";

export default function HomeMain(props) {
  return (
    <div className={styles.home__main}>
      <p className={styles.home__description}>
        A relaxing brunch on the sunny Florida coast
      </p>
      <HomeSection
        flipped={false}
        title="Menu"
        description="Insert text about how great the food is and how it's the best
            restaurant ever."
        image={menuImage}
        buttonLink="/menu"
      />
      <HomeSection
        flipped={true}
        title="Reserve"
        description="Insert text about how you can reserve a table at a date and time."
        image={reserveImage}
        buttonLink="/reserve"
      />
    </div>
  );
}
