import { ReactElement } from "react";
import styles from "./ButtonComponent.module.css";

interface ButtonProps {
  children?:ReactElement;
  text?: string;
  clickFn: () => void;
}

export default function ButtonComponent({children, text, clickFn }: ButtonProps) {
  return (
    <button className={styles.addToCart} onClick={clickFn}>
      {
      text ? text : children
      }
    </button>
  );
}
