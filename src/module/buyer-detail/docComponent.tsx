import React from "react";
import styles from "./buyer-detail.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function DocComponent() {
  const t = useTranslations('Request');
  return (
    <div>
      <div className={styles.doc}>
        <div className={styles.doc__header}>
          <div className={styles.doc__header}>{t("docs")}</div>
        </div>
        <div className={styles.doc__grid}>
          <div className={styles.doc__grid__item}>
            <div>
              <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className={styles.doc__grid__item}>
            <div>
            <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>{" "}
          <div className={styles.doc__grid__item}>
            <div>
            <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>{" "}
          <div className={styles.doc__grid__item}>
            <div>
            <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>{" "}
          <div className={styles.doc__grid__item}>
            <div>
            <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>{" "}
          <div className={styles.doc__grid__item}>
            <div>
            <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>{" "}
          <div className={styles.doc__grid__item}>
            <div>
            <div className={styles.firstHeading}>{t("Document_Name")}</div>
              <div className={styles.secondHeading}>{t("AddedOn")}</div>
              <div className={styles.thirdHeading}>{t("212kb")}</div>
            </div>
            <div>
              <Image
                unoptimized
                src="/assets/pdf.png"
                alt="pdf"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
