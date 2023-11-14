import Link from "next/link";
import styles from "@/components/nav.module.scss";

export default async function Nav() {
  return (
    <>
      <header className={styles.pageheader}>
        <nav>
          <menu className={styles.pageheader__menu}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/eksperimentarium"}>Eksperimentarium</Link>
            </li>
            <Link href={"/"}>
              <img src="../../assets/logo.png" alt="Rønde Logo" />
            </Link>
            <li>
              <Link href={"/greenareas"}>Grønne Områder</Link>
            </li>
            <li>
              <Link href={"/tinyhouses"}>Tiny Houses</Link>
            </li>
          </menu>
        </nav>
      </header>
    </>
  );
}
