import Image from "next/image";
import React from "react";
import styles from "./buyer-detail.module.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useTranslations } from "next-intl";

ChartJS.register(BarElement, CategoryScale, LinearScale);
export default function AnalysisComponent() {
  const t = useTranslations("Request");
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Data",
        data: [3, 6, 2, 7, 4],
        backgroundColor: "#f39c12",
        borderRadius: 5, // Rounded corners
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
    layout: {
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    borderRadius: 5,
  };
  return (
    <div>
      <div className={styles.doc}>
        <div className={styles.doc__header}>
          <div className={styles.doc__header}>{t("Analysis")}</div>
        </div>
        <div className={styles.analysis__grid}>
          <div className={styles.analysis__grid__item}>
            <div>
              <div className={styles.fonts}>4,763,552.56</div>
              <div className={styles.fonts14}>SAR</div>
              <div className={styles.normal}>{t("Total_Spends")}</div>
            </div>
            <div className={styles.charts}>
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className={styles.analysis__grid__item}>
            <div className={styles.analysis__subGrid}>
              <div className={styles.analysis__subGrid__item}>
                <div className={styles.firstHeading}>16</div>
                <div className={styles.secondHeading}>{t("Total_Orders")}</div>
              </div>
              <div className={styles.analysis__subGrid__item}>
                <div className={styles.firstHeading}>16</div>
                <div className={styles.secondHeading}>{t("Paid_Invoices")}</div>
              </div>
              <div className={styles.analysis__subGrid__item}>
                <div className={styles.firstHeading}>16</div>
                <div className={styles.secondHeading}>{t("Unpaid_Invoices")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.analysis__card}>
          <div>
            <div className={styles.first}>
            {t("Buyer_has_transactions")}
            </div>
            <div className={styles.lst}>
            {t("Good_check")}
            </div>
          </div>
          <div>
            <div className={styles.button}>{t("BUREAU_CHECK")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
