import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      {/* you can also do this to paas parameters */}
      {/* <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }}
      > */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
