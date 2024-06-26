import { useTranslations } from "next-intl";
import styles from "./buyer-detail.module.scss";
import Image from "next/image";
export default function RequestComponent() {
  const t = useTranslations("Request");
const bank=[
  {
    name:'HSBC Finance',
    date:'30 Jan 2024',
    transationId:'TEA-234',
    number:'234334 SAR',
    img:'/assets/sabb.png'
  },
  {
    name:'SABB Finance',
    date:'2 Feb 2024',
    transationId:'TEA-235',
    number:'234334 SAR',
    img:'/assets/sap.png'
  },
  {
    name:'SAP Finance',
    date:'30 Jan 2024',
    transationId:'TEA-234',
    number:'234334 SAR',
    img:'/assets/elm.png'
  },
]

  return (
    <div>
      <div className={styles.requestDetailsSection}>
        <div className={styles.requestDetailsMainAlignment}>
          <h4>{t("Our_Bank")}</h4>

          <div className={styles.tableDetailsAlignment}>
            <table cellPadding={0} cellSpacing={0}>
              <tbody>
                {bank.map((data,index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className={styles.imgAlignment}>
                          <Image
                           src={data.img}
                            alt="hsbc"
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </div>
                      </td>
                      <td>
                        <div className={styles.companuNameAlignment}>
                          <h4>{data.name}</h4>
                          <p>{data?.transationId}</p>
                        </div>
                      </td>
                      <td>{data.date}</td>
                      <td>{t("Invoice")}</td>
                      <td>
                        <div className={styles.sarDetails}>
                          <span>{data.number}</span>
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
                {bank.map((data,index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className={styles.imgAlignment}>
                        <Image
                           src={data.img}
                            alt="hsbc"
                            width={0}
                            height={0}
                            unoptimized
                          />
                        </div>
                      </td>
                      <td>
                        <div className={styles.companuNameAlignment}>
                          <h4>{data.name}</h4>
                          <p>{data.transationId}</p>
                        </div>
                      </td>
                      <td>{data.date}</td>
                      <td>{t("Invoice")}</td>
                      <td>
                        <div className={styles.sarDetails}>
                          <span>{data.number}</span>
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
