import React, { useState } from "react";
import Styles from "./request.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function RejectModel({isModelOpen, setModelOpen,handleRejectPopup}) {
  const t = useTranslations("Reject");
  return (

    <div className={Styles.modelOpen}>
      <div className={Styles.popupOverlay}>
        <div>
          <div className={Styles.popupHeader}>
            <Image
              src={"/assets/popup.png"}
              alt="logo"
              width={100}
              height={50}
            />
          </div>
          <div className={Styles.popupContent}>
            <h2>
              {t("title")}
            </h2>
            <textarea
              placeholder={t("subHeading")}
              className={Styles.popupTextarea}
            ></textarea>
          </div>
          <div className={Styles.popupActions}>
            <button
              onClick={() => handleRejectPopup()}
              className={Styles.popupButtonCancel}
            >
              {t("no_not")}
            </button>
            <button className={Styles.popupButtonProceed}
            onClick={() => handleRejectPopup()}>
              {t("yes")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
