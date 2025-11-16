import Demo from "./component/Demo";
import Features from "./component/Features";
import Hero from "./component/Hero";
import IdNavbar from "./component/IdNavbar";
import Team from "./component/Team";

export default function Welcome(){
    return(
        <div>
            <IdNavbar/>
            <Hero/>
            <Features/>
            <Demo/>
            <Team/>
        </div>
    )
}