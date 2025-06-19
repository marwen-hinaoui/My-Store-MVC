import { Link, useLocation } from "react-router-dom";
import { Path } from "../../../types/type";
import styles from "./NavBar.module.css";
import { useEffect, useRef, useState } from "react";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

const PathMap: Array<Path> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Support",
    path: "/support",
  },
];

export default function NavBar() {
  const location = useLocation();
  const lastScrollY = useRef<number>(0);
  const [scrollNavbar, setScrollNavbar] = useState<string>(styles.navbar);
  const [scrollContainer, setScrollContainer] = useState<string>(
    styles.navbar_container
  );
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 1) {
        setScrollNavbar(styles.navbar);
        setScrollContainer(styles.navbar_container);
      }

      if (currentScrollY > 1) {
        setScrollNavbar(styles.navbar_scroll);
        setScrollContainer(styles.navbar_container_scroll);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrollNavbar}>
      <div className={scrollContainer}>
        <div className={styles.navbar_brand}>
          <div className={styles.icon}></div>
          <h1>MY STORE</h1>
        </div>

          <ul className={styles.navbar_links}>
            {PathMap.map((item, index) => {
              return (
                <li key={index}>
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
            <ButtonComponent
              text="Sign In"
              clickFn={() => {
                alert();
              }}
            />
          </ul>

      </div>
    </nav>
  );
}
