import mapboxgl from "mapbox-gl";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { IoChevronBack } from "react-icons/io5";
import PopupContent from "./custom";
import styles from "./track-order.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGtwYXRlbDIyIiwiYSI6ImNseDVvdHBvazFlMnoyanM0ZWgyZ3h5MHYifQ.uWk0lhu8rNAXg_OfYGDaBQ";

export default function TrackOrderComponent({ locale }) {
  const t = useTranslations("Request");
  const [isPopupActive, setIsPopupActive] = useState(false);
  const redirect = useRouter();

  const mapContainer = useRef(null);
  const map = useRef(null);
  const popupRoot = useRef(null);
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

    const popupNode = document.createElement("div");
    popupRoot.current = createRoot(popupNode);
    popupRoot.current.render(
      <PopupContent isActive={isPopupActive}  />
    );
    const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupNode);

    const marker = new mapboxgl.Marker()
      .setLngLat([-74.5, 40])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map.current);
    marker.setPopup(popup).addTo(map.current);
  }, [mapContainer, isPopupActive]);
  const orderDetails = [
    {
      location: "Location name",
      lat: "23.8° N",
      lon: "45.92° E",
      dateTime: "13 Feb 2024 11:45am",
    },
    {
      location: "India",
      lat: "20.5937° N",
      lon: "78.9629° E",
      dateTime: "13 Feb 2024 11:45am",
    },
    {
      location: "Location name",
      lat: "23.8° N",
      lon: "45.92° E",
      dateTime: "13 Feb 2024 11:45am",
    },
  ];
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

                    <div className={styles.chatButton}>
                      <button>{t("chat_buyer")}</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.timeLineBox}>
                    <div className="">
                      <div className={styles.timelineSection}>
                        <div className={styles.timelineBox}>
                          <div
                            className={styles.backs}
                            onClick={() =>
                              redirect.push(`/${locale}/buyer-detail`)
                            }
                          >
                            <IoChevronBack /> {t("BACK")}
                          </div>
                          <div className={styles.texts}>
                            {t("TrackordersPlacedUsing")}
                          </div>
                          <div className={styles.mainGrids}>
                            <div>
                              <div className={styles.ordercard}>
                                <div className={styles.orderheader}>
                                  <div>
                                    <h3>{t("PO73624")}</h3>
                                    <p>{t("14Items")}</p>
                                  </div>
                                  <a href="#" className={styles.invoicelink}>
                                    {t("View_Invoice")}
                                  </a>
                                </div>
                                <div className={styles.orderbody}>
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>{t("Location")}</th>
                                        <th>{t("Lat")}</th>
                                        <th>{t("lan")}</th>
                                        <th>{t("date_time")}</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {orderDetails.map((detail, index) => (
                                        <tr key={index}>
                                          <td>
                                            {detail.location}
                                            <br />
                                            {t("Will_appear_here")}
                                          </td>
                                          <td>{detail.lat}</td>
                                          <td>{detail.lon}</td>
                                          <td>{detail.dateTime}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className={styles.minimalcard}>
                                <div className={styles.cardcontent}>
                                  <div className={styles.cardleft}>
                                    <h3>{t("PO73624")}</h3>
                                    <p>{t("14Items")}</p>
                                  </div>
                                  <div className={styles.cardright}>
                                    <a href="#" className={styles.invoicelink}>
                                      {t("View_Invoice")}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                // display: "block",
                                height: "500px",
                                width: "100%",
                                borderRadius: "10px",
                                marginTop: "20px",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  height: "500px",
                                  width: "100%",
                                  position: "relative",
                                }}
                              >
                                <div ref={mapContainer} className="map-small" />
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
      </div>
    </div>
  );
}
