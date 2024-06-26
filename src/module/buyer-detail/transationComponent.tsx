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
      img:'/assets/sap.png'
    },
    {
      id: 2,
      buyerName: "Taka",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      img:'/assets/tata.png'
    },
    {
      id: 3,
      buyerName: "Roy",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      img:'/assets/roy.png'
    },
    {
      id: 4,
      buyerName: "Nils",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      img:'/assets/nils.png'
    },
    {
      id: 5,
      buyerName: "Tom",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      img:'/assets/tata.png'
    },
    {
      id: 6,
      buyerName: "Alka",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      img:'/assets/alka.png'
    },
    {
      id: 7,
      buyerName: "Nena",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      img:'/assets/bayan.jpeg'
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
                        src={data.img}
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
                      {data.buyerName}
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
