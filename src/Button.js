import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
    console.log("render");
  };
  useEffect(() => {
    console.log("just once");
  }, []);
  return (
    <div>
      <button onClick={onClick} className={styles.btn}>
        {text}
      </button>
      <h3>{counter}</h3>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
