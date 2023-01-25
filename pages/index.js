import Head from "next/head";
import {INFO} from '../constants/author'
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>{INFO.NAME} - Portfolio</title>
        <meta name="description" content={`${INFO.NAME}'s portfolio developed using Next.js.`} />
        <meta name="keywords" content={`${INFO.NAME},nkvi,react native,software engineer,full stack developer`} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
      <Experiences />
      <Footer />
    </div>
  );
}
