import styles from "./Header.module.scss";

function Header() {
  return <img className={styles.logo} src="/public/logo.svg" alt="logo" />;
}

export default Header;
