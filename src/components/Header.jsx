import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-1/2 min-w-full bg-slate-400 ">
      <div className="flex flex-col items-center justify-center w-full">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}

Header.defaultProps = {
  text: "Welcome to my Portfolio.",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
