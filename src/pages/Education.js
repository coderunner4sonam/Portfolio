import React from "react";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-to-top";

const Education = () => {
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
      </div>
    </>
  );
};

export default Education;
