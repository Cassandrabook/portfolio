import "./Cv.scss";
import cv from "./../../assets/Cassandra-book-cv.pdf";

export const MyCv = () => {
  return (
    <section className="myCv">
      <h2 className="myCv__title">My resume</h2>
      <a href={cv} download className="myCv__download">
        Download resume
      </a>
      <div className="myCv__png"></div>
    </section>
  );
};
