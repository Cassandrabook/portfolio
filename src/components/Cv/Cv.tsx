import "./Cv.scss";
import downloadcv from "portfolio/src/assets/Cassandra-book-cv.pdf";

export const MyCv = () => {
  return (
    <section className="myCv">
      <h2 className="myCv__title">My resume</h2>
      <a href={downloadcv}></a>
      <div className="myCv__png"></div>
    </section>
  );
};
