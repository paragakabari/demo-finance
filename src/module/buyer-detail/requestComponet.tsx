import { useTranslations } from "next-intl";
import styles from "./buyer-detail.module.scss";
import Image from "next/image";
export default function RequestComponent() {
  const t = useTranslations("Request");

  return (
    <div>
      <div className={styles.requestDetailsSection}>
        <div className={styles.requestDetailsMainAlignment}>
          <h4>{t("Our_Bank")}</h4>

          <div className={styles.tableDetailsAlignment}>
            <table cellPadding={0} cellSpacing={0}>
              <tbody>
                {[0, 1, 2].map((index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className={styles.imgAlignment}>
                          <Image
                           src="/assets/pdf.png"
                            alt="hsbc"
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </div>
                      </td>
                      <td>
                        <div className={styles.companuNameAlignment}>
                          <h4>{t("HSBC_Finance")}</h4>
                          <p>{t("Transaction_Id")}</p>
                        </div>
                      </td>
                      <td>{t("30_Jan_2024")}</td>
                      <td>{t("Invoice")}</td>
                      <td>
                        <div className={styles.sarDetails}>
                          <span>{t("234334_SAR")}</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.attachecDocumentAlignment}>
                          <button>{t("Attached_Docs")}</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.requestDetailsMainAlignment}>
          <h4>{t("Other_BanksFinancers")}</h4>

          <div className={styles.tableDetailsAlignment}>
            <table cellPadding={0} cellSpacing={0}>
              <tbody>
                {[0, 1, 2].map((index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className={styles.imgAlignment}>
                        <Image
                           src="/assets/sap.png"
                            alt="hsbc"
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </div>
                      </td>
                      <td>
                        <div className={styles.companuNameAlignment}>
                          <h4>{t("HSBC_Finance")}</h4>
                          <p>{t("Transaction_Id")}</p>
                        </div>
                      </td>
                      <td>{t("30_Jan_2024")}</td>
                      <td>{t("Invoice")}</td>
                      <td>
                        <div className={styles.sarDetails}>
                          <span>{t("234334_SAR")}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
