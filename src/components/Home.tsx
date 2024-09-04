import { Topbar } from "./topbar";

function Home() {
  return (
    <div className="h-56 grid grid-flow-col gap-20">
      <Topbar />
      <div className="boxes" >
        <h1 className="lg:text-4xl text-2xl font-bold">
            balls
        </h1>
        <p className="max-w-lg text-sm leading-6">
          This is a simple example of how to build an animate a hamburger menu
          with React and Framer Motion. I hope you like it!
        </p>
      </div>
      <div className="boxes">
        <h1 className="lg:text-4xl text-2xl  font-bold">
            balls
        </h1>
        <p className="max-w-lg text-sm leading-6">
          This is a simple example of how to build an animate a hamburger menu
          with React and Framer Motion. I hope you like it!
        </p>
      </div>
    </div>
  );
}

export default Home;