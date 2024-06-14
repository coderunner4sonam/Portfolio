import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                • Career Essentials in Business Analysis (Microsoft)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                • Completed BootCamp of Business Analyst at Grras Solution Pvt.
                Ltd
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
