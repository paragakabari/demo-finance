import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import styles from "./header.module.scss";
import CompanyLogo from "../logo/icon";
const Logo = "../../public/logo.svg";
const HsbcIcon = "/assets/hsbc-icon-md.png";
export default function Header({ locale }) {
  const t = useTranslations("Dashboard");
  const router = useRouter();
  const [header, setHeader] = useState(false);
  const searchParams = usePathname();

  const [language, setLanguage] = useState(false);

  const handleChange = (event: string) => {
    if (locale === "en" && event === "ar") {
      router.push(searchParams.replace("/en/", "/ar/"));
    } else if (locale === "ar" && event === "en") {
      router.push(searchParams.replace("/ar/", "/en/"));
    }
  };

  return (
    <>
      <div className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerAlignment}>
            <div className={styles.headerLeftSide}>
              <div className={styles.logoalignmentFlex}>
                <div className={styles.logoAlignment}  onClick={() =>
                    router.push(`${locale === "en" ? "/en" : "/ar"}/dashboard`)
                  }
                  >
                  <div>
                    <CompanyLogo />
                    <span>FINANCE</span>
                  </div>
                  <div className={styles.iconDesign}>
                    <Image
                      height={51}
                      width={51}
                      src={HsbcIcon}
                      alt="HsbcIcon"
                    />
                  </div>
                </div>
                <div
                  className={styles.mobilelogoAlignment}
                  onClick={() => setHeader(!header)}
                >
                  <div>
                    <CompanyLogo />
                    <span>FINANCE</span>
                  </div>
                  <div className={styles.iconDesign}>
                    <Image
                      height={51}
                      width={51}
                      src={HsbcIcon}
                      alt="HsbcIcon"
                    />
                  </div>
                </div>
              </div>
              <div></div>
              <div className={styles.menuAlignment}>
                <a
                  onClick={() =>
                    router.push(`${locale === "en" ? "/en" : "/ar"}/dashboard`)
                  }
                  className={classNames(
                    searchParams === "/en/dashboard" ? styles.active : ""
                  )}
                >
                  {t("dashboard")}
                </a>
                <a >{t("reports")}</a>
                <a 
                
                onClick={() =>
                  router.push(`${locale === "en" ? "/en" : "/ar"}/report`)
                }
                className={classNames(
                  searchParams === "/en/report" ? styles.active : ""
                )}
                >{t("settings")}</a>
                <a
                  onClick={() =>
                    router.push(`${locale === "en" ? "/en" : "/ar"}/apps`)
                  }
                  className={classNames(
                    searchParams === "/en/apps" ? styles.active : ""
                  )}
                >
                  {t("apps")}
                </a>
                <a
                  onClick={() =>
                    router.push(`${locale === "en" ? "/en" : "/ar"}/track-now`)
                  }
                  className={classNames(
                    searchParams === "/en/track-now" ? styles.active : ""
                  )}
                >
                  {t("track-now")}
                </a>
              </div>
            </div>

            <div className={styles.headerRightSide}>
              {/* <div className={styles.rtlStyle} onClick={()=>handleChange(locale==="en"?"ar":"en")}>
            <FaLanguage size={34} />
            </div> */}
              <div className={styles.dropdowndesignRelative}>
                <div
                  className={styles.dropdown}
                  onClick={() => setLanguage(!language)}
                >
                  <div className={styles.leftIconAlignment}>
                    <Image
                      unoptimized
                      src={
                        locale === "ar" ? "/assets/ar.png" : "/assets/in.webp"
                      }
                      alt={locale === "ar" ? "AR" : "EN"}
                      width={0}
                      height={0}
                    />
                    <span>{locale === "ar" ? "العربية" : "English"}</span>
                  </div>
                  <div
                    className={classNames(
                      classNames(
                        styles.animation,
                        language ? styles.rotate : ""
                      )
                    )}
                  >
                    <FaAngleDown />
                  </div>
                </div>
                <div
                  className={classNames(
                    classNames(
                      styles.cusdropdownDesign,
                      language ? styles.show : styles.hide
                    )
                  )}
                >
                  <div
                    className={styles.leftIconAlignment}
                    onClick={() => handleChange(locale === "en" ? "ar" : "en")}
                  >
                    <Image
                      unoptimized
                      src={"/assets/in.webp"}
                      alt="EN"
                      width={0}
                      height={0}
                    />
                    <span>English</span>
                  </div>
                  <div
                    className={styles.leftIconAlignment}
                    onClick={() => handleChange(locale === "en" ? "ar" : "en")}
                  >
                    <Image
                      unoptimized
                      src={"/assets/ar.png"}
                      alt="AR"
                      width={0}
                      height={0}
                    />
                    <span>العربية</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  unoptimized
                  src={"/assets/bell.svg"}
                  alt="bell"
                  width={20}
                  height={20}
                  className={styles.bell}
                />
              </div>
              <div className={styles.logoutButton}>
                <button>{t("logout")}</button>
              </div>
              <div className={styles.mobilelogoAlignment}>
                <FaBarsStaggered
                  style={{
                    color: "white",
                  }}
                  onClick={() => setHeader(true)}
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          classNames(styles.mobilesidebar, header ? styles.show : styles.hide)
        )}
      >
        <div className={styles.mobilesidebarAlignment}>
          <Image src={"/logo.svg"} alt="logo" width={100} height={50}
          
          onClick={() =>
            router.push(`${locale === "en" ? "/en" : "/ar"}/dashboard`)
          }
          />
          <IoMdClose size={30} onClick={() => setHeader(false)} />
        </div>
        <div className={styles.headerResponsive}>
          <div
            onClick={() =>
              router.push(`${locale === "en" ? "/en" : "/ar"}/dashboard`)
            }
          >
            {t("dashboard")}
          </div>
          <div> {t("reports")}</div>
          <div
           onClick={() =>
            router.push(`${locale === "en" ? "/en" : "/ar"}/report`)
          }
          >{t("settings")}</div>
          <div
            onClick={() =>
              router.push(`${locale === "en" ? "/en" : "/ar"}/apps`)
            }
          >
            {t("apps")}
          </div>
          <div
            onClick={() =>
              router.push(`${locale === "en" ? "/en" : "/ar"}/track-now`)
            }
          >
            {t("track-now")}
          </div>
        </div>

        <div className={styles.logoutSidebar}>{t("logout")}</div>
      </div>
    </>
  );
}
