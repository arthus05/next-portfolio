import Image from "next/image";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";

import { images } from "../../constants";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app_navbar-logo"]}>
        <Image src={images.logo} alt="logo" />
      </div>
      <ul className={styles["app__navbar-links"]}>
        {navLinks.map((navLink) => (
          <li className="app__flex p-text" key={`link-${navLink}`}>
            <div />
            <a href={`#${navLink}`}>{navLink}</a>
          </li>
        ))}
      </ul>

      <div className={styles["app__navbar-menu"]}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((navLink) => (
                <li key={navLink}>
                  <a href={`#${navLink}`} onClick={() => setToggle(false)}>
                    {navLink}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
