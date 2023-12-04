import Link from "next/link";
import styles from "./Image.module.css";

type Props = {
  src?: string;
  author?: string;
  authorLink?: string;
  alt?: string;
  className?: string;
};

const defaultImgSrc =
  "https://images.unsplash.com/photo-1594819047050-99defca82545?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Image({
  src = defaultImgSrc,
  author,
  alt,
  className,
  authorLink,
}: Props) {
  return (
    <div className={`${styles.main} ${className}`}>
      <img className={styles.img} src={src} alt={alt} />
      {author && (
        <div className={styles.caption}>
          Photo by{" "}
          {authorLink ? (
            <Link href={authorLink} className={styles.author_link}>
              <b>{author}</b>
            </Link>
          ) : (
            <b>{author}</b>
          )}
        </div>
      )}
    </div>
  );
}

export default Image;
