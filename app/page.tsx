import Banner from "./components/Banner";
import Cook from "./components/Cook";
import Expert from "./components/Expert";
import Features from "./components/Work";
import Gallery from "./components/Gallery";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
   <main>
    <Banner/>
    <Features/>
    <Cook/>
    <Expert/>
    <Gallery/>
    <NewsLetter/>
   </main>
  );
}
