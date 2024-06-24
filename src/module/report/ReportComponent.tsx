import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Bubble, Line } from "react-chartjs-2";
import { CiBank } from "react-icons/ci";
import { FaLongArrowAltUp, FaUsers } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Styles from "./report.module.scss";
import { useState } from "react";



export default function ReportComponent({ locale }) {
  const redirect = useRouter();
  const t = useTranslations("Request");
  const [documents, setDocuments] = useState([
    'Operatingaddress',
    'IDandProofofaddress',
    'IDsalldirectors',
    'Validbusiness',
    'Other',
  ]);

  const [newDocument, setNewDocument] = useState('');

  const addDocument = () => {
    if (newDocument.trim()) {
      setDocuments([...documents, newDocument.trim()]);
      setNewDocument('');
    }
  };

  return (
    <div className={Styles.dashboardSection}>
      <div className={Styles.dashboardAlignment}>
        <div className="container">
          <div className={Styles.dashboardetails}>
            <span> {t("dash")} {">"} {t("Settings")} {">"} {t('documents')}</span>
            <h1> {t("AddKYB")}</h1>
          </div>

          <div className={Styles.dashboardAllDetailsAlignment}>
          <div className={Styles.documentlist}>
      <div className={Styles.leftpanel}>
        <div className={Styles.iconplaceholder}>
          {/* Placeholder for the icon */}
          <div className={Styles.icon} />
        </div>
        <p>{t("AddthelistofDocuments")}</p>
      </div>
      <div className={Styles.rightpanel}>
        <div className={Styles.documenttags}>
          {documents.map((doc, index) => (
            <div key={index} className={Styles.documenttag }>
              

              {t(doc)}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newDocument}
          onChange={(e) => setNewDocument(e.target.value)}
          placeholder={t("Entetnewname")}
        />
        <button onClick={addDocument}>{t("ADDDOCUMENT")}</button>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
