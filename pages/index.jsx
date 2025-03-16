import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div>
          <h1>I am Jonathan Doe</h1>
          <p>I'm Jonathan, professional web developer <br /> with long time experience in this field​</p>
        </div>
        <div className={styles.heroImage}>
          <Image width="450" height="450" src="/images/hero-image.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
