<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Koya Uma Maheswar | Portfolio</title>

  <style>
    /* ========================
       BASIC RESET STYLES
       ======================== */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; line-height: 1.6; }

    /* ========================
       NAVBAR STYLES
       ======================== */
    .navbar {
      position: fixed; /* Stays at the top even if we scroll */
      top: 0; left: 0; width: 100%;
      display: flex; justify-content: space-between; align-items: center;
      background: #222; /* Dark background */
      color: white; padding: 15px 30px;
      z-index: 1000; /* Makes sure it's above everything */
    }
    .navbar .menu { list-style: none; display: flex; gap: 20px; }
    .navbar a { color: white; text-decoration: none; transition: 0.3s; }
    .navbar a:hover { color: yellow; }

    /* ========================
       HERO SECTION (HOME)
       ======================== */
    .hero {
      height: 100vh; /* Full screen height */
      background: linear-gradient(to right, #4f46e5, #9333ea); /* Gradient bg */
      color: white; display: flex; flex-direction: column;
      justify-content: center; align-items: center; text-align: center;
      padding: 20px;
    }
    .hero h1 { font-size: 3rem; margin-bottom: 10px; }
    .hero span { color: yellow; }

    /* ========================
       GENERAL SECTION STYLES
       ======================== */
    .section { padding: 80px 20px; text-align: center; }
    .section.gray { background: #f4f4f4; }
    .section.dark { background: #111; color: white; }
    .section h2 { font-size: 2.2rem; margin-bottom: 20px; }

    /* ========================
       SKILLS SECTION
       ======================== */
    .skills { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
    .skills span {
      background: #4f46e5; color: white; padding: 10px 20px;
      border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    /* ========================
       PROJECTS SECTION
       ======================== */
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
      gap: 20px; margin-top: 20px;
    }
    .card {
      background: #f9f9f9; padding: 20px; border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: transform 0.3s;
    }
    .card:hover { transform: translateY(-5px); } /* Hover effect */

    /* ========================
       CONTACT LINKS
       ======================== */
    .section.dark a { color: yellow; }
  </style>
</head>
<body>
  <!-- ========================
       NAVBAR
       ======================== -->
  <nav class="navbar">
    <h2 class="logo">My Portfolio</h2>
    <ul class="menu">
      <!-- These links jump to sections below -->
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- ========================
       HERO / HOME SECTION
       ======================== -->
  <section id="home" class="hero">
    <h1>Hi, I'm <span>Koya Uma Maheswar</span> 👋</h1>
    <p>Aspiring Software Engineer | Full Stack Developer</p>
  </section>

  <!-- ========================
       ABOUT SECTION
       ======================== -->
  <section id="about" class="section gray">
    <h2>About Me</h2>
    <p>
      I am a B.Tech IT student passionate about building modern web applications
      using Java, React, and MySQL. I love solving coding challenges and working
      on innovative projects.
    </p>
  </section>

  <!-- ========================
       SKILLS SECTION
       ======================== -->
  <section id="skills" class="section">
    <h2>Skills</h2>
    <div class="skills">
      <!-- Each skill is just a span styled like a badge -->
      <span>Java</span>
      <span>DSA</span>
      <span>ReactJS</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>MySQL</span>
      <span>Git & GitHub</span>
    </div>
  </section>

  <!-- ========================
       PROJECTS SECTION
       ======================== -->
  <section id="projects" class="section gray">
    <h2>Projects</h2>
    <div class="projects">
      <!-- Project 1 -->
      <div class="card">
        <h3>Hospital Management System</h3>
        <p>
          A full-stack project built using Java Servlets, JSP, and MySQL.
          Includes login/signup, patient records, and doctor management.
        </p>
      </div>
      <!-- Project 2 -->
      <div class="card">
        <h3>Smart Ambulance Dashboard</h3>
        <p>
          A web app to track ambulances, emergency alerts, and hospital
          availability. Built with ReactJS and Google Maps API.
        </p>
      </div>
      <!-- Project 3 -->
      <div class="card">
        <h3>Transport Booking System</h3>
        <p>
          A booking platform for buses with seat selection and payment
          integration using HTML, CSS, JS, and Java backend.
        </p>
      </div>
    </div>
  </section>

  <!-- ========================
       CONTACT SECTION
       ======================== -->
  <section id="contact" class="section dark">
    <h2>Contact</h2>
    <p>📧 Email: koyaumamaheswar.14@gmail.com</p>
    <p>📞 Phone: 6309242547</p>
    <p>
      🔗 <a href="https://www.linkedin.com/in/koya-uma-maheswar-7126aa321" target="_blank">LinkedIn</a> |
      <a href="https://github.com/" target="_blank">GitHub</a>
    </p>
  </section>
</body>
</html>
