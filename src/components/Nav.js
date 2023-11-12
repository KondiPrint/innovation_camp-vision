import Link from "next/link";
import styles from "@/components/nav.module.scss";

export default async function Nav() {
  return (
    <header className={styles.pageheader}>
      <nav>
        <menu className={styles.pageheader__menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/underside_1"}>Underside 1</Link>
          </li>
          <li>
            <Link href={"/underside_2"}>Underside 2</Link>
          </li>
          <li>
            <Link href={"/underside_3"}>Underside 3</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}
