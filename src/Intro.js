import React from "react";
import about1 from "./assets/img/1.png";
import about2 from "./assets/img/2.png";
import { introText } from "./constants";

function Intro() {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">{introText.title}</h2>
        <div className="intro__lines" aria-hidden="true">
          <div className="img">
            <img src={about1} alt="어바웃미" />
            <img src={about2} alt="어바웃미2" />
          </div>
        </div>
        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true"></div>
      </div>
    </section>
  );
}

export default Intro;
