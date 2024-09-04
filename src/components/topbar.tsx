import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";


export const Topbar = () => {
  return (
    <div className="topbar"> 
      <nav className="container flex items-center justify-between py-1 lg:py-5"> 
        <span className="text-2xl cursor-pointer">🔧</span> 
         <h1 className="text-lg font-bold">Home Auto Services</h1>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};
