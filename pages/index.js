import Head from "next/head";
import {INFO} from '../constants/author'
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>{INFO.NAME} - Portfolio</title>
        <meta name="description" content={`${INFO.NAME}'s portfolio developed using Next.js.`} />
        <meta name="keywords" content={`${INFO.NAME},${INFO.CHINA_NAME},nkvi,react native,software engineer,full stack developer`} />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
      <Experiences />
      <Footer />
    </div>
  );
}
