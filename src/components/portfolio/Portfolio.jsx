import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Resume Extraction",
    img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/RexMilton/ResumeExtraction",
    desc: "The website enables users to submit, edit, and manage resumes. It utilizes Palm AI which is 90%, a machine learning component, to extract information from submitted resumes, providing users with a comprehensive platform for resume handling",
  },
  {
    id: 2,
    title: "Sales Forecasting",
    img: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/RexMilton/SalesForecasting",
    desc: "Engineered a platform that accepts CSV files, transmitting the dataset to a robust sales prediction model. The obtained predictions are 80% accurate and are displayed for the user through an intuitive interface.",
  },
  {
    id: 3,
    title: "Online Land Registration",
    img: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/RexMilton",
    desc: "Created a website using JSP and Servlets that bridges the gap between 3 users which is buyers, sellers, and land registry officials. This platform streamlines communication and interaction, making the land registration process smoother for everyone involved.",
  },
  {
    id: 4,
    title: "Smart Research Repository",
    img: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/RexMilton/MiniProject",
    desc: "Built a research paper management system using Django's reliable backend, enabling the 3 functions efficient storage, retrieval, and presentation of research papers.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            >
              See Source Code
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
