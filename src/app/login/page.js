import LiquidChrome from "./component/sideContent";

export default function Login(){
    return(
        <div className="min-h-screen h-full w-full grid grid-cols-2">
            <div className="h-full w-full p-3 rounded-2xl border">
                <LiquidChrome
                    baseColor={[0, 0, 0.1]}
                    speed={0.5}
                    amplitude={0.6}
                    interactive={true}
                />
            </div>
            <div>
                side 2
            </div>
        </div>
    )
}