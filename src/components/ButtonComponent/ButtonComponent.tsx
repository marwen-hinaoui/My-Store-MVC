import { ReactElement } from "react";
import styles from "./ButtonComponent.module.css";
import { Button } from "antd";

interface ButtonProps {
  children?: ReactElement;
  text?: string;
  clickFn: () => void;
}

export default function ButtonComponent({
  children,
  text,
  clickFn,
}: ButtonProps) {
  return (
    <Button onClick={clickFn} className={styles.addToCart} color="default" variant="filled">
      {text ? text : children}
    </Button>
  );
}
