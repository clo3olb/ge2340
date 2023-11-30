import styles from "./MainImage.module.css";
function MainImage() {
  return (
    <div className={styles.main}>
      <img
        className={styles.img}
        src="/face_glitter.jpg"
        alt="face of a woman with glitters on her chin"
      />
      <div className={styles.caption}>
        Photo by{" "}
        <a href="https://www.pexels.com/photo/fashion-photography-of-woman-hands-on-chin-with-glitter-makeup-1081685/">
          3Motional Studio
        </a>
      </div>
    </div>
  );
}

export default MainImage;
