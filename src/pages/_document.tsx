import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
      <script src="main.js"></script>
    </Html>
  );
}
