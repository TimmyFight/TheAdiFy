import PropTypes from "prop-types";

const TitleH3 = ({ children }) => {
  return <h3>{children}</h3>;
};

TitleH3.prototypes = {
  children: PropTypes.string.isRequired,
};

export default TitleH3;
