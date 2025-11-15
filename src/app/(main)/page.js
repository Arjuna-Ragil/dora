<<<<<<< HEAD
import UserProfilePage from "../user_profile/UserProfile";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UserProfilePage />
=======
import Favorit from "./component/favorit";
import Hero from "./component/hero";
import HomeBg from "./component/homeBg";
import Navbar from "./component/navbar";
import Promo from "./component/promo";
import Search from "./component/search";
import Spot from "./component/spot";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      <HomeBg/>
      <Navbar/>
      <div className="flex flex-col h-full w-full z-10">
        <Hero/>
        <Favorit/>
        <Spot/>
        <Promo/>
        <Search/>
      </div>
>>>>>>> fet_promo
    </div>
  );
}