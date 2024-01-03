import React from "react";
import { NaverIcon } from "./Icon";
import about3 from "./assets/img/3.png";
import { contactText } from "./constants";
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <img src={about3} alt="포부" />
        <div className="contact__lines top" aria-hidden="true"></div>
        <div className="contact__text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <NaverIcon />
                <a
                  href={contact.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__lines" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Contact;
