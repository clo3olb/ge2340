import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.author}>
        <div className={styles.author__name}>Hyeonwoo KIM</div>
        <div className="author__info">55326851</div>
      </div>
      <div className={styles.author}>
        <div className={styles.author__name}>LEE Lik Sing</div>
        <div className="author__info">56632760</div>
      </div>
      <div className={styles.author}>
        <div className={styles.author__name}>Hung Man Ka</div>
        <div className="author__info">56622477</div>
      </div>
      <div className={styles.author}>
        <div className={styles.author__name}>SOYSAL Onur</div>
        <div className="author__info">40151620</div>
      </div>
    </div>
  );
}

export default Sidebar;
