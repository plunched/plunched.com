import Head from "next/head";
import styles from "@styles/index.module.scss";

export const Main = () => {
  return (
    <div className={styles.all}>
      <Head>
        <title>Plunched.com</title>
      </Head>
      <div>
        <h1>
          I am plunched a developer driven by <span>passion</span>{" "}
        </h1>
      </div>
    </div>
  );
};
