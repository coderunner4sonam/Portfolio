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
                ● Improved cash management and conducted root cause analysis to
                  identify team errors.
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
      </div>
    </>
  );
};

export default Experience;
