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

export default Award;
