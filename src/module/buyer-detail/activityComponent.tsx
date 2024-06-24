import React from "react";
import styles from "./buyer-detail.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import classNames from "classnames";
export default function ActivityComponent() {
  const t = useTranslations("Request");
  return (
    <>
      <h6>{t("acti")}</h6>
      <div className={styles.activityAllDetailsAlignment}>
        <div className={styles.activityGridAlignment}>
          <div className={styles.stepViewAlignment}>
            <div className={styles.sideRoundAlignment}></div>
            <div className={styles.bottomLine}></div>
          </div>
          <div className={styles.activityGridLeftSide}>
            <h6>{t("new_service")}</h6>
            <div className={styles.createdDateAlignment}>
              <p>{t("add_timne")}</p>
              <div className={styles.cretedProfileImg}></div>
            </div>
            <div className={styles.paymentPendingDetails}>
              <div className={styles.paymentPendingBox}>
                <p>{t("budget_add")}</p>
                <a>{t("payment_pending")}</a>
              </div>
              <div className={styles.paymentPendingBox}>
                <p>{t("budget_add")}</p>
                <a>{t("payment_pending")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.activityAllDetailsAlignment}>
        <div className={styles.activityGridAlignment}>
          <div className={styles.stepViewAlignment}>
            <div className={styles.sideRoundAlignment}></div>
            <div className={styles.bottomLine}></div>
          </div>
          <div className={styles.activityGridLeftSide}>
            <h6>{t("invite_sent")}</h6>
            <div className={styles.createdDateAlignment}>
              <p>{t("add_timne")}</p>
              <div className={styles.cretedProfileImg}></div>
            </div>
            <div className={styles.paymentPendingDetails}>
              <div className={styles.paymentPendingBox}>
                {/* <p>{t("budget_add")}</p> */}
                <div>
                  <div className={styles.imagecontainer}>
                    <div className={styles.imagewrapper}>
                      <Image
                        className={styles.img1}
                        unoptimized
                        height={0}
                        width={0}
                        src="/assets/oracle.webp"
                        alt="Image 1"
                      />
                    </div>
                    <div
                      className={classNames(
                        styles.imagewrapper2,
                        styles.imagewrapper
                      )}
                    >
                      <Image
                        className={styles.img2}
                        unoptimized
                        height={0}
                        width={0}
                        src="/assets/fina.png"
                        alt="Image 2"
                      />
                    </div>
                    <div
                      className={classNames(
                        styles.imagewrapper3,
                        styles.imagewrapper
                      )}
                    >
                      <Image
                        className={styles.img3}
                        unoptimized
                        height={0}
                        width={0}
                        src="/assets/simah.png"
                        alt="Image 3"
                      />
                    </div>
                    <div
                      className={classNames(
                        styles.imagewrapper4,
                        styles.imagewrapper
                      )}
                    >
                      <Image
                        className={styles.img}
                        unoptimized
                        height={0}
                        width={0}
                        src="/assets/sap.png"
                        alt="Image 4"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.productDetailsALignment}>
                  <p>For RFQ - 2343</p>
                  <span>{t("product_name")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.activityAllDetailsAlignment}>
        <div className={styles.activityGridAlignment}>
          <div className={styles.stepViewAlignment}>
            <div className={styles.sideRoundAlignment}></div>
            <div className={styles.bottomLine}></div>
          </div>
          <div className={styles.activityGridLeftSide}>
            <h6>{t("contract_reated")}</h6>
            <div className={styles.createdDateAlignment}>
              <p>{t("add_timne")}</p>
              <div className={styles.cretedProfileImg}></div>
            </div>
            <div className={styles.paymentPendingDetails}>
              <div className={styles.paymentPendingBox}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.activityAllDetailsAlignment}>
        <div className={styles.activityGridAlignment}>
          <div className={styles.stepViewAlignment}>
            <div className={styles.sideRoundAlignment}></div>
            <div className={styles.bottomLine}></div>
          </div>
          <div className={styles.activityGridLeftSide}>
            <h6>{t("PO-received")}</h6>
            <div className={styles.createdDateAlignment}>
              <p>{t("add_timne")}</p>
              <div className={styles.cretedProfileImg}></div>
            </div>
            <div className={styles.paymentPendingDetails}>
              <div className={styles.paymentPendingBox}>
                <div className={styles.pdReceiver}>
                  <div className={styles.topPdReceiver}>
                    <p>PO-2362</p>
                    <p>1678346427156</p>
                  </div>
                  <p>
                    <span>Direct</span> - ORDER-1725
                  </p>
                </div>

                <div className={styles.rightSideText}>
                  <h6>182,285.00 SAR</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
