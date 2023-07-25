import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-1/2 min-w-full text-8xl font-extrabold text-white py-80">
      <p className="text-center">{props.text}</p>
    </div>
  );
}

Header.defaultProps = {
  text: "Welcome",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
