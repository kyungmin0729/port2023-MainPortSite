import React from "react";
import { NaverIcon } from "./Icon";
import { contactText } from "./constants";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
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