import Link from "next/link";
import styles from "@/components/nav.module.scss";

export default async function Nav() {
  return (
    <>
      <header className={styles.pageheader}>
        <nav>
          <menu className={styles.pageheader__menu}>
            <li>
              <Link href={"/eksperimentarium"}>Eksperimentarium</Link>
            </li>
            <li>
              <Link href={"/greenareas"}>Grønne Områder</Link>
            </li>
            <Link href={"/"}>
              <img src="../../assets/logo.png" alt="Rønde Logo" />
            </Link>
            <li>
              <Link href={"/tinyhouses"}>Tiny Houses</Link>
            </li>
            <li>
              <Link href={"/merchandise"}>Merchandise</Link>
            </li>
          </menu>
        </nav>
      </header>
    </>
  );
}
