import PropTypes from "prop-types";

const Description = ({ children }) => {
  return <p>{children}</p>;
};

Description.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Description;
