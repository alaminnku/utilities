import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@styles/layout/ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentImage]);

  return (
    <div className={styles.image_carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${index === currentImage && styles.active} ${
            styles.image
          }`}
        >
          {index === currentImage && (
            <Image
              src={image}
              width={16}
              height={9}
              layout="responsive"
              objectFit="cover"
              objectPosition="top"
              alt="none"
            />
          )}
        </div>
      ))}
    </div>
  );
}
