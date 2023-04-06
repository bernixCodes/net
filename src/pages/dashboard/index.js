import styles from "./dashboard.module.css";
import {
  AiOutlineHome,
  AiOutlineRise,
  AiOutlinePullRequest,
  AiOutlineReconciliation,
  AiOutlineBarChart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import { SiSimpleanalytics } from "react-icons/si";
import { MdStackedLineChart } from "react-icons/md";

const Dashboard = () => {
  const handleMenu = () => {
    const menubtn = document.querySelector("#menu-btn");
    const sidebar = document.querySelector("aside");

    menubtn.addEventListener("click", () => {
      sidebar.style.display = "block";
    });
  };

  const handleClose = () => {
    const closebtn = document.querySelector("#close-btn");
    const sidebar = document.querySelector("aside");

    closebtn.addEventListener("click", () => {
      sidebar.style.display = "none";
    });
  };
  return (
    <div className={styles.con}>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <img src="/logo.png" />
            </div>
            <div className={styles.close} id="close-btn" onClick={handleClose}>
              <AiOutlineClose />
            </div>
          </div>
          <div className={styles.sidebar}>
            <a href="/dashboard" className={styles.active}>
              <AiOutlineHome />
              <h3>Dashboard</h3>
            </a>

            <a href="/dashboard/articles">
              <AiOutlinePullRequest />
              <h3>Articles</h3>
            </a>

            <a href="#">
              <AiOutlineReconciliation />
              <h3>Ask A Question</h3>
            </a>

            <a href="#">
              <AiOutlineRise />
              <h3>Vaccination Center</h3>
            </a>
          </div>
        </aside>

        <main className={styles.main}>
          <h1 className={styles.subhead}>Dashboard</h1>

          <div className={styles.date}>
            <input type="date" />
          </div>

          <div className={styles.insights}>
            <div className={styles.sales}>
              <SiSimpleanalytics className={styles.icon} />
              <div className={styles.middle}>
                <div className={styles.left}>
                  <h3 className={styles.subhead2}>New Users</h3>
                  <h1 className={styles.subhead}>500</h1>
                </div>
                <div className={styles.progress}>
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className={styles.number}>
                    <p>81%</p>
                  </div>
                </div>
              </div>
              <small className={styles.textmuted}> Last 24 hours</small>
            </div>
            <div className={styles.expenses}>
              <AiOutlineBarChart className={styles.icon} />

              <div className={styles.middle}>
                <div className={styles.left}>
                  <h3 className={styles.subhead2}>Total Views</h3>
                  <h1 className={styles.subhead}>10,000</h1>
                </div>
                <div className={styles.progress}>
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className={styles.number}>
                    <p>62%</p>
                  </div>
                </div>
              </div>
              <small className={styles.textmuted}> Last 24 hours</small>
            </div>
            <div className={styles.income}>
              <MdStackedLineChart className={styles.icon} />
              <div className={styles.middle}>
                <div className={styles.left}>
                  <h3 className={styles.subhead2}>Total Income</h3>
                  <h1 className={styles.subhead}>$1,000</h1>
                </div>
                <div className={styles.progress}>
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className={styles.number}>
                    <p>70%</p>
                  </div>
                </div>
              </div>
              <small className={styles.textmuted}> Last 24 hours</small>
            </div>
          </div>

          <div className={styles.recentorders}>
            <h2 className={styles.subhead3}>Recent Enqiries</h2>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th> Customer Name</th>
                  <th>Product Number</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Selassie Mensah</td>
                  <td>85142</td>

                  <td>
                    <p className={styles.danger}>Danger</p>
                  </td>
                  <td>
                    <p className={styles.primary}>Details</p>
                  </td>
                </tr>
                <tr>
                  <td>Angie Brooks</td>
                  <td>21589</td>

                  <td>
                    <p className={styles.warning}>Pending</p>
                  </td>
                  <td>
                    <p className={styles.primary}>Details</p>
                  </td>
                </tr>
                <tr>
                  <td>Suzzy McCarthy</td>
                  <td>41255</td>

                  <td>
                    <p className={styles.success}>Delivered</p>
                  </td>
                  <td>
                    <p className={styles.primary}>Details</p>
                  </td>
                </tr>
                <tr>
                  <td>Beauty Sey</td>
                  <td>12336</td>

                  <td>
                    <p className={styles.warning}>Pending</p>
                  </td>
                  <td>
                    <p className={styles.primary}>Details</p>
                  </td>
                </tr>
                <tr>
                  <td>Ernie Diamond</td>
                  <td>72231</td>

                  <td>
                    <p className={styles.success}>Delivered</p>
                  </td>
                  <td>
                    <p className={styles.primary}>Details</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="#">Show All</a>
          </div>
        </main>

        <div className={styles.right}>
          <div className={styles.top}>
            <button id="menu-btn" onClick={handleMenu}>
              <AiOutlineMenu />
            </button>

            <div className={styles.profile}>
              <div className={styles.info}>
                <p>
                  Hey, <b>Bernice</b>
                </p>
                <small className={styles.textmuted}>Admin</small>
              </div>
              <div className={styles.profilephoto}>
                <img src="/girl.jpg" />
              </div>
            </div>
          </div>

          <div className={styles.recentupdates}>
            <h2>Recent Updates</h2>
            <div className={styles.updates}>
              <div className={styles.update}>
                <div className={styles.profilephoto}>
                  <img src="/girl.jpg" />
                </div>
                <div className={styles.message}>
                  <p>
                    <b>Mike Kelvins</b> received his recommendation for health
                    care.
                  </p>
                  <small className={styles.textmuted}>2 Minutes Ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profilephoto}>
                  <img src="/girl.jpg" />
                </div>
                <div className={styles.message}>
                  <p>
                    <b>Lily Mckenzie</b> received health report.
                  </p>
                  <small className={styles.textmuted}>5 Minutes Ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profilephoto}>
                  <img src="/girl.jpg" />
                </div>
                <div className={styles.message}>
                  <p>
                    <b>Mike Kelvins</b> received his recommendation for health
                    care.
                  </p>
                  <small className={styles.textmuted}>2 Minutes Ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profilephoto}>
                  <img src="/girl.jpg" />
                </div>
                <div className={styles.message}>
                  <p>
                    <b>Lily Mckenzie</b> received health report.
                  </p>
                  <small className={styles.textmuted}>5 Minutes Ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profilephoto}>
                  <img src="/girl.jpg" />
                </div>
                <div className={styles.message}>
                  <p>
                    <b>Mike Kelvins</b> received his recommendation for health
                    care.
                  </p>
                  <small className={styles.textmuted}>2 Minutes Ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profilephoto}>
                  <img src="/girl.jpg" />
                </div>
                <div className={styles.message}>
                  <p>
                    <b>Lily Mckenzie</b> received health report.
                  </p>
                  <small className={styles.textmuted}>5 Minutes Ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
