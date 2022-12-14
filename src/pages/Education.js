import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
  
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">University of Colorado Boulder</h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2006 - May 2010</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">James Buchanan High School</h3>
                <div class="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2002 - May 2006</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
