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

const Layout = ({ children }) => {
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
      <div className={styles.container2}>
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
            <a href="/dashboard">
              <AiOutlineHome />
              <h3>Dashboard</h3>
            </a>

            <a href="/dashboard/articles" className={styles.active}>
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
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
