import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Path } from "../../../types/type";
import styles from "./NavBar.module.css";
const { Header } = Layout;

const PathMap: Array<Path> = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "SUPPORT",
    path: "/support",
  },
];

export default function NavBar() {
  const location = useLocation();
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_brand}>MY STORE</div>
          <ul className={styles.navbar_links}>
            {PathMap.map((item, index) => {
              return (
                <li>
                  <Link
                    className={
                      location.pathname === item.path ? styles.active : ""
                    }
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.navbar_cart}>
            <svg
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="9.5" cy="20" r="1.5" />
              <circle cx="17.5" cy="20" r="1.5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 4h2l2.2 12.3a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.7L21 7H6"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className={styles.hero_image}>
        <div>
          <h1>Explore My Store</h1>
          <h2>Discover Something New</h2>
        </div>
      </div>
    </div>
  );
}
