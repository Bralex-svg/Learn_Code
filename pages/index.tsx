import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import HowTo from "../components/HowTo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LearnCode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <HowTo />
      </main>
    </div>
  );
};

export default Home;
