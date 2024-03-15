import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi ! This is ...
        </motion.span>
        <div className="social">
          <a
            href="https://www.instagram.com/rex_milton_5?igsh=MXRlbG11MWE2bWUyOQ=="
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/RexMilton" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/rex-milton-s-48560b1a0/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/rexmilton5/" target="_blank">
            <img src="/code.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
