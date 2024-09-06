import React, { useState, useEffect } from "react";
import "./Alert.scss";
import ProgressBar from "./ProgressBar";

interface AlertProps {
  text: string;
  type: "success" | "warning" | "danger";
}

const Alert: React.FC<AlertProps> = (props) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setIsVisible(false);
    }
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return null;
  }

  let className = "";
  switch (props.type) {
    case "success":
      className = "alert-success";
      break;
    case "warning":
      className = "alert-warning";
      break;
    case "danger":
      className = "alert-danger";
      break;
    default:
      className = "";
  }

  return (
    <div
      className={`alert alert-dismissible fade show m-3 ${className}`}
      role="alert"
    >
      <div>
        {props.text}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div className="progress-close">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Alert;
