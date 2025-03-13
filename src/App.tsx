import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Download, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">Portfolio</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Dhanujaa Prakasam</span>
                <br />Data Analyst and Web Developer.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                I turn data into actionable insights and craft seamless web experiences.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contact Me
                </a>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1712dJkg7kZCB9gBBswyb9NsnzHObYM_G" 
                  className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} /> Resume
                </a>
              </div>
              <div className="flex gap-6 mt-8">
                <a href="https://github.com/DhanujaaSudhi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/dhanujaa-prakasam-61042b230/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:dhanujaaprakasam@gmail.com" className="text-gray-600 hover:text-gray-900">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Profile"
                className="rounded-full w-72 h-72 object-cover mx-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate Data Analyst and Web Developer with experience in transforming data into insights and building dynamic web applications. 
                I specialize in Power BI, Tableau, Excel, and SQL for data analysis, and have expertise in MERN stack, MongoDB, HTML, CSS, and JavaScript for web development.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center p-4 rounded-lg border border-gray-200">
                <div className="text-blue-600">Fresher</div>
                <div>
                  <h3 className="font-semibold">Aspiring Data Analyst & Web Developer</h3>
                  <p className="text-sm text-gray-600">Skilled in Power BI, Tableau, Excel, SQL, and MERN Stack</p>
                </div>
              </div>
              <div className="flex gap-4 items-center p-4 rounded-lg border border-gray-200">
                <div className="text-blue-600">6</div>
                <div>
                  <h3 className="font-semibold">Projects Completed</h3>
                  <p className="text-sm text-gray-600">Across different domains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Power BI', 'Tableau', 'Excel', 'SQL',
              'Python', 'MERN', 'HTML/CSS', 'JavaScript',
              'Java', 'XML', 'Firebase'
            ].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Industrial Tape and Rope Products using MERN | Jan 2025',
                description: 'Managed an online shopping platform for tape and rope products using the MERN stack.',
                image: 'https://img3.exportersindia.com/product_images/bc-full/dir_11/309128/multi-coloured-tapes-1381335.jpg',
                tags: ['MERN']
              },
              {
                title: 'Online Admission System | August 2023 - November 2023',
                description: 'An online admission system that streamlines the enrollment process, allowing students to apply for courses remotely with ease.',
                image: 'https://itechindia.co/wp-content/uploads/2021/11/main-banner13.jpeg',
                tags: ['PHP', 'HTML/CSS', 'JS', 'XAMPP']
              }
            ].map((project) => (
              <div key={project.title} className="group rounded-xl overflow-hidden border border-gray-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <a 
                      href="https://github.com/DhanujaaSudhi"
                      className="text-white flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:dhanujaaprakasam@gmail.com" className="text-blue-600 hover:text-blue-700">
                    dhanujaaprakasam@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a href="tel:+916382218590" className="text-blue-600 hover:text-blue-700">
                    +91 6382218590
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2025 Dhanujaa Prakasam. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://github.com/DhanujaaSudhi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dhanujaa-prakasam-61042b230/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dhanujaaprakasam@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;