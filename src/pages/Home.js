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
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p class="lead mb-5">
              Seeking a position to apply the knowledge that I have learned,
              explore abilities and skills towards my duties, and excel in Web
              Development (MERN stack Developer or Frontend Developer) field.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="#!">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
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
                <h3 class="mb-0">NEWTON SCHOOL</h3>
                <div class="subheading mb-3">
                  Full Stack | MERN Stack | Bootcamp Training
                </div>
                <p>
                  Full Stack Development along with Data Structure , Algorithm
                  and problem solving. Technical Tech Stack Learnt : HTML5 , CSS
                  ,JavaScript , React.js ,Node.js,Github
                </p>
                <h4 class="subheading mb-3">Projects</h4>

                <p>
                  <div class="subheading mb-3">
                    1) School Management System - Project
                  </div>
                  Overview: School Management System website is an asset to track & control student details.
                  <p>Features:-</p>
                  <p> ● It allows school to search for any of their student details.</p> 
                  <p> ● User can edit any of their student details - first name, last name, grades, email Id, phone number, and student class. </p>
                  <p> ● User can add any of their student data. </p>    
                  <p> ●  Implemented dynamic toggle sidebar for managing all the pages.</p>
                  <p> ● Fully dynamic search functionality for searching any student details & assets.</p>
                  <p> ● User can see total number of students separately.</p>
                  <p> ● Implemented Pagination feature for multiple pages and performance of the web page.</p>
                  <p> ● Page Not Found - page will show if the user enters the wrong input in url.</p>
                  <p> Tech Stack: React, Material UI, HTML, CSS, JavaScript</p>
                </p>
                <p>
                  <div class="subheading mb-3">
                  2) Recipe Tadka Project
                  </div>
                  Overview: Recipe Tadka Project is an asset to searching for user-favorite recipes.
                  <p>Features:-</p>
                  <p> ● Fully dynamic search functionality for searching any recipe & assets.</p> 
                  <p> ● Users will get different varieties of recipes. </p>
                  <p> ● Implemented dynamic Carousal feature for all the current trending recipes.</p>    
                  <p> ● Implemented Pagination feature for multiple pages and performance of the web page.</p>
                  <p> ● User search for any of their student details by their name.</p>
                  <p> ● Worked on various Api for dynamically fetch data for the web page.</p>
                  <p> ● Implemented Pagination feature for multiple pages and performance of the web page.</p>
                  <p> ● Page Not Found - page will show if the user enters the wrong input in url.</p>
                  <p> Tech Stack: React, Material UI, HTML, CSS, JavaScript</p>
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2022 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Customer Support Executive</h3>
                <div class="subheading mb-3">Infosys Limited Pune</div>
                <p>
                  ● used to give Tech-support In the “Broadband Process” for UK through
                  calls, chats, and emails so that customers are happy by
                  solving their queries.
                </p>
                <p>● used to handle client meeting</p>
                <p>
                  ● used to give training to new trainee.
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
                Responsive Design , worked on various project from scratch.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Data Structure , Algorithm and problem solving.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Include Material ui library for react and bootstrap framework.
              </li>
              
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              free climbing, and kayaking.
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
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
                Achieved Global Rank: 14767 Rank out of 22841 in Codechef Coding Platform.  
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                 Build Responsive Website Using HTML5,CSS3,JS AND BOOTSTRAP- EDUCBA Certification
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Government Commercial Certificate Examination (English Typing)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Completed Mern Stack Course - Grass Certification.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Entrepreneurship Development & Technical Programme - Milton Certification.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Certificate Course in Medical Laboratory technology - Amar Sewa Mandal's.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
