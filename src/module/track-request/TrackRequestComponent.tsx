import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import "react-vertical-timeline-component/style.min.css";
import styles from "./track-request.module.scss";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoicGtwYXRlbDIyIiwiYSI6ImNseDVvdHBvazFlMnoyanM0ZWgyZ3h5MHYifQ.uWk0lhu8rNAXg_OfYGDaBQ";

export default function TrackRequestComponent({ locale }) {
  const t = useTranslations("Request");
  const redirect = useRouter();
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // Initialize map only once

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [-74.5, 40],
        zoom: 11,
      });
    }
  }, [mapContainer]);
  return (
    <div className={styles.requestSection}>
      <div className={styles.requestAlignment}>
        <div className="container">
          <div className={styles.dashboardetails}>
            <span>
              {t("dash")}
              {">"} {t("request")} {">"}
            </span>
            <h1>{t("track_request_iD")}</h1>
          </div>

          <div className={styles.requestAllDetailsAlignment}>
            <div className={styles.responsiveTable}>
              <div className={styles.mainGrid}>
                <div className={styles.lgBox}>
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

                    <div
                      className={styles.chatButton}
                    
                    >
                      <button>{t("chat_buyer")}</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.timeLineBox}>
                    <div className="">
                      <div className={styles.timelineSection}>
                        <div className={styles.timelineBox}>
                          <h4>{t("summary")}</h4>

                          <div className={styles.timeLineDetailsAlignment}>
                            {locale === "en" ? (
                              <div className={styles.timeLineDetailsFlex}>
                                <div className={styles.leftSide}>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("inquiry_received")}</h6>
                                      <p>{t("yesterday")}</p>
                                    </div>
                                  </div>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("status_updated_requested")}</h6>
                                      <p>{t("yesterday")}</p>
                                    </div>
                                  </div>
                                </div>

                                <div className={styles.rightSide}>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("Status_updated_received")}</h6>
                                      <p>{t("yesterday")}</p>
                                    </div>
                                  </div>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("escrow_account")}</h6>
                                      <p>{t("today")}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className={styles.timeLineDetailsFlex1}>
                                <div className={styles.leftSide}>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("inquiry_received")}</h6>
                                      <p>{t("yesterday")}</p>
                                    </div>
                                  </div>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("status_updated_requested")}</h6>
                                      <p>{t("yesterday")}</p>
                                    </div>
                                  </div>
                                </div>

                                <div className={styles.rightSide}>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("Status_updated_received")}</h6>
                                      <p>{t("yesterday")}</p>
                                    </div>
                                  </div>
                                  <div className={styles.firstAlignment}>
                                    <div className={styles.topRound}></div>
                                    <div className={styles.bottomDetails}>
                                      <h6>{t("escrow_account")}</h6>
                                      <p>{t("today")}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.twoColGrid}>
                    <div
                      className={classNames(
                        styles.twoColGridItems,
                        styles.whiteBox
                      )}
                    >
                      <div className={styles.activityDetailsAlignment}>
                        <div className={styles.activityBoxAlignment}>
                          <div
                            className={classNames(
                              styles.activityAllDetailsAlignment,
                              styles.first
                            )}
                          >
                            <div
                              className={styles.activityGridAlignment}
                              onClick={() =>
                                redirect.push(`/${locale}/track-request-id`)
                              }
                            >
                              <div className={styles.stepViewAlignment}>
                                <div
                                  className={classNames(
                                    styles.sideRoundAlignment,
                                    styles.active
                                  )}
                                ></div>
                                <div className={styles.bottomLine}></div>
                              </div>
                              <div className={styles.activityGridLeftSide}>
                                <h6>{t("supplier_successfully")}</h6>
                                <div className={styles.createdDateAlignment}>
                                  <p>{t("dashboard")}</p>
                                  <div
                                    className={styles.cretedProfileImg}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.activityAllDetailsAlignment}>
                            <div className={styles.activityGridAlignment}>
                              <div className={styles.stepViewAlignment}>
                                <div
                                  className={styles.sideRoundAlignment}
                                ></div>
                                <div className={styles.bottomLine}></div>
                              </div>
                              <div className={styles.activityGridLeftSide}>
                                <h6>{t("escrow_account")}</h6>
                                <div className={styles.createdDateAlignment}>
                                  <p>{t("today")}</p>
                                  <div
                                    className={styles.cretedProfileImg}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.activityAllDetailsAlignment}>
                            <div className={styles.activityGridAlignment}>
                              <div className={styles.stepViewAlignment}>
                                <div
                                  className={styles.sideRoundAlignment}
                                ></div>
                                <div className={styles.bottomLine}></div>
                              </div>
                              <div className={styles.activityGridLeftSide}>
                                <h6>{t("track_orders")}</h6>
                                <div className={styles.createdDateAlignment}>
                                  <p>{t("yesterday")}</p>
                                  <div
                                    className={styles.cretedProfileImg}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.activityAllDetailsAlignment}>
                            <div className={styles.activityGridAlignment}>
                              <div className={styles.stepViewAlignment}>
                                <div
                                  className={styles.sideRoundAlignment}
                                ></div>
                                <div className={styles.bottomLine}></div>
                              </div>
                              <div className={styles.activityGridLeftSide}>
                                <h6>{t("supplier_successfully")}</h6>
                                <div className={styles.createdDateAlignment}>
                                  <p>{t("yesterday")}</p>
                                  <div
                                    className={styles.cretedProfileImg}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.activityAllDetailsAlignment}>
                            <div className={styles.activityGridAlignment}>
                              <div className={styles.stepViewAlignment}>
                                <div
                                  className={styles.sideRoundAlignment}
                                ></div>
                                <div className={styles.bottomLine}></div>
                              </div>
                              <div className={styles.activityGridLeftSide}>
                                <h6>{t("Status_updated_received")}</h6>
                                <div className={styles.createdDateAlignment}>
                                  <p>{t("yesterday")}</p>
                                  <div
                                    className={styles.cretedProfileImg}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.activityAllDetailsAlignment}>
                            <div className={styles.activityGridAlignment}>
                              <div className={styles.stepViewAlignment}>
                                <div
                                  className={styles.sideRoundAlignment}
                                ></div>
                                <div
                                  className={classNames(
                                    styles.bottomLine,
                                    styles.bottomLineLast
                                  )}
                                ></div>
                              </div>
                              <div className={styles.activityGridLeftSide}>
                                <h6>{t("status_updated_requested")}</h6>
                                <div className={styles.createdDateAlignment}>
                                  <p>{t("yesterday")}</p>
                                  <div
                                    className={styles.cretedProfileImg}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.twoColGridItems}>
                      <p>{t("track_orders")}</p>
                      <div
                        style={{
                          height: "300px",
                          width: "100%",
                          borderRadius: "10px",
                          marginTop: "20px",
                        }}
                      >
                        <div>
                          <div>
                            <div
                              ref={mapContainer}
                              className="map-smalls"
                              style={{ borderRadius: "10px" }}
                            />
                          </div>
                        </div>
                      </div>
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
