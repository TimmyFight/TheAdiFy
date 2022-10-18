import PropTypes from "prop-types";

const TitleH2 = ({ children }) => {
  return <h2>{children}</h2>;
};

TitleH2.prototypes = {
  children: PropTypes.string.isRequired,
};

export default TitleH2;
