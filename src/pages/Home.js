import React from "react";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-to-top";
import "../styles/style.css";

const Home = () => {
  return (
    <>
      <ScrollToTop
        smooth
        color="teal"
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      />
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Sonam
              <span class="text-primary"> Murarkar</span>
            </h1>
            <div class="subheading mb-5">
              Swagat Nagar, New Narsala Road, Nagpur, Maharashtra - 440034
              <a href="mailto:name@email.com">sonammurarkar4@email.com</a>
            </div>
            <p class="lead mb-5">
            As a Junior Web Developer at Excel Training and Consultancy Services, I contributed to the collaborative design and implementation of app architectures, ensuring seamless frontend-backend collaboration. Notably, I successfully developed diverse projects, such as a multiplayer Ludo game with advanced features, an efficient code editor app with real-time execution, and a dynamic recipe discovery web app.             </p>
            <p class="lead mb-5">
            Additionally, my role as a Technical Support and Delivery Executive at Infosys involved optimizing client communication, translating developer requirements, and leading cross-functional teams for process improvement.            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/sonam-murarkar-439794256/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/coderunner4sonam">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://twitter.com/murarkar_sonam">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Excel Training and Consultancy Services</h3>
                <div class="subheading mb-3">Junior Web Developer</div>
                <p>
                  ● Collaborated with the frontend team to design and implement
                  the app architecture.
                </p>
                <p>
                  ● Ensured seamless collaboration with the backend team for
                  cohesive development.
                </p>
                <p>
                  ● Contributed to the design, implementation of the app’s
                  architecture in tandem with the frontend team.{" "}
                </p>
                <h4 class="subheading mb-3">Projects</h4>

                <p>
                  <div class="subheading mb-3">1) LUDO GAME</div>
                  <p>
                    <a
                      class="social-icon"
                      href="https://ludogame-5zq1.vercel.app/"
                    >
                      (link)
                    </a>
                    <a
                      class="social-icon"
                      href="https://github.com/coderunner4sonam/ludogame"
                    >
                      (Github repository)
                    </a>
                  </p>
                  Overview: ”FamousMultiplayerr Board Game Ludo extended up to
                  6,8,10... players”
                  <p>Features:-</p>
                  <p>
                    ● Collaborated to execute a sophisticated and complex board
                    design utilizing SVG.
                  </p>
                  <p>
                    ● Focused on creating a secure Login/Signup system from
                    scratch using Formik and JWT
                  </p>
                  <p>
                    ● Worked on the design and development of the leader board
                    for the ludo game.
                  </p>
                  <p> Tech Stack:  HTML, CSS, JavaScript, React, MongoDB, NodeJs, Express, Jest</p>
                </p>
                <p>
                  <div class="subheading mb-3">2) CODE EDITOR APP </div>
                  <p>
                    <a
                      class="social-icon"
                      href="https://code-editor-app-pi.vercel.app/"
                    >
                      (link)
                    </a>
                    <a
                      class="social-icon"
                      href="https://github.com/coderunner4sonam/Code_Editor_App"
                    >
                      (Github repository)
                    </a>
                  </p>
                  Overview: ”Efficient coding with syntax highlighting and real-time execution in a user-friendly interface”
                  <p>Features:-</p>
                  <p>
                    ● Enhance code readability with highlighted syntax for different programming languages. 
                  </p>
                  <p>
                    ● Instantly run and view code results for testing, experimentation and Used Monaco editor.
                  </p>
                  <p>
                    ● Save snippets for future reference, with the ability to organize them into folders for easy retrieval.
                  </p>
                  <p> Tech Stack:  HTML, CSS, JavaScript, React</p>
                </p>
                <p>
                  <div class="subheading mb-3">3) Recipe Tadka Project</div>
                  <p>
                    <a
                      class="social-icon"
                      href="https://creative-mousse-25ea01.netlify.app/"
                    >
                      (link)
                    </a>
                    <a
                      class="social-icon"
                      href="https://github.com/coderunner4sonam/RecipeTadka"
                    >
                      (Github repository)
                    </a>
                  </p>
                  Overview: ”An Webapp asset for users to search, explore & discover their favorite recipes with dynamic features”

                  <p>Features:-</p>
                  <p>
                    ● Implemented a fully dynamic search functionality for seamless searching of any recipe and assets
                  </p>
                  <p> ● Developed a dynamic Carousal feature for showcasing the current trending recipes. </p>
                  <p>
              
                    ● Worked extensively with Edamam APIs to dynamically fetch data and relevant content for users
                  </p>

                  <p> Tech Stack: HTML, CSS, JavaScript, React, Material UI.</p>
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Sep 2022 - Nov 2023 </span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Technical Support and Delivery Executive</h3>
                <div class="subheading mb-3">Infosys Limited Pune</div>
                <p>
                  ● Streamlined client communication, translated developer
                  requirements and trained newcomers for enhanced team
                  performance. Led and Directed a Cross-Functional Team in
                  Process Improv
                </p>
                <p>
                  ● Participated in team building activity to enhance the
                  performance of the team.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2018 - March 2022</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">
                  Rashtrasant Tukadoji Maharaj Nagpur University
                </h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Biotechnology </div>
                <p>GPA: 5.5</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2013 - May 2017</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Major Hemant Jakate Vidyaniketan - HSC</h3>
                <div class="subheading mb-3">Science </div>
                <p>GPA: 4.7</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2011 - Feb 2013</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">B.S.S -SSC  </h3>
                <div class="subheading mb-3">Science </div>
                <p>GPA: 6.5</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2010 - June 2011</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fa-brands fa-github"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
              <li class="list-inline-item">
              <i class="fa-brands fa-bootstrap"></i>
              </li>
              
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Languages: HTML, CSS, Javascript, Typescript, Java
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Library and Framework: React JS, Redux, Material UI, Bootstrap, Tailwind, Jest(Testing)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Database: MongoDb, Postgresql
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Concepts:  Object Oriented Programming, Functional and Procedural Programming
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Dev Tools/Version: Control Git, Github, Github Action, VSCode, Linux
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
            Passionate about full-stack development, I excel in architecting cohesive web solutions, evident in projects like a sophisticated Ludo Game and efficient Code Editor App. 
            </p>
            <p class="mb-0">
            My interest extends to crafting innovative web applications, demonstrated in the Recipe Tadka Project. Committed to continuous learning, I thrive on optimizing code for efficiency and exhibit leadership qualities from my role at Infosys Limited, enhancing team performance and driving process improvement.
            </p>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                • Completed Meta Front-End Developer Professional Certificate{" "}
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                • Solved 150 Leetcode questions and achieved a 794 rating on the
                CodeChef platform.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                • Build my Twitter following in the field of Web Development to
                1000 followers, with a focus on assisting newcomers in learning
                Data Structures and Algorithms and web development.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
