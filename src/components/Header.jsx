import React from "react";
import PropTypes from "prop-types";
import ;

function Header(props) {
  return <div>{props.text}</div>;
}

Header.defaultProps = {
  text: "Welcome to my Portfolio.",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
