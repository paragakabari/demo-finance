import "leaflet/dist/leaflet.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaSearch, FaTruck, FaUser } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import styles from "./track-now.module.scss";

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from "react";
import classNames from "classnames";
mapboxgl.accessToken = 'pk.eyJ1IjoicGtwYXRlbDIyIiwiYSI6ImNseDVvdHBvazFlMnoyanM0ZWgyZ3h5MHYifQ.uWk0lhu8rNAXg_OfYGDaBQ';

export default function TrackNowComponent({ locale }) {
  const t = useTranslations("Request");
  const redirect = useRouter();
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // Initialize map only once

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-74.5, 40],
        zoom: 11,
      });
    }
       
  }, [mapContainer]);
  return (
    <div className={styles.mapcontainer}>
      <div className={styles.sidebar}>
        <h2>{t("TrackYourInvestment")}</h2>
        <p>{t("MapView")}</p>
        <div className={styles.borderBorttom}></div>
        <div className={styles.search}>
          <div className={styles.icons}>
            <FaSearch />
          </div>
          <label>{t("Locations")}</label>
          <input
            type="text"
            id="location-search"
            placeholder={t("SearchLocation")}
          />
        </div>
        <div className={styles.filters}>
          <p>{t("FilterBy")}</p>
          <div className={styles.flex}>
            <button className={locale === "en" ? styles.filterbutton : styles.filterbutton}>
              <FaTruck />
              <span>{t("Vehicles")}</span>
            </button>
            <button className={locale === "en" ? styles.filterbutton : styles.filterbutton}>
              <FaUser />
              <span>{t("Drivers")}</span>
            </button>
          </div>
        </div>
      </div>
     <div>
     <div  className={classNames(styles.map, 'trackNow')}>
                              <div ref={mapContainer} className="map-medium"  />
                              </div>
     </div>
    </div>
  );
}
