import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <span>GE2340 - Course Project - 2023/2024 Semester A</span>
      <div>
        <Link href="/">Home</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/references">References</Link>
      </div>
    </div>
  );
}

export default Header;
