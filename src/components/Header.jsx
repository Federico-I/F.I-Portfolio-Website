import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div class="flex flex-col items-center justify-center w-full h-1/2 min-w-full text-7xl font-extrabold text-white subpixel-antialiased pt-96 mb-96">
      {props.text}
    </div>
  );
}

Header.defaultProps = {
  text: "Welcome to my Portfolio",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
