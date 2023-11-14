import styles from "./tinyhouses.module.scss";

export default function TinyHouses() {
  return (
    <>
      <div className={styles.wrapper}>
        <main>
          <br />
          <br />
          <h1>Tiny Houses: Bæredygtighed i Miniature</h1>
          <br />
          <br />
          <p>
            De fem tiny houses i Rønde symboliserer en ny æra af bæredygtig
            boligudvikling. Hvert hus er designet med et specifikt fokusområde,
            der strækker sig fra innovative energiløsninger til banebrydende
            byggemetoder. Et hus dedikeret til energi udforsker solceller og
            andre vedvarende energiformer, mens et andet fokuserer på
            bæredygtige byggematerialer og arkitektoniske teknikker.
            Transport-huset udforsker alternative transportmidler og
            infrastruktur, mens fødevarehuset dykker ned i lokale og bæredygtige
            fødevareproduktionssystemer. Endelig repræsenterer
            biodiversitetshuset naturens mangfoldighed og vigtigheden af
            bevaring.
          </p>
        </main>
      </div>
      <div className={styles.img__container}>
        <img src="../../assets/tinyhouses-bg.svg" alt="" />
      </div>
    </>
  );
}
