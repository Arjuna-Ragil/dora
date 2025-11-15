import LoginBtn from "./subcomponent/loginBtn";

export default function IdNavbar(){
  const navs = [
    {
      "name": "Home",
      "id": "/welcome#hero"
    },
    {
      "name": "Features",
      "id": "/welcome#features"
    },
    {
      "name": "Demo",
      "id": "/welcome#demo"
    },
    {
      "name": "Team",
      "id": "/welcome#team"
    },
  ]

  return(
    <div className="w-full flex flex-row items-center justify-center fixed gap-5 p-3 bg-white/50 backdrop-blur-md z-50">
      {navs.map((nav) => (
          <a key={nav.name} href={nav.id} className="hover:border-b max-md:text-xs">
              {nav.name}
          </a>
      ))}
      <LoginBtn text={"Get Started"} type={"navbar"}/>
    </div>
  )
};