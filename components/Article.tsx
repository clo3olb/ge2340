import styles from "./Article.module.css";
import Image from "./Image";
import Sidebar from "./Sidebar";

type Props = {
  title: string;
  children?: React.ReactNode;
};

function Article({ title, children }: Props) {
  return (
    <div className={styles.article}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Article;
