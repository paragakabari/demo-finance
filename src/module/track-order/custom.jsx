// PopupContent.js
import Image from "next/image";
import styles from "./track-order.module.scss";

const PopupContent = ({ isActive }) => {
  return (
    <div className={ styles.popup}>
      <div className={styles.detailedcard}>
        <div className={styles.header}>
          <Image unoptimized
          height={0}
          width={0}
            src="/assets/user.avif"
            alt="Profile"
            className={styles.profilepic}
          />
          <div className={styles.info}>
            <h3>Hasan Muzaambil</h3>
            <p>Driver - 9457345123</p>
          </div>
          <div className={styles.menu}>
            <button>⋮</button>
          </div>
        </div>
        <div className={styles.trailerinfo}>
          <div>
            <p>Trailer Name will appear</p>
            <h4>6695 H R A</h4>
          </div>
          <Image unoptimized
          height={0}
          width={0}
            src="/assets/jayco.jpeg"
            alt="Trailer Logo"
            className={styles.trailerlogo}
          />
        </div>
        <div className={styles.status}>
          <span className={styles.statusidle}>Idle</span>
          <p>Since last 4hrs. | 23 km/hr</p>
        </div>
        <div className={styles.locationinfo}>
          <h4>Location Info</h4>
          <p>Saudi Aramco (external)</p>
          <p>Riyadh</p>
        </div>
        <div className={styles.signaldetails}>
          <h4>Signal Details</h4>
          <p>
            <strong>Strong Signals - GPRS</strong>
          </p>
          <p>4 Satellites</p>
          <div className={styles.coordinates}>
            <p>
              Latitude
              <br />
              <strong>21.372247</strong>
            </p>
            <p>
              Longitude
              <br />
              <strong>21.372247</strong>
            </p>
            <p>
              Mileage (Km):
              <br />
              <strong>100845.28</strong>
            </p>
          </div>
        </div>
        <div className={styles.traceasset}>
          <h4>Trace Asset</h4>
          <p className={styles.livetracking}>Live Tracking</p>
        </div>
        <button className={styles.viewlocation}>VIEW LOCATION</button>
      </div>
    </div>
  );
};

export default PopupContent;
