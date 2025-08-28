import React from "react";

function App() {
  const skills = ["Java", "DSA", "HTML", "CSS", "JavaScript", "ReactJS", "MySQL"];
  const projects = [
    { name: "Hospital Management System", desc: "A web app to manage patients, doctors, and staff." },
    { name: "Smart Ambulance Dashboard", desc: "Live tracking and emergency management system." },
    { name: "Portfolio Website", desc: "My personal portfolio built with ReactJS." },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white flex justify-between px-8 py-4 shadow-lg">
        <h2 className="text-xl font-bold">My Portfolio</h2>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold">Hi, I'm Koya Uma Maheswar 👋</h1>
        <p className="mt-4 text-xl">Aspiring Software Engineer | Full Stack Developer</p>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I'm a B.Tech IT student passionate about coding, problem solving, and
          full-stack development. I love building projects that solve real-world
          problems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg">📧 Email: <a href="mailto:koyaumamaheswar.14@gmail.com" className="text-yellow-400">koyaumamaheswar.14@gmail.com</a></p>
        <p className="text-lg mt-2">🔗 LinkedIn: <a href="https://www.linkedin.com/in/koya-uma-maheswar-7126aa321" target="_blank" rel="noreferrer" className="text-yellow-400">My Profile</a></p>
      </section>
    </div>
  );
}

export default App;
