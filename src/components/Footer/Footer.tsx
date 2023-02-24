import './Footer.scss';
import { VscGithub } from 'react-icons/vsc';
import { CiLinkedin } from 'react-icons/ci';
import { SlSocialInstagram } from 'react-icons/sl';

export const Footer = () => {

    let skills = ["HTML", "CSS/SCSS", "Javascript", "Typescript", "React", "SQL", "Git", "API", "PHP", "Photoshop", "Canva", "Adobe XD"];

    let html = skills.map((p, i) => {
        return(
                <li key={i}>{skills[i]}</li>
        );
    })

    return(
        <>
            <section className="footer">
                <div className='footer__contact'>
                    <h3>Get in touch</h3>
                    <p>Cassandra.book@medieinstitutet.se</p>
                    <p>0706 - 10 83 11</p>
                    <p>Täby, 183 63</p>
                </div>
                <div className='footer__skills'>
                    <h3>Skills</h3>
                    <ul>{html}</ul>
                </div>
                <div className='footer__connect'>
                    <h3>Connect</h3>
                    <div className='container'>
                        <span className='git'><VscGithub/></span>
                        <span className='linkedin'><CiLinkedin /></span>
                        <span className='insta'><SlSocialInstagram /></span>
                    </div>
                </div>
            </section>
        </>
    );
}