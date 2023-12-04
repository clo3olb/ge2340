import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <span>GE2340 - Course Project - 2023/2024 Semester A</span>
      <div className="navs">
        <Link href="/">Home</Link>
        <Link href="/experiments">Experiments</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/references">References</Link>
      </div>
    </div>
  );
}

export default Header;
