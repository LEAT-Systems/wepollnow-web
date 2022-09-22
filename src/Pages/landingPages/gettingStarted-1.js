import { Fragment } from "react";
import { Item1 } from "../../Components/Layout/Landing/item";
import Nav from "../../Components/Layout/Landing/mainNav";

const GettingStartedOne = () => {
  return (
    <Fragment>
      <Nav />
      <div className="mt-12">{Item1}</div>
    </Fragment>
  );
};

export default GettingStartedOne;
