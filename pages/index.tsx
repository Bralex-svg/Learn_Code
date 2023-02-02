import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LearnCode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
