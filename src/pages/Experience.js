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
                    1) School Management Project
                  </div>
                  project is based on crud ,searching,showing loading page
                  before getting data from fake JSON server, routing, Material ui library for react, responsive
                  functionality.
                  <p>
                    ● It allows school to search for any of their student
                    details.
                  </p>
                  <p>
                    ● It allows school complete control of the different
                    activities that includes class, marks, details of student,
                    administration and more.
                  </p>
                  <p>
                    ● It allows schools to add, delete, view, and edit data to a
                    fake JSON server.
                  </p>
                  <p> ● It allows showing the total number of students.</p>
                </p>
                <p>
                  <div class="subheading mb-3">2) Recipe Tadka Project</div>
                  project is based on get data from Apis - (axios), pagination,
                  searching, routing,Material ui library for react, responsive functionality.
                  <p> ● Users can search for any of their favorite recipes.</p>
                  <p>● Users will get different varieties of recipes</p>
                </p>
                <p>
                  <div class="subheading mb-3">3) Portfolio Project</div>
                  project is based on routing, scroll to top button, bootstrap, responsive functionality.
                  <p>● to show Eduction, Experience, Skills, Interest, Awards</p>
                  <p>● to get clear idea about projects details</p>
                  <p>● Smooth scroll to top button</p>  
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
      </div>
    </>
  );
};

export default Experience;
