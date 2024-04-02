import Logo from "../../public/_Logo/logo"
import Logar from "../../public/_Logar/logar"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <Logar />

    </main>
  );
}
