
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import LineView from "@/components/LIneView/LineView";
import Review from "@/components/Review/Review";
import SaveTime from "@/components/SaveTime/SaveTime";
import GetYourTeams from "@/components/GetYourTeams/GetYourTeams";
import Subscribe from "@/components/Subscribe/subscribe";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mobisoft</title>
        <meta name="description" content="Mobisoft Website landing page" />
      </Head>
      <div className="App" style={{ padding: "0px" ,margin: "0px"} }>
        <NavBar />
        <Hero />
        <LineView />
        <Review />
        <SaveTime />
        <GetYourTeams />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
