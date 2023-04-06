import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Download from "@/components/Download";
import Contact from "@/components/Contact";
// import "@fontsource/work-sans";

export default function Home() {
  return (
    <>
      <Head>
        <title>NetLyfe | Home</title>
        <meta name="description" content="Net Lfye app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="">
        <Header />

        <div>
          <Hero />
          <About />
          <Download />
          <Contact />
        </div>
      </main>
    </>
  );
}
