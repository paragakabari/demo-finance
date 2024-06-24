import React from "react";
import styles from "./buyer-detail.module.scss";
import { useTranslations } from "next-intl";
export default function BuyerComponet() {
  const t = useTranslations("Request");
  return (
    <div>
      <div className={styles.allBuyerDetailsSection}>
        <div className={styles.allBuyerDetailsBox}>
          <h6>{t("Buyer_Details")}</h6>
          <div className={styles.secondDetailsAlignment}>
            <h5>{t("Corbet_Services")}</h5>
            <p>
              {t("Commercial_Component")}
            </p>
          </div>

          <div className={styles.buyerOtherDetailsALignment}>
            <div className={styles.otherDetails}>
              <h6>{t("Location")}</h6>
              <p>
                {t("Northern_Arabia")}
              </p>
            </div>
            <div className={styles.otherDetails}>
              <h6>{t("Mobile")}</h6>
              <p>+966112401733</p>
            </div>
            <div className={styles.otherDetails}>
              <h6>{t("Email")}</h6>
              <p>Sameera.hamed@gmail.com</p>
            </div>
          </div>

          <div className={styles.buyerOtherDetailsALignment}>
            <div className={styles.otherDetails}>
              <h6>{t("Sector")}</h6>
              <p>{t("Motor_vehicles")}</p>
            </div>
            <div className={styles.otherDetails}>
              <h6>{t("Business_Type")}</h6>
              <p>{t("Private")}</p>
            </div>
            <div className={styles.otherDetails}>
              <h6>{t("Email")}</h6>
            </div>
          </div>

          <div className={styles.buyerOtherDetailsALignment}>
            <div className={styles.addressAlignment}>
              <h6>{t("About_company")}</h6>
              <p>
                {t("SPS_necessary_manage_solutions")}
              </p>
            </div>
          </div>

          <div className={styles.buyerOtherDetailsALignment}>
            <div className={styles.otherDetails}>
              <h6>{t("CRName")}</h6>
              <p>1010476677</p>
            </div>
            <div className={styles.otherDetails}>
              <h6>{t("CRName")}</h6>
              <p>مشغل ابراهيم محمد المفرج</p>
            </div>
            <div className={styles.otherDetails}>
              <h6>{t("IssueDate")}</h6>
              <p>{t("IssueDate")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
