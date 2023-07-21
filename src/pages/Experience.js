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
                          1) School Management System - Project   
                </div>
                <p>
                            <a class="social-icon" href="https://deluxe-biscuit-cbc743.netlify.app/">(link)</a>
                            <a class="social-icon" href="https://github.com/coderunner4sonam/SchoolManagement">(Github repository)</a>
                </p>
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
                  <p>
                            <a class="social-icon" href="https://creative-mousse-25ea01.netlify.app/">(link)</a>
                            <a class="social-icon" href="https://github.com/coderunner4sonam/RecipeTadka">(Github repository)</a>
                </p>
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
                <span class="text-primary">April 2022 - January 2023  </span>
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
