import { Product } from "../../models/Product";
import styles from "./ProductCard.module.css";

interface ProductCardProps extends Product {
  visibility?: boolean;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div
      key={id}
      className={styles.productCard}
      // onClick={onClick}
      data-testid="product-card"
    >
      <div className={styles.productImage}>
        <img src={image} alt={title} />
        {category && <span className={styles.productBadge}>{category}</span>}
      </div>
      <div className={styles.productDetails}>
        <h6 className={styles.productName}>{title}</h6>
        <p className={styles.productPrice}>${price}</p>
        <button className={styles.addToCart} onClick={(e) => {}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
