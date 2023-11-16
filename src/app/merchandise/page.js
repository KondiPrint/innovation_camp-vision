import styles from "./merchandise.module.scss";

export default function Merchantdise() {
  return (
    <>
      <div className={styles.wrapper}>
        <main>
          <br />
          <br />
          <h1>Bær Rønde Grønt Merchandise med Stolthed!</h1>
          <br />
          <br />
          <p>
            Velkommen til vores merchandise-afdeling, hvor bæredygtighed og stil
            mødes! Udforsk vores sortiment af miljøvenlige produkter, der ikke
            kun repræsenterer Røndes grønne initiativ, men også afspejler din
            personlige passion for bæredygtighed. Genanvendelige T-shirts i
            økologisk bomuld - vores merchandise er mere end bare produkter; det
            er en livsstil.
          </p>
          <section className={styles.content__container}>
            <p>Gradient T-shirts!</p>
            <div className={styles.gradient__products_container}>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_1-front.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_1-back.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_2-front.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_2-back.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>

              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_4-front.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_4-back.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_5-front.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_5-back.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
              <div className={`${styles.products}  ${styles.span}`}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_3-front.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/gradient-t-shirt/tshirt_3-back.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
            </div>
            <p>White T-shirts!</p>
            <div className={styles.white__products_container}>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/white-t-shirt/tshirt_1-frontWHITE.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/white-t-shirt/tshirt_1-backWHITE.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/white-t-shirt/tshirt_2-frontWHITE.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/white-t-shirt/tshirt_2-backWHITE.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>

              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/white-t-shirt/tshirt_4-frontWHITE.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/white-t-shirt/tshirt_4-backWHITE.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/white-t-shirt/tshirt_5-frontWHITE.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/white-t-shirt/tshirt_5-backWHITE.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
              <div className={`${styles.products}  ${styles.span}`}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/white-t-shirt/tshirt_3-frontWHITE.png"
                    alt="t-shirt front"
                  />
                  <img
                    src="../../../assets/white-t-shirt/tshirt_3-backWHITE.png"
                    alt="t-shirt back"
                  />
                </div>
              </div>
            </div>
            <p>Kuglepinde!</p>
            <div className={styles.pen__products_container}>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/kuglepinde/kuglepen_1.png"
                    alt="Kuglepind 1"
                  />
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/kuglepinde/kuglepen_2.png"
                    alt="Kuglepind 2"
                  />
                </div>
              </div>
              <div className={`${styles.products}  ${styles.span}`}>
                <div className={styles.background}>
                  <img
                    src="../../../assets/kuglepinde/kuglepen_3.png"
                    alt="Kuglepind 3"
                  />
                </div>
              </div>
            </div>
            <p>Plakater!</p>
            <div className={styles.plakat__container}>
              <div className={styles.products}>
                <img src="../../../assets/plakat.png" alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
