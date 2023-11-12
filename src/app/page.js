import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <h1>Rønde som en grøn by!</h1>
        <section>
          <div className={styles.card_container}>
            <div>
              <img src="" alt="Eksperimentarium" />
            </div>
            <div>
              <img src="" alt="Grønne områder" />
            </div>
            <div>
              <img src="" alt="Visioner" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
