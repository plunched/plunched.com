import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout: React.FC = ({
  title = "This is the default title",
  children,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <h1>{title}</h1>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

Layout;
