import { ReactEventHandler, useState } from "react";
import styles from "./styles.module.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Component = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a cofee & chat with me</h2>

      <div className={styles["app__footer-cards"]}>
        <div className={styles["app__footer-card"]}>
          <img src={images.email.src} alt="email" />
          <a href="mailto:arthusvinicius.dev@gmail.com" className="p-text">
            arthusvinicius.dev@gmail.com
          </a>
        </div>

        <div className={styles["app__footer-card"]}>
          <img src={images.mobile.src} alt="mobile" />
          <a href="tel: +55 (12) 98153-7463" className="p-text">
            +55 (12) 98153-7463
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className={styles["app__footer-form"] + " app__flex"}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </>
      )}
    </>
  );
};

export const Footer = AppWrap(
  MotionWrap(Component, styles, "app__footer"),
  styles,
  "contact",
  "app__primarybg"
);
