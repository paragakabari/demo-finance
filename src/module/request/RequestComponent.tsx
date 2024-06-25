import { useTranslations } from 'next-intl';
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import RejectModel from "./rejectModel";
import Styles from "./request.module.scss";
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function RequestComponent({ locale}) {
  const t = useTranslations("Reject");
  const router = useRouter();
  const dashboard = useTranslations("Dashboard");
  const [isModelOpen, setModelOpen] = useState(false);
  const handleRejectPopup = () => {
    setModelOpen(!isModelOpen);
  }
  const [toggle, setToggle] = useState<any>({
    active: false,
    id: "",
  });
  const tableData = [
    {
      id: 1,
      buyerName: "Parag ",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image: "/assets/ar.png",
    },
    {
      id: 2,
      buyerName: "Raj Aryan",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image: "/assets/bayan.jpeg",
    },
    {
      id: 3,
      buyerName: "Manish Kumar",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image:'/assets/hsbc-icon-md.png'
    },
    {
      id: 4,
      buyerName: "Jack Sparrow",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image:'/assets/microsoft.png'
    },
    {
      id: 5,
      buyerName: "John Doe",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image:'/assets/fina.png'
    },
    {
      id: 6,
      buyerName: "Joseph",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image:'/assets/jayco.jpeg'
    },
    {
      id: 7,
      buyerName: "Melvin",
      workspaceId: "012024",
      date: "01_June_2024",
      status: "InProgress",
      action: "Attach_Doc",
      image: "/assets/elm.png",
    },
  ];
  return (
    <div className={Styles.requestSection}>

      <div className={Styles.requestAlignment}>
        <div className="container">
          <div className={Styles.dashboardetails}>
            <span>{dashboard("dashboard")} {">"} {t("request")}</span>
            <h1>{t("request_received")}</h1>
          </div>

          <div className={Styles.requestAllDetailsAlignment}>
            <div className={Styles.responsiveTable}>
              <table className={Styles.requestTable}>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr className={Styles.tableTR} key={index}
                    
                    >
                    
                      <td onClick={()=>router.push(`/${locale}/buyer-detail`)}>
                        <div className={Styles.buyersName}>
                        <div className={Styles.requestRound}>
                          <Image
                          unoptimized
                            src={data?.image}
                            alt="round"
                            height={0}
                            width={0}
                          />
                        </div>
                        <div>
                          <div className={Styles.tableHeading}>
                            {(data.buyerName)}
                          </div>
                          <div className={Styles.tableSubHeading}>
                            {data.workspaceId}
                          </div>
                          </div>
                        </div>
                      </td>
                      <td onClick={()=>router.push(`/${locale}/buyer-detail`)}>
                        <div>
                          <div className={Styles.tableDate}>{t(data.date)}</div>
                        </div>
                      </td>
                      <td onClick={()=>router.push(`/${locale}/buyer-detail`)}>
                        <div>
                          <div className={Styles.tableDate}>
                            <b>{data.workspaceId}</b>
                          </div>
                        </div>
                      </td>
                      <td onClick={()=>router.push(`/${locale}/buyer-detail`)}>
                        <div className={Styles.tablePrgoress}>
                          {t(data.status)}
                        </div>
                      </td>
                      <td onClick={()=>router.push(`/${locale}/buyer-detail`)}>
                        <div className={Styles.tableAction}>{t(data.action)}</div>
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
                              <div className={Styles.content} 
                              onClick={() =>setModelOpen(!isModelOpen)}
                              >
                               {t("reject")}
                              </div>
                              <div className={Styles.content}>
                                {t("delete")}
                              </div>
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
        </div>
      </div>
      {
        isModelOpen && (
          <RejectModel isModelOpen={isModelOpen} setModelOpen={setModelOpen} handleRejectPopup={handleRejectPopup} />
        )
      }
    </div>
  );
}
