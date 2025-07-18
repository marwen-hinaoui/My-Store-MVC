import ProductListPage from "../ProductList/ProductListPage";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero_container}>
        <div className={styles.hero_image}>
          <div>
            <h1>Explore My Store</h1>
            <h2>Discover Something New</h2>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "32px",
        }}
      >
        <h2>Featured Products</h2>
        <p>
          Discover our top picks for the season, curated to bring you the best
          in technology and style.
        </p>
      </div>
      <div style={{ padding: "16px" }}>
        <ProductListPage />
      </div>
    </div>
  );
}
