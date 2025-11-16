import TopNavbar from "../../../component/TopNavbar";
import Favorit from "./component/favorit";
import Hero from "./component/hero";
import HomeBg from "./component/homeBg";
import Promo from "./component/promo";
import Search from "./component/search";
import Spot from "./component/spot";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      <HomeBg/>
      <div className="flex flex-col h-full w-full z-10">
        <TopNavbar/>
        <Hero/>
        <Favorit/>
        <Spot/>
        <Promo/>
        <Search/>
      </div>
    </div>
  );
}