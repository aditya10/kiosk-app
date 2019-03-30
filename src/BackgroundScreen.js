import React from "react";
import "./BackgroundScreen.css";

const BackgroundScreen = ({}) => {
  return (
    <div className="background-check">
      <img
        className="prog-bar"
        src="/media/Smart-City-YVR/Progress-1/Group3PNG.png"
      />
      <h1 className="bg-question">What do you like to do?</h1>
      <div className="options-list">
        <ul className="check-box1">
          <li className="options">
            <img src="/media/Smart-City-YVR/Rectangle-Copy-3png.png" />
            Kitchen work
          </li>
          <li className="options">
            <img src="/media/Smart-City-YVR/Rectangle-Copy-3png.png" />
            Helping others
          </li>
          <li className="options">
            <img src="/media/Smart-City-YVR/Rectangle-Copy-3png.png" />
            Organizing/Cleaning
          </li>
        </ul>
        <ul className="check-box2">
          <li className="options">
            <img src="/media/Smart-City-YVR/Rectangle-Copy-3png.png" />
            Serving
          </li>
          <li className="options">
            <img src="/media/Smart-City-YVR/Rectangle-Copy-3png.png" />
            House Keeping
          </li>
          <li className="options">
            <img src="/media/Smart-City-YVR/Rectangle-Copy-3png.png" />
            Other
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary">
        NEXT
      </button>
    </div>
  );
};

export default BackgroundScreen;
