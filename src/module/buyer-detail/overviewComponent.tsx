import React from "react";
import styles from "./overview.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { Line ,Bar} from 'react-chartjs-2';
import { Chart as ChartJS, LineElement,BarElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(LineElement, CategoryScale,BarElement, LinearScale, PointElement, Filler);
export default function OverviewComponent() {
  const t = useTranslations("Request");
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'My Dataset',
        data: [20, 25, 30, 40, 35, 45],
        fill: true, // For background fill
        borderColor: 'rgba(255, 255, 255, 0.9)', // Line color
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Background color
        tension: 0.3, // Line tension for smooth curve
      },
    ],
  };


  const data1 = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Dataset',
        data: [3, 2, 5, 4], // Data values
        backgroundColor: '#f1a34d', // Bar color
        borderRadius: 10, // Rounded bars
        barPercentage: 0.6, // Width of the bars relative to available space
      },
    ],
  };

  const options1 = {
    responsive: true,
    cornerRadius: 20, // Rounded corners
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid
        },
        ticks: {
          display: false, // Hide X-axis ticks
        },
      },
      y: {
        grid: {
          display: false, // Hide Y-axis grid
        },
        ticks: {
          display: false, // Hide Y-axis ticks
        },
      },
    },
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid
        },
        ticks: {
          display: false, // Hide X-axis ticks
        },
      },
      y: {
        grid: {
          display: false, // Hide Y-axis grid
        },
        ticks: {
          display: false, // Hide Y-axis ticks
        },
      },
    },
  };

  const purchaseData=[
    {
      image:'/assets/chair.jpeg',
      name:'RFX-1232',
      des:'Office Chair (Black)'
    },
    {
      image:'/assets/cap.jpeg',
      name:'RFx-3434',
      des:'Red Cap'
    },
    {
      image:"/assets/alka.png",
      name:'P0-123',
      des:"T-shiert Women"
    },
    {
      image:'/assets/roy.png',
      name:'Tes-45',
      des:"Mens Shirts"
    },
    {
      image:'/assets/tata.png',
      name:'Tes-45',
      des:"Mens Shirts"
    },
    {
      image:'/assets/nils.png',
      name:'Tes-45',
      des:"Mens Shirts"
    }
  ]



  return (
    <>
      <div className={styles.overviewDesignMainSection}>
        <div className={styles.overviewDesignSection}>
          <div className={styles.overviewDesignBox}>
            <h6>{t("Requests_Raised")} </h6>
            <p>{t("From_Banks")}</p>

            <div className={styles.logoAlignment}></div>
          </div>

          <div className={styles.overviewDesignBox}>
            <h6>{t("Transactions_Eprocure")} </h6>
            <div className={styles.viewALl}>
              <p>{t("View_Transaction")}</p>
            </div>
          </div>

          <div className={styles.overviewDesignBox}>
            <h6>{t("Suppliers_invited_buyer")}</h6>
            <div className={styles.viewALl}>
              <p>{t("View_Transaction")}</p>
            </div>
          </div>

          <div className={styles.overviewDesignBox}>
            <h6>{t("View_Transaction")}</h6>
            <div className={styles.totalViewBox}>
              <h6>45723 SAR</h6>
              <p>4 Transactions</p>
            </div>
          </div>
        </div>

        <div className={styles.overviewSecondPartAlignment}>
          <div className={styles.overviewSecondPartGrid}>
            <div className={styles.leftSideAlignment}>
              <h6>{t("Recent_Purchases")}</h6>
              <div className={styles.leftSideDetailsALignment}>
                {purchaseData.map((data,key) => {
                  return (
                    <div className={styles.productDetailsAlignment} key={key}>
                      <div className={styles.productLeftSide}>
                        <div className={styles.leftGrid}>
                          <div className={styles.leftGridDetails}>
                            <div className={styles.imgBox}>
                              <Image
                                unoptimized
                                alt="pdf"
                                src={data.image}
                                height={0}
                                width={0}
                              />
                              <div className={styles.smallCirLe}>
                                <Image unoptimized height={0} width={0} src='/assets/tata.png' alt="a"/>
                              </div>
                            </div>
                          </div>
                          <div className={styles.leftGridDetails}>
                            <h4>{data.name}</h4>
                            <p>{data.des}</p>
                            <div className={styles.bottomDetails}>
                              <span>{t("Direct_Order")}</span> <p></p>{" "}
                              <span>12-05-2023</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.productRightSide}>
                        <p>19,500</p>
                        <span>SAR</span>
                        <div className={styles.orderdButton}>
                          <button>{t("Ordered")}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.viewAll}>
                <a>{t("VIEW_ALL")}</a>
              </div>
            </div>

            <div className={styles.rightSideAlignment}>
              <h6>{t("Recent_Activities")}</h6>

              <div className={styles.recentActivityAlignment}>
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
                          <p>{t("budget_add")}</p>
                          <div className={styles.productDetailsALignment}>
                            <p>For RFQ - 2343</p>
                            <span>{t("product_name")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.activityGridAlignment}>
                    <div className={styles.stepViewAlignment}>
                      <div className={styles.sideRoundAlignment}></div>
                      <div className={styles.bottomLine}></div>
                    </div>
                    <div className={styles.activityGridLeftSide}>
                      <h6>{t("contract_reated")}</h6>
                      <div className={styles.createdDateAlignment}>
                        <p>{t("budget_add")}</p>
                        <div className={styles.cretedProfileImg}></div>
                      </div>
                      <div className={styles.paymentPendingDetails}>
                        <div className={styles.paymentPendingBox}></div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.activityGridAlignment}>
                    <div className={styles.stepViewAlignment}>
                      <div className={styles.sideRoundAlignment}></div>
                      <div className={styles.bottomLine}></div>
                    </div>
                    <div className={styles.activityGridLeftSide}>
                      <h6>{t("PO-received")}</h6>
                      <div className={styles.createdDateAlignment}>
                        <p>{t("budget_add")}</p>
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
                              <span>{t("Direct_Order")}</span> -1725
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
              </div>

              <div className={styles.viewAll}>
                <a>{t("CHECKENTIREHISTORY")}</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.overViewThirdPartAlignment}>
          <div className={styles.thirdGridAlignment}>
            <div className={styles.thirdLeftSide}>
              <div className={styles.thirdTopDetails}>
                <div className={styles.topLeftSide}>
                  <h4>4,763,552.56</h4>
                  <span>SAR</span>
                  <div className={styles.totalAlignment}>
                    <span>{t("Total_Spend")}</span>
                  </div>
                </div>
                <div style={{height: '100px'}}>
                  <Bar data={data1} options={options1} />
                </div>
              </div>

              <div className={styles.thirdTopDetails}>
                <div className={styles.topLeftSide}>
                  <h4>4,763,552.56</h4>
                  <span>SAR</span>
                  <div className={styles.totalAlignment}>
                    <span>{t("Total_Spend")}</span>
                  </div>
                </div>
                <div>
                <div style={{height: '100px'}}>
      <Line data={data} options={options} />
    </div>
                </div>
              </div>

              <div className={styles.invoiceAlignment}>
                <h6>{t("Invoice1")}</h6>

                <div className={styles.invoice_card}>
                  <div className={styles.invoice_card__section}>
                    <p className={styles.invoice_card__po}>
                     {t("PO1039")} - <strong>1678346427156</strong>
                    </p>
                    <p className={styles.invoice_card__direct}>
                      {t("Direct")} - <strong>ORDER-1725</strong>
                    </p>
                    <p className={styles.invoice_card__date}>
                      {t("InvoicedateApril")}
                    </p>
                  </div>
                  <div className={styles.invoice_card__divider}></div>
                  <div className={styles.invoice_card__section}>
                    <p className={styles.invoice_card__amount}>
                      182,285.00 SAR
                    </p>
                    <p className={styles.invoice_card__payment}>{t("FullPayment")}</p>
                  </div>
                </div>

                <div className={classNames(styles.invoice_card, styles.invoice_card1)}>
                  <div className={styles.invoice_card__section}>
                    <p className={styles.invoice_card__po}>
                      PO-1039 - <strong>1678346427156</strong>
                    </p>
                    <p className={styles.invoice_card__direct}>
                      Direct - <strong>ORDER-1725</strong>
                    </p>
                    <p className={styles.invoice_card__date}>
                      Invoice date - April 5, 2023
                    </p>
                  </div>
                  <div className={styles.invoice_card__divider}></div>
                  <div className={styles.invoice_card__section}>
                    <p className={styles.invoice_card__amount}>
                      182,285.00 SAR
                    </p>
                    <p className={styles.invoice_card__payment}>{t("FullPayment")}</p>
                  </div>
                </div>

                <div className={styles.invoiceUplodedAlignment}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => {
                    return (
                      <div className={styles.invoiceBox} key={key}>
                        <Image
                          unoptimized
                          alt="pdf"
                          src="/assets/pdf.png"
                          height={32}
                          width={32}
                        />
                        <div className={styles.pdfDetailsAlignment}>
                          <p>{t("Invoice1")} 1</p>
                          <span>{t("PDF")}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.thirdRightSide}>
              <div className={styles.recentOrderAlignment}>
                <div className={styles.headingALignment}>
                  <div>
                    <h6>{t("Recent_Orders")}</h6>
                    <p>{t("Orders_account")}</p>
                  </div>
                </div>

                <div className={styles.recentOrderDetailsALignment}>
                  <div className={styles.recentOrderGrid}>
                    <div className={styles.recentOrderGridItem}>
                      <div className={styles.imgBox}>
                        <Image unoptimized alt="pdf" src="/assets/printer.jpeg" height={0} width={0} />
                      </div>
                    </div>
                    <div className={styles.recentOrderGridItem}>
                      <h6>{t("Canon_White")}</h6>
                      <span>1 Qty</span>
                      <p>19,500 SAR</p>
                    </div>
                  </div>
                  <div className={styles.recentOrderGrid}>
                    <div className={styles.recentOrderGridItem}>
                      <div className={styles.imgBox}>
                        <Image unoptimized alt="pdf" src="/assets/transation.png" height={0} width={0} />
                      </div>
                    </div>
                    <div className={styles.recentOrderGridItem}>
                      <h6>{t("Canon_White")}</h6>
                      <span>1 Qty</span>
                      <p>19,500 SAR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addressAlignment}>
                <div className={styles.addressAlignmentBox}>
                  <h4>{t("Addresses")}</h4>
                  <div className={styles.addressDetailsAlignment}>
                    <div className={styles.addressBoxALignemnt}>
                      <h6>{t("SECHQ")}</h6>

                      <div className={styles.addressNameAlignment}>
                        <span>{t("KhaledAziz")}</span>
                        <p>{t("Northern_Arabia")}</p>
                      </div>
                    </div>
                    <div className={styles.addressBoxALignemnt}>
                      <h6>{t("SECHQ")}</h6>

                      <div className={styles.addressNameAlignment}>
                        <span>{t("KhaledAziz")}</span>
                        <p>{t("Northern_Arabia")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
