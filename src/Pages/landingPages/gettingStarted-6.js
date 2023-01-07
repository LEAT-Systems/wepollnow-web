import Footer from "../../Components/Layout/Landing/Footer";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Link } from "react-router-dom";

const GettingStartedSix = () => {
  return (
    <div className="w-screen  min-h-[100vh] border overflow-x-hidden">
      <Nav />
      <div className="flex flex-col justify-center min-h-[100vh]  items-center">
        <div className="text-center py-36">
          <h2 className="max-w-4xl p-8 text-xl">
            We would love to get some information about you.
            <br />
            This will only take a few minutes.
          </h2>
          <div>
            <Link to="/register">
              <button className="p-4 px-8 text-white bg-[#08BC26] rounded animate">
                Let's Proceed
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GettingStartedSix;
