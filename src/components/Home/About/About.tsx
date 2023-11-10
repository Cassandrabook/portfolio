import "./About.scss";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h2 className="about__title">About me</h2>
        <div className="about__container">
          <div className="about__image"></div>
          <div className="about__text-container">
            <p>
              Hello and welcome to my portfolio! My name is Cassandra Book and
              I’m 27 years old. I'm an experienced web developer with a solid
              foundation in both front- and back-end development. This has
              provided me with experience in HTML, CSS, JavaScript, TypeScript,
              React, APIs, SQL, and databases, as well as a good understanding
              of responsive design and user-friendly websites.
            </p>
            <p>
              My experience extends to e-commerce, particularly through
              Wordpress and WooCommerce, allowing me to craft engaging online
              shopping experiences. I'm deeply committed to refining my skills
              through hands-on projects and continuous education. I eagerly
              embrace new challenges and technologies, constantly staying
              abreast of the latest trends in the tech world.
            </p>
            <p>
              Beyond my technical skills, I have a keen interest in design,
              fashion, data, and traveling. My ultimate goal is to evolve into a
              highly skilled web developer, renowned for my creativity,
              positivity, and exceptional problem-solving abilities. I thrive in
              collaborative environments and I'm always ready to contribute
              innovative ideas to my team.
            </p>
            <p>
              I believe that a great web developer not only writes clean,
              efficient code but also understands the importance of user
              experience and interface design. This holistic approach is what
              drives my passion for web development, and I'm excited to bring my
              unique blend of skills and enthusiasm to new projects and
              opportunities. Feel free to contact me at&nbsp;
              <a href="mailto: cassandraabook@gmail.com">
                cassandraabook@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
