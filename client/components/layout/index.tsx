import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "@styles/layout.module.scss";

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout: React.FC = ({ children }: Props) => (
  <div className={styles.main}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Skills</a>
        </Link>
        <Link href="/">
          <a>Portfolio</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

Layout;
