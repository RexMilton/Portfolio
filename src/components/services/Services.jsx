import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on competitive coding <br />
          and project developement
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            I practice{" "}
            <motion.b whileHover={{ color: "orange" }}>coding</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            and develope{" "}
            <motion.b whileHover={{ color: "orange" }}>projects</motion.b>
          </h1>
          <button
            onClick={() => {
              window.location.href = "#Portfolio";
            }}
          >
            What I Did?
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>LeetCode</h2>
          <p>
            I practice problems in leetcode regularly and i constantly develope
            my logic building and problem solving skills.
          </p>
          <button
            onClick={() => {
              window.open("https://leetcode.com/rexmilton5/", "_blank");
            }}
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>GitHub</h2>
          <p>
            I develope projects from time to time in various domains which
            include website developement, creating of machine learning models
            and backend developement and some projects which include all of
            these domains. I do maintain repository for those projects.
          </p>
          <button
            onClick={() => {
              window.open("https://github.com/RexMilton", "_blank");
            }}
          >
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
