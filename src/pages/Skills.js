import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Languages: HTML, CSS, Javascript, Python
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Tools: Power BI, Advanced Excel, PowerPoint, SharePoint, Data
                Modelling, Scrum Master and JIRA 
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
                Platforms: Jupyter Notebook, Visual Studio
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Soft Skills: Report and Dashboard Creation, Stakeholder
                Management, Client Communication
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;
