import notfound from "../images/notfound.gif";
import Nav from "../Components/Layout/Landing/mainNav";

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center py-8 mx-auto">
        <h2 className="mb-4 text-4xl">Oops. Page Not Found...</h2>
        <img src={notfound} alt="Not Found" width={"400px"} />
      </div>
    </>
  );
};

export default NotFound;
