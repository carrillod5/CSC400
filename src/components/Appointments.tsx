import { Topbar } from "./topbar";

function Appointments() {
  return (
    <div className="min-h-screen flex justify-center p-5 items-center">
      <Topbar />
      <div className="phone-num">
        <span className="text-lg font-bold">TO SCHEDULE AN APPOINTMENT RIGHT AWAY, PLEASE CALL 203-410-3092. </span>
      </div>
      <div className="space-y-5 text-center gap-5">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Appointments Page
        </h1>
        <p className="max-w-lg text-sm leading-6">
          This is a simple example of how to build an animate a hamburger menu
          with React and Framer Motion. I hope you like it!
        </p>
      </div>
    </div>
  );
}

export default Appointments;