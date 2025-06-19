import styles from "./spinner.module.css";

export default function Spinner() {
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 220,
      }}
    >
      <div className={styles.custom_spinner} />
    </div>
  );
}
