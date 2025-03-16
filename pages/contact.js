import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Contact Me</h1>
        <form className={styles.Form}>
          
          <input type="text" placeholder="Your name" />
          
          <input type="email" placeholder="Your email" />
          
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
