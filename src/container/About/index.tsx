/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import styles from "./styles.module.scss";

import { urlFor, client } from "../../client";

interface IAbout {
  title: string;
  description: string;
  imgUrl: string;
}

const Component = () => {
  const [abouts, setAbouts] = useState<IAbout[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className={"head-text"}>
        I Know That <span>Good Development</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>

      <div id="about" className={styles["app__profiles"]}>
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles["app__profile-item"]}
          >
            <img src={urlFor(about.imgUrl).toString()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export const About = AppWrap(
  MotionWrap(Component, styles, "app__about"),
  styles,
  "about",
  "app__whitebg"
);
