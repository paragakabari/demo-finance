import { useTranslations } from "next-intl";
import styles from "./buyer-detail.module.scss";
import Image from "next/image";
import classNames from "classnames";
import ActivityComponent from "./activityComponent";
import { useState } from "react";
import DocComponent from "./docComponent";
import OverviewComponent from "./overviewComponent";
import RequestComponent from "./requestComponet";
import BuyerComponet from "./buyeComponent";
import TransationComponent from "./transationComponent";
import AnalysisComponent from "./analysisComponent";

export default function BuyerDetailComponent({locale}) {
  const t = useTranslations("Request");

  const [tab, setTab] = useState("overviews");

  return (
    <div className={styles.buyerDetailsSection}>
      <div className="container">
        <div className={styles.buyerDetailsAlignment}>
          <div className={styles.breadCumb}>
            <a>{t("dash")}</a>
            <a>{">"}</a>
            <a>{t("req")}</a>
          </div>
          <div className={styles.buyerHeading}>
            <h1>{t("request_heading")}</h1>

            <div className={styles.buyerRightAlignment}>
              <button>{t("request_button")}</button>
              <button>{t("needmore")}</button>
            </div>
          </div>

          <div className={styles.buyerDetailsAllDetailsAlignment}>
            <div className={styles.buyerDetailsAllDetailsGrid}>
              <div className={styles.buyerDetailsAllDetailsGridItem}>
                <div className={styles.leftSideBoxAlignment}>
                  <div className={styles.ledtSideHeading}>
                    <div className={styles.profileAlignment}>
                      <span>LOGO</span>
                    </div>
                    <div className={styles.headingRightSide}>
                      <div className={styles.rightTop}>
                        <span>{t("req")}</span>
                        <div className={styles.kybAlignment}>
                          <p>{t("kybDone")}</p>
                        </div>
                      </div>
                      <h2>{t("request_heading")}</h2>
                    </div>
                  </div>

                  <div className={styles.descriptionAlignment}>
                    <h3>{t("industry")}</h3>
                    <p>{t("des")}</p>
                  </div>

                  <div className={styles.raisedByAlignment}>
                    <h4 className={styles.raisedHeader}>{t("reqby")} </h4>

                    <div className={styles.raisedProfileBOx}>
                      <div className={styles.raisedByProfile}>
                        <span>SH</span>
                      </div>

                      <div className={styles.raisedByName}>
                        <h4>{t("samera_hamed")}</h4>
                        <p>+966112401777</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.priceALignment}>
                    <h5>{t("amount")}</h5>
                    <div className={styles.rightSide}>
                      <h6>234334 SAR</h6>
                      <p>{t("req_date")}</p>
                    </div>
                  </div>
                  <div className={styles.overviewDetailsAlignment}>
                    <h4>{t("overview")}</h4>

                    <div className={styles.overviewGrid}>
                      <div className={styles.overviewImg}>
                        <Image
                          unoptimized
                          src="/assets/singma.jpeg"
                          alt="Picture of the author"
                          width={0}
                          height={0}
                        />
                        <div className={styles.status}></div>
                      </div>
                      <div className={styles.overviewGridRight}>
                        <p>{t("ge")}</p>
                        <span>{t("rfx")}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.resonForDetailsAlignment}>
                    <h4>{t("reson_for_req")}</h4>
                    <p>{t("req_des")}</p>
                  </div>

                  <div className={styles.additionAlignment}>
                    <h4>{t("Add_info")}</h4>
                    <div className={styles.additionlDetailsAlignment}>
                      <a>+966112401733</a>
                      <a>info@electrify.com</a>
                      <a>https://electrify.com</a>
                      <a>{t("Add")}</a>
                    </div>
                  </div>

                  <div className={styles.chatButton}>
                    <button>{t("chat_buyer")}</button>
                  </div>
                </div>
              </div>

              <div className={styles.buyerDetailsAllDetailsGridItem}>
                <div className={styles.rightSideBoxAlignment}>
                  <div>
                    <div className={styles.tabAlignment}>
                      <a
                        onClick={() => setTab("overviews")}
                        className={tab === "overviews" ? styles.activeTab : ""}
                      >
                        {t("overviews")}
                      </a>
                      <a
                        onClick={() => setTab("req_detail")}
                        className={tab === "req_detail" ? styles.activeTab : ""}
                      >
                        {t("req_detail")}
                      </a>
                      <a
                        onClick={() => setTab("buy_detail")}
                        className={tab === "buy_detail" ? styles.activeTab : ""}
                      >
                        {t("buy_detail")}
                      </a>
                      <a
                        onClick={() => setTab("activity")}
                        className={tab === "activity" ? styles.activeTab : ""}
                      >
                        {t("acti")}
                      </a>
                      <a
                        onClick={() => setTab("transation")}
                        className={tab === "transation" ? styles.activeTab : ""}
                      >
                        {t("trans")}
                      </a>
                      <a
                        onClick={() => setTab("analysis")}
                        className={tab === "analysis" ? styles.activeTab : ""}
                      >
                        {t("Analysis")}
                      </a>
                      <a
                        onClick={() => setTab("docs")}
                        className={tab === "docs" ? styles.activeTab : ""}
                      >
                        {t("docs")}
                      </a>
                    </div>
                  </div>
                  <div className={styles.activityDetailsAlignment}>
                    <div className={styles.activityBoxAlignment}>
                     
                      {tab === "activity" && <ActivityComponent />}
                      {tab === 'docs' && <DocComponent />}
                      {tab === 'overviews' && <OverviewComponent />}
                      {tab === 'req_detail' && <RequestComponent />}
                      {tab === 'buy_detail' && <BuyerComponet />}
                      {tab === 'transation' && <TransationComponent locale={locale}  />}
                      {tab === 'analysis' && <AnalysisComponent />}



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
