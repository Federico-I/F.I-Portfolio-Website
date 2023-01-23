import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="align-center">
      <div className=" container w-full bg-slate-400">
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
