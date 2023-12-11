import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <h3 className="aboutme">
In the vast realm of coding, I navigate the intricate web of technologies as a MERN Stack Developer. 
My days are a symphony of MongoDB, Express.js, React, and Node.js, where I weave the threads of data and 
functionality into seamless web applications. With a penchant for problem-solving, I find joy in the challenges 
posed by front-end intricacies and back-end complexities alike. As a relentless learner, I constantly evolve with 
the ever-changing tech landscape, embracing new tools and methodologies. My code is not just functional; 
it's a reflection of my commitment to clean, efficient, and elegant solutions. In this digital odyssey, 
I strive to create user experiences that transcend the ordinary, marrying aesthetics with functionality. 
Beyond the screen, I am a tech enthusiast, a coffee connoisseur, and an ardent advocate for the limitless 
possibilities of MERN. Join me on this coding adventure, where innovation meets implementation, and every 
line of code tells a story of creativity and precision.</h3>
        <p>
      Have a nice day!!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}