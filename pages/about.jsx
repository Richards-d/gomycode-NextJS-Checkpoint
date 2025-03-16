import Navbar from "../components/Navbar";
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>About Me</h1>
        <p>I am a passionate developer... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus id consequuntur accusantium magni fuga saepe neque consequatur error adipisci, aliquid assumenda cum tempora quibusdam explicabo sequi, quos recusandae nam.</p>

        <div className={styles.aboutInfo}>
          <div className={styles.info1}>
            <h6>Name:</h6>
            <p>Jonathan Doe</p>
            <h6>Email:</h6>
            <p>example@domain.com</p>
          </div>
          <div className={styles.info2}>
            <h6>Phone:</h6>
            <p>+1 111 111 111</p>
            <h6>LinkedIn:</h6>
            <p>Jonathan_123</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
