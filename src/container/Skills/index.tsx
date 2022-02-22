import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import styles from "./styles.module.scss";
import { url } from "inspector";

interface ISkill {
  name: string;
  bgColor: string;
  icon: string;
}

interface IExperience {
  works: {
    name: string;
    company: string;
    desc: string;
  }[];
  year: string;
}

const Component = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [experiences, setExperiences] = useState<IExperience[]>();

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className={styles["app__skills-container"]}>
        <motion.div className={styles["app__skills-list"]}>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={styles["app__skills-item"] + " app__flex"}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill?.bgColor }}
              >
                <img src={urlFor(skill.icon).toString()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles["app__skills-exp"]}>
          {experiences?.map((experience) => (
            <motion.div
              className={styles["app__skills-exp-item"]}
              key={experience.year}
            >
              <div className={styles["app__skills-exp-year"]}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className={styles["app__skills-exp-works"]}>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={styles["app__skills-exp-work"]}
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className={styles["skills-tooltip"]}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export const Skills = AppWrap(
  MotionWrap(Component, styles, "app__skills"),
  styles,
  "skills",
  "app__whitebg"
);
