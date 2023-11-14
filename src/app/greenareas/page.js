import styles from "./greenareas.module.scss";

export default function GreenAreas() {
  return (
    <>
      <div className={styles.wrapper}>
        <main>
          <br />
          <br />
          <h1>Det Grønne omkring Rønde: Oaser af Natur og Ro</h1>
          <br />
          <br />
          <p>
            Projektet omfavner ikke kun innovation inden for byområder, men
            prioriterer også beskyttelse og bevarelse af de omkringliggende
            grønne områder. Rønde er omgivet af naturskønne landskaber, der
            tjener som åndehuller for byens beboere. Disse grønne områder
            understreger vigtigheden af at bevare biodiversitet og skaber
            muligheder for rekreation og fordybelse i naturen. Gennem en
            holistisk tilgang til bæredygtighed stræber Rønde efter at balancere
            urban udvikling med bevarelsen af sit naturlige arv.
          </p>
        </main>
      </div>
      <div className={styles.img__container}>
        <img src="../../assets/nature_bg.svg" alt="" />
      </div>
    </>
  );
}
