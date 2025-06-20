import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.navbar_brand}>
      <div className={styles.icon}></div>
      <h1>MY STORE</h1>
    </div>
  );
}

export const LogoWhite = () => {
  return (
    <div className={styles.navbar_brand_white}>
      <div className={styles.iconWhite}></div>
      <h1>MY STORE</h1>
    </div>
  );
};
