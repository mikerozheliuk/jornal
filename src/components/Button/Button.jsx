import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({ text }) => <button className={cn(styles.button, styles.accent)}>{text}</button>;

export default Button;
