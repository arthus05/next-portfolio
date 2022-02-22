import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import styles from "./styles.module.scss";
import Image from "next/image";

const categories = ["UI/UX", "Web App", "Mobile App", "React", "All"];

interface IWork {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
}

const Component = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState<IWork[]>([]);
  const [filterWork, setFilterWork] = useState<IWork[]>([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  useEffect(() => {}, [activeFilter]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className={"head-text"}>
        My creative <span>Portfolio</span>
      </h2>

      <div className={styles["app__work-filter"]}>
        {categories.map((item, index) => {
          const style =
            activeFilter === item
              ? styles["app__work-filter-item"] + " " + styles["item-active"]
              : styles["app__work-filter-item"];
          return (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={style + " app__flex p-text"}
            >
              {item}
            </div>
          );
        })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles["app__work-portfolio"]}
      >
        {filterWork.map((work, index) => (
          <div key={index} className={styles["app__work-item"] + " app__flex"}>
            <div className={styles["app__work-img"] + " app__flex"}>
              <img src={urlFor(work.imgUrl).toString()} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={styles["app__work-hover"] + " app__flex"}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={styles["app__work-content"] + " app__flex"}>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className={styles["app__work-tag"] + " app__flex"}>
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export const Work = AppWrap(
  MotionWrap(Component, styles, "app__works"),
  styles,
  "work",
  "app__primarybg"
);
