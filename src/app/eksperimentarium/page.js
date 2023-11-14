import styles from "./eksperimentarium.module.scss";

export default function Eksperimentarium() {
  return (
    <>
      <div className={styles.wrapper}>
        <main>
          <br />
          <br />
          <h1>Røndes Eksperimentarium: Fyrtårnet for Miljø og Klima</h1>
          <br />
          <br />
          <p>
            Midtpunktet for dette visionære projekt er Røndes eksperimentarium,
            der står som et fyrtårn for miljø og klima. Dette nyskabende
            kompleks er designet til at inspirere og uddanne, og det integrerer
            avancerede teknologier og interaktive udstillinger for at skabe
            bevidsthed om bæredygtige praksisser. Med sin arkitektoniske
            nyskabelse og brug af grønne teknologier stræber eksperimentariet
            efter at være et vartegn for Rønde og et eksempel til efterlevelse
            for byer overalt.
          </p>
        </main>
      </div>
      <div className={styles.img__container}>
        <img src="../../assets/eksperimentarium-bg.svg" alt="" />
      </div>
    </>
  );
}
