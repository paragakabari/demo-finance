import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Bubble, Line } from "react-chartjs-2";
import { CiBank } from "react-icons/ci";
import { FaLongArrowAltUp, FaUsers } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Styles from "./dashboard.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashBoard({ locale }) {
  const redirect = useRouter();
  const t = useTranslations("Dashboard");
  const data = {
    labels: ["Apr 04", "Apr 07", "Apr 10", "Apr 13", "Apr 16"],
    datasets: [
      {
        label: "Revenue",
        data: [17000, 20000, 17500, 21000, 18000, 17000, 20500],
        borderColor: "#00C853",
        backgroundColor: "rgba(0, 200, 83, 0.1)", // Light green fill
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Remove the legend label
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.3)", // Dashed horizontal lines
          borderDash: [3, 3],
        },
        ticks: {
          callback: (value) => `$${value / 1000}K`,
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Remove points
      },
      line: {
        borderWidth: 2, // Line width
      },
    },
  };

  const data1 = {
    datasets: [
      {
        label: "Bubble Chart",
        data: [
          { x: -100, y: 0, r: 20, label: "20%" },
          { x: -30, y: 20, r: 40, label: "40%" },
          { x: 30, y: 30, r: 25, label: "25%" },
          { x: 80, y: 50, r: 12, label: "12%" },
        ],
        backgroundColor: ["#69c882", "#333333", "#d04a4a", "#f7b26d"],
      },
    ],
  };

  const options1 = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.raw.label;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className={Styles.dashboardSection}>
      <div className={Styles.dashboardAlignment}>
        <div className="container">
          <div className={Styles.dashboardetails}>
            <span> {t("dashboard")}</span>
            <h1> {t("dashboard")}</h1>
          </div>

          <div className={Styles.dashboardAllDetailsAlignment}>
            <div className={Styles.dashboardetailsGrid}>
              <div className={Styles.dashboardetailsGridItem}>
                <div className={Styles.leftSideAlignment}>
                  <div className={Styles.leftGridAlignment}>
                    <div className={Styles.boxAlignment}>
                      <div className={Styles.cibankDetailsAlignment}>
                        <IoIosMenu size={26} />
                      </div>
                      <h4>1131</h4>
                      <p> {t("New_Requests")}</p>

                      <div className={Styles.rateAlignment}>
                        <div className={Styles.rateoxAlignment}>
                          <p>
                            <FaLongArrowAltUp size={12} /> 3.2%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.boxAlignment}>
                      <div className={Styles.cibankDetailsAlignment}>
                        <CiBank size={26} />
                      </div>
                      <h4>17</h4>
                      <p> {t("Banks_partnered")}</p>

                      <div className={Styles.rateAlignment}>
                        <div
                          className={classNames(
                            Styles.rateoxAlignment,
                            Styles.grayBox
                          )}
                        >
                          <p>
                            <FaLongArrowAltUp size={12} /> 3.2%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.boxAlignment}>
                      <div className={Styles.cibankDetailsAlignment}>
                        <FaUsers size={26} />
                      </div>
                      <h4>46</h4>
                      <p> {t("New_Requests")}</p>

                      <div className={Styles.rateAlignment}>
                        <div className={Styles.rateoxAlignment}>
                          <p>
                            <FaLongArrowAltUp size={12} /> 3.2%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={Styles.leftTwoGridAlignment}
                    onClick={() => redirect.push(`/${locale}/request`)}
                  >
                    <div className={Styles.boxAlignment}>
                      <div className={Styles.topHeadingAlignment}>
                        <div>
                          <h4>450</h4>
                          <p> {t("Bureau_Checks")}</p>
                        </div>
                        <div style={{ width: "50%", margin: "0 auto" }}>
                          <Bubble data={data1} options={options1} />
                        </div>
                        {/* <div className={Styles.details}>
                                          
                                                     <div className={Styles.firsstRound}>
                                                        <p>20%</p>
                                                    </div>

                                                    <div className={Styles.secondRound}>
                                                        <p>48%</p>
                                                    </div>

                                                    <div className={Styles.thirdRound}>
                                                        <p>25%</p>
                                                    </div>

                                                    <div className={Styles.fourRound}>
                                                        <p>25%</p>
                                                    </div> 
                                                </div> */}
                      </div>

                      <div className={Styles.bottomHedingAlignment}>
                        <div className={Styles.statusBox}>
                          <p>91 {t("Rejected")}</p>
                        </div>
                        <div className={Styles.statusBox}>
                          <p>14 {t("Inprogress")}</p>
                        </div>
                        <div className={Styles.statusBox}>
                          <p>134 {t("Successful")}</p>
                        </div>
                        <div className={Styles.statusBox}>
                          <p>211 {t("Not_Initiated")}</p>
                        </div>
                        <div className={Styles.statusBox}>
                          <p> {t("KYB_Requested")}</p>
                        </div>
                        <div className={Styles.statusBox}>
                          <p> {t("KYB_Completed")}</p>
                        </div>
                      </div>
                    </div>

                    <div className={Styles.boxAlignment}>
                      <div>
                        <div className={Styles.cibankDetailsAlignment}>
                          <CiBank size={26} />
                        </div>
                        <h4>29</h4>
                        <p className={Styles.details}>
                          {" "}
                          {t("Approvals_received_And_proceeded_for_delivery")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.dashboardetailsGridItem}>
                <div className={Styles.rightSideAlignment}>
                  <div className={Styles.dashboardHeadingAlignment}>
                    <h2> {t("ReportForAmountRequested")}</h2>
                    <p>{t("The_data_is_synced_till_yesterday")}</p>
                  </div>
                  <div className={Styles.chartAlignment}>
                    <div className={Styles.chartLabel}>
                      <sup>$</sup>14,094
                    </div>
                    <div className={Styles.chartTitle}>
                      {t("Another")} $48,346 {t("Goal")}
                    </div>
                  </div>
                  <div style={{ width: "100%", height: "280px" }}>
                    <Line data={data} options={options} />
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
