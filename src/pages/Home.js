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
              <a href="mailto:name@email.com">sonammurarkar41@email.com</a>
            </div>

            <p class="lead mb-5">
              Experienced in client meetings and financial data analysis at
              British Telecom. Skilled in Excel for financial insights and bank
              statement analysis. Improved cash management and team performance
              through root cause analysis. Resolved technical issues in
              broadband connectivity and led training initiatives. Dedicated to
              enhancing processes and delivering effective customer support
              across various channels.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/sonam-murarkar-5a4773276/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/coderunner4sonam">
                <i class="fab fa-github"></i>
              </a>
              {/* <a class="social-icon" href="https://twitter.com/murarkar_sonam">
                <i class="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-shrink-0">
                <span class="text-primary"> May 2022 - Present </span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Finance Analyst</h3>
                <div class="subheading mb-3">Infosys Limited Pune</div>
                <p>
                  ● Participated in client meetings at British Telecom for
                  requirement gathering and updates.
                </p>
                <p>
                  ● Utilized Excel for financial data analysis, using VLOOKUP,
                  pivot tables, and charts.
                </p>
                <p>
                  ● Analyzed requirements, proposed solutions, communicated with
                  stakeholders.
                </p>
                <p>
                  ● Downloaded and uploaded bank statements for financial
                  analysis. Ensured accuracy in recording transactions. Analyzed
                  and applied unidentified cash to reconcile accounts.
                </p>
                <p>
                  ● Improved cash management and conducted root cause analysis
                  to identify team errors.
                </p>
                <p>
                  ● Resolved technical issues related to broadband connectivity,
                  speed, and performance. Monitored network infrastructure and
                  identified potential issues to preemptively address service
                  disruptions.
                </p>
                <p>
                  ● Specialized in training new team members, led process
                  improvements.
                </p>
                <p>
                  ● Provided timely and effective customer support via phone,
                  email, live chat, and tickets.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2018 - March 2022</span>
              </div>
            </div>
            <h3 class="mb-0"> projects</h3>
            <p>
              <div class="subheading mb-3">
                1) Vrinda Store Annul Excel Report
              </div>
              <p>
                <a
                  class="social-icon"
                  href="https://onedrive.live.com/edit?id=D53D8C8154B76423!110&resid=D53D8C8154B76423!110&ithint=file%2Cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBaU5rdDFTQmpEM1Zia3NwQWd3U3luLVMxMzA_ZT1RdThyMFk&migratedtospo=true&wdo=2&cid=d53d8c8154b76423"
                >
                  (link)
                </a>
              </p>
              Overview: "Analyzed Vrinda Store's 2022 sales and created a
              dashboard to identify growth opportunities".
              <p>Features:-</p>
              <p>
                ● Analyzed Vrinda Store’s 2022 sales, and orders to detect peak
                periods and purchasing patterns.
              </p>
              <p>
                ● Created an interactive dashboard for real-time data
                visualization.
              </p>
              <p>
                ● Identified opportunities for revenue growth, operational
                improvements and provide conclusion.
              </p>
              <p>
                {" "}
                Tech Stack: Excel, Used Formulas, Created Automated dashboard,
                VLOOKUP, Pie-Charts
              </p>
            </p>
            <p>
              <div class="subheading mb-3">
                2) Madhav E-commerce Power BI Report Power Bi Project Link{" "}
              </div>
              <p>
                <a
                  class="social-icon"
                  href="https://drive.google.com/file/d/1cvOwMMxJ6QB-MtqWte4B4S3-RTZ3k1Xq/view"
                >
                  (link)
                </a>
              </p>
              Overview: ”Developed an interactive Power BI dashboard for online
              sales analysis with customized visualizations.”
              <p>Features:-</p>
              <p>
                ● Developed interactive dashboard for online sales data
                analysis.
              </p>
              <p>
                ● Established connections, joined tables, performed calculations
                and enabled user parameters.
              </p>
              <p>
                ● Created customized visualizations: bar, pie, donut, clustered
                bar, scatter, line, area, map, slicers.
              </p>
              <p> Tech Stack: Power BI</p>
            </p>
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
                <h3 class="mb-0">B.S.S -SSC </h3>
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
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Languages: HTML, CSS, Javascript, Python, SQL
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Tools: Power BI, Advanced Excel, PowerPoint, SharePoint, Data
                Modelling, MySQL
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

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Passionate about business analysis and process optimization, I
              excel in enhancing business processes and stakeholder
              communication. My expertise in gathering and documenting comprehensive
              business requirements, using tools like Microsoft Word, Excel, and
              PowerBI, drives my ability to deliver effective solutions.
            </p>
            <p class="mb-0">
              My interest extends to financial data analysis and client
              communication, showcased in my tenure at Infosys Pvt. Ltd. I
              thrive on training new team members, leading process improvements,
              and optimizing customer support, continually striving for
              professional growth in the dynamic field of business analysis.
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

export default Home;
