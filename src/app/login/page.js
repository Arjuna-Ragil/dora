import InputLogin from "./component/inputLogin";
import LiquidChrome from "./component/sideContent";

export default function Login(){
    return(
        <div className="min-h-screen h-full w-full grid grid-cols-2 gap-10 p-3">
            <div className="h-full w-full p-3 rounded-2xl bg-black">
                <LiquidChrome
                    baseColor={[0, 0, 0.1]}
                    speed={0.5}
                    amplitude={0.6}
                    interactive={true}
                />
            </div>
            <div className="h-full w-full">
                <InputLogin/>
            </div>
        </div>
    )
}