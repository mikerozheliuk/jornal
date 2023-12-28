import cn from "classnames";
import styles from "./CardButton.module.scss";

function CardButton({ children, className }) {
  const buttonClasses = cn(styles["card-button"], className);

  return <button className={buttonClasses}>{children}</button>;
}

export default CardButton;
