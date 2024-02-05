import styles from "./Container.module.css";
import PropTypes from "prop-types"
// npm i prop-types

// children props
const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

Container.propTypes={
  children: PropTypes.node.isRequired,
}
export default Container;
