import Header from "@components/layout/Header";
import Swipe from "@components/layout/Swipe";
import { products, images } from "@data/data";
import ImageCarousel from "../components/layout/ImageCarousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Swipe products={products} />
      <ImageCarousel images={images} />
    </main>
  );
}
