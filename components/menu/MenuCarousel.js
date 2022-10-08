import Image from "next/image";
import { useEffect, useState } from "react";
import imageOne from "../../public/images/breakfast_md.jpg";
import imageTwo from "../../public/images/brunch_md.jpg";
import styles from "./MenuCarousel.module.css";

const CHANGE_IMAGE_TIME = 3000;

export default function MenuCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = [imageOne, imageTwo];

  const changeImage = (index, array) => {
    if (index >= array.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(index + 1);
    }
  };

  useEffect(() => {
    let changeImageTimer = setTimeout(() => {
      changeImage(currentImageIndex, imageArray);
    }, CHANGE_IMAGE_TIME);
    return () => {
      clearTimeout(changeImageTimer);
    };
  });

  useEffect(() => {
    let changeImageTimer = setTimeout(() => {
      changeImage(currentImageIndex, imageArray);
    }, CHANGE_IMAGE_TIME);
    return () => {
      clearTimeout(changeImageTimer);
    };
  }, [currentImageIndex]);

  return (
    <section className={styles.carousel__main}>
      <Image
        placeholder="blur"
        layout="responsive"
        src={imageArray[currentImageIndex]}
      />
    </section>
  );
}
