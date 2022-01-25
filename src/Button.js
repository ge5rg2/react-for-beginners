import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("I'm run all time");
  useEffect(() => {
    console.log("call API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
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
