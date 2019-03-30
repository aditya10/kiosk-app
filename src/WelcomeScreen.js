import React from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = ({}) => {
  return (
    <div className="welcome">
      <h1 className="question">Hey there need a job?</h1>
      <button type="button" class="btn btn-primary">
        NEXT
      </button>
    </div>
  );
};

export default WelcomeScreen;
