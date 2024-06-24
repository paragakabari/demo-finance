import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Styles from "./buyer-detail.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function TransationComponent({locale}) {
  
  const t = useTranslations("Request");
  const datas = useTranslations("Reject");
  const redirect = useRouter();
  const [toggle, setToggle] = useState<any>({
    active: false,
    id: "",
  });
  const tableData = [
    {
      id: 1,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
    {
      id: 2,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
    {
      id: 3,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
    {
      id: 4,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
    {
      id: 5,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
    {
      id: 6,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
    {
      id: 7,
      buyerName: "John_Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
    },
  ];
  return (
    <div>
      <div className={Styles.doc__header}>07 {t("trans")}</div>
      <div className={Styles.responsiveTable}>
        <table className={Styles.requestTable}>
          <tbody>
            {tableData.map((data, index) => (
              <tr className={Styles.tableTR} key={index}>
                <td>
                  <div className={Styles.buyersName}>
                    <div className={Styles.requestRound}>
                      <Image
                        src="/assets/sap.png"
                        width={0}
                        height={0}
                        alt="round"
                        unoptimized
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className={Styles.tableHeading}>
                      {datas(data.buyerName)}
                    </div>
                    <div className={Styles.tableSubHeading}>
                      {data.workspaceId}
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className={Styles.tableDate}>{datas(data.date)}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className={Styles.tableDate}>
                      <b>{data.workspaceId}</b>
                    </div>
                  </div>
                </td>

                <td>
                  <div className={Styles.tableRelative}>
                    <div
                      className={Styles.tableToggle}
                      onClick={() =>
                        setToggle({ active: !toggle.active, id: index })
                      }
                    >
                      <BsThreeDotsVertical />
                    </div>
                    {toggle.active && toggle.id === index && (
                      <div className={Styles.tableToggleContent}>
                        <div onClick={()=>redirect.push(`/${locale}/track-order`)} className={Styles.content}>{t("Track_Order")} </div>
                        <div onClick={()=>redirect.push(`/${locale}/track-order`)} className={Styles.content}>{t("View_Details")} </div>
                        <div onClick={()=>redirect.push(`/${locale}/track-order`)} className={Styles.content}>{t("View_Supplier_Details")}  </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
