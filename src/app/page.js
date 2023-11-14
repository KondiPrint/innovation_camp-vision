import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.hero__container}>
        <p>"Rønde, klima er ikke op ad bakke!"</p>
        <img src="../../assets/hero-graphic-XS.svg" />
      </div>
      <main className={styles.wrapper}>
        <br />
        <br />
        <h1>Rønde Gør Sig Grøn: Et Bæredygtigt Initiativ</h1>
        <br />
        <div className={styles.undertitle}>
          <h3>
            Rønde Gør Sig Grøn er ikke blot et projekt, det er en visionær rejse
            mod en bæredygtig fremtid, der ikke kun gavner lokalsamfundet, men
            også sender en inspirerende besked til verden om, hvordan vi alle
            kan tage skridt mod en mere bæredygtig og ansvarlig levevis.
          </h3>
        </div>
        <br />
        <section className={styles.card__container}>
          <div className={styles.card__content}>
            <div>
              <Link href={"/eksperimentarium"}>
                <img
                  className={styles.cards}
                  src="../../assets/eksperimentarium.png"
                  alt="Eksperimentarium"
                />
              </Link>
            </div>
            <div>
              <Link href={"/greenareas"}>
                <img
                  className={styles.cards}
                  src="../../assets/nature.png"
                  alt="Grønne områder"
                />
              </Link>
            </div>
            <div>
              <Link href={"/tinyhouses"}>
                <img
                  className={styles.cards}
                  src="../../assets/tinyhouse.png"
                  alt="Tiny Houses"
                />
              </Link>
            </div>
          </div>
        </section>
        <br />
        <div className={styles.paragraphs}>
          <p>
            Rønde, en idyllisk by ved den danske kyst, har taget det store
            skridt mod en grønnere og mere bæredygtig fremtid. Byen har lanceret
            et ambitiøst miljøinitiativ, der ikke kun omfavner grønne løsninger,
            men også skaber et fyrtårn for miljø og klima. Dette initiativ er
            centreret omkring opførelsen af fem tiny houses og et
            avantgardistisk eksperimentarium, hver dedikeret til nøgleaspekter
            af bæredygtighed:{" "}
            <i>
              energi, byggeløsninger, transport, fødevarer og biodiversitet.
            </i>
          </p>
        </div>
        <br />
      </main>
    </>
  );
}
