import styles from "./LoadSpinner.module.css";

const LoadSpinner = () => {
  return (
    <div className="spin-div">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadSpinner;
