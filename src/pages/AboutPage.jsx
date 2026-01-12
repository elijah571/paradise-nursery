import Header from '../components/Header';
import '../app.css';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <div
        className="about-page"
        style={{
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2>About Me</h2>
        <p>
          Hello! I’m Elijah Peter, a Frontend Developer passionate about
          building beautiful, responsive web applications using React. This
          project, Paradise Nursery, is one of my demos showcasing state
          management, routing, and professional UI design.
        </p>
        <p>
          I enjoy turning creative ideas into functional applications and am
          always learning new technologies to improve my skills.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
