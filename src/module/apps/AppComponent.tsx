import { useTranslations } from "next-intl";
import styles from "./apps.module.scss";
import Image from "next/image";

export default function AppsComponent() {
  const t = useTranslations("Apps");
  return (
    <div className={styles.appDetailsSection}>
      <div className="container">
        <div className={styles.appDetailsAlignment}>
          <div className={styles.breadCumb}>
            <a>{t("dashboard")}</a>
            <a>{">"}</a>
            <a>{t("title")}</a>
          </div>
          <div className={styles.appHeading}>
            <h1>{t("heading")}</h1>
            <p>{t("subHeading")}</p>
          </div>

          <div className={styles.appDetailsAllDetailsAlignment}>
            <div className={styles.appsGrid}>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/sap.png"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("sap")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/oracle.webp"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("oracle")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/microsoft.png"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("microsoft")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/bayan.jpeg"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("bayan")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/elm.png"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("elm")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/simah.png"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("simah")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
              <div className={styles.appsGridItem}>
                <div className={styles.appsmain}>
                  <div className={styles.appmainimage}>
                    <Image unoptimized
                      src="/assets/fina.png"
                      alt="SAP"
                      width={0}
                      height={0}
                      />
                  </div>
                  <div className={styles.appmaindetails}>
                    <div>
                      <div className={styles.heading}>{t("finastra")}</div>
                      <div className={styles.subHeading}>{t("category")}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.appsmainHeading}>{t("subcategory")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
