import Menu from "@/view/components/menu";
import Conteudo from "@/view/conteudo";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Menu></Menu>
      <Conteudo></Conteudo>
    </div>
  );
}
