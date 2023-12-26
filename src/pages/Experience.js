import React from "react";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-to-top";

const Experience = () => {
  return (
    <>
      <ScrollToTop
        smooth
        color="teal"
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      />
      <div class="container-fluid p-0">
        <Header />

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
      </div>
    </>
  );
};

export default Experience;
