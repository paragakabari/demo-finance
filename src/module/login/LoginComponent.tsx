"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./login.module.scss";
import { useTranslations } from "next-intl";
import CompanyLogo from "@/shared/components/logo/icon";
import { LuLanguages } from "react-icons/lu";
import { useState } from "react";
import classNames from "classnames";
import { FaAngleDown } from "react-icons/fa";

export const LoginComponent = ({ locale }) => {
  const router = useRouter();
  const t = useTranslations("SignIn");
  const searchParams = usePathname();

  const [language, setLanguage] = useState(false);
  const handleChange = (event: string) => {

    if (locale === "en" && event === "ar") {
      
      router.push("/ar");
    } else if (locale === "ar" && event === "en") {
      
      router.push("/en");
    }
  };
  return (
    <div className={styles.loginSection}>
      <div className={styles.language}>
        <div className={styles.dropdowndesignRelative}>
          <div
            className={styles.dropdown}
            onClick={() => setLanguage(!language)}
          >
            <div className={styles.leftIconAlignment}>
              <Image
              unoptimized
                src={locale === "ar" ? "/assets/ar.png" : "/assets/in.webp"}
                alt={locale === "ar" ? "AR" : "EN"}
                width={0}
                height={0}
              
              />
              <span>{locale === "ar" ? "العربية" : "English"}</span>
            </div>
            <div
              className={classNames(
                classNames(styles.animation, language ? styles.rotate : "")
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
              <Image unoptimized src={"/assets/in.webp"} alt="EN" width={0} height={0} />
              <span>English</span>
            </div>
            <div
              className={styles.leftIconAlignment}
              onClick={() => handleChange(locale === "en" ? "ar" : "en")}
            >
              <Image unoptimized src={"/assets/ar.png"} alt="AR" width={0} height={0} />
              <span>العربية</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoAlignment}>
        <CompanyLogo />
        <span>FINANCE</span>
      </div>

      <div className={styles.loginFormAlignment}>
        <div className={styles.loginFormGrid}>
          <div className={styles.leftImg}>
            <Image src={"/sideImg.png"} alt="Lossgo" height={200} width={192} />
          </div>

          <div className={styles.rightSideFormAlignment}>
            <h1>{t("title")}</h1>
            <p>{t("subHeading")}</p>

            <div className={styles.formDetailsALignment}>
              <div className={styles.inputAlignment}>
                <input type="text" placeholder={t("email")} />
              </div>

              <div className={styles.inputAlignment}>
                <input type="text" placeholder={t("password")} />
              </div>
            </div>
            <div className={styles.forgotPasswordAlignment}>
              <a>{t("forgetPassword")}</a>
            </div>
            <Link href={`/${locale}/dashboard`}>
              <div className={styles.buttonALignment}>
                <button>{t("title")}</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
