import { ImageSlider } from "./imageslider.jsx";
import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpg";
import img4 from "./imgs/img4.jpeg";

const IMAGES = [
  { url: img1, alt: "Car One" },
  { url: img2, alt: "Car Two" },
  { url: img3, alt: "Car Three" },
  { url: img4, alt: "Car Four" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}
