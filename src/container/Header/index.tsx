import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import styles from "./styles.module.scss";
import Image from "next/image";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const techStackImages = [images.typescript, images.react, images.sass];

const x = () => {
  return (
    <section className={styles["app__header"] + " app__flex"}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className={styles["app__header-info"]}
      >
        <div className={styles["app__header-badge"]}>
          <div className={styles["badge-cmp"] + " app__flex"}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Arthus</h1>
            </div>
          </div>

          <div className={styles["tag-cmp"] + " app__flex"}>
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className={styles["app__header-img"]}
      >
        <img src={images.profile.src} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle.src}
          alt="profile_circle"
          className={styles["overlay_circle"]}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles["app__header-circles"]}
      >
        {techStackImages.map((circle, index) => (
          <div
            className={styles["circle-cmp"] + " app__flex"}
            key={`circle-${index}`}
          >
            <img src={circle.src} alt="circle" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export const Header = AppWrap(x, styles, "home");
