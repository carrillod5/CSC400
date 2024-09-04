// default screen
import { useNavigate } from "react-router-dom";

const Default = ()  => {
  const navigate = useNavigate();

  const startHandler = () => {
    navigate('/Home')
  }

  return (
    <div className="starter-page min-h-screen flex justify-center items-center">
      <div className="space-y-5 text-center">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Welcome to Home Auto Services
        </h1>
        <p className="max-w-lg mx-auto text-sm leading-6">
          A homemade website for a home auto shop!
        </p>
        <button className="px-5 py-3 bg-neutral-300 rounded-md text-sm text-stone-800  mx-auto" onClick={startHandler}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Default;