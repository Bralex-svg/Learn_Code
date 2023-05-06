import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Courses from "../components/Courses";
import HeroSection from "../components/HeroSection";
import HowTo from "../components/HowTo";
import Learn from "../components/Learn";
//HOMEPAGE
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
        <Courses />
        <Learn />
      </main>
    </div>
  );
};

export default Home;
