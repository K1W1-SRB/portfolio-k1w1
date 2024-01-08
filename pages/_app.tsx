import "../styles/globals.css";
// _app.tsx
import { AppProps } from "next/app";
import { ReactElement, createElement } from "react";

type MyAppProps = AppProps & {
  Component: React.ComponentType<AppProps>;
};

export default function App({
  Component,
  pageProps,
}: MyAppProps): ReactElement {
  return createElement(Component, pageProps);
}
